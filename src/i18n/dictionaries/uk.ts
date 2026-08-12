import type { Dictionary } from "./en";

export const uk: Dictionary = {
  meta: {
    title: "Auction Watch — сповіщення Copart і IAAI Buy Now в Telegram",
    description:
      "Створюйте Watch для Copart і IAAI. Отримуйте сповіщення в Telegram, коли з’являється відповідний Buy Now. Безкоштовний пробний період 3 дні.",
  },
  brand: "Auction Watch",
  nav: {
    howItWorks: "Як це працює",
    pricing: "Ціни",
    faq: "FAQ",
    openTelegram: "Відкрити в Telegram",
    language: "Мова",
  },
  hero: {
    ariaLabel: "Auction Watch — головний екран",
    headline: "Сповіщення Buy Now по Copart і IAAI — в Telegram",
    sub: "Створіть Watch: марка, модель, роки та макс. ціна Buy Now. Ми стежимо за Copart і IAAI й пишемо вам, коли з’являється збіг.",
    cta: "Почати пробний період",
    secondaryCta: "Як це працює",
    honesty: "Лише сповіщення — ми не ставимо ставки й не купуємо за вас.",
    imageAlt: "Аукціонний майданчик на заході сонця: мокрий асфальт і натрієві ліхтарі",
  },
  support: {
    eyebrow: "Що ви отримуєте",
    heading: "Досить оновлювати аукціони. Створіть Watch.",
    body: "Auction Watch стежить за Buy Now на Copart і IAAI за потрібними вам авто — і пише в Telegram, коли з’являється збіг.",
    points: [
      {
        title: "Сповіщення в Telegram при збігу",
        body: "Ціна, пошкодження, локація та посилання на лот — без постійного моніторингу сайту.",
      },
      {
        title: "Copart + IAAI в одному місці",
        body: "Один Watch може охоплювати Copart, IAAI або обидва. Фільтри: роки, макс. Buy Now (USD), пошкодження, штат тощо.",
      },
      {
        title: "Вирішуєте й купуєте ви",
        body: "Лише моніторинг і сповіщення. Без автоставок, автопокупки та входу в акаунт аукціону.",
      },
    ],
    imageAlt: "Руки тримають телефон на нічному аукціонному майданчику",
    alertExampleLabel: "Приклад сповіщення",
    alertTitle: "Buy Now found",
    alertVehicle: "2018 Toyota Camry SE",
    alertPrice: "$4,250",
    alertSource: "Copart",
    alertDamage: "Front End",
    alertLocation: "TX",
    alertOpenListing: "Відкрити лот",
  },
  howItWorks: {
    eyebrow: "Як це працює",
    heading: "Watch → сповіщення → відкрити лот",
    steps: [
      {
        title: "Запустіть бота",
        body: "Відкрийте Auction Watch у Telegram. Новим користувачам — безкоштовний пробний період 3 дні та 1 Watch.",
      },
      {
        title: "Створіть Watch",
        body: "У Mini App: джерело, марка/модель, роки та макс. ціна Buy Now (USD). Активуйте.",
      },
      {
        title: "Отримайте сповіщення",
        body: "Перевіряємо періодично (хвилини, не мілісекунди). Збіг Buy Now → коротке повідомлення з посиланням.",
      },
      {
        title: "Перевірте й купіть самі",
        body: "Відкрийте лот на Copart або IAAI. Завжди перевіряйте ціну й деталі перед покупкою.",
      },
    ],
  },
  watches: {
    eyebrow: "Watch",
    heading: "Одне правило марки/моделі. Фільтри включені.",
    body: "Watch займає один слот плану. Додаткові фільтри уточнюють збіги без зайвих слотів.",
    filters: [
      "Джерело (Copart / IAAI / обидва)",
      "Марка / модель",
      "Роки",
      "Макс. Buy Now (USD)",
      "Пошкодження",
      "Штат США",
      "Пробіг",
      "Стан (run)",
      "Тип кузова",
    ],
    note: "Призупинені Watch не сповіщають — і все одно займають слот. Після відновлення старі лоти не надсилаються. Після закінчення trial або плану Watch паузяться до подовження.",
    imageAlt: "Чистий автомобіль на промисловому бетоні аукціонного майданчика",
  },
  pricing: {
    eyebrow: "Ціни",
    heading: "Зрозумілі плани в EUR. Оплата карткою.",
    body: "Stripe у Mini App — Apple Pay, Google Pay або картка. Підписка поновлюється, доки ви не скасуєте.",
    paymentsNote: "Рахунок в EUR · фільтр макс. ціни Buy Now — в USD, як на аукціоні",
    watchesLabel: "Watch",
    durationLabel: "Термін",
    perDayLabel: "≈ на день",
    trialCta: "Почати пробний період",
    planCta: "Відкрити в Telegram",
    disclaimer:
      "Платний план активується після успішної оплати. Скасування автоподовження — будь-коли; доступ до кінця періоду. Зниження тарифу без перерахунку. Після закінчення Watch паузяться. Buy Now змінюється швидко — завжди перевіряйте на Copart або IAAI. Потрібен свій план? Зв’яжіться з продажами.",
    plans: [
      {
        id: "trial",
        name: "Пробний",
        duration: "3 дні",
        price: "Безкоштовно",
        priceNote: "1 Watch · один раз",
        perDay: null,
        badge: null,
      },
      {
        id: "weekly",
        name: "Тиждень",
        duration: "7 днів",
        price: "€45",
        priceNote: "Коротке полювання",
        perDay: "~€6.43",
        badge: null,
      },
      {
        id: "monthly",
        name: "Місяць",
        duration: "30 днів",
        price: "€89",
        priceNote: "Оптимальний баланс",
        perDay: "~€2.97",
        badge: "Найпопулярніший",
      },
      {
        id: "quarterly",
        name: "3 місяці",
        duration: "90 днів",
        price: "€179",
        priceNote: "Найнижча ціна на день",
        perDay: "~€1.99",
        badge: "Вигідніше",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Прямі відповіді",
    items: [
      {
        q: "Як оплатити?",
        a: "Stripe у Mini App — Apple Pay, Google Pay або картка, рахунок в EUR. Спосіб оплати й скасування подовження — через Stripe Customer Portal у застосунку.",
      },
      {
        q: "Це real-time?",
        a: "Ні. Перевіряємо періодично (хвилини), не мілісекунди. Лоти можуть з’явитися й зникнути між перевірками. Завжди перевіряйте на сторінці аукціону.",
      },
      {
        q: "Ви ставите ставки чи купуєте?",
        a: "Ні. Лише сповіщення. Ви самі відкриваєте Copart або IAAI. Без автоставок і автопокупки.",
      },
      {
        q: "Що після пробного періоду?",
        a: "Trial — 1 Watch на 3 дні. Після закінчення Watch паузяться, доки не оформите підписку. Upgrade — будь-коли в Mini App.",
      },
      {
        q: "Чому EUR за авто в USD?",
        a: "Підписка в EUR через Stripe. Фільтр макс. ціни Buy Now — в USD, як на Copart і IAAI.",
      },
      {
        q: "Можна скасувати?",
        a: "Так. Скасуйте автоподовження в застосунку / порталі Stripe. Доступ до кінця поточного періоду.",
      },
      {
        q: "Потрібна допомога?",
        a: "Напишіть support-боту в Telegram щодо підтримки, оплати та індивідуальних планів.",
      },
    ],
    helpLinkPrefix: "Напишіть",
    helpLinkSuffix: "в Telegram для підтримки, оплати та продажів.",
  },
  finalCta: {
    eyebrow: "Пробний період",
    heading: "Почніть безкоштовно — 1 Watch на 3 дні",
    body: "Відкрийте бота в Telegram. Створіть перший Watch. Щоб продовжити моніторинг — upgrade через Apple Pay, Google Pay або картку.",
  },
  cta: {
    startTrial: "Почати пробний період",
    contactSales: "Зв’язатися з продажами",
  },
  footer: {
    blurb:
      "Сповіщення Buy Now по Copart і IAAI — в Telegram. Лише алерти; завжди перевіряйте лот на сайті аукціону.",
    openBot: "Відкрити бота",
    miniApp: "Mini App",
    contactSales: "Зв’язатися з продажами",
    pricing: "Ціни",
    copyright: "Auction Watch. Не афілійований з Copart або IAAI.",
  },
};
