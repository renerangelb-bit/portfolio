import { experience } from '@/content/experience';
import { formatRange } from '@/content/dates';
import { getDictionary } from '@/i18n';
import { anchors, type Locale } from '@/i18n/config';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { SectionHeading } from './SectionHeading';

export function Experience({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section id={anchors.experience[locale]} aria-labelledby="experience-title" className="container-x scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading id="experience-title">{t.experience.title}</SectionHeading>
      <ol className="border-t border-line">
        {experience.map((job) => (
          <li key={job.org + job.start} className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8">
            <div className="text-[0.9375rem] text-slate md:col-span-3">
              <p className="tabular-nums">{formatRange(job.start, job.end, locale, t.experience.present)}</p>
              <p>{job.place[locale]}</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-lg leading-snug font-semibold sm:text-xl">
                {job.role[locale]}
                <span className="font-normal text-slate">, </span>
                {job.href ? (
                  <ExternalLink href={job.href} newTabLabel={t.a11y.opensInNewTab} className="link font-semibold">
                    {job.org}
                  </ExternalLink>
                ) : (
                  job.org
                )}
              </h3>
              <p className="mt-1 text-[0.9375rem] text-slate">
                {[job.orgDetail?.[locale], job.note?.[locale]].filter(Boolean).join('. ')}
              </p>
              <ul className="mt-4 max-w-[46rem] space-y-2 leading-relaxed">
                {job.bullets[locale].map((b) => (
                  <li key={b} className="relative pl-5">
                    <span aria-hidden="true" className="absolute top-[0.75em] left-0 h-0.5 w-2.5 bg-line" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
