import { ArrowUpRight, Download } from 'lucide-react';
import { LINKS, PROJECTS, CAPABILITIES } from '@/data/content';

export function Actions() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="btn btn-solid" data-testid="link-github-primary">
        View GitHub <ArrowUpRight size={16} aria-hidden />
      </a>
      <a href={`${import.meta.env.BASE_URL}#projects`} className="btn btn-line" data-testid="link-explore-projects">Explore Projects</a>
      <a href={LINKS.resume} download className="btn btn-line" data-testid="link-resume">
        <Download size={16} aria-hidden /> Download Resume
      </a>
      <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-line" data-testid="link-linkedin-hero">LinkedIn</a>
    </div>
  );
}

/* Direction A: notebook / evidence ledger. Code, database and repositories lead. */
export function HeroA() {
  const p = PROJECTS[0];
  return (
    <section className="grid-paper border-b border-border" aria-labelledby="hero-a">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-7">
          <p className="label">Christian Guegueligue &middot; Application for ODNOS</p>
          <h1 id="hero-a" className="text-5xl md:text-7xl leading-[1.02] font-medium">
            Early-Career Web Developer
            <span className="block italic text-accent text-3xl md:text-4xl mt-3">focused on debugging, testing and AI-assisted development.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Practical experience with web applications, PostgreSQL databases, website maintenance, user testing and AI tooling. The code is public, so claims can be checked.
          </p>
          <Actions />
        </div>
        <aside className="border border-primary bg-card self-start" aria-label="Featured evidence">
          <div className="bg-primary text-primary-foreground px-4 py-2 label !text-primary-foreground">Featured evidence / 01</div>
          <div className="p-5 space-y-4">
            <h2 className="text-2xl leading-snug">{p.name}</h2>
            <p className="text-sm text-muted-foreground">{p.problem}</p>
            <dl className="mono text-xs space-y-1 border-t border-border pt-3">
              <div className="flex gap-3"><dt className="w-16 text-muted-foreground">db</dt><dd>PostgreSQL via Prisma</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-muted-foreground">access</dt><dd>RBAC: 3 roles</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-muted-foreground">trace</dt><dd>audit trail, sensitive changes</dd></div>
              <div className="flex gap-3"><dt className="w-16 text-muted-foreground">stack</dt><dd>Next.js 14, React 18</dd></div>
            </dl>
            <div className="flex gap-4 text-sm font-semibold">
              <a className="underline underline-offset-4" href={p.repo} target="_blank" rel="noopener noreferrer" data-testid="link-featured-repo">Source</a>
              <a className="underline underline-offset-4" href={p.live} target="_blank" rel="noopener noreferrer" data-testid="link-featured-live">Live</a>
              <a className="underline underline-offset-4" href={`${import.meta.env.BASE_URL}#projects`}>Details</a>
            </div>
          </div>
        </aside>
      </div>
      <div className="border-t border-border bg-background/80">
        <ul className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {CAPABILITIES.map((c, i) => (
            <li key={c.t} className="py-4 md:px-5 first:md:pl-0 flex gap-3 items-baseline">
              <span className="mono text-xs text-accent">0{i + 1}</span>
              <span className="font-semibold text-sm">{c.t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Direction B: product-led. A human + AI working loop leads; projects secondary. */
export function HeroB() {
  const loop = ['Prompt', 'Generate', 'Read and run', 'Test against requirement', 'Accept or revise'];
  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="hero-b">
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20 text-center space-y-8">
        <p className="label !text-primary-foreground/70">AI Product Engineer</p>
        <h1 id="hero-b" className="text-4xl md:text-6xl leading-tight">
          AI helps me move faster. <em className="text-[hsl(30_70%_70%)]">Human judgment verifies the result.</em>
        </h1>
        <ol className="flex flex-wrap justify-center gap-2 text-sm" aria-label="Working loop">
          {loop.map((s, i) => (
            <li key={s} className="border border-primary-foreground/30 rounded-full px-4 py-2">
              <span className="mono text-xs opacity-70 mr-2">{i + 1}</span>{s}
            </li>
          ))}
        </ol>
        <p className="max-w-xl mx-auto opacity-85">
          Early-career web developer using Cursor, Antigravity and Claude, with the database and application work to check what they produce. This describes a working principle, not a PR-review history.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`${import.meta.env.BASE_URL}#projects`} className="btn bg-primary-foreground text-primary border-primary-foreground">Explore Projects</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="btn border-primary-foreground/50 text-primary-foreground">GitHub</a>
          <a href={LINKS.resume} download className="btn border-primary-foreground/50 text-primary-foreground">Resume</a>
        </div>
      </div>
    </section>
  );
}
