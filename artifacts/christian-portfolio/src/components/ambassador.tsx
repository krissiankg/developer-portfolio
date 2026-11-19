import { useEffect, useState } from 'react';
import { useAskAmbassador } from '@workspace/api-client-react';
import { ArrowUpRight } from 'lucide-react';
import { SAFE_SECTIONS, STARTERS } from '@/data/content';

type Answer = { answer: string; sources: { label: string; url: string }[]; section: string };

function safeUrl(u: string): string | null {
  if (u === '/resumes/christian-public-resume.pdf') return `${import.meta.env.BASE_URL}resumes/christian-public-resume.pdf`;
  try {
    const p = new URL(u);
    return p.protocol === 'https:' || p.protocol === 'http:' ? p.href : null;
  } catch {
    return null;
  }
}

export function Ambassador() {
  const ask = useAskAmbassador();
  const [q, setQ] = useState('');
  const [asked, setAsked] = useState('');
  const [res, setRes] = useState<Answer | null>(null);
  const [err, setErr] = useState(false);
  const [retryIn, setRetryIn] = useState(0);
  const blocked = ask.isPending || retryIn > 0;

  useEffect(() => {
    if (retryIn <= 0) return;
    const timer = window.setTimeout(() => setRetryIn((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [retryIn]);

  async function submit(question: string) {
    const text = question.trim();
    if (!text || blocked) return;
    setAsked(text);
    setErr(false);
    setRes(null);
    try {
      setRes(await ask.mutateAsync({ data: { question: text.slice(0, 600) } }));
    } catch (error) {
      if (error && typeof error === 'object' && 'status' in error && error.status === 429) {
        const headers = 'headers' in error && error.headers instanceof Headers ? error.headers : null;
        const seconds = Number(headers?.get('Retry-After') ?? 60);
        setRetryIn(Number.isFinite(seconds) && seconds > 0 ? Math.ceil(seconds) : 60);
      }
      setErr(true);
    }
  }

  const section = res && SAFE_SECTIONS.has(res.section.replace(/^#/, '') as never) ? res.section.replace(/^#/, '') : null;

  return (
    <div className="border border-border bg-card" data-testid="panel-ambassador">
      <div className="border-b border-border px-5 py-3 flex items-center justify-between gap-3">
        <h3 className="text-xl">Ask the evidence</h3>
        <span className="label">Curated source lookup · no generative model</span>
      </div>
      <div className="p-5 space-y-5">
        <ul className="grid gap-2 sm:grid-cols-2">
          {STARTERS.map((s, i) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => { setQ(s); void submit(s); }}
                disabled={blocked}
                data-testid={`button-starter-${i}`}
                className="w-full min-h-[44px] text-left text-sm px-3 py-2 border border-border hover:border-primary hover:bg-secondary disabled:opacity-60"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={(e) => { e.preventDefault(); void submit(q); }} className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="amb-q" className="sr-only">Your question</label>
          <input
            id="amb-q"
            value={q}
            maxLength={600}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask about projects, databases, testing..."
            data-testid="input-question"
            className="flex-1 min-h-[44px] px-3 bg-background border border-input text-sm"
          />
          <button type="submit" disabled={blocked || !q.trim()} data-testid="button-ask" className="btn btn-solid justify-center disabled:opacity-50">
            Ask
          </button>
        </form>

        <div aria-live="polite" className="min-h-[3rem]">
          {ask.isPending && (
            <div className="space-y-2" data-testid="status-loading" aria-label="Loading answer">
              <div className="h-3 w-3/4 bg-muted animate-pulse" />
              <div className="h-3 w-full bg-muted animate-pulse" />
              <div className="h-3 w-2/3 bg-muted animate-pulse" />
            </div>
          )}
          {err && (
            <div role="alert" className="border border-destructive p-3 text-sm" data-testid="status-error">
              {retryIn > 0 ? `Too many questions. Please wait ${retryIn} seconds before asking again.` : 'The ambassador could not answer just now.'}{' '}
              <button type="button" disabled={blocked} className="underline font-semibold disabled:opacity-50" onClick={() => void submit(asked)} data-testid="button-retry">
                Retry
              </button>
            </div>
          )}
          {res && (
            <div className="space-y-3" data-testid="text-answer">
              <p className="label">Q: {asked}</p>
              <p className="whitespace-pre-line">{res.answer}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {section && (
                  <a href={`#${section}`} className="font-semibold underline decoration-accent underline-offset-4" data-testid="link-answer-section">
                    Go to #{section}
                  </a>
                )}
                {res.sources.map((s, i) => {
                  const href = safeUrl(s.url);
                  return href ? (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4" data-testid={`link-source-${i}`}>
                      {s.label} <ArrowUpRight size={14} aria-hidden />
                    </a>
                  ) : (
                    <span key={i}>{s.label}</span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">This recruiter ambassador serves verified, curated answers—not AI-generated biography. Conversations are not saved or logged by the application. Unsupported questions receive: “I don’t have verified information about that.”</p>
      </div>
    </div>
  );
}
