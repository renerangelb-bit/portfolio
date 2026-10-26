import { minorProjects } from '@/content/projects';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function OtherProjects({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="mt-20 sm:mt-24">
      <h3 className="display-tight text-2xl sm:text-[1.75rem]">{t.work.otherTitle}</h3>
      <p className="mt-2 text-slate">{t.work.otherIntro}</p>
      <ul className="mt-6 border-t border-line">
        {minorProjects.map((p) => (
          <li key={p.name.en} className="grid gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="font-semibold">
                {p.href ? (
                  <ExternalLink href={p.href} newTabLabel={t.a11y.opensInNewTab} className="link">
                    {p.name[locale]}
                  </ExternalLink>
                ) : (
                  p.name[locale]
                )}
              </p>
              <p className="text-[0.9375rem] text-slate">{p.context[locale]}</p>
            </div>
            <p className="text-[0.9375rem] leading-relaxed md:col-span-5">{p.description[locale]}</p>
            <p className="text-[0.9375rem] text-slate md:col-span-3">{p.stack.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
