import { HealthCheckResponse } from "@workspace/api-zod";
import { handleAsk } from "../lib/ambassador-handler";

// Netlify Function (v2 API) serving the same routes as the Express server.
// Bundled by `pnpm build:function` into netlify/functions/api.mjs.
// Rate-limit state is per function instance, which is fine for a portfolio.
type NetlifyContext = { ip?: string };

function json(status: number, body: unknown, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

export default async (req: Request, context: NetlifyContext): Promise<Response> => {
  // Reached through the /api/* rewrite in netlify.toml; normalise the path.
  const pathname = new URL(req.url).pathname.replace(/^\/\.netlify\/functions\/api/, "/api");

  if (pathname === "/api/healthz" && req.method === "GET") {
    return json(200, HealthCheckResponse.parse({ status: "ok" }));
  }

  if (pathname === "/api/ambassador" && req.method === "POST") {
    const raw = await req.text();
    if (raw.length > 4096) return json(413, { error: "Invalid request body." });
    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return json(400, { error: "Invalid request body." });
    }
    const result = handleAsk(body, context?.ip);
    return json(result.status, result.body, result.headers);
  }

  return json(404, { error: "Not found." });
};
