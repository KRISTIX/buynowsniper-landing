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
    honesty: string;
    imageAlt: string;
  };
  support: {
    eyebrow: string;
    heading: string;
    body: string;
    points: { title: string; body: string }[];
    imageAlt: string;
    alertExampleLabel: string;
    alertTitle: string;
    alertVehicle: string;
    alertPrice: string;
    alertSource: string;
    alertDamage: string;
    alertLocation: string;
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
    paymentsNote: string;
    watchesLabel: string;
    durationLabel: string;
    perDayLabel: string;
    trialCta: string;
    planCta: string;
    disclaimer: string;
    plans: {
      id: string;
      name: string;
      duration: string;
      price: string;
      priceNote: string;
      perDay: string | null;
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
    title: "Buy Now Sniper — Copart & IAAI auction alerts on Telegram",
    description:
      "Watch Copart and IAAI for Buy Now and live auction matches. Get a Telegram alert with price, damage, location, and a listing link. Free 5-day trial.",
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
    headline: "Copart & IAAI alerts for Buy Now and live auctions",
    sub: "Create a Watch for the cars you want. We monitor Buy Now listings and regular auction lots — and message you on Telegram when a match appears.",
    cta: "Start free trial",
    secondaryCta: "See how it works",
    honesty: "Alerts only — we don’t bid or buy for you.",
    imageAlt:
      "Salvage auction lot at dusk with wet asphalt and sodium yard lights",
  },
  support: {
    eyebrow: "What you get",
    heading: "Stop refreshing auction sites. Start a Watch.",
    body: "Buy Now Sniper watches Copart and IAAI for both Buy Now deals and live auction matches — then pings you on Telegram so you can act.",
    points: [
      {
        title: "Buy Now and live auctions — equally",
        body: "One product for fixed-price Buy Now inventory and regular auction lots. Same Watch flow, same Telegram alerts.",
      },
      {
        title: "Telegram alerts when a match is found",
        body: "Price, damage, location, sale type, and an open-listing link — without babysitting Copart or IAAI all day.",
      },
      {
        title: "You decide. You act on the auction site.",
        body: "Monitoring and alerts only. No auto-bid, no auto-buy, no auction-account login required.",
      },
    ],
    imageAlt: "Hands holding a phone at a night auction lot",
    alertExampleLabel: "Example alert",
    alertTitle: "Match found · Auction",
    alertVehicle: "2018 Toyota Camry SE",
    alertPrice: "$4,250",
    alertSource: "Copart",
    alertDamage: "Front End",
    alertLocation: "TX",
    alertOpenListing: "Open listing",
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "Watch → alert → open listing",
    steps: [
      {
        title: "Start the bot",
        body: "Open Buy Now Sniper on Telegram. Eligible new users get a free 5-day trial with 1 Watch automatically.",
      },
      {
        title: "Create a Watch",
        body: "In the Mini App: pick source, make/model, years, max price (USD), and whether you care about Buy Now, auctions, or both. Activate.",
      },
      {
        title: "Get a Telegram alert",
        body: "We check periodically on a minutes-scale schedule. A matching Buy Now or auction lot → concise alert with a listing link.",
      },
      {
        title: "Verify and act yourself",
        body: "Open the listing on Copart or IAAI. Always verify price and details before you bid or buy.",
      },
    ],
  },
  watches: {
    eyebrow: "Watches",
    heading: "One make/model rule. Filters included.",
    body: "A Watch uses one plan slot. Optional filters refine matches — including sale type — without costing extra slots.",
    filters: [
      "Source (Copart / IAAI / both)",
      "Sale type (Buy Now / auction / both)",
      "Make / model",
      "Year range",
      "Max price (USD)",
      "Damage",
      "US state",
      "Mileage",
      "Run condition",
      "Body type",
    ],
    note: "Paused Watches don’t alert — and still occupy a slot. Resume does not backfill old listings. On trial or plan expiry, Watches pause until you upgrade or renew.",
    imageAlt:
      "Clean vehicle parked on industrial concrete at an auction yard",
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Clear EUR plans. Pay with card.",
    body: "Stripe checkout in the Mini App — Apple Pay, Google Pay, or card. Subscriptions renew until you cancel.",
    paymentsNote:
      "Billed in EUR · max-price filters stay in USD to match auction listings",
    watchesLabel: "Car watches",
    durationLabel: "Period",
    perDayLabel: "≈ per day",
    trialCta: "Start free trial",
    planCta: "Open in Telegram",
    disclaimer:
      "Paid plan activates after successful payment. Cancel renewal anytime — access continues until the period ends. Downgrades are not prorated. On expiry, Watches pause until you renew. Auction inventory moves fast — always verify on Copart or IAAI. Need a custom plan? Contact sales.",
    plans: [
      {
        id: "trial",
        name: "Free Trial",
        duration: "5 days",
        price: "Free",
        priceNote: "1 watch · once per user",
        perDay: null,
        badge: null,
      },
      {
        id: "weekly",
        name: "Weekly",
        duration: "7 days",
        price: "€45",
        priceNote: "Short hunt / try paid",
        perDay: "~€6.43",
        badge: null,
      },
      {
        id: "monthly",
        name: "Monthly",
        duration: "30 days",
        price: "€89",
        priceNote: "Best everyday balance",
        perDay: "~€2.97",
        badge: "Most popular",
      },
      {
        id: "quarterly",
        name: "3-Month",
        duration: "90 days",
        price: "€179",
        priceNote: "Lowest daily cost",
        perDay: "~€1.99",
        badge: "Best value",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Straight answers",
    items: [
      {
        q: "Do you cover Buy Now or live auctions?",
        a: "Both. Watches can match Buy Now listings and regular auction lots on Copart and IAAI — you choose Buy Now, auctions, or both.",
      },
      {
        q: "How do I pay?",
        a: "Stripe in the Mini App — Apple Pay, Google Pay, or card, billed in EUR. Manage payment method or cancel renewal via the in-app Stripe Customer Portal.",
      },
      {
        q: "Is this real-time?",
        a: "No. We check periodically on a minutes-scale schedule — not millisecond scraping. Listings can appear and sell between checks. Always verify on the auction page.",
      },
      {
        q: "Do you bid or buy for me?",
        a: "No. Alerts only. You open Copart or IAAI and bid or buy yourself. There is no auto-bid and no auto-buy.",
      },
      {
        q: "What happens after the free trial?",
        a: "The trial is 1 Watch for 5 days. When it ends, Watches pause until you subscribe. Upgrade anytime in the Mini App.",
      },
      {
        q: "Why EUR pricing for USD cars?",
        a: "Your subscription is billed in EUR via Stripe. Max price filters stay in USD to match Copart and IAAI listings.",
      },
      {
        q: "Can I cancel?",
        a: "Yes. Cancel auto-renew in the app / Stripe portal. Access continues until the current period ends.",
      },
      {
        q: "Need help?",
        a: "Message our support bot on Telegram for help, payment questions, and custom plans.",
      },
    ],
    helpLinkPrefix: "Message",
    helpLinkSuffix: "on Telegram for support, payment help, and sales.",
  },
  finalCta: {
    eyebrow: "Free trial",
    heading: "Start free — 1 car watch for 5 days",
    body: "Open the bot on Telegram. Create your first Watch for Buy Now, live auctions, or both. Upgrade anytime with Apple Pay, Google Pay, or card.",
  },
  cta: {
    startTrial: "Start free trial",
    contactSales: "Contact sales",
  },
  footer: {
    blurb:
      "Telegram alerts for Copart and IAAI — Buy Now and live auctions. Alerts only; always verify listings on the auction site before you bid or buy.",
    openBot: "Open bot",
    miniApp: "Mini App",
    contactSales: "Contact sales",
    pricing: "Pricing",
    copyright: "Buy Now Sniper. Not affiliated with Copart or IAAI.",
  },
};
