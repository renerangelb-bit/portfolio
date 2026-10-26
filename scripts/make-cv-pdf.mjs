// Prints the /cv and /es/cv pages to PDF files in public/cv/.
//
// 1. Build and start the site:   npm run build && npm start
// 2. In another terminal:        npm run cv:pdf
//    (first time only: npx playwright install chromium)
//
// Options: BASE_URL=http://localhost:3000 (default).
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const OUT = path.resolve('public/cv');
const jobs = [
  { path: '/cv', file: 'Rene-Rangel-CV-EN.pdf', title: 'René Rangel, CV' },
  { path: '/es/cv', file: 'Rene-Rangel-CV-ES.pdf', title: 'René Rangel, CV (español)' },
];

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
for (const job of jobs) {
  await page.goto(BASE + job.path, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  await page.evaluate((t) => (document.title = t), job.title);
  const file = path.join(OUT, job.file);
  await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
  const pages = (fs.readFileSync(file, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log(`${job.file}: ${pages} page${pages === 1 ? '' : 's'}`);
  if (pages > 1) console.warn('  The CV runs over one page. Shorten a bullet or two in src/content.');
}
await browser.close();
