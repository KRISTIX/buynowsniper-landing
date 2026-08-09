const botUsername =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME?.replace(/^@/, "").trim() ||
  "buynowsniperbot";

const supportUsername =
  process.env.NEXT_PUBLIC_TELEGRAM_SUPPORT_USERNAME?.replace(/^@/, "").trim() ||
  "buynowsniper_supportbot";

export const site = {
  name: "Auction Watch",
  description:
    "Telegram alerts when Copart and IAAI Buy Now listings match your Watches. Free 7-day trial.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://auction-watch-landing.vercel.app",
  appUrl: "https://app.buynowsniper.com",
  botUsername,
  supportUsername,
  telegramUrl: `https://t.me/${botUsername}`,
  supportTelegram: `https://t.me/${supportUsername}`,
} as const;

/** Watch slot counts per plan (display copy lives in i18n dictionaries). */
export const planWatches: Record<string, number> = {
  trial: 1,
  weekly: 5,
  monthly: 10,
  quarterly: 15,
};
