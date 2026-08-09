export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: {
    howItWorks: string;
    pricing: string;
    faq: string;
    openTelegram: string;
    language: string;
  };
  hero: {
    ariaLabel: string;
    headline: string;
    sub: string;
    cta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  support: {
    eyebrow: string;
    heading: string;
    body: string;
    points: { title: string; body: string }[];
    imageAlt: string;
    alertOpenListing: string;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    steps: { title: string; body: string }[];
  };
  watches: {
    eyebrow: string;
    heading: string;
    body: string;
    filters: string[];
    note: string;
    imageAlt: string;
  };
  pricing: {
    eyebrow: string;
    heading: string;
    body: string;
    watchesLabel: string;
    durationLabel: string;
    trialCta: string;
    planCta: string;
    disclaimer: string;
    plans: {
      id: string;
      name: string;
      duration: string;
      price: string;
      priceNote: string;
      badge: string | null;
    }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
    helpLinkPrefix: string;
    helpLinkSuffix: string;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  cta: {
    startTrial: string;
    contactSales: string;
  };
  footer: {
    blurb: string;
    openBot: string;
    miniApp: string;
    contactSales: string;
    pricing: string;
    copyright: string;
  };
};

export const en: Dictionary = {
  meta: {
    title: "Buy Now Sniper — Copart & IAAI Buy Now alerts on Telegram",
    description:
      "Telegram alerts when Copart and IAAI Buy Now listings match your Watches. Free 7-day trial.",
  },
  brand: "Buy Now Sniper",
  nav: {
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    openTelegram: "Open in Telegram",
    language: "Language",
  },
  hero: {
    ariaLabel: "Buy Now Sniper hero",
    headline: "Telegram alerts when Copart & IAAI Buy Now matches appear",
    sub: "Create a Watch. Get price, damage, location, and a listing link — checked about every 15 minutes.",
    cta: "Start free 7-day trial",
    secondaryCta: "See how it works",
    imageAlt:
      "Salvage auction lot at dusk with wet asphalt and sodium yard lights",
  },
  support: {
    eyebrow: "What you get",
    heading: "Stop refreshing yards. Start getting matches.",
    body: "Buy Now Sniper monitors Copart and IAAI Buy Now inventory for your rules and pushes matches to Telegram.",
    points: [
      {
        title: "Telegram alerts for Buy Now",
        body: "When a matching Copart or IAAI Buy Now listing appears, you get a message with the details that matter.",
      },
      {
        title: "Watches you control",
        body: "Set make and model, then add year, max price, damage, state, mileage, and more — filters don’t use extra slots.",
      },
      {
        title: "You buy on the auction site",
        body: "Buy Now Sniper notifies. You open the listing on Copart or IAAI and decide. No auto-bid.",
      },
    ],
    imageAlt: "Hands holding a phone at a night auction lot",
    alertOpenListing: "Open listing on Copart",
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "From bot to Buy Now in five steps",
    steps: [
      {
        title: "Start the bot",
        body: "Open Buy Now Sniper on Telegram. Your free 7-day trial begins automatically.",
      },
      {
        title: "Create a Watch",
        body: "Pick a make and model in the Mini App. Add optional filters if you want tighter matches.",
      },
      {
        title: "We check the yards",
        body: "The system scans Copart and IAAI Buy Now inventory about every 15 minutes.",
      },
      {
        title: "Get a Telegram alert",
        body: "A match includes price, damage, location, and a link to the listing.",
      },
      {
        title: "Buy on Copart or IAAI",
        body: "You open the auction site yourself and complete the purchase there.",
      },
    ],
  },
  watches: {
    eyebrow: "Watches",
    heading: "One make/model rule. Filters included.",
    body: "A Watch is one make and model you want to track. Optional filters refine matches without using extra Watch slots.",
    filters: [
      "Year",
      "Max price",
      "Damage",
      "State",
      "Mileage",
      "Run condition",
      "Body type",
    ],
    note: "Paused Watches don’t send alerts — and they still occupy a slot until you delete them or renew after expiry.",
    imageAlt:
      "Clean vehicle parked on industrial concrete at an auction yard",
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Telegram Stars only",
    body: "Pay in-app with Stars. Paid plans activate immediately. Unused time is not prorated.",
    watchesLabel: "Watches",
    durationLabel: "Duration",
    trialCta: "Start free trial",
    planCta: "Open in Telegram",
    disclaimer:
      "On expiry, Watches pause until you renew. Buy Now availability changes fast — always verify price and details on Copart or IAAI before you buy. Need more Watches or a custom plan? Contact sales.",
    plans: [
      {
        id: "trial",
        name: "Free Trial",
        duration: "7 days",
        price: "Free",
        priceNote: "Once per user",
        badge: null,
      },
      {
        id: "weekly",
        name: "Weekly",
        duration: "7 days",
        price: "2,500 ⭐",
        priceNote: "Telegram Stars",
        badge: null,
      },
      {
        id: "monthly",
        name: "Monthly",
        duration: "30 days",
        price: "5,000 ⭐",
        priceNote: "Telegram Stars",
        badge: "Popular",
      },
      {
        id: "quarterly",
        name: "3-Month",
        duration: "90 days",
        price: "10,000 ⭐",
        priceNote: "Telegram Stars",
        badge: "Best value",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Straight answers",
    items: [
      {
        q: "How do I pay?",
        a: "Payment is Telegram Stars only — no card checkout in the app. Buy Stars in Telegram, then purchase a plan inside Buy Now Sniper.",
      },
      {
        q: "How often do you check inventory?",
        a: "About every 15 minutes. This is not real-time or instant. Listings can appear and sell between checks.",
      },
      {
        q: "Does Buy Now Sniper bid or buy for me?",
        a: "No. You get an alert with listing details and a link. You open Copart or IAAI and buy yourself. There is no auto-bid and no auto-buy.",
      },
      {
        q: "What happens when my plan expires?",
        a: "Your Watches pause and stop alerting until you renew. Paused Watches still occupy slots.",
      },
      {
        q: "Can I trust the listing details in an alert?",
        a: "Treat alerts as a heads-up. Always verify price, damage, location, and availability on the auction site before you buy — inventory moves quickly.",
      },
      {
        q: "Need help or custom pricing?",
        a: "Message our support bot on Telegram for help, custom plans, and sales.",
      },
    ],
    helpLinkPrefix: "Message",
    helpLinkSuffix: "on Telegram for support, custom pricing, and sales.",
  },
  finalCta: {
    eyebrow: "Free trial",
    heading: "Start watching Buy Now inventory today",
    body: "Open the bot on Telegram. Your 7-day free trial starts automatically — one Watch, no Stars required to try.",
  },
  cta: {
    startTrial: "Start free 7-day trial",
    contactSales: "Contact sales",
  },
  footer: {
    blurb:
      "Telegram alerts for Copart and IAAI Buy Now matches. Always verify listings on the auction site before you buy.",
    openBot: "Open bot",
    miniApp: "Mini App",
    contactSales: "Contact sales",
    pricing: "Pricing",
    copyright: "Buy Now Sniper. Not affiliated with Copart or IAAI.",
  },
};
