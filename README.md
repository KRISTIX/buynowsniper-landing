# Auction Watch — Marketing Landing

Standalone marketing site for **Auction Watch** (Telegram-facing nickname: Buy Now Sniper — alerts only, no bidding), a Telegram bot + Mini App that monitors Copart and IAAI Buy Now inventory.

Canonical product facts: [`.agents/product-marketing.md`](.agents/product-marketing.md).

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
| `NEXT_PUBLIC_TELEGRAM_BOT_USERNAME` | Recommended | Bot username (no `@`). Defaults to `buynowsniperbot`. |
| `NEXT_PUBLIC_TELEGRAM_SUPPORT_USERNAME` | Recommended | Support/sales bot. Defaults to `buynowsniper_supportbot`. |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical URL for metadata / Open Graph. |

## Pricing (current)

| Plan | Watches | Period | Price |
|------|---------|--------|-------|
| Free Trial | 1 | 3 days | Free |
| Weekly | 5 | 7 days | €45 |
| Monthly | 10 | 30 days | €89 |
| 3-Month | 15 | 90 days | €179 |

Stripe in Mini App (Apple Pay / Google Pay / card). EUR subscription; Buy Now max-price filters in USD.

## Product links

- Mini App: https://app.buynowsniper.com
- Bot: https://t.me/buynowsniperbot
- Support / sales: https://t.me/buynowsniper_supportbot

## Marketing gaps (do not invent into UI)

- Voice-of-customer / testimonials
- Competitor comparison
- Volume metrics
- Live promo/coupon codes (market only if ops enables them)

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
