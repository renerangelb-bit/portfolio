# René Rangel, portfolio and CV

My personal site: who I am, the projects I've built and my CV, in English and Spanish.

**Live:** [renerangel.netlify.app](https://renerangel.netlify.app) · **CV:** [English PDF](public/cv/Rene-Rangel-CV-EN.pdf), [Spanish PDF](public/cv/Rene-Rangel-CV-ES.pdf)

I'm a full-stack developer in Aguascalientes, Mexico, working with React, Next.js, TypeScript, Node.js and SQL. I'm available for a full-time role, remote or on site. Email: [renerangelb@gmail.com](mailto:renerangelb@gmail.com).

## What's inside

| Page | English | Spanish |
| --- | --- | --- |
| Home: intro, selected work, experience, skills, contact | `/` | `/es` |
| Case study: Volviendo al Origen (e-commerce prototype) | `/work/volviendo-al-origen` | `/es/proyectos/volviendo-al-origen` |
| Case study: NEXA website | `/work/nexa-website` | `/es/proyectos/nexa-website` |
| Printable CV | `/cv` | `/es/cv` |

## How it's built

- **Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS 4.** Every page is static and pre-rendered; the only client component is the language switch.
- **Two languages, one source of truth.** `src/i18n/config.ts` maps every route to its translation. The language switch, `hreflang` tags and the sitemap all read from it. Each language has its own root layout, so `<html lang>` is always correct.
- **Content as typed data.** Projects, experience, skills and education live in `src/content/` as TypeScript objects with both languages side by side. The home page and the CV read the same data, so they can't drift apart.
- **The CV is a web page.** `/cv` is laid out as one A4 page of real text (readable by applicant tracking systems). `npm run cv:pdf` prints it to PDF with Chromium and warns if it runs over one page.
- **SEO.** Canonical URLs, `hreflang` alternates, Open Graph images, a sitemap and `schema.org/Person` structured data.
- **Accessibility.** Semantic landmarks and headings, a skip link, visible focus, AA contrast for every text color, and the one animation on the site respects "reduce motion".
- **Security headers.** A strict Content Security Policy in production, HSTS, and no third-party scripts.

```
src/
  app/          routes: (en) at the root, (es) under /es
  components/   layout, home sections, case study, CV, UI pieces
  content/      projects, experience, skills, education, profile
  i18n/         route map and interface text in both languages
  lib/          SEO helpers, fonts, a small Markdown renderer, JSON-LD
  views/        page bodies shared by both languages
scripts/        CV PDF and social image generators (Playwright)
public/         photo, screenshots, CV PDFs, social images
```

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build
```

Regenerate the CV PDFs and social images after changing content:

```bash
npx playwright install chromium   # first time only
npm run build && npm start        # terminal 1
npm run cv:pdf                    # terminal 2: writes public/cv/*.pdf
npm run og                        # terminal 2: writes public/og/*.png
```

## Deploy

Netlify builds the site from `main` using `netlify.toml`. Set `NEXT_PUBLIC_SITE_URL` if the site runs on a different domain. GitHub Actions type-checks and builds every push.

## License

Code: MIT. Text, photo and project screenshots: © René Ángel Rangel Bernal, all rights reserved.
