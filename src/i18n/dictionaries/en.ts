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
    title: "Auction Watch — Copart & IAAI Buy Now alerts on Telegram",
    description:
      "Create vehicle watches for Copart and IAAI. Get a Telegram alert when a matching Buy Now listing appears. Free 3-day trial.",
  },
  brand: "Auction Watch",
  nav: {
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    openTelegram: "Open in Telegram",
    language: "Language",
  },
  hero: {
    ariaLabel: "Auction Watch hero",
    headline: "Buy Now alerts for Copart & IAAI — in Telegram",
    sub: "Create a Watch with make, model, years, and max Buy Now price. We monitor Copart and IAAI and message you when a match appears.",
    cta: "Start free trial",
    secondaryCta: "See how it works",
    honesty: "Alerts only — we don’t bid or buy for you.",
    imageAlt:
      "Salvage auction lot at dusk with wet asphalt and sodium yard lights",
  },
  support: {
    eyebrow: "What you get",
    heading: "Stop refreshing auction sites. Start a Watch.",
    body: "Auction Watch monitors Copart and IAAI Buy Now for the cars you care about — and pings you on Telegram when a match appears.",
    points: [
      {
        title: "Telegram alerts when a match is found",
        body: "Price, damage, location, and an open-listing link — so you can act without babysitting the site.",
      },
      {
        title: "Copart + IAAI in one place",
        body: "One Watch can cover Copart, IAAI, or both. Filters for years, max Buy Now (USD), damage, state, and more.",
      },
      {
        title: "You decide. You buy on the auction site.",
        body: "Monitoring and alerts only. No auto-bid, no auto-buy, no auction-account login required.",
      },
    ],
    imageAlt: "Hands holding a phone at a night auction lot",
    alertExampleLabel: "Example alert",
    alertTitle: "Buy Now found",
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
        body: "Open Auction Watch on Telegram. Eligible new users get a free 3-day trial with 1 Watch automatically.",
      },
      {
        title: "Create a Watch",
        body: "In the Mini App: pick source, make/model, years, and max Buy Now price (USD). Activate.",
      },
      {
        title: "Get a Telegram alert",
        body: "We check periodically on a minutes-scale schedule. Matching Buy Now → concise alert with a listing link.",
      },
      {
        title: "Verify and buy yourself",
        body: "Open the listing on Copart or IAAI. Always verify price and details before you buy.",
      },
    ],
  },
  watches: {
    eyebrow: "Watches",
    heading: "One make/model rule. Filters included.",
    body: "A Watch uses one plan slot. Optional filters refine matches without costing extra slots.",
    filters: [
      "Source (Copart / IAAI / both)",
      "Make / model",
      "Year range",
      "Max Buy Now (USD)",
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
    paymentsNote: "Billed in EUR · Buy Now max-price filters stay in USD to match auction listings",
    watchesLabel: "Car watches",
    durationLabel: "Period",
    perDayLabel: "≈ per day",
    trialCta: "Start free trial",
    planCta: "Open in Telegram",
    disclaimer:
      "Paid plan activates after successful payment. Cancel renewal anytime — access continues until the period ends. Downgrades are not prorated. On expiry, Watches pause until you renew. Buy Now inventory moves fast — always verify on Copart or IAAI. Need a custom plan? Contact sales.",
    plans: [
      {
        id: "trial",
        name: "Free Trial",
        duration: "3 days",
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
        q: "How do I pay?",
        a: "Stripe in the Mini App — Apple Pay, Google Pay, or card, billed in EUR. Manage payment method or cancel renewal via the in-app Stripe Customer Portal.",
      },
      {
        q: "Is this real-time?",
        a: "No. We check periodically on a minutes-scale schedule — not millisecond scraping. Listings can appear and sell between checks. Always verify on the auction page.",
      },
      {
        q: "Do you bid or buy for me?",
        a: "No. Alerts only. You open Copart or IAAI and buy yourself. There is no auto-bid and no auto-buy.",
      },
      {
        q: "What happens after the free trial?",
        a: "The trial is 1 Watch for 3 days. When it ends, Watches pause until you subscribe. Upgrade anytime in the Mini App.",
      },
      {
        q: "Why EUR pricing for USD cars?",
        a: "Your subscription is billed in EUR via Stripe. Max Buy Now price filters stay in USD to match Copart and IAAI listings.",
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
    heading: "Start free — 1 car watch for 3 days",
    body: "Open the bot on Telegram. Create your first Watch. Upgrade anytime with Apple Pay, Google Pay, or card to keep monitoring.",
  },
  cta: {
    startTrial: "Start free trial",
    contactSales: "Contact sales",
  },
  footer: {
    blurb:
      "Buy Now alerts for Copart and IAAI — in Telegram. Alerts only; always verify listings on the auction site before you buy.",
    openBot: "Open bot",
    miniApp: "Mini App",
    contactSales: "Contact sales",
    pricing: "Pricing",
    copyright: "Auction Watch. Not affiliated with Copart or IAAI.",
  },
};
