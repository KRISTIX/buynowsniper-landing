import type { Dictionary } from "./en";

export const lt: Dictionary = {
  meta: {
    title: "Auction Watch — Copart ir IAAI Buy Now pranešimai Telegram",
    description:
      "Kurkite Watch Copart ir IAAI. Gaukite Telegram pranešimą, kai atsiranda tinkamas Buy Now. Nemokamas 3 dienų bandomasis laikotarpis.",
  },
  brand: "Auction Watch",
  nav: {
    howItWorks: "Kaip veikia",
    pricing: "Kainos",
    faq: "DUK",
    openTelegram: "Atidaryti Telegram",
    language: "Kalba",
  },
  hero: {
    ariaLabel: "Auction Watch pagrindinis blokas",
    headline: "Buy Now pranešimai apie Copart ir IAAI — Telegram",
    sub: "Sukurkite Watch: markė, modelis, metai ir maks. Buy Now kaina. Stebime Copart ir IAAI ir parašome, kai atsiranda atitikmuo.",
    cta: "Pradėti bandomąjį laikotarpį",
    secondaryCta: "Kaip tai veikia",
    honesty: "Tik pranešimai — nestatome ir neperkame už jus.",
    imageAlt: "Aukciono aikštelė saulėlydyje: šlapias asfaltas ir natrio žibintai",
  },
  support: {
    eyebrow: "Ką gaunate",
    heading: "Nustokite atnaujinti aukcionus. Pradėkite Watch.",
    body: "Auction Watch stebi Copart ir IAAI Buy Now pagal jūsų automobilius — ir parašo Telegram, kai atsiranda atitikmuo.",
    points: [
      {
        title: "Telegram pranešimas radus atitikmenį",
        body: "Kaina, žala, vieta ir nuoroda į skelbimą — be nuolatinio svetainės stebėjimo.",
      },
      {
        title: "Copart + IAAI vienoje vietoje",
        body: "Vienas Watch gali apimti Copart, IAAI arba abu. Filtrai: metai, maks. Buy Now (USD), žala, valstija ir daugiau.",
      },
      {
        title: "Sprendžiate ir perkate jūs",
        body: "Tik stebėjimas ir pranešimai. Be automatinio statymo, pirkimo ir aukciono paskyros prisijungimo.",
      },
    ],
    imageAlt: "Rankos laiko telefoną naktinėje aukciono aikštelėje",
    alertExampleLabel: "Pranešimo pavyzdys",
    alertTitle: "Buy Now found",
    alertVehicle: "2018 Toyota Camry SE",
    alertPrice: "$4,250",
    alertSource: "Copart",
    alertDamage: "Front End",
    alertLocation: "TX",
    alertOpenListing: "Atidaryti skelbimą",
  },
  howItWorks: {
    eyebrow: "Kaip veikia",
    heading: "Watch → pranešimas → atidaryti skelbimą",
    steps: [
      {
        title: "Paleiskite botą",
        body: "Atidarykite Auction Watch Telegram. Naujiems vartotojams — nemokamas 3 dienų bandymas ir 1 Watch.",
      },
      {
        title: "Sukurkite Watch",
        body: "Mini App: šaltinis, markė/modelis, metai ir maks. Buy Now kaina (USD). Aktyvuokite.",
      },
      {
        title: "Gaukite Telegram pranešimą",
        body: "Tikriname periodiškai (minutės, ne milisekundės). Buy Now atitikmuo → trumpas pranešimas su nuoroda.",
      },
      {
        title: "Patikrinkite ir pirkite patys",
        body: "Atidarykite skelbimą Copart ar IAAI. Prieš pirkdami visada patikrinkite kainą ir detales.",
      },
    ],
  },
  watches: {
    eyebrow: "Watch",
    heading: "Viena markės/modelio taisyklė. Filtrai įskaičiuoti.",
    body: "Watch užima vieną plano vietą. Papildomi filtrai patikslina atitikmenis be papildomų vietų.",
    filters: [
      "Šaltinis (Copart / IAAI / abu)",
      "Markė / modelis",
      "Metai",
      "Maks. Buy Now (USD)",
      "Žala",
      "JAV valstija",
      "Rida",
      "Būklė (run)",
      "Kėbulo tipas",
    ],
    note: "Pristabdyti Watch nesiunčia pranešimų — ir vis tiek užima vietą. Atnaujinus senų skelbimų neatsiunčiame. Pasibaigus trial ar planui Watch pristabdomi, kol atnaujinsite.",
    imageAlt: "Švarus automobilis ant pramoninio betono aukciono aikštelėje",
  },
  pricing: {
    eyebrow: "Kainos",
    heading: "Aiškūs EUR planai. Mokėkite kortele.",
    body: "Stripe Mini App — Apple Pay, Google Pay arba kortelė. Prenumerata pratęsiama, kol atšaukiate.",
    paymentsNote: "Sąskaita EUR · maks. Buy Now kainos filtras — USD, kaip aukcione",
    watchesLabel: "Watch",
    durationLabel: "Trukmė",
    perDayLabel: "≈ per dieną",
    trialCta: "Pradėti bandymą",
    planCta: "Atidaryti Telegram",
    disclaimer:
      "Mokamas planas aktyvuojamas po sėkmingo mokėjimo. Autopratęsimą galite atšaukti bet kada — prieiga iki periodo pabaigos. Planų sumažinimas neperskaičiuojamas. Pasibaigus Watch pristabdomi. Buy Now keičiasi greitai — visada patikrinkite Copart ar IAAI. Reikia individualaus plano? Susisiekite su pardavimais.",
    plans: [
      {
        id: "trial",
        name: "Bandomasis",
        duration: "3 dienos",
        price: "Nemokamai",
        priceNote: "1 Watch · vieną kartą",
        perDay: null,
        badge: null,
      },
      {
        id: "weekly",
        name: "Savaitė",
        duration: "7 dienos",
        price: "€45",
        priceNote: "Trumpa medžioklė",
        perDay: "~€6.43",
        badge: null,
      },
      {
        id: "monthly",
        name: "Mėnuo",
        duration: "30 dienų",
        price: "€89",
        priceNote: "Geriausias kasdienis balansas",
        perDay: "~€2.97",
        badge: "Populiariausias",
      },
      {
        id: "quarterly",
        name: "3 mėnesiai",
        duration: "90 dienų",
        price: "€179",
        priceNote: "Mažiausia dienos kaina",
        perDay: "~€1.99",
        badge: "Geriausia vertė",
      },
    ],
  },
  faq: {
    eyebrow: "DUK",
    heading: "Tiesūs atsakymai",
    items: [
      {
        q: "Kaip mokėti?",
        a: "Stripe Mini App — Apple Pay, Google Pay arba kortelė, sąskaita EUR. Mokėjimo būdą ir atšaukimą — per Stripe Customer Portal programėlėje.",
      },
      {
        q: "Ar tai realiuoju laiku?",
        a: "Ne. Tikriname periodiškai (minutės), ne milisekundės. Skelbimai gali atsirasti ir dingti tarp patikrinimų. Visada patikrinkite aukciono puslapyje.",
      },
      {
        q: "Ar jūs stato ar perkate?",
        a: "Ne. Tik pranešimai. Patys atidarote Copart ar IAAI. Be automatinio statymo ir pirkimo.",
      },
      {
        q: "Kas po bandomojo laikotarpio?",
        a: "Trial — 1 Watch 3 dienoms. Pasibaigus Watch pristabdomi, kol užsiprenumeruosite. Upgrade — bet kada Mini App.",
      },
      {
        q: "Kodėl EUR už USD automobilius?",
        a: "Prenumerata EUR per Stripe. Maks. Buy Now kainos filtras — USD, kaip Copart ir IAAI.",
      },
      {
        q: "Ar galiu atšaukti?",
        a: "Taip. Atšaukite autopratęsimą programėlėje / Stripe portale. Prieiga iki einamojo periodo pabaigos.",
      },
      {
        q: "Reikia pagalbos?",
        a: "Parašykite support botui Telegram dėl palaikymo, mokėjimų ir individualių planų.",
      },
    ],
    helpLinkPrefix: "Parašykite",
    helpLinkSuffix: "Telegram dėl palaikymo, mokėjimų ir pardavimų.",
  },
  finalCta: {
    eyebrow: "Bandomasis laikotarpis",
    heading: "Pradėkite nemokamai — 1 Watch 3 dienoms",
    body: "Atidarykite botą Telegram. Sukurkite pirmą Watch. Norėdami tęsti stebėjimą — upgrade per Apple Pay, Google Pay arba kortelę.",
  },
  cta: {
    startTrial: "Pradėti bandomąjį laikotarpį",
    contactSales: "Susisiekti su pardavimais",
  },
  footer: {
    blurb:
      "Buy Now pranešimai apie Copart ir IAAI — Telegram. Tik alertai; prieš pirkdami visada patikrinkite skelbimą aukciono svetainėje.",
    openBot: "Atidaryti botą",
    miniApp: "Mini App",
    contactSales: "Susisiekti su pardavimais",
    pricing: "Kainos",
    copyright: "Auction Watch. Nesusijęs su Copart ar IAAI.",
  },
};
