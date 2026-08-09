import type { Dictionary } from "./en";

export const pl: Dictionary = {
  meta: {
    title: "Auction Watch — alerty Copart i IAAI Buy Now na Telegramie",
    description:
      "Alerty na Telegramie, gdy na Copart i IAAI pojawią się Buy Now pasujące do Twoich Watch. Darmowy 7-dniowy okres próbny.",
  },
  brand: "Auction Watch",
  nav: {
    howItWorks: "Jak to działa",
    pricing: "Cennik",
    faq: "FAQ",
    openTelegram: "Otwórz w Telegramie",
    language: "Język",
  },
  hero: {
    ariaLabel: "Auction Watch — sekcja główna",
    headline: "Alerty na Telegramie, gdy pojawią się dopasowania Buy Now na Copart i IAAI",
    sub: "Utwórz Watch. Otrzymuj cenę, uszkodzenia, lokalizację i link do oferty — sprawdzane co około 15 minut.",
    cta: "Rozpocznij darmowy 7-dniowy okres próbny",
    secondaryCta: "Zobacz, jak to działa",
    imageAlt: "Plac aukcyjny o zmierzchu: mokry asfalt i sodowe lampy",
  },
  support: {
    eyebrow: "Co dostajesz",
    heading: "Przestań odświeżać place. Zacznij dostawać dopasowania.",
    body: "Auction Watch monitoruje inventory Buy Now na Copart i IAAI według Twoich reguł i wysyła dopasowania na Telegram.",
    points: [
      {
        title: "Alerty Buy Now na Telegramie",
        body: "Gdy pojawi się pasująca oferta Buy Now na Copart lub IAAI, dostajesz wiadomość z kluczowymi szczegółami.",
      },
      {
        title: "Watch pod Twoją kontrolą",
        body: "Ustaw markę i model, potem rok, maks. cenę, uszkodzenia, stan, przebieg i więcej — filtry nie zajmują dodatkowych slotów.",
      },
      {
        title: "Kupujesz na stronie aukcji",
        body: "Auction Watch powiadamia. Ty otwierasz ofertę na Copart lub IAAI i decydujesz. Bez auto-bid.",
      },
    ],
    imageAlt: "Dłonie trzymające telefon na nocnym placu aukcyjnym",
    alertOpenListing: "Otwórz ofertę na Copart",
  },
  howItWorks: {
    eyebrow: "Jak to działa",
    heading: "Od bota do Buy Now w pięciu krokach",
    steps: [
      {
        title: "Uruchom bota",
        body: "Otwórz Auction Watch na Telegramie. Darmowy 7-dniowy okres próbny zaczyna się automatycznie.",
      },
      {
        title: "Utwórz Watch",
        body: "Wybierz markę i model w Mini App. Dodaj filtry, jeśli chcesz ciaśniejsze dopasowania.",
      },
      {
        title: "Sprawdzamy place",
        body: "System skanuje inventory Buy Now na Copart i IAAI co około 15 minut.",
      },
      {
        title: "Otrzymaj alert na Telegramie",
        body: "Dopasowanie zawiera cenę, uszkodzenia, lokalizację i link do oferty.",
      },
      {
        title: "Kup na Copart lub IAAI",
        body: "Sam otwierasz stronę aukcji i finalizujesz zakup tam.",
      },
    ],
  },
  watches: {
    eyebrow: "Watch",
    heading: "Jedna reguła marki/modelu. Filtry w cenie.",
    body: "Watch to jedna marka i model do śledzenia. Opcjonalne filtry zawężają dopasowania bez zajmowania dodatkowych slotów.",
    filters: [
      "Rok",
      "Maks. cena",
      "Uszkodzenia",
      "Stan",
      "Przebieg",
      "Stan (run)",
      "Typ nadwozia",
    ],
    note: "Wstrzymane Watch nie wysyłają alertów — i nadal zajmują slot, dopóki ich nie usuniesz lub nie odnowisz po wygaśnięciu.",
    imageAlt: "Czysty samochód na przemysłowym betonie placu aukcyjnego",
  },
  pricing: {
    eyebrow: "Cennik",
    heading: "Tylko Telegram Stars",
    body: "Płać Stars w aplikacji. Płatne plany aktywują się od razu. Niewykorzystany czas nie jest rozliczany proporcjonalnie.",
    watchesLabel: "Watch",
    durationLabel: "Czas trwania",
    trialCta: "Rozpocznij okres próbny",
    planCta: "Otwórz w Telegramie",
    disclaimer:
      "Po wygaśnięciu Watch są wstrzymywane do odnowienia. Dostępność Buy Now zmienia się szybko — zawsze weryfikuj cenę i szczegóły na Copart lub IAAI przed zakupem. Potrzebujesz więcej Watch lub planu niestandardowego? Skontaktuj się ze sprzedażą.",
    plans: [
      {
        id: "trial",
        name: "Okres próbny",
        duration: "7 dni",
        price: "Za darmo",
        priceNote: "Raz na użytkownika",
        badge: null,
      },
      {
        id: "weekly",
        name: "Tydzień",
        duration: "7 dni",
        price: "2,500 ⭐",
        priceNote: "Telegram Stars",
        badge: null,
      },
      {
        id: "monthly",
        name: "Miesiąc",
        duration: "30 dni",
        price: "5,000 ⭐",
        priceNote: "Telegram Stars",
        badge: "Popularny",
      },
      {
        id: "quarterly",
        name: "3 miesiące",
        duration: "90 dni",
        price: "10,000 ⭐",
        priceNote: "Telegram Stars",
        badge: "Najlepsza wartość",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Proste odpowiedzi",
    items: [
      {
        q: "Jak płacić?",
        a: "Tylko Telegram Stars — bez płatności kartą w aplikacji. Kup Stars w Telegramie, potem wybierz plan w Auction Watch.",
      },
      {
        q: "Jak często sprawdzacie inventory?",
        a: "Co około 15 minut. To nie jest czas rzeczywisty ani natychmiastowe. Oferty mogą pojawić się i zniknąć między sprawdzeniami.",
      },
      {
        q: "Czy Auction Watch licytuje lub kupuje za mnie?",
        a: "Nie. Dostajesz alert ze szczegółami i linkiem. Kupujesz sam na Copart lub IAAI. Bez auto-bid i auto-buy.",
      },
      {
        q: "Co się dzieje po wygaśnięciu planu?",
        a: "Watch są wstrzymywane i przestają alertować do odnowienia. Wstrzymane Watch nadal zajmują sloty.",
      },
      {
        q: "Czy mogę ufać szczegółom w alercie?",
        a: "Traktuj alert jako sygnał. Zawsze weryfikuj cenę, uszkodzenia, lokalizację i dostępność na stronie aukcji — inventory zmienia się szybko.",
      },
      {
        q: "Potrzebujesz pomocy lub ceny niestandardowej?",
        a: "Napisz do naszego bota support na Telegramie w sprawie pomocy, planów niestandardowych i sprzedaży.",
      },
    ],
    helpLinkPrefix: "Napisz do",
    helpLinkSuffix: "na Telegramie w sprawie wsparcia, cen niestandardowych i sprzedaży.",
  },
  finalCta: {
    eyebrow: "Okres próbny",
    heading: "Zacznij śledzić Buy Now już dziś",
    body: "Otwórz bota na Telegramie. Darmowy 7-dniowy okres próbny zaczyna się automatycznie — jeden Watch, bez Stars na start.",
  },
  cta: {
    startTrial: "Rozpocznij darmowy 7-dniowy okres próbny",
    contactSales: "Kontakt ze sprzedażą",
  },
  footer: {
    blurb:
      "Alerty na Telegramie o dopasowaniach Buy Now na Copart i IAAI. Zawsze weryfikuj oferty na stronie aukcji przed zakupem.",
    openBot: "Otwórz bota",
    miniApp: "Mini App",
    contactSales: "Kontakt ze sprzedażą",
    pricing: "Cennik",
    copyright: "Auction Watch. Niepowiązany z Copart ani IAAI.",
  },
};
