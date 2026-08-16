import type { Dictionary } from "./en";

export const pl: Dictionary = {
  meta: {
    title: "Buy Now Sniper — alerty aukcji Copart i IAAI na Telegramie",
    description:
      "Obserwuj Copart i IAAI: Buy Now oraz zwykłe aukcje. Alert na Telegramie z ceną, uszkodzeniami, lokalizacją i linkiem. Darmowy 5-dniowy okres próbny.",
  },
  brand: "Buy Now Sniper",
  nav: {
    howItWorks: "Jak to działa",
    pricing: "Cennik",
    faq: "FAQ",
    openTelegram: "Otwórz w Telegramie",
    language: "Język",
  },
  hero: {
    ariaLabel: "Buy Now Sniper — sekcja główna",
    headline: "Alerty Copart i IAAI: Buy Now i żywe aukcje",
    sub: "Utwórz Watch na auta, których szukasz. Monitorujemy Buy Now i zwykłe loty — i piszemy na Telegramie, gdy pojawi się dopasowanie.",
    cta: "Rozpocznij okres próbny",
    secondaryCta: "Zobacz, jak to działa",
    honesty: "Tylko alerty — nie licytujemy i nie kupujemy za Ciebie.",
    imageAlt: "Plac aukcyjny o zmierzchu: mokry asfalt i sodowe lampy",
  },
  support: {
    eyebrow: "Co dostajesz",
    heading: "Przestań odświeżać aukcje. Zacznij Watch.",
    body: "Buy Now Sniper śledzi Copart i IAAI — zarówno Buy Now, jak i zwykłe aukcje — i pinguje Cię na Telegramie, żebyś zdążył zareagować.",
    points: [
      {
        title: "Buy Now i żywe aukcje — po równo",
        body: "Jeden produkt na stałe ceny Buy Now i zwykłe loty aukcyjne. Ten sam Watch, te same alerty na Telegramie.",
      },
      {
        title: "Alert na Telegramie przy dopasowaniu",
        body: "Cena, uszkodzenia, lokalizacja, typ sprzedaży i link do oferty — bez ciągłego siedzenia na stronie.",
      },
      {
        title: "Ty decydujesz. Ty działasz na aukcji.",
        body: "Tylko monitoring i alerty. Bez auto-bid, auto-buy i logowania do konta aukcyjnego.",
      },
    ],
    imageAlt: "Dłonie trzymające telefon na nocnym placu aukcyjnym",
    alertExampleLabel: "Przykładowy alert",
    alertTitle: "Match found · Auction",
    alertVehicle: "2018 Toyota Camry SE",
    alertPrice: "$4,250",
    alertSource: "Copart",
    alertDamage: "Front End",
    alertLocation: "TX",
    alertOpenListing: "Otwórz ofertę",
  },
  howItWorks: {
    eyebrow: "Jak to działa",
    heading: "Watch → alert → otwórz ofertę",
    steps: [
      {
        title: "Uruchom bota",
        body: "Otwórz Buy Now Sniper na Telegramie. Nowi użytkownicy dostają darmowy 5-dniowy trial z 1 Watch.",
      },
      {
        title: "Utwórz Watch",
        body: "W Mini App: źródło, marka/model, lata, maks. cena (USD) oraz typ sprzedaży — Buy Now, aukcja lub oba. Aktywuj.",
      },
      {
        title: "Otrzymaj alert",
        body: "Sprawdzamy okresowo (minuty, nie milisekundy). Dopasowanie Buy Now lub lotu aukcyjnego → krótka wiadomość z linkiem.",
      },
      {
        title: "Zweryfikuj i działaj sam",
        body: "Otwórz ofertę na Copart lub IAAI. Zawsze sprawdź cenę i szczegóły przed licytacją lub zakupem.",
      },
    ],
  },
  watches: {
    eyebrow: "Watch",
    heading: "Jedna reguła marki/modelu. Filtry w cenie.",
    body: "Watch zajmuje jeden slot planu. Opcjonalne filtry — w tym typ sprzedaży — zawężają dopasowania bez dodatkowych slotów.",
    filters: [
      "Źródło (Copart / IAAI / oba)",
      "Typ sprzedaży (Buy Now / aukcja / oba)",
      "Marka / model",
      "Zakres lat",
      "Maks. cena (USD)",
      "Uszkodzenia",
      "Stan USA",
      "Przebieg",
      "Stan (run)",
      "Typ nadwozia",
    ],
    note: "Wstrzymane Watch nie alertują — i nadal zajmują slot. Po wznowieniu nie ma backfillu starych ofert. Po końcu trialu lub planu Watch pauzują do odnowienia.",
    imageAlt: "Czysty samochód na przemysłowym betonie placu aukcyjnego",
  },
  pricing: {
    eyebrow: "Cennik",
    heading: "Jasne plany w EUR. Płać kartą.",
    body: "Stripe w Mini App — Apple Pay, Google Pay lub karta. Subskrypcja odnawia się, dopóki nie anulujesz.",
    paymentsNote: "Rozliczenie w EUR · filtr maks. ceny w USD jak na aukcji",
    watchesLabel: "Watch",
    durationLabel: "Okres",
    perDayLabel: "≈ na dzień",
    trialCta: "Rozpocznij okres próbny",
    planCta: "Otwórz w Telegramie",
    disclaimer:
      "Płatny plan aktywuje się po udanej płatności. Anuluj auto-odnawianie w dowolnym momencie — dostęp do końca okresu. Obniżka planu bez proporcjonalnego zwrotu. Po wygaśnięciu Watch pauzują. Inventory zmienia się szybko — zawsze weryfikuj na Copart lub IAAI. Potrzebujesz planu niestandardowego? Skontaktuj się ze sprzedażą.",
    plans: [
      {
        id: "trial",
        name: "Okres próbny",
        duration: "5 dni",
        price: "Za darmo",
        priceNote: "1 Watch · raz na użytkownika",
        perDay: null,
        badge: null,
      },
      {
        id: "weekly",
        name: "Tydzień",
        duration: "7 dni",
        price: "€45",
        priceNote: "Krótki hunt",
        perDay: "~€6.43",
        badge: null,
      },
      {
        id: "monthly",
        name: "Miesiąc",
        duration: "30 dni",
        price: "€89",
        priceNote: "Najlepszy codzienny balans",
        perDay: "~€2.97",
        badge: "Najpopularniejszy",
      },
      {
        id: "quarterly",
        name: "3 miesiące",
        duration: "90 dni",
        price: "€179",
        priceNote: "Najniższy koszt dzienny",
        perDay: "~€1.99",
        badge: "Najlepsza wartość",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Proste odpowiedzi",
    items: [
      {
        q: "Śledzicie Buy Now czy żywe aukcje?",
        a: "Oba. Watch może łapać Buy Now i zwykłe loty aukcyjne na Copart i IAAI — wybierz Buy Now, aukcje lub oba.",
      },
      {
        q: "Jak płacić?",
        a: "Stripe w Mini App — Apple Pay, Google Pay lub karta, rozliczenie w EUR. Metodę płatności i anulowanie odnawiania — przez Stripe Customer Portal w aplikacji.",
      },
      {
        q: "Czy to czas rzeczywisty?",
        a: "Nie. Sprawdzamy okresowo (minuty), nie milisekundy. Oferty mogą pojawić się i zniknąć między sprawdzeniami. Zawsze weryfikuj na stronie aukcji.",
      },
      {
        q: "Czy licytujecie lub kupujecie za mnie?",
        a: "Nie. Tylko alerty. Sam otwierasz Copart lub IAAI. Bez auto-bid i auto-buy.",
      },
      {
        q: "Co po darmowym okresie próbnym?",
        a: "Trial to 1 Watch na 5 dni. Po końcu Watch pauzują, aż wykupisz subskrypcję. Upgrade w Mini App w dowolnym momencie.",
      },
      {
        q: "Dlaczego EUR przy autach w USD?",
        a: "Subskrypcja w EUR przez Stripe. Filtr maks. ceny pozostaje w USD jak na Copart i IAAI.",
      },
      {
        q: "Czy mogę anulować?",
        a: "Tak. Anuluj auto-odnawianie w aplikacji / portalu Stripe. Dostęp do końca bieżącego okresu.",
      },
      {
        q: "Potrzebujesz pomocy?",
        a: "Napisz do bota support na Telegramie w sprawie pomocy, płatności i planów niestandardowych.",
      },
    ],
    helpLinkPrefix: "Napisz do",
    helpLinkSuffix: "na Telegramie w sprawie wsparcia, płatności i sprzedaży.",
  },
  finalCta: {
    eyebrow: "Okres próbny",
    heading: "Zacznij za darmo — 1 Watch na 5 dni",
    body: "Otwórz bota na Telegramie. Utwórz Watch na Buy Now, żywe aukcje lub oba. Aby dalej monitorować — upgrade przez Apple Pay, Google Pay lub kartę.",
  },
  cta: {
    startTrial: "Rozpocznij okres próbny",
    contactSales: "Kontakt ze sprzedażą",
  },
  footer: {
    blurb:
      "Alerty na Telegramie z Copart i IAAI — Buy Now i żywe aukcje. Tylko alerty; zawsze weryfikuj oferty przed licytacją lub zakupem.",
    openBot: "Otwórz bota",
    miniApp: "Mini App",
    contactSales: "Kontakt ze sprzedażą",
    pricing: "Cennik",
    copyright: "Buy Now Sniper. Niepowiązany z Copart ani IAAI.",
  },
};
