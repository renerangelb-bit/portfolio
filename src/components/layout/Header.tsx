import Link from 'next/link';
import { getDictionary } from '@/i18n';
import { anchors, routes, type Locale } from '@/i18n/config';
import { profile } from '@/content/profile';
import { LanguageSwitch } from './LanguageSwitch';

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const home = routes.home[locale];
  const section = (key: keyof typeof anchors) => `${home}#${anchors[key][locale]}`;
  const items = [
    { href: section('work'), label: t.nav.work },
    { href: section('experience'), label: t.nav.experience },
    { href: section('skills'), label: t.nav.skills },
    { href: section('contact'), label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md print:hidden">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href={home} aria-label={t.a11y.home} className="display -ml-1 px-1 py-2 text-[1.375rem] leading-none">
          {profile.name}
        </Link>
        <nav aria-label={t.a11y.mainNav}>
          <ul className="flex items-center gap-5 text-[0.9375rem] sm:gap-7">
            {items.map((item) => (
              <li key={item.href} className="hidden md:block">
                <Link href={item.href} className="py-2 text-slate transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.cv[locale]} className="py-2 font-semibold text-ink transition-colors hover:text-cobalt">
                {t.nav.cv}
              </Link>
            </li>
            <li className="border-l border-line pl-5 sm:pl-7">
              <LanguageSwitch locale={locale} label={t.a11y.languageSwitch} short={t.nav.language} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
