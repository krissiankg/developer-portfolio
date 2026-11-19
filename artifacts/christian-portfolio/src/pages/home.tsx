import { useEffect, type ReactNode } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { HeroA } from '@/components/heroes';
import { Ambassador } from '@/components/ambassador';
import {
  AI_POINTS, EDUCATION, EXPERIENCE, LINKS, NAV, PROJECTS, ROLE_MAP, SKILLS, STEPS, TO_LEARN, VALIDATION_TARGETS, CAPABILITIES,
} from '@/data/content';

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} tabIndex={-1} className="border-b border-border" aria-labelledby={`${id}-h`}>
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-8 lg:grid-cols-[14rem_1fr]">
        <div>
          <p className="label">{kicker}</p>
          <h2 id={`${id}-h`} className="text-3xl md:text-4xl mt-2 font-medium">{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="font-serif text-lg font-semibold whitespace-nowrap" data-testid="link-home">C. Guegueligue</a>
        <nav aria-label="Sections" className="min-w-0 overflow-x-auto">
          <ul className="flex gap-1 text-sm">
            {NAV.map(([id, l]) => (
              <li key={id}><a href={`#${id}`} className="px-2.5 min-h-[44px] inline-flex items-center hover:text-accent focus-visible:outline-offset-[-3px]" data-testid={`nav-${id}`}>{l}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Christian Guegueligue — Early-Career Web Developer';
    // Client-side navigation can set the hash before this page's sections mount.
    const id = window.location.hash.slice(1);
    if (!NAV.some(([section]) => section === id)) return;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.focus({ preventScroll: true });
      target?.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  return (
    <div id="top">
      <a href="#fit" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-card focus:p-3">Skip to content</a>
      <SiteHeader />
      <main>
        <HeroA />

        <Section id="fit" kicker="Role match" title="Why I’m a strong fit for ODNOS">
          <div className="grid gap-px bg-border border border-border mb-10">
            {CAPABILITIES.map((c) => (
              <div key={c.t} className="bg-card p-5"><h3 className="text-xl">{c.t}</h3><p className="text-sm text-muted-foreground mt-1">{c.d}</p></div>
            ))}
          </div>
          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm min-w-[560px]">
              <caption className="sr-only">ODNOS requirements mapped to evidence</caption>
              <thead><tr className="bg-secondary text-left"><th className="p-3 label">Requirement</th><th className="p-3 label">Status</th><th className="p-3 label">Evidence</th></tr></thead>
              <tbody>
                {ROLE_MAP.map(([r, s, e]) => (
                  <tr key={r} className="border-t border-border align-top">
                    <th scope="row" className="p-3 text-left font-semibold">{r}</th>
                    <td className="p-3 mono text-xs whitespace-nowrap">{s}</td>
                    <td className="p-3 text-muted-foreground">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="border border-border p-5 bg-card">
              <p className="label">Current experience</p>
              <p className="mt-2 text-sm">Web applications, PostgreSQL, Prisma, Next.js, React, website maintenance, user testing, technical support, AI tooling.</p>
            </div>
            <div className="border border-dashed border-accent p-5">
              <p className="label !text-accent">Transferable / to learn</p>
              <p className="mt-2 text-sm">{TO_LEARN.join(', ')}. None is claimed as a current credential. The job description states Rails is nice to have.</p>
            </div>
          </div>
        </Section>

        <Section id="projects" kicker="Code & projects" title="Four projects, public source">
          <p className="mb-6 text-muted-foreground max-w-2xl">Ordered by backend and data depth. Each links to its repository so the code can be inspected. Statements are candidate-provided evidence, not an independent audit.</p>
          <a href={LINKS.github} {...ext} className="btn btn-solid mb-8" data-testid="link-github-projects">View my GitHub <ArrowUpRight size={16} aria-hidden /></a>
          <ul className="space-y-4">
            {PROJECTS.map((p, i) => (
              <li key={p.id}>
                <details open={i === 0} className="border border-border bg-card" data-testid={`card-project-${p.id}`}>
                  <summary className="p-5 flex gap-4 items-start focus-visible:outline-offset-[-2px]">
                    <span className="mono text-accent text-sm pt-1">{p.n}</span>
                    <span className="flex-1">
                      <span className="label block">{p.kind}</span>
                      <span className="font-serif text-2xl block leading-snug">{p.name}</span>
                      <span className="block text-sm text-muted-foreground mt-1">{p.short}</span>
                    </span>
                    <ChevronRight className="chev mt-2 shrink-0" size={20} aria-label="Toggle details" />
                  </summary>
                  <div className="border-t border-border p-5 grid gap-6 md:grid-cols-2 text-sm">
                    <Field t="Problem">{p.problem}</Field>
                    <Field t="My contribution">{p.contribution}</Field>
                    <Field t="Technical challenges"><List items={p.challenges} /></Field>
                    <Field t="Implementation"><List items={p.implementation} /></Field>
                    <Field t="Stack"><p className="flex flex-wrap gap-1.5">{p.stack.map((s) => <span key={s} className="mono text-xs border border-border px-2 py-0.5">{s}</span>)}</p></Field>
                    <Field t="Outcome">{p.outcome}</Field>
                    {p.caveat && <div className="md:col-span-2 border-l-2 border-accent pl-4"><p className="label !text-accent">Source boundary</p><p className="mt-1">{p.caveat}</p></div>}
                    <div className="md:col-span-2 flex gap-3 flex-wrap">
                      <a href={p.repo} {...ext} className="btn btn-solid" data-testid={`link-repo-${p.id}`}>Repository <ArrowUpRight size={16} aria-hidden /></a>
                      <a href={p.live} {...ext} className="btn btn-line" data-testid={`link-live-${p.id}`}>{p.id === 'exceltools' ? 'Live URL (currently unverified)' : 'Live site'} <ArrowUpRight size={16} aria-hidden /></a>
                    </div>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="approach" kicker="Proposed approach" title="How I Approach Bugs & Code Validation">
          <p className="mb-6 max-w-2xl text-muted-foreground">This is how I propose to work. It is not a claim that every step was done in past professional roles, and no past bug or test is invented here.</p>
          <ol className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="bg-card p-4 flex gap-3">
                <span className="mono text-accent text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                <span><strong className="block text-sm">{t}</strong><span className="text-sm text-muted-foreground">{d}</span></span>
              </li>
            ))}
          </ol>
          <h3 className="text-xl mt-10 mb-3">Where I would aim validation first</h3>
          <dl className="grid md:grid-cols-2 gap-4">
            {VALIDATION_TARGETS.map(([a, b]) => (
              <div key={a} className="border border-border p-4"><dt className="font-semibold">{a}</dt><dd className="text-sm text-muted-foreground mt-1">{b}</dd></div>
            ))}
          </dl>
        </Section>

        <Section id="ai" kicker="AI-assisted development" title="AI moves me faster. I verify the result.">
          <ul className="space-y-3 mb-10">
            {AI_POINTS.map((a) => <li key={a} className="flex gap-3"><span className="text-accent mono">&gt;</span><span>{a}</span></li>)}
          </ul>
          <Ambassador />
        </Section>

        <Section id="skills" kicker="Skills" title="Technologies, grouped">
          <dl className="grid md:grid-cols-2 gap-x-8">
            {SKILLS.map(([g, items]) => (
              <div key={g} className="py-4 border-t border-border">
                <dt className="label mb-2">{g}</dt>
                <dd className="flex flex-wrap gap-1.5">{items.map((s) => <span key={s} className="text-sm border border-border bg-card px-2 py-0.5">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" kicker="Experience" title="Work history">
          <ol>
            {EXPERIENCE.map(([d, r, o, t]) => (
              <li key={d + r} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-5 border-t border-border">
                <span className="mono text-xs text-muted-foreground pt-1">{d}</span>
                <div><h3 className="text-xl">{r}</h3><p className="text-sm font-semibold">{o}</p><p className="text-sm text-muted-foreground mt-1">{t}</p></div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" kicker="Education" title="Training and learning">
          <ol>
            {EDUCATION.map(([d, r, t]) => (
              <li key={r} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-5 border-t border-border">
                <span className="mono text-xs text-muted-foreground pt-1">{d}</span>
                <div><h3 className="text-lg">{r}</h3><p className="text-sm text-muted-foreground">{t}</p></div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="contact" kicker="Contact" title="Inspect the code, then talk to me">
          <p className="max-w-xl text-muted-foreground mb-6">The fastest route is LinkedIn. The source is on GitHub and the resume is a public-safe PDF.</p>
          <p className="max-w-xl text-sm text-muted-foreground mb-6">LinkedIn uses the link on my GitHub profile. My existing portfolio lists a different profile URL; automated LinkedIn verification is blocked, so the destination is not independently confirmed.</p>
          <div className="flex flex-wrap gap-3">
            <a href={LINKS.linkedin} {...ext} className="btn btn-solid" data-testid="link-linkedin">LinkedIn</a>
            <a href={LINKS.github} {...ext} className="btn btn-line" data-testid="link-github-contact">GitHub</a>
            <a href={LINKS.resume} download className="btn btn-line" data-testid="link-resume-contact">Download Resume</a>
            <a href={LINKS.portfolio} {...ext} className="btn btn-line" data-testid="link-portfolio">Current portfolio</a>
          </div>
        </Section>
      </main>
      <footer className="mx-auto max-w-6xl px-5 py-8 text-xs text-muted-foreground">
        Candidate-provided evidence from the resume, public GitHub and the current portfolio; not an independent certification.
      </footer>
    </div>
  );
}

function Field({ t, children }: { t: string; children: ReactNode }) {
  return <div><p className="label mb-1">{t}</p><div>{children}</div></div>;
}
function List({ items }: { items: string[] }) {
  return <ul className="list-disc pl-4 space-y-1">{items.map((x) => <li key={x}>{x}</li>)}</ul>;
}
