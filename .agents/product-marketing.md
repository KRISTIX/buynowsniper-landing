# Product Marketing Context

**Document version:** v2  
**Last updated:** 2026-08-12

> Canonical briefing for any LLM writing marketing copy, visuals briefs, offers, discounts, ads, emails, Telegram posts, landing pages, or campaign assets. Prefer this file over README when facts conflict with older docs. If product code changes (pricing, trial length, billing), update this document in the same PR.

---

## Product Overview

**One-liner:** Create vehicle watches for Copart and IAAI. Get a Telegram alert when a matching Buy Now listing appears.

**What it does:** Auction Watch (also branded in Telegram as Buy Now Sniper) is a Telegram bot + Mini App that monitors Copart and IAAI Buy Now inventory. Users save Watches (make/model + filters). The backend periodically checks auction search results, matches new or newly activated Buy Now listings against those Watches, and sends a concise Telegram alert with price, damage, location, and a link to the listing.

**Product category:** Vehicle auction alert / salvage auction monitoring (Telegram Mini App + bot)

**Product type:** B2C SaaS subscription with free trial

**Business model:** Freemium → paid Stripe subscriptions (EUR). Free trial (1 watch / 5 days). Paid SKUs: Weekly, Monthly, 3-Month. Checkout in Mini App via Stripe Payment Element (Apple Pay / Google Pay / card). Customer Portal for payment method / cancel.

**Brand names:**
| Surface | Name |
|---------|------|
| Default app name (`NEXT_PUBLIC_APP_NAME`) | **Auction Watch** |
| Support bot | **@buynowsniper_supportbot** |
| Product bot (typical) | **@buynowsniperbot** (confirm live username in env) |
| Live web | https://auction-watch-mu.vercel.app |

**Use in marketing:** Lead with the benefit (“Buy Now alerts in Telegram”). “Auction Watch” is the product name; “Buy Now Sniper” is acceptable as a campaign / Telegram-facing nickname **only if** you never imply auto-bidding. Prefer **Auction Watch** on web; either name is fine in Telegram ads if paired with “alerts only — we don’t bid.”

---

## Target Audience

**Geography / language markets (product locales):** English, Russian, Ukrainian, Lithuanian, Polish — strong fit for EU/Baltics/CIS buyers and diaspora who source **US salvage / Buy Now** cars (Copart & IAAI) for personal use, export, or flipping.

**Target buyers:** Individual car buyers, flippers, exporters, and small dealers sourcing Buy Now / salvage vehicles from Copart and IAAI (US inventory; prices in USD).

**Decision-makers:** End users themselves (self-serve Telegram + Stripe; no B2B procurement).

**Primary use case:** Stop manually refreshing Copart/IAAI for specific makes/models; get pinged in Telegram when a matching Buy Now deal appears.

**Jobs to be done:**
- Watch specific cars without living on auction sites
- Catch Buy Now inventory early enough to act (open listing, decide, buy on auction site)
- Track multiple vehicles within a clear slot budget

**Use cases:**
- Hunting one specific make/model under a max Buy Now price
- Running several watches (trucks / SUVs / popular sedans) as a side hustle
- Small dealer covering a short target list across Copart + IAAI
- Exporter watching US lots with year + price caps, then verifying on-site

---

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Personal buyer | One right car at the right Buy Now price | Misses listings between site checks | 1 Watch on trial → Telegram alert with link |
| Flipper / hunter | Speed + several targets | Too many tabs; inventory moves fast | Up to 5–15 watches; Copart + IAAI |
| Small dealer / exporter | Coverage vs cost; predictable billing | Expensive tools or noisy groups | Slot-based EUR plans; pay with card / Apple Pay / Google Pay |

*(B2C — refine after interviews. Capture verbatim phrases into Customer Language.)*

---

## Problems & Pain Points

**Core problem:** Buy Now lots appear and disappear quickly; manual monitoring of Copart/IAAI is tedious and easy to miss.

**Why alternatives fall short:**
- Manual browsing / bookmarks — slow, inconsistent
- Generic scrapers / Discord / Telegram spam groups — noisy, not personalized to make/model + max price
- Full auction platforms / dealer tools — overkill, expensive, often require auction accounts
- “Sniper bots” that claim auto-bid — high risk, often against terms, not what serious buyers want for Buy Now

**What it costs them:** Missed deals, hours refreshing search pages, stress of “did I miss it?”

**Emotional tension:** Fear of missing a good Buy Now price; frustration with salvage site UX; distrust of fake “guaranteed sniper” tools.

---

## Competitive Landscape

**Direct:** Other Copart/IAAI alert bots and Mini Apps — often opaque pricing, Stars-only or crypto, Discord-only, or weak filters.

**Secondary:** Manual saved searches on Copart/IAAI — no push alerts; user must return to the site.

**Indirect:** Hiring a finder / dealer networks / Facebook groups — costly, relationship-dependent, noisy.

*(Named competitors TBD after market scan — do not invent competitor claims.)*

---

## Differentiation

**Key differentiators:**
- Native Telegram bot + Mini App (alerts where buyers already live)
- Watches with practical filters: year, max Buy Now price (USD), source (Copart / IAAI / both), plus advanced filters (damage, states, mileage, run condition, body type)
- Copart **and** IAAI in one place
- Clear slot-based EUR pricing + short free trial
- Stripe checkout (Apple Pay / Google Pay / card) — no auction-account login required for monitoring
- Baseline logic so existing inventory doesn’t spam users on day one

**How we do it differently:** Narrow make/model provider queries + local matching against user filters; alert only on **new** Buy Now or **Buy Now activated**.

**Why that’s better:** Personalized alerts, less noise, low friction to start (5-day trial → Stripe upgrade).

**Why customers choose us:** Telegram-native, Buy Now focused, simple watch → alert loop, honest about polling (not fake “instant sniping”).

---

## Objections

| Objection | Response |
|-----------|----------|
| “Is it real-time?” | We check periodically (typically on the order of minutes, not milliseconds). Always verify on the auction page. |
| “Will it buy/bid for me?” | No. Alerts only — you buy on Copart/IAAI yourself. |
| “What if the listing is gone?” | Inventory moves fast; we don’t guarantee availability. Alert = signal to check now. |
| “Why pay in EUR for USD cars?” | Subscription is EUR via Stripe; Buy Now max price filters are in USD to match auction listings. |
| “Do I get old listings when I resume?” | No backlog — resume only alerts on new matches after resume. |
| “Is this a sniper bot?” | No auto-bid / auto-buy. Monitoring + Telegram alerts only. |

**Anti-persona:** Users who need live auction bidding automation, non-USD price conversion, guaranteed purchase, or “millisecond sniping.” Also people looking for stolen-goods / illegal export facilitation — refuse that framing entirely.

---

## Switching Dynamics

**Push:** Tired of refreshing Copart/IAAI; missed Buy Now deals; spammy auction groups.

**Pull:** Telegram alert with price, damage, location, open-listing link; free 5-day trial; card/Apple Pay checkout.

**Habit:** Manual site checks; relying on friends/groups.

**Anxiety:** “Will alerts be late / spammy / expensive?” — address with honest polling cadence, baseline (no day-1 spam), clear EUR pricing, trial, cancel-anytime subscription.

---

## Customer Language

**How they describe the problem:**
- *(Capture verbatim from users; placeholders until interviews)* “I keep missing Buy Now deals”
- “I don’t want to sit on Copart all day”
- “Groups spam me with cars I don’t want”

**How they describe us:**
- Product copy today: “Automatic Buy Now alerts for your saved watches”
- “Create a Watch, get notified when a match appears”

**Words to use:**
- Watch, Buy Now, Copart, IAAI, alert, Telegram, watch slots, free trial
- Make/model, max price, damage, state
- Stripe / Apple Pay / Google Pay / card (when talking payment)
- Monitor, matching listing, open listing

**Words to avoid:**
- Instant / real-time / millisecond (product is polling-based)
- Sniper / auto-bid / auto-buy / auto-purchase (we do not bid or purchase) — exception: brand nickname “Buy Now Sniper” only with “alerts only” clarification nearby
- Guaranteed deal / guaranteed availability / “never miss”
- Telegram Stars as current payment (legacy — do not market Stars unless billing mode is explicitly Stars again)
- Solo / Hunter / Dealer plan names (legacy, deactivated)

**Glossary:**

| Term | Meaning |
|------|---------|
| Watch | One saved make/model monitoring rule; uses 1 plan slot when active |
| Watch slot | Capacity unit on a plan; optional filters do not cost extra slots |
| Buy Now | Fixed-price auction inventory (not live bidding) |
| Baseline | First successful scrape for a search — existing lots are not alerted |
| Free Trial | One-time 1-slot / 5-day entitlement; cannot be purchased |
| NEW_BUY_NOW | Alert when a matching Buy Now listing is newly seen |
| BUY_NOW_ACTIVATED | Alert when an existing listing gains Buy Now |

---

## Brand Voice

**Tone:** Direct, practical, low-hype — buyer-to-buyer clarity. Confident without hype.

**Style:** Short sentences; concrete features (slots, sources, filters, price); honest about limitations in FAQ / fine print, not buried in fear.

**Personality:** Reliable, no-nonsense, Telegram-native, deal-focused, multilingual-friendly.

**Copy defaults:**
- Lead with outcome: “Get a Telegram ping when your car shows up as Buy Now.”
- Prefer specifics: “Up to 10 car watches · Copart + IAAI · €89 / 30 days”
- CTAs: “Start free trial”, “Open in Telegram”, “Create your first Watch”, “Upgrade to keep monitoring”
- Avoid exclamation spam, fake urgency clocks, and invented testimonials

---

## Functionality (marketing-accurate feature set)

### Core loop
1. User starts bot → free trial granted (if eligible — typically first-time entitlement)
2. Opens Mini App → creates a Watch (source → car → max Buy Now price → activate)
3. Backend polls Copart/IAAI on a schedule (minutes-scale, not live tick-by-tick)
4. Matching Buy Now → Telegram alert
5. User opens listing and acts on the auction site

### Watch filters

| Filter | Required? | Notes |
|--------|-----------|--------|
| Source | Yes | Copart, IAAI, or both |
| Make / Model | Yes | From vehicle catalog |
| Body type | Optional | If available for model |
| Year min / max | Optional | |
| Max Buy Now price | Yes | **USD**; alerts at or below |
| Damage types | Optional / advanced | e.g. Front End, Rear End, Side, All Over, Hail, Flood, Vandalism, Mechanical |
| US states | Optional / advanced | Common states in UI (e.g. TX, FL, CA, NY, GA, NC, OH, PA, IL, AZ) |
| Max mileage | Optional / advanced | |
| Run condition | Optional / advanced | Any / Run and Drive / Does not run |
| Fuel / transmission / title types / locations | Optional in data model | Do not over-promise in hero copy unless surfaced in create-watch UX |

**Create-watch Mini App flow (primary UX):** Source → car (make/model/body/years) → max Buy Now price → review & activate.

Paused watches do not alert and **do not free a slot**. Resume does not send a backlog. Plan/trial expiry pauses watches.

### Alerts
**Triggers (default):** new Buy Now listing; existing listing gains Buy Now.  
**Not default:** price-drop alerts; baseline inventory spam; removed-listing alerts.

**Alert contents (typical Telegram message):**
- Header: Buy Now found
- Year / make / model / trim
- Price (USD)
- Source: Copart or IAAI
- Primary / secondary damage
- State / location
- Open listing link
- Photo when available

### Surfaces
- **Bot:** `/start`, `/app`, `/plan`, `/buy`, `/watches`, `/alerts`, `/language`, `/pauseall`, `/resumeall`, `/help`, `/paysupport`
- **Mini App:** Home, Watches, Alerts, Account, Plans (Stripe), Help
- **Auth:** Telegram Mini App `initData` or “Login with Telegram” deep link
- **Languages:** EN, RU, UK, LT, PL (full bot + Mini App dictionaries)

### Explicit non-features (do not promise)
- Automatic bidding or purchasing
- Copart/IAAI account login
- Millisecond real-time monitoring
- Currency conversion (USD matching for max Buy Now; subscription billed in EUR)
- Availability or “deal quality” guarantees
- Backfill of alerts missed while paused

---

## Pricing & Plans (source of truth for offers)

### Free Trial
| | |
|--|--|
| **Name** | Free Trial |
| **Slots** | 1 car watch |
| **Duration** | **5 days** |
| **Price** | Free |
| **Rules** | Auto-started for eligible new users. Not purchasable. No auto-renew. Upgrade anytime with Stripe. When trial ends, watches pause until a paid plan is active. |

### Paid plans (Stripe, EUR)

| Plan | Slug | Slots | Period | Price | UI badge | Best for |
|------|------|-------|--------|-------|----------|----------|
| **Weekly** | `weekly` | 5 | 7 days | **€45** | — | Short hunt / try paid |
| **Monthly** | `monthly` | 10 | 30 days | **€89** | **Most popular** | Active buyers, multiple cars |
| **3-Month** | `quarterly` | 15 | 90 days | **€179** | **Best value** | Max coverage, lowest €/day |

**Approximate €/day (for value framing — OK in marketing):**
| Plan | € / day | Slots | Rough framing |
|------|---------|-------|---------------|
| Weekly | ~€6.43 | 5 | Short intensive hunt |
| Monthly | ~€2.97 | 10 | Best everyday balance |
| 3-Month | ~€1.99 | 15 | Lowest daily cost + most slots |

**Feature bullets used in-product (safe to reuse):**
- Buy Now alerts from Copart & IAAI
- Instant Telegram alerts on matches *(in-product copy uses “Instant” for Telegram delivery of a match — prefer “Telegram alerts when a match is found” in ads to avoid implying real-time scraping)*
- Secure Stripe checkout (Apple Pay / Google Pay / card)
- Alerts for matching Buy Now listings
- Auto-renew available — cancel anytime
- Pause or change watches anytime

### Billing rules (must communicate accurately)
- Payment: **Stripe subscription** in EUR (Apple Pay / Google Pay / card) inside Mini App
- Paid plan activates on successful payment / subscription confirmation
- Subscriptions **renew automatically** until cancelled
- **Cancel renewal:** access continues until period end
- **Downgrade:** current plan remains active until end date; unused time is **not** automatically prorated
- On expiry: watches pause; user is prompted to renew
- Manage payment method / cancel via Stripe Customer Portal (in-app)

### Legacy (do not market)
- Telegram Stars pricing / Stars checkout as current offer
- Airwallex-era messaging as current processor
- Solo / Hunter / Dealer plan names

---

## Proof Points

**Metrics:** *(TBD — add after launch: alert volume, trial→paid conversion, active watches, MRR)*

**Customers / logos:** *(TBD)*

**Testimonials:** *(TBD — never invent)*

**Value themes:**

| Theme | Proof |
|-------|-------|
| Buy Now focus | Product + help copy; Copart & IAAI adapters |
| Telegram-native | Bot alerts + Mini App |
| Low friction start | Auto free trial (1 watch / 5 days) |
| Clear capacity | Slot-based plans (5 / 10 / 15) |
| Modern payments | Stripe + Apple Pay / Google Pay |

---

## Goals

**Business goal:** Convert free-trial users to paid Stripe plans; retain Monthly / 3-Month subscribers; grow multilingual markets (EN/RU/UK/LT/PL).

**Primary conversion action:** Open bot in Telegram → start free trial → create first Watch → upgrade on Plans page (Stripe).

**Secondary actions:** Upgrade before trial ends; switch Weekly → Monthly / 3-Month; create more watches up to slot limit.

**Current metrics:** *(TBD)*

---

## Claims checklist (for campaigns)

| ✅ Safe to say | ❌ Do not say |
|----------------|---------------|
| Monitors Copart & IAAI Buy Now | Instant / real-time scraping / millisecond alerts |
| Telegram alerts for matching listings | We bid, buy, or “snipe” for you |
| Free **5-day** trial (1 watch) | Free **7-day** trial (outdated) |
| Plans from €45 / week (5 watches) | Telegram Stars prices as current |
| Checks periodically (minutes-scale) | Guaranteed you won’t miss a deal |
| Always verify on the auction site | Listing will still be available |
| Pay with Apple Pay / Google Pay / card | Solo / Hunter / Dealer plans |
| Copart + IAAI in one Watch (source = both) | We log into your Copart/IAAI account |

---

## Support (for footers / FAQ)

- Support Telegram: [@buynowsniper_supportbot](https://t.me/buynowsniper_supportbot)
- In-app: Help + `/paysupport`
- Payment help: ask users for Telegram username + payment date; **never** ask for full card numbers / CVV in chat

---

# Marketing LLM Operating Manual

*Everything below is for generating texts, visuals, offers, and discounts. Follow Product Overview + Claims checklist first.*

---

## 1. Positioning statements (ready to use)

**Primary (EN):**  
Auction Watch monitors Copart and IAAI Buy Now for the cars you care about — and pings you on Telegram when a match appears.

**Short:**  
Buy Now alerts for Copart & IAAI — in Telegram.

**Problem → solution:**  
Stop refreshing auction sites. Create a Watch. Get a Telegram alert when a matching Buy Now listing shows up.

**Trial CTA:**  
Start free — 1 car watch for 3 days.

**Paid CTA (Monthly featured):**  
Track up to 10 cars for €89 / 30 days. Most popular.

**Best value CTA:**  
15 car watches for 90 days — €179. Best value.

---

## 2. Message pillars (use 1–2 per asset)

1. **Catch Buy Now matches without babysitting the site** — Watch → alert → open listing  
2. **Copart + IAAI together** — one place, Telegram delivery  
3. **Filters that matter** — make/model, years, max Buy Now (USD), optional damage/state/run  
4. **Clear capacity** — 1 free → 5 / 10 / 15 paid slots  
5. **Honest tool** — alerts only; you decide and buy on the auction site  
6. **Easy pay** — Apple Pay / Google Pay / card via Stripe  

---

## 3. Audience angles by locale (tone hints)

| Locale | Angle notes |
|--------|-------------|
| **EN** | Practical, export/flipper + personal buyer; US auction literacy assumed |
| **RU** | Emphasize time saved, Telegram convenience, clear EUR price; avoid hype “гарантия сделки” |
| **UK** | Similar to RU; trust + clarity; export/personal use |
| **LT** | Concise Baltic pragmatism; EUR pricing feels native |
| **PL** | Deal-hunting + clarity; EUR OK; Copart/IAAI often known among importers |

Always localize numbers/currency formats correctly. Keep brand terms: Copart, IAAI, Buy Now, Watch, Telegram, Stripe.

---

## 4. Channel playbooks

### Telegram (organic / channel / bot promo)
- Lead with the alert outcome; show a **sample alert mock** (price + damage + link)
- CTA: deep link `https://t.me/<BOT_USERNAME>` or “Open bot”
- Keep posts short; one plan highlight OR trial — not both competing
- Pin: trial + how to create first Watch (4 steps)

### Paid social / ads (Meta, TikTok, YouTube, Telegram ads)
- Hook: missed Buy Now / refreshing Copart all day  
- Demo: create Watch → alert arrives  
- Offer: 3-day free trial  
- Disclaimer line: “Alerts only. Not affiliated with Copart or IAAI. Always verify on the auction site.”

### Landing page / web
- Hero: brand + one headline + one sentence + CTA “Open in Telegram”  
- Below fold: how it works (3 steps), plans, FAQ with honesty claims  
- Do not build a dashboard-style first viewport

### In-bot lifecycle (lifecycle marketing copy)
| Moment | Goal | Angle |
|--------|------|-------|
| `/start` | Activate trial + language | Welcome + what a Watch is |
| After language | Create first Watch | Mini App steps 1–5 |
| Trial mid | Engagement | “Create/edit your Watch” |
| Trial ending soon | Convert | Upgrade to keep monitoring without a gap |
| Trial ended | Recover | Watches paused — pick a plan |
| Plan ending soon | Retain | Keep auto-renew on |
| Payment success | Confirm | Plan name + slot count |

### Email / SMS
- Only if collected with consent. Prefer Telegram for this product. If email exists later: trial reminders + receipt/support.

---

## 5. Offer & discount system (for promo LLMs)

### Default offer stack (no discount needed)
1. **Lead magnet:** Free trial — 1 watch / 5 days  
2. **Anchor plan:** Monthly €89 / 10 watches (Most popular)  
3. **Value plan:** 3-Month €179 / 15 watches (Best value)  
4. **Entry paid:** Weekly €45 / 5 watches  

### Discount principles
- Prefer **time-boxed** and **code-based** or admin-granted entitlements — do not invent coupon mechanics that Stripe/admin cannot fulfill  
- Never discount below a floor that breaks perceived quality: suggested floors → Weekly ≥ €35, Monthly ≥ €69, 3-Month ≥ €139 (ops may override)  
- Prefer upgrading **value** over deep cuts: extra trial day, bonus watch slot for first period, or “first month” style only if engineering supports it  
- Always state: what is discounted, duration, what happens after, cancel anytime if subscription  
- Do **not** promise lifetime deals, forever free, or “unlimited watches”

### Promo templates (copy-ready; ops must enable in Stripe/admin)

| Promo code name (example) | Type | Suggested copy |
|---------------------------|------|----------------|
| `TRIAL_BOOST` | Extended trial (if enabled) | “Extra trial days to catch your first match” |
| `FIRST10` | % off first invoice | “10% off your first month” |
| `HUNT45` | Weekly entry | “Start a 7-day hunt — intro price” |
| `BEST90` | 3-Month highlight | “Best value locked for 90 days” |
| `COMEBACK` | Win-back after trial end | “Watches paused — restart with Monthly” |

**If no real coupon system is live:** market only the free trial + plan value framing (€/day, slots). Do not advertise fake coupon codes.

### Bundling / framing (no engineering required)
- “€2.97/day for 10 watches” (Monthly)
- “Less than a coffee a day for Copart + IAAI coverage” — only if culturally appropriate; avoid overused fluff in LT/PL/RU if it feels cheap
- Contrast: Manual refreshing = free but costly in missed cars; plan = predictable EUR cost

### Urgency (allowed vs not)
- ✅ Trial ends in X days; watches will pause  
- ✅ Limited promo window with real end date  
- ❌ Fake countdown, fake “only 3 spots left”, fake scarcity of inventory alerts

---

## 6. Visual direction (for image / creative LLMs)

### Brand visual system
| Token | Guidance |
|-------|----------|
| **Mood** | Utility + automotive night-ops: focused, calm urgency, not casino neon |
| **Primary surfaces** | Dark charcoal / graphite UI chrome OR clean light Mini App; pick one system per campaign and stick to it |
| **Accent** | Telegram blue sparingly for CTAs; steel/amber for “alert” moments — avoid purple gradients and generic AI purple |
| **Typography** | Strong, modern sans for UI; expressive but readable display for campaign heroes — not Inter/Roboto defaults if designing brand assets |
| **Imagery** | Real-feeling salvage / auction lot context, phone showing Telegram alert, vehicle detail (damage, lot, price) — not abstract blobs |
| **Avoid** | Fake “AI brain” visuals, robot mascots bidding, Copart/IAAI logos as endorsement, stock “happy family with new car” unless clearly post-purchase story |

### Core visual motifs
1. **Phone + alert** — Telegram message mock: “Buy Now found” + price + damage + Open listing  
2. **Watch card** — Make/model + year range + “Up to $X” + Copart+IAAI  
3. **Split before/after** — Endless refreshing tabs vs one Telegram ping  
4. **Multi-watch grid** — 5 / 10 / 15 slots as capacity metaphor (cars as slots, not cluttered collage)

### Asset sizes (typical)
- Telegram post: 1280×720 or square 1080×1080  
- Stories / Reels: 1080×1920  
- Landing hero: full-bleed edge-to-edge photo or phone UI, not inset card  
- Ad thumbnails: face the price or the car model name large enough to read on mobile

### Sample alert mock (for creatives — fictional example, label as example)
```
🚨 Buy Now found

2018 Toyota Camry SE
💰 $4,250
🏁 Copart
🛠 Primary: Front End
🛠 Secondary: Minor Dents/Scratches
📍 TX

🔗 Open listing
```

### Legal/visual compliance
- Do not use Copart or IAAI trademarks in a way that implies partnership or official status  
- Prefer “for Copart & IAAI Buy Now listings” as descriptive use  
- Watermark “Example alert” on mocked listings if using realistic lot data

---

## 7. Copy blocks library (EN seeds — localize from these)

### Headlines
- Buy Now alerts in Telegram  
- Stop refreshing Copart. Start a Watch.  
- Matching Buy Now? You’ll get the ping.  
- Copart + IAAI. One Telegram bot.  
- 1 free watch for 5 days  

### Subheads
- Create a Watch with make, model, years, and max Buy Now price. We monitor Copart and IAAI and message you when a match appears.  
- Alerts only — you verify and buy on the auction site.  

### CTAs
- Open in Telegram  
- Start free trial  
- Create Watch  
- Upgrade to keep monitoring  
- See plans  

### Social proof placeholders (replace when real)
- “[X] alerts sent this week” — only with real metrics  
- “Used by buyers watching Copart & IAAI from Telegram” — soft, no fake logos  

### FAQ seeds
- **Is this real-time?** Periodically — minutes-scale checks, not millisecond.  
- **Do you buy the car?** No.  
- **What happens after trial?** Watches pause until you subscribe.  
- **Can I cancel?** Yes — manage renewal in the app / Stripe portal; access until period end.  

---

## 8. Plan recommendation matrix (for offer LLMs)

| User situation | Recommend | Why |
|----------------|-----------|-----|
| Just testing | Free trial | Prove alert loop with 1 Watch |
| One weekend hunt, several models | Weekly | 5 slots / 7 days |
| Ongoing personal / flip activity | **Monthly** | Most popular; 10 slots |
| Dealer / multi-target / export | **3-Month** | Best value; 15 slots |
| Trial ending, already got an alert | Monthly | Convert while motivation is high |
| Trial ended, no alert yet | Weekly or extend engagement | Lower commitment; or create better Watch filters |

---

## 9. Compliance & trust rules (hard)

1. Never invent testimonials, metrics, partner logos, or “official Copart/IAAI” claims  
2. Never claim auto-bid, auto-buy, guaranteed wins, or illegal export help  
3. Always keep “verify on auction site” in long-form / FAQ  
4. Pricing must match this doc (€45 / €89 / €179; trial 3 days / 1 watch) unless ops updates this file  
5. Disclaimers in small print are OK; do not contradict them in the headline  
6. Multilingual ads must not escalate claims beyond EN source of truth  

---

## 10. Inputs an offer/creative LLM should ask for (if missing)

- Live bot username + deep link  
- Whether a real Stripe coupon / promo code is enabled  
- Campaign language(s)  
- Channel (Telegram post, Meta ad, landing, Reels, etc.)  
- Goal (trial starts, paid conversions, win-back)  
- Any real metrics / testimonials approved for use  

---

## Changelog

*Newest first. One line per revision: what changed and why.*

- v2 (2026-08-12) — Full refresh for marketing LLMs: Stripe/EUR pricing, 5-day trial, support @buynowsniper_supportbot, dual brand notes, offers/discounts system, visual direction, channel playbooks, claims checklist updates (Stars/7-day removed).  
- v1 (2026-08-05) — Initial context auto-drafted from codebase: Auction Watch positioning, Watch/alert features, Free Trial + Weekly/Monthly/3-Month Stars pricing, billing rules, and claims checklist.
