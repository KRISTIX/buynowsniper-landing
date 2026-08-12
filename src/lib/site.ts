const botUsername =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME?.replace(/^@/, "").trim() ||
  "buynowsniperbot";

const supportUsername =
  process.env.NEXT_PUBLIC_TELEGRAM_SUPPORT_USERNAME?.replace(/^@/, "").trim() ||
  "buynowsniper_supportbot";

export const site = {
  name: "Auction Watch",
  description:
    "Create vehicle watches for Copart and IAAI. Get a Telegram alert when a matching Buy Now listing appears. Free 3-day trial.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://buynowsniper-landing.vercel.app",
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
