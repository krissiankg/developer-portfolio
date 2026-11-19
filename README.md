# Christian Guegueligue — Developer Portfolio

A recruiter-facing, evidence-led developer portfolio. Every claim on the site links to a public source (repository, live site or a public-safe resume), and an "Ask the evidence" panel answers common recruiter questions from a curated, verified set of answers.

## Features

- **Selected projects** with problem, contribution, stack, engineering considerations, outcome and evidence links.
- **Ask the evidence**: a small API that matches a question to a curated answer and its sources. No generative model, no API key, no database, and questions are never stored or logged.
- **Rate limiting and input validation** on the API (Zod schemas generated from an OpenAPI spec).
- **Public-safe resume** generated as a PDF from code (`scripts/src/generate-public-resume.ts`).
- **Design comparison** page at `/directions` showing two first-screen directions side by side.
- Accessible, responsive layout (390px, tablet, desktop) with reduced motion.

## Stack

| Area | Tools |
| --- | --- |
| Frontend | React 19, Vite 7, Tailwind CSS 4, wouter, TanStack Query, Radix UI |
| API | Express 5 (local), Netlify Functions (production), Zod |
| API contract | OpenAPI 3 + Orval (generated React Query hooks and Zod schemas) |
| Tooling | pnpm workspaces, TypeScript 5.9, esbuild |
| Hosting | Netlify |

## Project structure

```
artifacts/
  christian-portfolio/   React site (pages, components, content data)
  api-server/            Express API + Netlify Function (src/netlify/api.ts)
lib/
  api-spec/              OpenAPI spec and Orval config
  api-zod/               Generated Zod schemas
  api-client-react/      Generated React Query client
scripts/                 Public resume PDF generator
docs/                    Evidence audit and design comparison
netlify.toml             Netlify build, function and SPA routing config
```

## Run locally

Requires Node.js 22+ and pnpm 10.

```bash
pnpm install
pnpm dev:api   # API on http://localhost:5000
pnpm dev:web   # Site on http://localhost:5173 (proxies /api to the API)
```

Other commands:

```bash
pnpm run typecheck                              # typecheck every package
pnpm run build                                  # typecheck + build everything
pnpm --filter @workspace/api-spec run codegen   # regenerate client and schemas from the OpenAPI spec
pnpm --filter @workspace/scripts run resume     # rebuild the public resume PDF
```

## Deploy on Netlify

The repository is ready to import in Netlify with no extra settings: `netlify.toml` builds the site, publishes `artifacts/christian-portfolio/dist/public`, and bundles `artifacts/api-server/src/netlify/api.ts` into a Netlify Function and rewrites `/api/*` to it.

## License

MIT
