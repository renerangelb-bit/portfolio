'use client';

import { usePathname } from 'next/navigation';
import { alternatePath, type Locale } from '@/i18n/config';

/**
 * Link to the same page in the other language. A plain <a>, because each language has its own
 * root layout and a full page load is expected.
 */
export function LanguageSwitch({ locale, label, short }: { locale: Locale; label: string; short: string }) {
  const pathname = usePathname() || '/';
  const target: Locale = locale === 'en' ? 'es' : 'en';
  return (
    <a
      href={alternatePath(pathname, target)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      className="inline-flex min-h-11 min-w-11 items-center justify-center font-semibold text-slate transition-colors hover:text-ink"
    >
      {short}
    </a>
  );
}
