# BloomNow Coaching

A single-page marketing site for BloomNow Coaching (Lisa Bloom, executive
coach). Built with Next.js (App Router) + Tailwind CSS. One job: get a visitor
to book a free 15-minute discovery call on Calendly.

## Tech

- Next.js 15 (App Router)
- Tailwind CSS
- Fonts: Fraunces (headlines) + Inter (body), via Google Fonts
- Deploys cleanly to Vercel

## Run locally

You need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add your images

Place these three files in `/public` (see `public/README-ASSETS.md`):

- `logo.png` — BloomNow logo
- `headshot.jpg` — Lisa's headshot
- `ipec-cert.png` — iPEC certification badge

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, "Add New Project" → import the repo. Framework is auto-detected
   as Next.js; no settings to change.
3. Add your custom domain `bloomnowcoaching.com` in Project → Settings →
   Domains.

## Editing content

Almost all copy and links live in two places:

- `app/page.tsx` — every section's text, the focus-area cards, outcomes,
  testimonials, "trusted by" names, and the bio.
- `app/lib/constants.ts` — the Calendly URL, contact email, and LinkedIn URL.

## Brand

- Accent magenta: `#C0266A` — used only for buttons, the eyebrow labels, and
  small highlights.
- Deep green: `#2D5016` — used sparingly as a secondary accent (e.g. the photo
  frame).
- Everything else is white / off-white (`#FAF8F5`) with dark, readable text.
