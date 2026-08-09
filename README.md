# Buy Now Sniper — Marketing Landing

Standalone marketing site for **Buy Now Sniper**, a Telegram bot + Mini App that monitors Copart and IAAI Buy Now inventory and sends Telegram alerts when your Watches match.

This repo is the public landing page only — not the product Mini App.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion (hero entrance + scroll reveals)
- Lucide icons
- Optimized WebP/JPEG imagery in `public/images/`

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Languages

URL-based locales (selector in the header updates the path):

| Path | Language |
|------|----------|
| `/en` | English |
| `/ru` | Russian |
| `/uk` | Ukrainian |
| `/lt` | Lithuanian |
| `/pl` | Polish |

Copy lives in `src/i18n/dictionaries/`.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_TELEGRAM_BOT_USERNAME` | Recommended | Bot username (no `@`). Primary CTAs use `https://t.me/<username>`. Defaults to `buynowsniperbot`. |
| `NEXT_PUBLIC_TELEGRAM_SUPPORT_USERNAME` | Recommended | Support/sales bot (no `@`). Contact sales CTAs use `https://t.me/<username>`. Defaults to `buynowsniper_supportbot`. |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical URL for metadata / Open Graph (e.g. `https://your-domain.vercel.app`). |

Example `.env.local`:

```bash
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=buynowsniperbot
NEXT_PUBLIC_TELEGRAM_SUPPORT_USERNAME=buynowsniper_supportbot
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Deploy on Vercel

1. Import this repo in Vercel.
2. Set the env vars above for Production (and Preview if useful).
3. Deploy. Framework preset: Next.js.

Optional: install the Vercel CLI (`npm i -g vercel`) for local `vercel env pull` / deploys.

## Product links

- Mini App: https://app.buynowsniper.com
- Bot: https://t.me/buynowsniperbot
- Support / sales: https://t.me/buynowsniper_supportbot

## Marketing gaps (do not invent into UI)

Still open for future content — deliberately omitted from the page:

- Voice-of-customer / target buyer language from interviews
- Competitor comparison (names, feature matrix)
- Testimonials or case studies with attribution
- Stars → USD conversion (rates vary; not published here)
- Volume metrics (alerts sent, users, win rates)

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```
