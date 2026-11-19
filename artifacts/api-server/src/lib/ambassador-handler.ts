import { createHash, randomBytes } from "node:crypto";
import { AskAmbassadorBody, AskAmbassadorResponse } from "@workspace/api-zod";
import { findEvidence } from "./ambassador-evidence";

export type HandlerResult = { status: number; body: unknown; headers: Record<string, string> };

const salt = randomBytes(32);
const limits = new Map<string, { count: number; until: number }>();
let globalWindow = { count: 0, until: Date.now() + 60_000 };

// Shared by the Express route (local dev) and the Netlify function (production).
// Count-only, ephemeral rate state; never store questions or conversation text.
export function handleAsk(body: unknown, ip: string | undefined): HandlerResult {
  const headers: Record<string, string> = { "Cache-Control": "no-store" };
  const now = Date.now();
  for (const [key, value] of limits) if (value.until <= now) limits.delete(key);
  const key = createHash("sha256").update(salt).update(ip ?? "unknown").digest("hex");
  const bucket = limits.get(key) ?? { count: 0, until: now + 60_000 };
  if (now >= globalWindow.until) globalWindow = { count: 0, until: now + 60_000 };
  if (bucket.count >= 20 || globalWindow.count >= 120 || limits.size >= 10_000) {
    return { status: 429, body: { error: "Please wait a minute before asking again." }, headers: { ...headers, "Retry-After": "60" } };
  }
  bucket.count++;
  globalWindow.count++;
  limits.set(key, bucket);
  const parsed = AskAmbassadorBody.strict().safeParse(body);
  if (!parsed.success || !parsed.data.question.trim()) {
    return { status: 400, body: { error: "Provide one question between 1 and 600 characters." }, headers };
  }
  return { status: 200, body: AskAmbassadorResponse.parse(findEvidence(parsed.data.question)), headers };
}
