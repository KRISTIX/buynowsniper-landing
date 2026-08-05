const botUsername =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME?.replace(/^@/, "").trim() ||
  "AuctionWatchBot";

export const site = {
  name: "Auction Watch",
  description:
    "Telegram alerts when Copart and IAAI Buy Now listings match your Watches. Free 7-day trial.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://auction-watch-landing.vercel.app",
  appUrl: "https://auction-watch-mu.vercel.app",
  supportTelegram: "https://t.me/kristijonask",
  botUsername,
  telegramUrl: `https://t.me/${botUsername}`,
} as const;

export const plans = [
  {
    id: "trial",
    name: "Free Trial",
    watches: 1,
    duration: "7 days",
    price: "Free",
    priceNote: "Once per user",
    highlight: false,
    badge: null as string | null,
  },
  {
    id: "weekly",
    name: "Weekly",
    watches: 5,
    duration: "7 days",
    price: "2,500 ⭐",
    priceNote: "Telegram Stars",
    highlight: false,
    badge: null as string | null,
  },
  {
    id: "monthly",
    name: "Monthly",
    watches: 10,
    duration: "30 days",
    price: "5,000 ⭐",
    priceNote: "Telegram Stars",
    highlight: true,
    badge: "Popular",
  },
  {
    id: "quarterly",
    name: "3-Month",
    watches: 15,
    duration: "90 days",
    price: "10,000 ⭐",
    priceNote: "Telegram Stars",
    highlight: true,
    badge: "Best value",
  },
] as const;
