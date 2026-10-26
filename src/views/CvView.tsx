import Link from 'next/link';
import { getDictionary } from '@/i18n';
import { routes, type Locale } from '@/i18n/config';
import { profile } from '@/content/profile';
import { CvDocument } from '@/components/cv/CvDocument';

export function CvView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="pt-8 sm:pt-12 print:p-0">
      <div className="container-x mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <p className="display text-[2.5rem]">{t.meta.cvTitle}</p>
          <p className="mt-1 text-slate">{t.cv.print}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={routes.home[locale]} className="link text-[0.9375rem]">
            {t.cv.backHome}
          </Link>
          <a href={profile.cvPdf[locale]} download className="btn btn-primary">
            {t.cv.download}
          </a>
        </div>
      </div>
      <div className="container-x print:max-w-none print:p-0">
        <CvDocument locale={locale} />
      </div>
    </div>
  );
}
