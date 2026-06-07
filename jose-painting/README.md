# Franco Painting — Phase 1 Public Webpage

The English-facing public landing page for **Jose Franco** (Spanish-speaking
painter), built as the first concrete piece of **Project DhanGen** (see
`../webpage_generator.md`). It mirrors the layout/feel of straightedgepainting.com
and is architected so the future DhanGen blocks (booking, payments, voice,
WhatsApp) slot in without rewrites.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

---

## Run it

```bash
npm install      # first time only
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (validates types + prerenders static HTML)
npm start        # serve the production build
```

The home page prerenders as **static HTML** → lightning-fast loads and strong SEO.

---

## How it's organized (modular by design)

```
src/
├── app/
│   ├── layout.tsx        # fonts, SEO metadata, LocalBusiness JSON-LD
│   ├── page.tsx          # composes the sections in order (edit here to reorder)
│   ├── globals.css       # Tailwind v4 theme tokens (brand + accent palette)
│   └── api/              # ← integration SEAMS (stubs, return 501 today)
│       ├── booking/      #   DhanGen Block A — scheduling
│       ├── estimate/     #   CRM lead intake (contact form target)
│       ├── payments/     #   Stripe / UPI
│       ├── voice/        #   Block C — AI voice receptionist
│       └── whatsapp/webhook/  # Block B — WhatsApp gateway
├── content/
│   └── business.ts       # ⭐ SINGLE SOURCE OF TRUTH — all of Jose's content
├── lib/
│   └── types.ts          # domain types
└── components/
    ├── layout/           # Header (sticky, mobile hamburger), Footer
    ├── sections/         # Hero, CtaBand, About, Services, Portfolio, Testimonials, Contact, EstimateForm
    ├── integrations/     # BookingWidget (Block A placeholder)
    └── ui/               # Button, Container, Section, PlaceholderImage, icons
```

**Principle:** components never hard-code copy — they all read from
`content/business.ts`. Change content in one place; the whole site updates.

---

## Swap points (what to edit)

| Want to change… | Edit |
| --- | --- |
| Phone, email, address, hours, license #, service area | `src/content/business.ts` |
| Services list / descriptions | `business.ts` → `services` |
| Portfolio projects + captions | `business.ts` → `portfolio` |
| Testimonials | `business.ts` → `testimonials` |
| Nav links | `business.ts` → `nav` |
| Brand colors | `src/app/globals.css` → `@theme` tokens |
| Section order / add-remove a section | `src/app/page.tsx` |

### Adding real photos

Project photos are currently **royalty-free Unsplash stock** (free for
commercial use) wired in as temporary, swappable placeholders. To use Jose's
own photos, drop files in `/public` and set each portfolio item's `image` to
`"/your-photo.jpg"` in `business.ts`; the hero image is `HERO_IMAGE` at the top
of `src/components/sections/Hero.tsx`, and the About photo is in
`src/components/sections/About.tsx`. Images flow through `PlaceholderImage`
(`src/components/ui/PlaceholderImage.tsx`) — if a `src` is missing, a styled
placeholder renders so the layout never breaks. (For a new remote host, add it
to `images.remotePatterns` in `next.config.ts`.)

> ⚠️ Current text content is **placeholder data** — phone, email, and license
> number are invented and must be replaced before launch. The stock photos and
> sample testimonials should be replaced with Jose's real jobs and reviews.

---

## DhanGen integration roadmap (the seams are already in place)

This page is the **External Face (English)**. Each future block has a clearly
marked attachment point so it can be built without touching the existing UI:

| Block | What it adds | Seam in this repo |
| --- | --- | --- |
| **A — Scheduling** | Real-time booking widget | `components/integrations/BookingWidget.tsx` + `app/api/booking/route.ts` |
| **CRM intake** | Form → DB → translate → alert Jose | `components/sections/EstimateForm.tsx` → `app/api/estimate/route.ts` |
| **B — WhatsApp** | Native-language alerts, voice-to-invoice | `app/api/whatsapp/webhook/route.ts` |
| **C — Voice bot** | AI phone receptionist (Vapi/Retell) | `app/api/voice/route.ts` |
| **Payments** | Stripe (US) / UPI (India) | `app/api/payments/route.ts` |

The content config (`business.ts`) is the seed of DhanGen's **Ingestion
Engine**: later the AI Web Builder populates this same typed shape from Jose's
Spanish voice/text input, then translates it into the English rendered here.
Fields destined to become bilingual are documented in `lib/types.ts` so they
can widen from `string` to `{ en, native }` without changing components.

---

## Notes

- **Mobile-first & accessible:** responsive Tailwind layout, sticky header that
  collapses to a hamburger, ≥44px touch targets, semantic HTML, `alt` text,
  reduced-motion support.
- Leftover `create-next-app` assets (`public/next.svg`, `public/vercel.svg`)
  are unused and safe to delete.
