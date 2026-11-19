import { useEffect } from 'react';
import { Link } from 'wouter';
import { HeroA, HeroB } from '@/components/heroes';

const ROWS = [
  ['ODNOS role alignment', 'Maps to debugging, databases and GitHub directly.', 'Maps to AI tooling; weaker on code-level proof.'],
  ['First-screen clarity', 'Role, three capabilities and a featured project in one view.', 'Strong thesis, but role and projects are one scroll away.'],
  ['Technical credibility', 'Highest: a named repository with database and roles.', 'Medium: the principle is stated, evidence is lower.'],
  ['Recruiter scan usability', 'Ledger layout scans in seconds.', 'Centered statement reads fast, little to compare.'],
  ['GitHub prominence', 'Primary button plus featured source link.', 'Secondary button.'],
  ['Project discoverability', 'Featured project on screen one.', 'Projects behind a button.'],
  ['Mobile', 'Stacks to one column; capabilities become a list.', 'Simple and strong; loop wraps into chips.'],
];

export default function Directions() {
  useEffect(() => { document.title = 'Design directions — Christian Guegueligue'; }, []);
  return (
    <main>
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="label">Secondary review page</p>
        <h1 className="text-4xl mt-2">Two first-screen directions</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">Direction A was selected for the home page because the evidence is stronger for implemented web and database work than for professional AI PR review.</p>
        <Link href="/" className="underline underline-offset-4 inline-block mt-3" data-testid="link-back-home">Back to portfolio</Link>
      </div>
      <h2 className="mx-auto max-w-6xl px-5 text-2xl mb-3">A. Engineering Evidence (selected)</h2>
      <div className="border-y border-border"><HeroA /></div>
      <h2 className="mx-auto max-w-6xl px-5 text-2xl mt-12 mb-3">B. AI Product Engineer</h2>
      <div className="border-y border-border"><HeroB /></div>
      <div className="mx-auto max-w-6xl px-5 py-12 overflow-x-auto">
        <table className="w-full text-sm min-w-[620px] border border-border">
          <caption className="sr-only">Comparison of directions</caption>
          <thead><tr className="bg-secondary text-left"><th className="p-3 label">Criterion</th><th className="p-3 label">A</th><th className="p-3 label">B</th></tr></thead>
          <tbody>
            {ROWS.map(([c, a, b]) => (
              <tr key={c} className="border-t border-border align-top"><th scope="row" className="p-3 text-left">{c}</th><td className="p-3">{a}</td><td className="p-3 text-muted-foreground">{b}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
