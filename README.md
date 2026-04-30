# Жінка в ресурсі

Тимчасовий mobile-first landing page для події **«Жінка в ресурсі»**.

Подія:
- формат: Нумерологія + Нутріціологія
- дата: 20 травня
- тривалість: 3 години
- вартість участі: 1500 грн

## Stack

- React
- TypeScript
- Vite
- CSS без Tailwind

## Local Development

Встановити залежності:

```bash
npm install
```

Запустити локально:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Important Files

- `src/App.tsx` — контент, сторінки, CTA, payment link, event toggle
- `src/styles.css` — стилі та mobile-first layout
- `public/_redirects` — fallback для Cloudflare Pages, щоб `/success` відкривався напряму
- `index.html` — SEO title та meta description

## Payment Link

Payment URL знаходиться в `src/App.tsx`:

```ts
const PAYMENT_LINK = "https://payment-link.com";
```

Перед запуском замінити на реальне посилання оплати.

CTA-кнопки використовують:

```ts
window.location.assign(PAYMENT_LINK);
```

## Event Toggle

У `src/App.tsx` є перемикач активності події:

```ts
const EVENT_ACTIVE = true;
```

Якщо поставити `false`, сайт покаже просту сторінку:

```text
Зустріч завершена
```

Це зручно після завершення події, якщо не хочеться одразу видаляти Cloudflare Pages project.

## Pages

- `/` — основний landing page
- `/success` — сторінка після успішної оплати

## Cloudflare Pages Deploy

Рекомендовано деплоїти як окремий Cloudflare Pages project, щоб не чіпати основний сайт.

Налаштування:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Production branch: main
```

Не налаштовувати GitHub Pages і не додавати `base` у `vite.config.ts`.

## Temporary Usage

Сторінка потрібна приблизно на 3 тижні.

Після завершення події можна:

1. Поставити `EVENT_ACTIVE = false` і задеплоїти.
2. Або видалити Cloudflare Pages project.
3. Якщо використовувався custom subdomain, прибрати його з Cloudflare Pages → Custom domains.

## Git Workflow

Після змін:

```bash
npm run build
git status -sb
git add .
git commit -m "Update landing page"
git push
```
