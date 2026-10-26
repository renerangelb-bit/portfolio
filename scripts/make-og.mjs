// Draws the social preview images (public/og/og-en.png and og-es.png, 1200×630).
//
// 1. Build and start the site:   npm run build && npm start
// 2. In another terminal:        npm run og
//    (first time only: npx playwright install chromium)
//
// It opens the running site (so the real fonts and photo load) and replaces the page with the card.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const HOST = (process.env.OG_HOST || 'renerangel.netlify.app').trim();
const OUT = path.resolve('public/og');

const cards = {
  en: {
    path: '/',
    role: 'Full-stack developer',
    line: 'React, Next.js, TypeScript, Node.js and SQL. Available for full-time roles.',
    steps: ['Order received', 'Payment confirmed', 'Preparing', 'Packed', 'Shipped', 'Delivered'],
  },
  es: {
    path: '/es',
    role: 'Desarrollador full-stack',
    line: 'React, Next.js, TypeScript, Node.js y SQL. Disponible para tiempo completo.',
    steps: ['Pedido recibido', 'Pago confirmado', 'Preparando', 'Empaquetado', 'Enviado', 'Entregado'],
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function markup(c) {
  const dots = c.steps
    .map(
      (s) => `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;width:120px">
        <span style="width:16px;height:16px;border-radius:50%;background:#2f45e0"></span>
        <span style="font-size:15px;font-weight:600;color:#14203a;text-align:center;line-height:1.2">${esc(s)}</span></div>`,
    )
    .join('');
  return `<div id="og" style="position:fixed;inset:0;width:1200px;height:630px;background:#f4f6f8;color:#14203a;font-family:var(--font-instrument),sans-serif;padding:64px 72px;box-sizing:border-box;display:flex;gap:56px">
    <div style="flex:1;display:flex;flex-direction:column">
      <div style="font-variation-settings:'wdth' 75;font-weight:600;font-size:112px;line-height:0.95;letter-spacing:-0.01em">René Rangel</div>
      <div style="margin-top:18px;font-size:38px;font-weight:600">${esc(c.role)}</div>
      <div style="margin-top:14px;font-size:24px;line-height:1.4;color:#4f5b72;max-width:640px">${esc(c.line)}</div>
      <div style="margin-top:auto;position:relative;display:flex;justify-content:space-between;width:720px">
        <span style="position:absolute;left:60px;right:60px;top:7px;height:2px;background:#2f45e0"></span>${dots}
      </div>
    </div>
    <div style="width:300px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end">
      <img src="/images/rene.webp" style="width:300px;height:375px;object-fit:cover;border-radius:8px" alt="">
      <div style="font-size:24px;font-weight:600;color:#2f45e0">${esc(HOST)}</div>
    </div>
  </div>`;
}

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const [locale, c] of Object.entries(cards)) {
  await page.goto(BASE + c.path, { waitUntil: 'networkidle' });
  await page.evaluate((html) => {
    document.body.innerHTML = html;
    document.body.style.overflow = 'hidden';
  }, markup(c));
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => (i.onload = i.onerror = r)))));
  });
  const file = path.join(OUT, `og-${locale}.png`);
  await page.locator('#og').screenshot({ path: file });
  console.log('wrote', path.relative(process.cwd(), file));
}
await browser.close();
