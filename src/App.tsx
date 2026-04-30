const PAYMENT_LINK = "https://payment-link.com";
const EVENT_ACTIVE = true;

type ProgramItem = {
  title: string;
  description: string;
};

const numerology: ProgramItem[] = [
  {
    title: "Самопізнання",
    description: "Опори, сильні сторони та внутрішні сценарії.",
  },
  {
    title: "Парні стосунки",
    description: "Як чути себе й партнера без втрати ресурсу.",
  },
  {
    title: "Прогностика",
    description: "Періоди, рішення та точки зростання.",
  },
];

const nutrition: ProgramItem[] = [
  {
    title: "Погляд лікаря",
    description: "Стан організму простими словами.",
  },
  {
    title: "Жінка в ресурсі",
    description: "Енергія, ясність, сон і стабільний настрій.",
  },
  {
    title: "Стан організму",
    description: "Сигнали тіла, які варто помічати.",
  },
];

const faq = [
  {
    question: "Це лекція чи жива зустріч?",
    answer: "Формат камерної бесіди: можна слухати, ставити питання й занотовувати важливе для себе.",
  },
  {
    question: "Чи потрібна підготовка?",
    answer: "Достатньо прийти з відкритістю та питаннями. Для нотаток зручно мати телефон або блокнот.",
  },
  {
    question: "Кому підійде подія?",
    answer: "Жінкам, які хочуть краще зрозуміти себе, відновити енергію та подивитися на ресурс комплексно.",
  },
];

const handlePayment = () => {
  window.location.assign(PAYMENT_LINK);
};

function App() {
  const page = window.location.pathname.replace(/\/+$/, "");

  if (page === "/success") {
    return <SuccessPage />;
  }

  if (!EVENT_ACTIVE) {
    return <EventExpiredPage />;
  }

  return <HomePage />;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Program />
      <SectionCTA />
      <ForWhom />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero section">
      <div className="heroPattern" aria-hidden="true" />
      <div className="container heroGrid">
        <div className="heroCopy">
          <p className="eventMeta">Нумерологія + Нутріціологія</p>
          <h1>Жінка в ресурсі</h1>
          <div className="heroFacts" aria-label="Дата і тривалість">
            <span>20 травня</span>
            <span>3 години</span>
          </div>
          <p className="heroLead">
            Жива зустріч, щоб краще зрозуміти себе, підтримати тіло й повернути
            відчуття внутрішньої опори.
          </p>
          <div className="heroActions">
            <PaymentButton />
          </div>
        </div>
        <div className="heroPanel" aria-label="Деталі події">
          <div className="dateCard">
            <span>Травень</span>
            <strong>20</strong>
          </div>
          <div>
            <p className="panelLabel">Формат</p>
            <h2>Два експертні погляди на ресурс</h2>
            <p>
              Нумерологія про внутрішні сценарії. Нутріціологія про тіло,
              енергію та стан організму.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about">
      <div className="container split">
        <div>
          <p className="sectionLabel">Про зустріч</p>
          <h2>Три години, щоб зібрати себе в цілісну картину</h2>
        </div>
        <p className="sectionText">
          Це не марафон і не суха лекція. Це жива розмова про жіночий ресурс:
          мислення, стосунки, втому, тіло та маленькі рішення, які повертають
          стабільність.
        </p>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section className="section program" id="program">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">Програма</p>
          <h2>Що буде на зустрічі</h2>
        </div>
        <div className="programGrid">
          <ProgramBlock title="Нумеролог" items={numerology} />
          <ProgramBlock title="Нутріціолог" items={nutrition} />
        </div>
      </div>
    </section>
  );
}

function ProgramBlock({ title, items }: { title: string; items: ProgramItem[] }) {
  return (
    <article className="programBlock">
      <h3>{title}</h3>
      <div className="programItems">
        {items.map((item) => (
          <div className="programItem" key={item.title}>
            <span aria-hidden="true" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function SectionCTA() {
  return (
    <section className="section sectionCta" aria-label="Оплата участі">
      <div className="container inlineCta">
        <div>
          <p className="sectionLabel">Місця обмежені</p>
          <h2>Забронюй участь зараз</h2>
        </div>
        <PaymentButton />
      </div>
    </section>
  );
}

function ForWhom() {
  const points = [
    "Відчуваєш втому, але не розумієш, з чого почати відновлення.",
    "Хочеш побачити свої сильні сторони й повторювані сценарії.",
    "Шукаєш практичний погляд на енергію, сон і стан тіла.",
  ];

  return (
    <section className="section forWhom">
      <div className="container">
        <div className="callout">
          <p className="sectionLabel">Для кого</p>
          <h2>Для жінок, які хочуть повернути собі увагу</h2>
          <div className="pointList">
            {points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section price">
      <div className="container priceGrid">
        <div>
          <p className="sectionLabel">Участь</p>
          <h2>Оплата та бронювання</h2>
          <p className="sectionText">
            Натисни “Оплатити”, щоб перейти до бронювання місця на зустріч.
          </p>
        </div>
        <div className="priceCard">
          <span className="priceCaption">Вартість участі</span>
          <strong>Оплата онлайн</strong>
          <PaymentButton />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">FAQ</p>
          <h2>Коротко про важливе</h2>
        </div>
        <div className="faqList">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section finalCta">
      <div className="container ctaBox">
        <h2>Побач себе ширше, ніж список справ</h2>
        <p>
          20 травня · 3 години · нумерологія, нутріціологія та чесна розмова.
        </p>
        <PaymentButton variant="light" />
      </div>
    </section>
  );
}

function PaymentButton({ variant = "primary" }: { variant?: "primary" | "light" }) {
  return (
    <button className={`button ${variant}`} type="button" onClick={handlePayment}>
      Оплатити
    </button>
  );
}

function SuccessPage() {
  return (
    <main className="successPage">
      <section className="section">
        <div className="container successCard">
          <p className="sectionLabel">Оплата прийнята</p>
          <h1>Дякуємо за оплату</h1>
          <p>
            Твоє місце на зустрічі «Жінка в ресурсі» заброньовано. Напишіть
            нам в Instagram або Telegram, щоб отримати деталі участі.
          </p>
          <a className="button primary" href="/">
            Повернутись на головну
          </a>
        </div>
      </section>
    </main>
  );
}

function EventExpiredPage() {
  return (
    <main className="successPage">
      <section className="section">
        <div className="container successCard">
          <p className="sectionLabel">Подія завершена</p>
          <h1>Зустріч завершена</h1>
          <p>
            Дякуємо за інтерес до «Жінка в ресурсі». Анонс наступної зустрічі
            з’явиться незабаром.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
