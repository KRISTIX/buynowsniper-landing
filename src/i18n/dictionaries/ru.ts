import type { Dictionary } from "./en";

export const ru: Dictionary = {
  meta: {
    title: "Auction Watch — оповещения Copart и IAAI Buy Now в Telegram",
    description:
      "Создавайте Watch для Copart и IAAI. Получайте оповещение в Telegram, когда появляется подходящий Buy Now. Бесплатный пробный период 3 дня.",
  },
  brand: "Auction Watch",
  nav: {
    howItWorks: "Как это работает",
    pricing: "Цены",
    faq: "FAQ",
    openTelegram: "Открыть в Telegram",
    language: "Язык",
  },
  hero: {
    ariaLabel: "Auction Watch — главный экран",
    headline: "Оповещения Buy Now по Copart и IAAI — в Telegram",
    sub: "Создайте Watch: марка, модель, годы и макс. цена Buy Now. Мы следим за Copart и IAAI и пишем вам, когда появляется совпадение.",
    cta: "Начать пробный период",
    secondaryCta: "Как это работает",
    honesty: "Только оповещения — мы не делаем ставки и не покупаем за вас.",
    imageAlt: "Аукционная площадка на закате: мокрый асфальт и натриевые фонари",
  },
  support: {
    eyebrow: "Что вы получаете",
    heading: "Хватит обновлять аукционы. Создайте Watch.",
    body: "Auction Watch следит за Buy Now на Copart и IAAI по нужным вам авто — и пишет в Telegram, когда появляется совпадение.",
    points: [
      {
        title: "Оповещение в Telegram при совпадении",
        body: "Цена, повреждения, локация и ссылка на лот — без постоянного мониторинга сайта.",
      },
      {
        title: "Copart + IAAI в одном месте",
        body: "Один Watch может охватывать Copart, IAAI или оба. Фильтры: годы, макс. Buy Now (USD), повреждения, штат и другое.",
      },
      {
        title: "Решаете и покупаете вы",
        body: "Только мониторинг и оповещения. Без автоставок, автопокупки и входа в аккаунт аукциона.",
      },
    ],
    imageAlt: "Руки держат телефон на ночной аукционной площадке",
    alertExampleLabel: "Пример оповещения",
    alertTitle: "Buy Now found",
    alertVehicle: "2018 Toyota Camry SE",
    alertPrice: "$4,250",
    alertSource: "Copart",
    alertDamage: "Front End",
    alertLocation: "TX",
    alertOpenListing: "Открыть лот",
  },
  howItWorks: {
    eyebrow: "Как это работает",
    heading: "Watch → оповещение → открыть лот",
    steps: [
      {
        title: "Запустите бота",
        body: "Откройте Auction Watch в Telegram. Новым пользователям — бесплатный пробный период 3 дня и 1 Watch.",
      },
      {
        title: "Создайте Watch",
        body: "В Mini App: источник, марка/модель, годы и макс. цена Buy Now (USD). Активируйте.",
      },
      {
        title: "Получите оповещение",
        body: "Проверяем периодически (минуты, не миллисекунды). Совпадение Buy Now → короткое сообщение со ссылкой.",
      },
      {
        title: "Проверьте и купите сами",
        body: "Откройте лот на Copart или IAAI. Всегда проверяйте цену и детали перед покупкой.",
      },
    ],
  },
  watches: {
    eyebrow: "Watch",
    heading: "Одно правило марки/модели. Фильтры включены.",
    body: "Watch занимает один слот плана. Доп. фильтры уточняют совпадения без дополнительных слотов.",
    filters: [
      "Источник (Copart / IAAI / оба)",
      "Марка / модель",
      "Годы",
      "Макс. Buy Now (USD)",
      "Повреждения",
      "Штат США",
      "Пробег",
      "Состояние (run)",
      "Тип кузова",
    ],
    note: "Приостановленные Watch не оповещают — и всё равно занимают слот. После возобновления старые лоты не присылаются. По окончании trial или плана Watch паузятся до продления.",
    imageAlt: "Чистый автомобиль на промышленном бетоне аукционной площадки",
  },
  pricing: {
    eyebrow: "Цены",
    heading: "Понятные планы в EUR. Оплата картой.",
    body: "Stripe в Mini App — Apple Pay, Google Pay или карта. Подписка продлевается, пока вы не отмените.",
    paymentsNote: "Счёт в EUR · фильтр макс. цены Buy Now — в USD, как на аукционе",
    watchesLabel: "Watch",
    durationLabel: "Срок",
    perDayLabel: "≈ в день",
    trialCta: "Начать пробный период",
    planCta: "Открыть в Telegram",
    disclaimer:
      "Платный план активируется после успешной оплаты. Отмена автопродления — в любой момент; доступ до конца периода. Понижение тарифа без пересчёта. По окончании Watch паузятся. Buy Now меняется быстро — всегда проверяйте на Copart или IAAI. Нужен свой план? Свяжитесь с продажами.",
    plans: [
      {
        id: "trial",
        name: "Пробный",
        duration: "3 дня",
        price: "Бесплатно",
        priceNote: "1 Watch · один раз",
        perDay: null,
        badge: null,
      },
      {
        id: "weekly",
        name: "Неделя",
        duration: "7 дней",
        price: "€45",
        priceNote: "Короткая охота",
        perDay: "~€6.43",
        badge: null,
      },
      {
        id: "monthly",
        name: "Месяц",
        duration: "30 дней",
        price: "€89",
        priceNote: "Оптимальный баланс",
        perDay: "~€2.97",
        badge: "Самый популярный",
      },
      {
        id: "quarterly",
        name: "3 месяца",
        duration: "90 дней",
        price: "€179",
        priceNote: "Минимальная цена в день",
        perDay: "~€1.99",
        badge: "Выгоднее",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Прямые ответы",
    items: [
      {
        q: "Как оплатить?",
        a: "Stripe в Mini App — Apple Pay, Google Pay или карта, счёт в EUR. Способ оплаты и отмену продления — через Stripe Customer Portal в приложении.",
      },
      {
        q: "Это real-time?",
        a: "Нет. Проверяем периодически (минуты), не миллисекунды. Лоты могут появиться и уйти между проверками. Всегда проверяйте на странице аукциона.",
      },
      {
        q: "Вы делаете ставки или покупаете?",
        a: "Нет. Только оповещения. Вы сами открываете Copart или IAAI. Без автоставок и автопокупки.",
      },
      {
        q: "Что после пробного периода?",
        a: "Trial — 1 Watch на 3 дня. После окончания Watch паузятся, пока не оформите подписку. Upgrade — в любой момент в Mini App.",
      },
      {
        q: "Почему EUR за авто в USD?",
        a: "Подписка в EUR через Stripe. Фильтр макс. цены Buy Now — в USD, как на Copart и IAAI.",
      },
      {
        q: "Можно отменить?",
        a: "Да. Отмените автопродление в приложении / портале Stripe. Доступ до конца текущего периода.",
      },
      {
        q: "Нужна помощь?",
        a: "Напишите support-боту в Telegram по поддержке, оплате и индивидуальным планам.",
      },
    ],
    helpLinkPrefix: "Напишите",
    helpLinkSuffix: "в Telegram для поддержки, оплаты и продаж.",
  },
  finalCta: {
    eyebrow: "Пробный период",
    heading: "Начните бесплатно — 1 Watch на 3 дня",
    body: "Откройте бота в Telegram. Создайте первый Watch. Чтобы продолжить мониторинг — upgrade через Apple Pay, Google Pay или карту.",
  },
  cta: {
    startTrial: "Начать пробный период",
    contactSales: "Связаться с продажами",
  },
  footer: {
    blurb:
      "Оповещения Buy Now по Copart и IAAI — в Telegram. Только алерты; всегда проверяйте лот на сайте аукциона.",
    openBot: "Открыть бота",
    miniApp: "Mini App",
    contactSales: "Связаться с продажами",
    pricing: "Цены",
    copyright: "Auction Watch. Не аффилирован с Copart или IAAI.",
  },
};
