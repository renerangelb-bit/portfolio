import type { ReactNode } from 'react';
import { fontVariables } from '@/lib/fonts';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * The <html> document shared by both languages. Each language has its own root layout
 * (app/(en)/layout.tsx and app/(es)/layout.tsx), so <html lang> is always correct.
 */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  return (
    <html lang={locale} className={fontVariables}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {t.a11y.skip}
        </a>
        <Header locale={locale} />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
