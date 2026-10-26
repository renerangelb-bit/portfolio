import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { profile } from '@/content/profile';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className="mt-24 border-t border-line print:hidden">
      <div className="container-x flex flex-col gap-2 py-8 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>
          {t.footer.built}{' '}
          <ExternalLink href={profile.sourceUrl} newTabLabel={t.a11y.opensInNewTab} className="link">
            {t.footer.source}
          </ExternalLink>
        </p>
      </div>
    </footer>
  );
}
