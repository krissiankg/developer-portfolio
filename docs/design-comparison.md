# Design comparison: two first-screen directions

Both are rendered on `/directions`. Direction A is the home page.

## A. Engineering Evidence (selected)
Structure: ledger-style first screen on a faint grid. Title and actions on the left, a "featured evidence" card (Spass mit Deutsch: PostgreSQL via Prisma, three roles, audit trail, source/live links) on the right, three capabilities as a strip beneath. Palette: warm paper, deep teal ink, clay accent. Type: Newsreader, Hanken Grotesk, JetBrains Mono.

## B. AI Product Engineer
Structure: centered, dark-ink statement ("AI helps me move faster. Human judgment verifies the result.") with a five-step human + AI working loop; projects behind a button. It states a working principle, not a PR-review history.

## Comparison
| Criterion | A | B |
|---|---|---|
| ODNOS role alignment | Debugging, databases, GitHub directly | AI tooling only; weaker code-level proof |
| First-screen clarity | Role, capabilities, featured project | Strong thesis; role and projects a scroll away |
| Technical credibility | Highest (named repository, database, roles) | Medium |
| Recruiter scan usability | Fast, comparable fields | Fast, little to compare |
| GitHub prominence | Primary button plus source link | Secondary button |
| Project discoverability | On screen one | Behind a button |
| Mobile | One column, capabilities as list | Simple; loop wraps to chips |

## Decision
A. The evidence is stronger for implemented web and database work than for professional AI PR review. B's strongest idea (verify AI output) is kept in the `#ai` section.
