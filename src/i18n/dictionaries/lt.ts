import type { Dictionary } from "./en";

export const lt: Dictionary = {
  meta: {
    title: "Buy Now Sniper — Copart ir IAAI aukcionų pranešimai Telegram",
    description:
      "Stebėkite Copart ir IAAI: Buy Now ir įprastus aukcionus. Telegram pranešimas su kaina, žala, vieta ir nuoroda. Nemokamas 5 dienų bandomasis laikotarpis.",
  },
  brand: "Buy Now Sniper",
  nav: {
    howItWorks: "Kaip veikia",
    pricing: "Kainos",
    faq: "DUK",
    openTelegram: "Atidaryti Telegram",
    language: "Kalba",
  },
  hero: {
    ariaLabel: "Buy Now Sniper pagrindinis blokas",
    headline: "Copart ir IAAI pranešimai: Buy Now ir gyvi aukcionai",
    sub: "Sukurkite Watch norimiems automobiliams. Stebime Buy Now ir įprastus lotus — ir parašome Telegram, kai atsiranda atitikmuo.",
    cta: "Pradėti bandomąjį laikotarpį",
    secondaryCta: "Kaip tai veikia",
    honesty: "Tik pranešimai — nestatome ir neperkame už jus.",
    imageAlt: "Aukciono aikštelė saulėlydyje: šlapias asfaltas ir natrio žibintai",
  },
  support: {
    eyebrow: "Ką gaunate",
    heading: "Nustokite atnaujinti aukcionus. Pradėkite Watch.",
    body: "Buy Now Sniper stebi Copart ir IAAI — ir Buy Now, ir įprastus aukcionus — tada parašo Telegram, kad spėtumėte sureaguoti.",
    points: [
      {
        title: "Buy Now ir gyvi aukcionai — po lygiai",
        body: "Vienas produktas fiksuotoms Buy Now kainoms ir įprastiems aukciono lotams. Tas pats Watch, tie patys Telegram pranešimai.",
      },
      {
        title: "Telegram pranešimas radus atitikmenį",
        body: "Kaina, žala, vieta, pardavimo tipas ir nuoroda į skelbimą — be nuolatinio svetainės stebėjimo.",
      },
      {
        title: "Sprendžiate ir veikiate jūs",
        body: "Tik stebėjimas ir pranešimai. Be automatinio statymo, pirkimo ir aukciono paskyros prisijungimo.",
      },
    ],
    imageAlt: "Rankos laiko telefoną naktinėje aukciono aikštelėje",
    alertExampleLabel: "Pranešimo pavyzdys",
    alertTitle: "Match found · Auction",
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
        body: "Atidarykite Buy Now Sniper Telegram. Naujiems vartotojams — nemokamas 5 dienų bandymas ir 1 Watch.",
      },
      {
        title: "Sukurkite Watch",
        body: "Mini App: šaltinis, markė/modelis, metai, maks. kaina (USD) ir pardavimo tipas — Buy Now, aukcionas ar abu. Aktyvuokite.",
      },
      {
        title: "Gaukite Telegram pranešimą",
        body: "Tikriname periodiškai (minutės, ne milisekundės). Buy Now ar aukciono loto atitikmuo → trumpas pranešimas su nuoroda.",
      },
      {
        title: "Patikrinkite ir veikite patys",
        body: "Atidarykite skelbimą Copart ar IAAI. Prieš statydami ar pirkdami visada patikrinkite kainą ir detales.",
      },
    ],
  },
  watches: {
    eyebrow: "Watch",
    heading: "Viena markės/modelio taisyklė. Filtrai įskaičiuoti.",
    body: "Watch užima vieną plano vietą. Papildomi filtrai — įskaitant pardavimo tipą — patikslina atitikmenis be papildomų vietų.",
    filters: [
      "Šaltinis (Copart / IAAI / abu)",
      "Pardavimo tipas (Buy Now / aukcionas / abu)",
      "Markė / modelis",
      "Metai",
      "Maks. kaina (USD)",
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
    paymentsNote: "Sąskaita EUR · maks. kainos filtras — USD, kaip aukcione",
    watchesLabel: "Watch",
    durationLabel: "Trukmė",
    perDayLabel: "≈ per dieną",
    trialCta: "Pradėti bandymą",
    planCta: "Atidaryti Telegram",
    disclaimer:
      "Mokamas planas aktyvuojamas po sėkmingo mokėjimo. Autopratęsimą galite atšaukti bet kada — prieiga iki periodo pabaigos. Planų sumažinimas neperskaičiuojamas. Pasibaigus Watch pristabdomi. Inventorius keičiasi greitai — visada patikrinkite Copart ar IAAI. Reikia individualaus plano? Susisiekite su pardavimais.",
    plans: [
      {
        id: "trial",
        name: "Bandomasis",
        duration: "5 dienos",
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
        q: "Stebite Buy Now ar gyvus aukcionus?",
        a: "Abu. Watch gali gaudyti Buy Now ir įprastus aukciono lotus Copart bei IAAI — pasirinkite Buy Now, aukcionus arba abu.",
      },
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
        a: "Trial — 1 Watch 5 dienoms. Pasibaigus Watch pristabdomi, kol užsiprenumeruosite. Upgrade — bet kada Mini App.",
      },
      {
        q: "Kodėl EUR už USD automobilius?",
        a: "Prenumerata EUR per Stripe. Maks. kainos filtras — USD, kaip Copart ir IAAI.",
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
    heading: "Pradėkite nemokamai — 1 Watch 5 dienoms",
    body: "Atidarykite botą Telegram. Sukurkite Watch Buy Now, gyviems aukcionams ar abiem. Norėdami tęsti — upgrade per Apple Pay, Google Pay arba kortelę.",
  },
  cta: {
    startTrial: "Pradėti bandomąjį laikotarpį",
    contactSales: "Susisiekti su pardavimais",
  },
  footer: {
    blurb:
      "Telegram pranešimai apie Copart ir IAAI — Buy Now ir gyvi aukcionai. Tik alertai; prieš statydami ar pirkdami visada patikrinkite skelbimą.",
    openBot: "Atidaryti botą",
    miniApp: "Mini App",
    contactSales: "Susisiekti su pardavimais",
    pricing: "Kainos",
    copyright: "Buy Now Sniper. Nesusijęs su Copart ar IAAI.",
  },
};
