import Link from 'next/link';
import { getDictionary } from '@/i18n';
import { routes, type Locale } from '@/i18n/config';

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="container-x pt-20 sm:pt-28">
      <p className="text-slate tabular-nums">404</p>
      <h1 className="display mt-2 text-[3rem] sm:text-[4.5rem]">{t.notFound.title}</h1>
      <p className="mt-4 max-w-[34rem] text-lg text-slate">{t.notFound.body}</p>
      <Link href={routes.home[locale]} className="btn btn-primary mt-8">
        {t.notFound.home}
      </Link>
    </section>
  );
}
