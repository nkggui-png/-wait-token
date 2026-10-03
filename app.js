(() => {
  const config = window.TOKEN_CONFIG;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const english = {
    "$WAIT — Всё ещё ждём альтсезон": "$WAIT — Still Waiting for Altseason",
    "$WAIT — главная": "$WAIT — Home",
    "$WAIT — мемкоин и история о терпении, сообществе и продуктах, которые строятся, пока ждёшь альтсезон.": "$WAIT is a meme coin and a story about patience, community, and products built while waiting for altseason.",
    "$WAIT — мемкоин и идея сообщества для тех, кто всё ещё ждёт альтсезон. Проект находится на этапе запуска и не обещает доход или рост цены.": "$WAIT is a meme coin and community idea for those still waiting for altseason. The project is preparing to launch and does not promise income or price growth.",
    "$WAIT — это идея для тех, кто пережил медвежий рынок, видел, как рушатся быстрые обещания, и всё равно продолжает ждать. WAIT — философия терпения и движения вперёд вместе.": "$WAIT is for people who lived through a bear market, watched quick promises collapse, and kept waiting. WAIT is about patience and moving forward together.",
    "$WAIT App ещё не выпущено. Разработка запланирована в roadmap; ориентир для продуктов — 2028 год.": "$WAIT App has not launched yet. Development is on the roadmap, with products targeted for 2028.",
    "$WAIT App объединит функции, которые трейдеры используют каждый день. Сейчас это план и интерфейсный концепт.": "$WAIT App will bring together tools traders use every day. For now, it is a plan and interface concept.",
    "$WAIT. Распределение отражает план проекта и может быть обновлено до запуска.": "$WAIT. The allocation reflects the project plan and may change before launch.",
    "$WAIT · СОЗДАЁТСЯ СЕЙЧАС": "$WAIT · IN THE MAKING",
    "01 / НАЧАЛО": "01 / THE BEGINNING",
    "01 / ОБМЕН": "01 / SHARE",
    "02 / ДИАЛОГ": "02 / DISCUSS",
    "02 / ИСТОРИЯ": "02 / STORY",
    "03 / ВМЕСТЕ": "03 / TOGETHER",
    "03 / ПЛАНЫ $WAIT": "03 / $WAIT GOALS",
    "04 / УЧАСТВУЙ В ЗАПУСКЕ": "04 / JOIN THE LAUNCH",
    "05 / ПРОЗРАЧНОЕ РАСПРЕДЕЛЕНИЕ": "05 / TRANSPARENT ALLOCATION",
    "06 / ОТ ИДЕИ К ПРОДУКТАМ": "06 / FROM IDEA TO PRODUCTS",
    "07 / ПРОДУКТ В РАЗРАБОТКЕ": "07 / PRODUCT IN DEVELOPMENT",
    "08 / ЛЮДИ. ИДЕИ. ПОДДЕРЖКА.": "08 / PEOPLE. IDEAS. SUPPORT.",
    "09 / ОТВЕТЫ НА ГЛАВНЫЕ ВОПРОСЫ": "09 / FREQUENTLY ASKED QUESTIONS",
    "Адрес контракта опубликуем здесь": "The contract address will be published here",
    "АКТИВНОСТИ": "ACTIVITIES",
    "Аналитика рынка": "Market analytics",
    "Аналитические инструменты": "Analytics tools",
    "Баланс появится после подключения": "Balance will appear after connection",
    "Большая мечта": "A big dream",
    "Большая мечта, которая напоминает, зачем нужны цели.": "A big dream that reminds us why goals matter.",
    "будет объявлен": "to be announced",
    "Будет объявлена": "To be announced",
    "Будет опубликован": "To be published",
    "БУДУЩЕЕ": "THE FUTURE",
    "В концепт входят кошелёк, новости, цены и графики, AI-инструменты, инсайды сообщества, избранные монеты, уведомления и портфель.": "The concept includes a wallet, news, prices and charts, AI tools, community insights, a watchlist, notifications, and a portfolio.",
    "В ПЛАНАХ": "PLANNED",
    "В РАЗРАБОТКЕ": "IN DEVELOPMENT",
    "ВПЕРЕДИ": "COMING UP",
    "Все значения сообщества оставлены пустыми до появления подтверждённых данных.": "Community figures remain blank until verified data is available.",
    "Всё началось с простой мысли: почему большинство мемкоинов обещают, что всё произойдёт завтра? $WAIT появился из противоположной идеи — не изображать пройденный путь, а начать его вместе.": "It began with a simple question: why do most meme coins promise that everything will happen tomorrow? $WAIT grew from the opposite idea: start the journey together instead of pretending it is already complete.",
    "Все экраны — демонстрационный макет, не подключённый к кошельку или рыночным данным.": "These screens are a demo concept and are not connected to a wallet or market data.",
    "Всё, что нужно крипто-трейдеру, в одном приложении. Это будущий продукт: показанные экраны — концепт, приложение ещё не выпущено.": "Everything a crypto trader needs in one app. This is a future product: the screens are a concept, and the app has not launched.",
    "Вы получите": "You will receive",
    "Главная": "Home",
    "Главная навигация": "Main navigation",
    "Герой $WAIT и корги ждут альтсезон в трейдинговой комнате на фоне ночного города": "The WAIT character and a corgi wait for altseason in a trading room at night",
    "Главная ценность проекта — люди, которые верят.": "The project's greatest value is the people who believe in it.",
    "ГЛОБАЛЬНО": "GLOBAL",
    "Данные появятся до старта": "Data will be available before launch",
    "Данные появятся после объявления параметров запуска.": "Data will be available once launch details are announced.",
    "История": "Story",
    "Цели": "Goals",
    "Пресейл": "Presale",
    "Токеномика": "Tokenomics",
    "Приложение": "App",
    "Цели проекта": "Project goals",
    "Состояние токена": "Token status",
    "Дата будет объявлена": "Date to be announced",
    "Дата листинга пока не объявлена. Первые листинги — одна из целей roadmap, но срок не гарантируется.": "The listing date has not been announced. Initial listings are a roadmap goal, but no timeline is guaranteed.",
    "ДЕМО": "DEMO",
    "ДЕРЖИ КУРС.": "STAY THE COURSE.",
    "ДНЕЙ": "DAYS",
    "ДО ОКОНЧАНИЯ ЭТАПА": "TIME LEFT IN THIS STAGE",
    "До подключения реального контракта покупка отключена.": "Purchases are disabled until a live contract is connected.",
    "ДОЛГОСРОЧНОСТЬ": "LONG-TERM VISION",
    "Дорожная карта может меняться по мере развития проекта.": "The roadmap may change as the project develops.",
    "Думаем вместе.": "Think together.",
    "Думать о будущем": "Think about the future",
    "Есть ли налоги?": "Are there taxes?",
    "ЖДЁМ СЛЕДУЮЩИЙ ЦИКЛ": "WAITING FOR THE NEXT CYCLE",
    "ЖДИ СВОЁ.": "WAIT FOR YOUR MOMENT.",
    "За что можно купить токены?": "What can I use to buy tokens?",
    "ЗАПУСК": "LAUNCH",
    "Запуск в конце 2026 года, развитие сообщества и продукта в 2027, приложение и инструменты в 2028, дальнейшее расширение с 2029 года.": "Launch is planned for late 2026, community and product growth in 2027, an app and tools in 2028, and further expansion from 2029.",
    "Запуск приложения": "Launch the app",
    "Запуск социальных каналов": "Launch social channels",
    "И ГОЛОСОВАНИЯ": "& VOTING",
    "ИДЕИ": "IDEAS",
    "Идеи в работу": "Put ideas into action",
    "ИДЕЯ": "IDEA",
    "ИЗБРАННЫЕ МОНЕТЫ": "WATCHLIST",
    "Используйте только совместимую сеть из официального объявления.": "Use only a compatible network listed in the official announcement.",
    "ИСТОРИИ ДО ЛИСТИНГА.": "BEFORE THE LISTING.",
    "ИСТОРИЯ": "STORY",
    "КАК КУПИТЬ $WAIT": "HOW TO BUY $WAIT",
    "Как купить $WAIT?": "How can I buy $WAIT?",
    "Как купить?": "How to buy?",
    "Как работает сообщество?": "How will the community work?",
    "Какая сеть используется?": "Which network will be used?",
    "Какие планы на будущее?": "What are the future plans?",
    "Когда будет листинг?": "When will it be listed?",
    "Когда появится приложение?": "When will the app launch?",
    "Команда": "Team",
    "Конец 2026": "Late 2026",
    "КОНТРАКТ": "CONTRACT",
    "Коротко и по делу — о $WAIT, пресейле и планах проекта.": "The essentials about $WAIT, the presale, and the project roadmap.",
    "КОТОРОЕ ВЕРИТ.": "THAT BELIEVES.",
    "Криптокошелёк": "Crypto wallet",
    "Купить $WAIT": "Buy $WAIT",
    "Купить за USDT": "Buy with USDT",
    "ЛИКВИДНОСТЬ": "LIQUIDITY",
    "ЛИСТИНГИ": "LISTINGS",
    "ЛЮДИ, КОТОРЫЕ": "PEOPLE WHO",
    "Масштабирование": "Scale the project",
    "Международное сообщество": "International community",
    "Мемкоин для тех, кто всё ещё верит в альтсезон.": "A meme coin for those who still believe in altseason.",
    "мемкоин для тех, кто всё ещё ждёт": "A meme coin for those still waiting",
    "МЕМКОИН.": "MEME COIN.",
    "Меньше шума. Больше смысла.": "Less noise. More signal.",
    "МИНУТ": "MINUTES",
    "МНОГО ВОЗМОЖНОСТЕЙ.": "MORE POSSIBILITIES.",
    "Мы не знаем, когда наступит альтсезон. Зато можем решить, чем займёмся, пока ждём.": "We don't know when altseason will arrive. We can choose what to build while we wait.",
    "Мы не просто ждём. Мы строим сообщество, которое верит в следующий цикл. Ждём. Держим. Развиваемся. Вместе.": "We are not just waiting. We are building a community that believes in the next cycle. We wait, hold, and grow together.",
    "На старте проекта": "At launch",
    "Наверх ↑": "Back to top ↑",
    "НАСЛЕДИЕ": "LEGACY",
    "НАШИ": "OUR",
    "Не делать вид, что путь уже пройден.": "Don't pretend the journey is already over.",
    "Не изображать успех.": "Don't pretend to be successful.",
    "НЕ ОБЕЩАЕМ ЗАВТРА. СТРОИМ СЕГОДНЯ.": "NO PROMISES ABOUT TOMORROW. BUILDING TODAY.",
    "Не обещать завтра.": "Don't promise tomorrow.",
    "Не опубликован": "Not published",
    "НЕ ПРОСТО": "MORE THAN",
    "Не только хайп, но и развитие.": "More than hype. Real progress.",
    "Не является финансовой рекомендацией.": "This is not financial advice.",
    "Никаких тестовых или фальшивых транзакций": "No test or fake transactions",
    "НОВОСТИ И УВЕДОМЛЕНИЯ": "NEWS & NOTIFICATIONS",
    "Новости, аналитика, партнёрства": "News, analytics, and partnerships",
    "Новые продукты": "New products",
    "О": "THE",
    "О проекте": "About",
    "Обменять": "Swap",
    "ОБСУЖДЕНИЕ": "DISCUSSION",
    "Обсуждение рынка, идеи, голосования, совместные активности и партнёрства — всё это впереди. Ссылки на официальные каналы появятся здесь после подтверждения.": "Market discussions, ideas, polls, activities, and partnerships are all ahead. Links to official accounts will appear here once confirmed.",
    "ОБЩЕЕ ПРЕДЛОЖЕНИЕ": "TOTAL SUPPLY",
    "Общее предложение —": "Total supply —",
    "Однажды вместе увидеть мир за пределами графиков.": "One day, we will explore the world beyond the charts together.",
    "ОДНО ПРИЛОЖЕНИЕ.": "ONE APP.",
    "ОЖИДАЕТ СТАРТА": "AWAITING LAUNCH",
    "От ожидания к реальности, шаг за шагом. Это планы, а показатели сообщества появятся после подтверждения.": "From waiting to making it real, one step at a time. These are plans; community figures will appear once verified.",
    "Отправить": "Send",
    "ПАРАМЕТРЫ ПРОЕКТА": "PROJECT DETAILS",
    "ПАРАМЕТРЫ СКОРО": "DETAILS COMING SOON",
    "Параметры скоро появятся": "Details coming soon",
    "Партнёрства и больше.": "Partnerships and more.",
    "Первые листинги": "Initial listings",
    "ПЕРВЫЕ ЛИСТИНГИ": "INITIAL LISTINGS",
    "Первые участники": "First community members",
    "ПЕРВЫЕ УЧАСТНИКИ": "FIRST COMMUNITY MEMBERS",
    "План начинается с запуска проекта в конце 2026 года. Этапы описывают намерения, а не гарантируют сроки или рыночный результат.": "The plan starts with a launch in late 2026. These stages describe intentions and do not guarantee timing or market outcomes.",
    "План проекта — 0% налога. Окончательные параметры подтвердят при публикации контракта.": "The current plan is 0% tax. Final terms will be confirmed when the contract is published.",
    "ПЛАН:": "PLAN:",
    "Планируемая модель": "Planned model",
    "Планируется оплата USDT. Поддерживаемая сеть будет объявлена до начала пресейла.": "USDT is planned as the payment method. The supported network will be announced before the presale.",
    "ПЛАНЫ": "PLANNED",
    "Планы проекта": "Project plans",
    "Подготовка пресейла": "Prepare the presale",
    "Подготовьте кошелёк и USDT": "Prepare a wallet and USDT",
    "Поддерживаемая сеть будет указана отдельно": "The supported network will be specified separately",
    "Подключите кошелёк на сайте": "Connect your wallet on the website",
    "Подключите кошелёк, чтобы проверить готовность. Покупка станет доступна после публикации сети, цены и контракта.": "Connect your wallet to check readiness. Purchases will be enabled after the network, price, and contract are announced.",
    "Подключить кошелёк": "Connect wallet",
    "Подтвердите транзакцию": "Confirm the transaction",
    "ПОКУПКА ЗА USDT": "BUY WITH USDT",
    "Покупка сейчас недоступна. Транзакции не отправляются.": "Purchases are currently unavailable. No transactions are sent.",
    "Покупка станет доступна после публикации параметров и подключения контракта.": "Purchases will be enabled after the terms are published and the contract is connected.",
    "Полезные сервисы для трейдеров и комьюнити.": "Useful services for traders and the community.",
    "Получить": "Receive",
    "ПОНИМАЮТ ОЖИДАНИЕ.": "UNDERSTAND THE WAIT.",
    "Понятно": "Got it",
    "ПОРТФЕЛЬ": "PORTFOLIO",
    "После запуска": "After launch",
    "ПОСЛЕ ОБЪЯВЛЕНИЯ УСЛОВИЙ": "AFTER TERMS ARE ANNOUNCED",
    "После публикации параметров можно будет подключить совместимый кошелёк и приобрести токены за USDT в поддерживаемой сети. Пока контракт не подключён, покупка недоступна.": "Once the terms are published, you will be able to connect a compatible wallet and buy tokens with USDT on the supported network. Purchases are unavailable until a contract is connected.",
    "ПРЕСЕЙЛ": "PRESALE",
    "Пресейл — планируемая продажа токенов до листинга. Условия, цена, даты и поддерживаемая сеть будут опубликованы до её начала.": "A presale is a planned token sale before listing. The terms, price, dates, and supported network will be published before it begins.",
    "ПРЕСЕЙЛ $WAIT": "$WAIT PRESALE",
    "ПРИЛОЖЕНИЕ": "APP",
    "Приобретение токенов за USDT планируется на этапе пресейла. Параметры продажи, адрес контракта и поддерживаемая сеть будут опубликованы перед стартом.": "The presale is planned to accept USDT. Sale terms, the contract address, and supported network will be announced before launch.",
    "Проверьте домен и условия покупки до подтверждения.": "Check the domain and purchase terms before confirming.",
    "Проверьте официальные параметры": "Check the official terms",
    "ПРОДАНО": "SOLD",
    "ПРОДУКТЫ": "PRODUCTS",
    "ПРОЕКТЕ": "PROJECT",
    "ПРОЗРАЧНОСТЬ": "TRANSPARENCY",
    "Прозрачные параметры токена и открытые обновления.": "Transparent token details and open updates.",
    "Просто ждать. Строить. Развиваться. И двигаться вместе с людьми, которые поверили в идею.": "Wait. Build. Grow. Move forward with the people who believe in the idea.",
    "ПУТЕШЕСТВИЯ": "TRAVEL",
    "Работать над доступностью токена после запуска.": "Work to make the token accessible after launch.",
    "Развивать сервисы и инструменты экосистемы $WAIT.": "Build services and tools for the $WAIT ecosystem.",
    "РАЗВИТИЕ": "GROWTH",
    "Развитие кошелька": "Develop the wallet",
    "Развитие продукта": "Develop the product",
    "Развитие сообщества": "Grow the community",
    "Развитие экосистемы": "Grow the ecosystem",
    "Разработка $WAIT Wallet": "Develop $WAIT Wallet",
    "Разработка приложения": "App development",
    "Расширение экосистемы": "Expand the ecosystem",
    "РЕАЛЬНЫЕ ПРОДУКТЫ": "REAL PRODUCTS",
    "Резерв и партнёрства": "Reserve and partnerships",
    "РОСТ": "GROWTH",
    "РОСТ СООБЩЕСТВА": "COMMUNITY GROWTH",
    "РЫНКА": "MARKET",
    "РЫНОЧНЫЙ ОБЗОР · КОНЦЕПТ": "MARKET OVERVIEW · CONCEPT",
    "Сверьте сеть, сумму и адрес получателя в самом кошельке.": "Verify the network, amount, and recipient address in your wallet.",
    "СВОЙ ДОМ": "A HOME OF OUR OWN",
    "СЕКУНД": "SECONDS",
    "СЕТЬ": "NETWORK",
    "Сеть ещё не объявлена. Мы не указываем BSC, Ethereum или другую сеть до технического решения.": "The network has not been announced. We will not name BSC, Ethereum, or another network until a technical decision is made.",
    "СКОРО": "SOON",
    "СКОРО!": "COMING SOON!",
    "СЛЕДУЮЩИЙ ЭТАП": "NEXT STAGE",
    "Смотреть путь проекта": "Explore the project roadmap",
    "Сначала — прозрачные условия и проверяемый контракт. До их публикации транзакции недоступны.": "Clear terms and a verifiable contract come first. Transactions will remain unavailable until they are published.",
    "СОБСТВЕННЫЙ ДОМ": "A HOME OF OUR OWN",
    "События рынка и инсайды сообщества": "Market events and community insights",
    "СОВМЕСТНЫЕ": "COMMUNITY",
    "Создавать вещи, которые будут важны и после очередного цикла.": "Create things that matter beyond the next cycle.",
    "СОЗДАНИЕ": "BUILD",
    "Создание проекта и запуск сайта": "Build the project and launch the website",
    "Создать пространство, в котором можно расти и строить вместе.": "Create a space where people can grow and build together.",
    "Сообщество": "Community",
    "СООБЩЕСТВО": "COMMUNITY",
    "Ночной город и силуэт героя WAIT": "Night city and silhouette of the WAIT character",
    "Сообщество ещё создаётся. Здесь не будет придуманных участников или активности — только реальные люди и подтверждённые данные после запуска.": "The community is taking shape. We will share real people and verified figures after launch, not made-up activity.",
    "Обсуждение рынка, идеи, голосования, совместные активности и партнёрства — всё это впереди. Ссылки на официальные X и TikTok появятся здесь после подтверждения аккаунтов.": "Market discussions, ideas, polls, community activities, and partnerships are ahead. Links to the official X and TikTok accounts will appear here once the accounts are confirmed.",
    "Сообщество ещё создаётся. Здесь не будет придуманных участников или активности — только реальные люди и подтверждённые данные после запуска.": "The community is taking shape. We will share real people and verified figures after launch, not made-up activity.",
    "Сообщество ещё создаётся. Ссылки на официальные X и TikTok появятся здесь после подтверждения аккаунтов.": "The community is taking shape. Links to the official X and TikTok accounts will appear here once the accounts are confirmed.",
    "СООБЩЕСТВО,": "A COMMUNITY,",
    "СТАНЬ ЧАСТЬЮ": "BE PART OF",
    "Статус: в планах": "Status: planned",
    "СТРОИМ ВМЕСТЕ": "BUILDING TOGETHER",
    "Строить сегодня.": "Build today.",
    "СУММА В USDT": "AMOUNT IN USDT",
    "Твой голос имеет значение.": "Your voice matters.",
    "ТВОЙ КОШЕЛЁК": "YOUR WALLET",
    "ТЕКУЩАЯ ЦЕНА": "CURRENT PRICE",
    "ТЕКУЩИЙ ЭТАП": "CURRENT STAGE",
    "ТОКЕНОМИКА": "TOKENOMICS",
    "Трекинг рынка и портфеля": "Track the market and your portfolio",
    "Увидеть мир": "See the world",
    "Условия появятся до начала продажи": "Terms will be shared before the sale begins",
    "Формирование сообщества": "Build the community",
    "Художественная история идеи проекта. $WAIT запускается в конце 2026 года.": "An illustrated story behind the project idea. $WAIT is planned to launch in late 2026.",
    "ЦЕЛИ": "GOALS",
    "ЦЕНА $WAIT · ДЕМО": "$WAIT PRICE · DEMO",
    "Цену, дату продажи, сеть и адрес контракта опубликуем здесь.": "The price, sale date, network, and contract address will be published here.",
    "ЦЕНЫ И ГРАФИКИ": "PRICES & CHARTS",
    "ЧАСОВ": "HOURS",
    "ЧЕСТНОСТЬ": "HONESTY",
    "Что будет в $WAIT App?": "What will be in $WAIT App?",
    "Что такое $WAIT?": "What is $WAIT?",
    "Что такое пресейл?": "What is a presale?",
    "Шаг за шагом": "Step by step",
    "ЭТАП ПРЕСЕЙЛА": "PRESALE STAGE",
    "Этапы разработки": "Development roadmap",
    "AI-инструменты": "AI tools",
    "BTC · демо": "BTC · demo",
    "ETH · демо": "ETH · demo",
    "WAIT · концепт": "WAIT · concept",
    "WAIT COMMUNITY · ВПЕРЕДИ": "WAIT COMMUNITY · COMING SOON",
    "Watchlist под рукой": "Your watchlist, always close",
    "Состояние токена": "Token status",
    "Цели проекта": "Project goals",
    "Этапы истории проекта": "Project timeline",
    "Макеты экранов приложения $WAIT": "$WAIT App screen concepts",
    "Распределение токенов по категориям": "Token allocation by category",
    "Прогресс пресейла": "Presale progress",
    "Навигация в подвале": "Footer navigation",
    "Открыть меню": "Open menu",
    "Закрыть меню": "Close menu",
    "Закрыть окно": "Close dialog",
    "Переключить язык на английский": "Switch language to English",
    "Переключить язык на русский": "Switch language to Russian",
    "Социальные сети": "Social media",
    "СТАНЬ ЧАСТЬЮ": "BE PART OF",
    "ИСТОРИИ ДО ЛИСТИНГА.": "THE STORY BEFORE LISTING.",
    "Официальные социальные сети $WAIT": "$WAIT official social media",
    "Не опубликован": "Not published",
    "ДО СТАРТА": "BEFORE LAUNCH",
    "ИДЁТ ЭТАП": "STAGE IN PROGRESS",
    "ПРЕСЕЙЛ ОТКРЫТ": "PRESALE IS OPEN",
    "СКОРО СТАРТ": "STARTING SOON",
    "ЭТАП ЗАВЕРШЁН": "STAGE COMPLETE",
    "Этап завершён": "Stage complete",
    "Ссылка появится после подтверждения официального канала.": "The link will appear after the official account is confirmed.",
    "Кошелёк подключён: ": "Wallet connected: ",
    "Кошелёк ": "Wallet ",
    "Подключаем…": "Connecting…",
    "Не удалось подключить кошелёк.": "Could not connect wallet.",
    "Покупка недоступна.": "Purchases are unavailable.",
    "Сначала подключите кошелёк.": "Connect a wallet first.",
    "Транзакция отправлена: ": "Transaction sent: ",
    "· сеть ": "· network ",
    " всего": " total",
    "— всего": "— total",
    "Сеть ещё не объявлена.": "The network has not been announced.",
    "До подключения реального контракта покупка отключена.": "Purchases are disabled until a live contract is connected.",
    "Совместимый EVM-кошелёк не найден. Установите кошелёк и повторите попытку.": "No compatible EVM wallet found. Install a wallet and try again.",
    "Кошелёк не вернул адрес аккаунта.": "The wallet did not return an account address.",
    "Продажа ещё не настроена. Контракт и условия покупки будут опубликованы позже.": "The sale is not configured yet. The contract and purchase terms will be published later.",
    "Адаптер смарт-контракта не подключён. Транзакция не отправлена.": "The smart contract adapter is not connected. No transaction was sent."
  };
  let currentLanguage = localStorage.getItem("wait-language") === "en" ? "en" : "ru";
  const textSources = new WeakMap();
  const attributeSources = new WeakMap();
  const t = value => currentLanguage === "en" ? (english[value] || value) : value;
  window.waitT = t;
  const compactNumber = value => new Intl.NumberFormat(currentLanguage === "en" ? "en-US" : "ru-RU", { maximumFractionDigits: 0 }).format(value);
  const formatUsd = value => new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: value < 1 ? 8 : 0
  }).format(value);

  const preserveWhitespace = (original, translated) => {
    const start = (original.match(/^\s*/) || [""])[0];
    const end = (original.match(/\s*$/) || [""])[0];
    return start + translated + end;
  };
  const applyLanguage = language => {
    currentLanguage = language === "en" ? "en" : "ru";
    document.documentElement.lang = currentLanguage;
    try { localStorage.setItem("wait-language", currentLanguage); } catch (_) {}
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue.trim() || node.parentElement.closest("script,style")) continue;
      if (!textSources.has(node)) textSources.set(node, node.nodeValue);
      const original = textSources.get(node);
      const key = original.trim();
      node.nodeValue = preserveWhitespace(original, currentLanguage === "en" ? (english[key] || key) : key);
    }
    $$('[aria-label], [title], [placeholder]').forEach(element => {
      let sourceMap = attributeSources.get(element);
      if (!sourceMap) { sourceMap = new Map(); attributeSources.set(element, sourceMap); }
      ["aria-label", "title", "placeholder"].forEach(attribute => {
        const value = element.getAttribute(attribute);
        if (value == null) return;
        if (!sourceMap.has(attribute)) sourceMap.set(attribute, value);
        const original = sourceMap.get(attribute);
        element.setAttribute(attribute, currentLanguage === "en" ? (english[original] || original) : original);
      });
    });
    const languageButton = $("#language-toggle");
    if (languageButton) {
      languageButton.setAttribute("aria-pressed", String(currentLanguage === "en"));
      languageButton.setAttribute("aria-label", t(currentLanguage === "en" ? "Переключить язык на русский" : "Переключить язык на английский"));
      $$('[data-lang-choice]', languageButton).forEach(choice => choice.classList.toggle("is-active", choice.dataset.langChoice === currentLanguage));
    }
    const description = $('meta[name="description"]');
    if (description) description.content = t("$WAIT — мемкоин и история о терпении, сообществе и продуктах, которые строятся, пока ждёшь альтсезон.");
    document.title = t("$WAIT — Всё ещё ждём альтсезон");
    if (typeof refreshLocalizedNumbers === "function") refreshLocalizedNumbers();
  };
  window.waitSetLanguage = applyLanguage;
  const safeUrl = value => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch (_) {
      return "";
    }
  };

  // The only source for project-specific values.
  const valueMap = {
    price: config.PRICE_USDT == null ? "—" : formatUsd(config.PRICE_USDT),
    marketCap: config.MARKET_CAP == null ? "—" : formatUsd(config.MARKET_CAP),
    liquidity: config.LIQUIDITY == null ? "—" : formatUsd(config.LIQUIDITY),
    holders: config.HOLDERS == null ? "—" : compactNumber(config.HOLDERS),
    contract: config.CONTRACT || t("Не опубликован")
  };
  $$("[data-value]").forEach(node => {
    const value = valueMap[node.dataset.value];
    if (value != null) node.textContent = value;
  });
  $$("[data-total-supply]").forEach(node => { node.textContent = compactNumber(config.TOTAL_SUPPLY); });
  $$("[data-total-supply-copy]").forEach(node => { node.textContent = compactNumber(config.TOTAL_SUPPLY) + " $WAIT"; });
  $$("[data-total-supply-number]").forEach(node => { node.textContent = compactNumber(config.TOTAL_SUPPLY); });
  $$("[data-total-supply-short]").forEach(node => {
    const billions = config.TOTAL_SUPPLY / 1_000_000_000;
    node.textContent = Number.isInteger(billions) ? billions + "B" : compactNumber(config.TOTAL_SUPPLY);
  });

  // Configure social icons as real external links only after a valid URL is supplied.
  $$("[data-social]").forEach(control => {
    const key = control.dataset.social;
    const href = safeUrl(config.SOCIAL_LINKS && config.SOCIAL_LINKS[key]);
    if (!href) {
      control.disabled = true;
      control.title = t("Ссылка появится после подтверждения официального канала.");
      return;
    }
    const link = document.createElement("a");
    link.className = control.className;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", control.getAttribute("aria-label") || key);
    link.innerHTML = control.innerHTML;
    control.replaceWith(link);
  });

  // Hash navigation gives every section a shareable URL and native back/forward history.
  const menuButton = $("#menu-toggle");
  const nav = $("#site-nav");
  const navLinks = nav ? $$('a[href^="#"]', nav) : [];
  const homeLink = $(".header-home");
  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", t("Открыть меню"));
    nav.classList.remove("open");
  };
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      menuButton.setAttribute("aria-label", t(expanded ? "Открыть меню" : "Закрыть меню"));
      nav.classList.toggle("open", !expanded);
    });
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    document.addEventListener("click", event => {
      if (nav.classList.contains("open") && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  const setActiveNav = () => {
    const header = $(".site-header");
    const marker = (header ? header.getBoundingClientRect().bottom : 0) + 70;
    let active = null;
    navLinks.forEach(link => {
      const target = $(link.getAttribute("href"));
      if (target && target.getBoundingClientRect().top <= marker) active = link;
    });
    navLinks.forEach(link => {
      if (link === active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    if (homeLink) {
      if (active) homeLink.removeAttribute("aria-current");
      else homeLink.setAttribute("aria-current", "page");
    }
  };
  let navFrame = 0;
  window.addEventListener("scroll", () => {
    if (navFrame) return;
    navFrame = requestAnimationFrame(() => { navFrame = 0; setActiveNav(); });
  }, { passive: true });
  window.addEventListener("hashchange", () => { closeMenu(); setActiveNav(); });
  setActiveNav();

  // Allocation list and donut are generated from the same editable configuration.
  const allocationRows = $("#allocation-list");
  const allocationColors = [];
  let allocationStart = 0;
  (config.TOKENOMICS || []).forEach(allocation => {
    const row = allocationRows && $('[data-allocation="' + allocation.key + '"]', allocationRows);
    if (row) {
      const amount = $("span > b", row);
      const label = $("span > small", row);
      const swatch = $("i", row);
      if (amount) amount.textContent = allocation.percent + "%";
      if (label) label.textContent = t(allocation.label);
      if (swatch) swatch.style.backgroundColor = allocation.color;
    }
    allocationColors.push(allocation.color + " " + allocationStart + "% " + (allocationStart + allocation.percent) + "%");
    allocationStart += allocation.percent;
  });
  const donut = $(".allocation-chart");
  if (donut && allocationColors.length) donut.style.background = "conic-gradient(" + allocationColors.join(", ") + ")";

  const displayPrice = value => value == null || !Number.isFinite(Number(value)) ? "—" : formatUsd(Number(value));
  const priceNode = $("[data-presale-price]");
  const nextPriceNode = $("[data-next-price]");
  const soldNode = $("[data-sold-label]");
  const allocationNode = $("[data-sale-allocation]");
  const percentNode = $("[data-sale-percent]");
  const progress = $("[data-sale-progress]");
  const progressTrack = $(".progress-track");
  if (priceNode) priceNode.textContent = displayPrice(config.PRICE_USDT);
  if (nextPriceNode) nextPriceNode.textContent = displayPrice(config.NEXT_PRICE_USDT);
  const networkLabel = $("[data-network-label]");
  if (networkLabel) networkLabel.textContent = config.NETWORK || t("Будет объявлена");
  if (allocationNode) allocationNode.textContent = config.PRESALE_SUPPLY == null ? t("— всего") : compactNumber(config.PRESALE_SUPPLY) + t(" всего");
  if (soldNode) {
    soldNode.textContent = config.TOKENS_SOLD == null || config.PRESALE_SUPPLY == null
      ? "— / — $WAIT"
      : compactNumber(config.TOKENS_SOLD) + " / " + compactNumber(config.PRESALE_SUPPLY) + " $WAIT";
  }
  let salePercent = 0;
  if (Number(config.TOKENS_SOLD) >= 0 && Number(config.PRESALE_SUPPLY) > 0) {
    salePercent = Math.max(0, Math.min(100, Number(config.TOKENS_SOLD) / Number(config.PRESALE_SUPPLY) * 100));
    if (percentNode) percentNode.textContent = salePercent.toFixed(1) + "%";
  } else if (percentNode) {
    percentNode.textContent = t("Данные появятся до старта");
  }
  if (progress) progress.style.width = salePercent + "%";
  if (progressTrack) progressTrack.setAttribute("aria-valuenow", String(Math.round(salePercent)));

  function refreshLocalizedNumbers() {
    $$('[data-value="holders"]').forEach(node => { node.textContent = config.HOLDERS == null ? "—" : compactNumber(config.HOLDERS); });
    $$('[data-value="contract"]').forEach(node => { node.textContent = config.CONTRACT || t("Не опубликован"); });
    $$('[data-total-supply]').forEach(node => { node.textContent = compactNumber(config.TOTAL_SUPPLY); });
    $$('[data-total-supply-copy]').forEach(node => { node.textContent = compactNumber(config.TOTAL_SUPPLY) + " $WAIT"; });
    $$('[data-total-supply-number]').forEach(node => { node.textContent = compactNumber(config.TOTAL_SUPPLY); });
    $$('[data-total-supply-short]').forEach(node => {
      const billions = config.TOTAL_SUPPLY / 1_000_000_000;
      node.textContent = Number.isInteger(billions) ? billions + "B" : compactNumber(config.TOTAL_SUPPLY);
    });
    (config.TOKENOMICS || []).forEach(allocation => {
      const row = allocationRows && $('[data-allocation="' + allocation.key + '"]', allocationRows);
      const label = row && $("span > small", row);
      if (label) label.textContent = t(allocation.label);
    });
    if (networkLabel) networkLabel.textContent = config.NETWORK || t("Будет объявлена");
    if (allocationNode) allocationNode.textContent = config.PRESALE_SUPPLY == null ? t("— всего") : compactNumber(config.PRESALE_SUPPLY) + t(" всего");
    if (percentNode && !(Number(config.TOKENS_SOLD) >= 0 && Number(config.PRESALE_SUPPLY) > 0)) {
      percentNode.textContent = t("Данные появятся до старта");
    }
    if (soldNode) {
      soldNode.textContent = config.TOKENS_SOLD == null || config.PRESALE_SUPPLY == null
        ? "— / — $WAIT"
        : compactNumber(config.TOKENS_SOLD) + " / " + compactNumber(config.PRESALE_SUPPLY) + " $WAIT";
    }
  }

  // A real countdown is driven by PRESALE_END. With no published end date, show a clear placeholder.
  const countdownStatus = $("[data-countdown-status]");
  const stageNode = $("[data-presale-stage]");
  const purchaseOpener = $("[data-open-purchase]");
  const updateCountdown = () => {
    const end = config.PRESALE_END ? new Date(config.PRESALE_END).getTime() : NaN;
    const start = config.PRESALE_START ? new Date(config.PRESALE_START).getTime() : NaN;
    const now = Date.now();
    const parts = { days: "--", hours: "--", minutes: "--", seconds: "--" };
    if (Number.isFinite(end)) {
      if (now >= end) {
        if (countdownStatus) countdownStatus.textContent = t("ЭТАП ЗАВЕРШЁН");
        if (stageNode) stageNode.textContent = t("ЭТАП ЗАВЕРШЁН");
        if (purchaseOpener) {
          purchaseOpener.disabled = true;
          purchaseOpener.textContent = t("Этап завершён");
        }
      } else {
        const secondsLeft = Math.floor((end - now) / 1000);
        parts.days = String(Math.floor(secondsLeft / 86400)).padStart(2, "0");
        parts.hours = String(Math.floor((secondsLeft % 86400) / 3600)).padStart(2, "0");
        parts.minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
        parts.seconds = String(secondsLeft % 60).padStart(2, "0");
        if (countdownStatus) countdownStatus.textContent = t(Number.isFinite(start) && now < start ? "ДО СТАРТА" : "ИДЁТ ЭТАП");
        if (stageNode) stageNode.textContent = t(Number.isFinite(start) && now < start ? "СКОРО СТАРТ" : "ПРЕСЕЙЛ ОТКРЫТ");
      }
    } else if (countdownStatus) {
      countdownStatus.textContent = t("Дата будет объявлена");
    }
    Object.entries(parts).forEach(([key, value]) => {
      const node = $('[data-count="' + key + '"]');
      if (node) node.textContent = value;
    });
  };
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  // Purchase and help dialogs.
  const purchaseDialog = $("#purchase-dialog");
  const helpDialog = $("#help-dialog");
  const openDialog = dialog => {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };
  const closeDialog = dialog => {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };
  $$("[data-open-purchase]").forEach(button => button.addEventListener("click", () => openDialog(purchaseDialog)));
  $$("[data-open-help]").forEach(button => button.addEventListener("click", () => openDialog(helpDialog)));
  $$("[data-close-help]").forEach(button => button.addEventListener("click", () => closeDialog(helpDialog)));
  [purchaseDialog, helpDialog].filter(Boolean).forEach(dialog => {
    dialog.addEventListener("click", event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog(dialog);
    });
  });

  const amountInput = $("#purchase-amount");
  const quoteNode = $("[data-purchase-quote]");
  const confirmButton = $("[data-confirm-purchase]");
  const walletButtons = $$("[data-wallet-connect]");
  const walletStatus = $("[data-wallet-status]");
  let connectedAccount = null;
  let currentWallet = null;
  if (confirmButton) confirmButton.disabled = !(config.PURCHASE_ENABLED && config.PURCHASE_CONTRACT && window.WaitPurchaseAdapter);
  const shortAddress = address => address.slice(0, 6) + "…" + address.slice(-4);
  const updateWallet = wallet => {
    currentWallet = wallet || null;
    connectedAccount = wallet ? wallet.account : null;
    if (walletStatus) walletStatus.textContent = wallet
      ? t("Кошелёк подключён: ") + shortAddress(wallet.account) + t(" · сеть ") + wallet.chainId
      : t("Покупка сейчас недоступна. Транзакции не отправляются.");
    walletButtons.forEach(button => { button.textContent = wallet ? t("Кошелёк ") + shortAddress(wallet.account) : t("Подключить кошелёк"); });
  };
  const refreshQuote = () => {
    if (!amountInput || !quoteNode) return;
    const quantity = window.WaitPurchase.quote(amountInput.value);
    quoteNode.textContent = quantity == null ? "— $WAIT" : compactNumber(quantity) + " $WAIT";
  };
  if (amountInput) {
    amountInput.disabled = !(Number(config.PRICE_USDT) > 0);
    amountInput.addEventListener("input", refreshQuote);
  }
  walletButtons.forEach(button => button.addEventListener("click", async () => {
    button.disabled = true;
    button.textContent = t("Подключаем…");
    try {
      const wallet = await window.WaitPurchase.connectWallet();
      updateWallet(wallet);
    } catch (error) {
      if (walletStatus) walletStatus.textContent = t(error.message || "Не удалось подключить кошелёк.");
      button.textContent = t("Подключить кошелёк");
    } finally {
      button.disabled = false;
    }
  }));
  if (window.ethereum && typeof window.ethereum.on === "function") {
    window.WaitPurchase.getConnectedWallet().then(updateWallet).catch(() => {});
    window.ethereum.on("accountsChanged", accounts => {
      if (Array.isArray(accounts) && accounts[0]) {
        window.WaitPurchase.getConnectedWallet().then(updateWallet).catch(() => updateWallet(null));
      } else {
        updateWallet(null);
      }
    });
    window.ethereum.on("chainChanged", chainId => {
      if (connectedAccount && walletStatus) walletStatus.textContent = t("Кошелёк подключён: ") + shortAddress(connectedAccount) + t(" · сеть ") + chainId;
    });
  }
  if (confirmButton) confirmButton.addEventListener("click", async () => {
    if (!connectedAccount) {
      if (walletStatus) walletStatus.textContent = t("Сначала подключите кошелёк.");
      return;
    }
    confirmButton.disabled = true;
    try {
      const result = await window.WaitPurchase.purchase({ account: connectedAccount, amount: amountInput && amountInput.value });
      if (walletStatus) walletStatus.textContent = t("Транзакция отправлена: ") + result.hash;
    } catch (error) {
      if (walletStatus) walletStatus.textContent = t(error.message || "Покупка недоступна.");
    } finally {
      confirmButton.disabled = !config.PURCHASE_ENABLED;
    }
  });
  refreshQuote();

  // FAQ behaves as one accordion; the native details element remains keyboard accessible.
  $$(".faq-item").forEach(item => item.addEventListener("toggle", () => {
    if (!item.open) return;
    $$(".faq-item").forEach(other => { if (other !== item) other.open = false; });
  }));

  const year = $("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const languageButton = $("#language-toggle");
  if (languageButton) languageButton.addEventListener("click", () => {
    applyLanguage(currentLanguage === "ru" ? "en" : "ru");
    updateCountdown();
    if (currentWallet) updateWallet(currentWallet);
    refreshQuote();
  });
  applyLanguage(currentLanguage);
  updateCountdown();

  const revealSections = $$("[data-reveal]");
  if ("IntersectionObserver" in window) {
    document.body.classList.add("reveal-ready");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.06 });
    revealSections.forEach(section => observer.observe(section));
  } else {
    revealSections.forEach(section => section.classList.add("is-visible"));
  }

  const heroArt = $(".hero-art");
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let parallaxFrame = 0;
  window.addEventListener("scroll", () => {
    if (!heroArt || reducedMotion || parallaxFrame) return;
    parallaxFrame = requestAnimationFrame(() => {
      parallaxFrame = 0;
      const offset = Math.max(-22, Math.min(22, window.scrollY * 0.025));
      heroArt.style.setProperty("--parallax-y", offset + "px");
    });
  }, { passive: true });
})();
