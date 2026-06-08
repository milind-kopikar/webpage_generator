# webpage_generator

Mobile-first, modular business websites for **non-English-speaking service
professionals** who serve English-speaking customers — built as the foundation
for **Project DhanGen** (see [`webpage_generator.md`](./webpage_generator.md)
for the full product vision).

The first site built on this framework is for **Jose Frank Painting and
Services**, a Spanish-speaking painter serving Utah and Salt Lake County.

## 🌐 Live site

**https://jose-franco-painting.milindkopi.workers.dev**

## Repository structure

| Path | What it is |
| --- | --- |
| [`webpage_generator.md`](./webpage_generator.md) | The DhanGen product/design vision (the "why") |
| [`jose-painting/`](./jose-painting/) | The Next.js web app (the "what"). See its [README](./jose-painting/README.md) for full details. |

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4**
- **Hosting:** Cloudflare Workers via the [OpenNext](https://opennext.js.org/cloudflare) adapter
- **CI/CD:** every push to `main` auto-builds and deploys (Cloudflare Workers Builds)

## Architecture in one line

All business-specific content lives in a single typed config
([`jose-painting/src/content/business.ts`](./jose-painting/src/content/business.ts)),
fully separated from the design components — so the same framework can power
additional businesses (each on its own domain) with minimal change, and so the
future AI Web Builder can generate sites by populating that same structure.

## Status

**Phase 1 — live.** Public landing page with services, project gallery,
testimonials, and a free-estimate form (with photo upload) that emails leads to
the business owner.

Stubbed integration seams are in place for the upcoming DhanGen blocks —
online booking, payments, WhatsApp, and an AI voice receptionist — under
[`jose-painting/src/app/api/`](./jose-painting/src/app/api/).

## Quick start

```bash
cd jose-painting
npm install
npm run dev      # http://localhost:3000
npm run deploy   # build + deploy to Cloudflare Workers
```

See [`jose-painting/README.md`](./jose-painting/README.md) for content swap
points, image handling, and the integration roadmap.
