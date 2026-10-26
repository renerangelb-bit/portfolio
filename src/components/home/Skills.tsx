import { skills, skillLabel } from '@/content/skills';
import { education, languages } from '@/content/education';
import { formatMonth } from '@/content/dates';
import { getDictionary } from '@/i18n';
import { anchors, type Locale } from '@/i18n/config';
import { SectionHeading } from './SectionHeading';

export function Skills({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section id={anchors.skills[locale]} aria-labelledby="skills-title" className="container-x scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading id="skills-title" intro={t.skills.intro}>
        {t.skills.title}
      </SectionHeading>
      <dl className="border-t border-line">
        {skills.map((g) => (
          <div key={g.name.en} className="grid gap-1 border-b border-line py-5 md:grid-cols-12 md:gap-8">
            <dt className="font-semibold md:col-span-3">{g.name[locale]}</dt>
            <dd className="leading-relaxed md:col-span-9">{g.items.map((s) => skillLabel(s, locale)).join(', ')}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <h3 className="display-tight text-2xl sm:text-[1.75rem]">{t.education.title}</h3>
          <ul className="mt-5 space-y-5">
            {education.map((d) => (
              <li key={d.title.en}>
                <p className="font-semibold leading-snug">{d.title[locale]}</p>
                <p className="mt-0.5 text-[0.9375rem] text-slate">
                  {d.school}, <span className="tabular-nums">{formatMonth(d.start, locale)} – {formatMonth(d.end, locale)}</span>
                  {d.note?.[locale] ? `. ${d.note[locale]}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <h3 className="display-tight text-2xl sm:text-[1.75rem]">{t.education.languages}</h3>
          <ul className="mt-5 space-y-5">
            {languages.map((l) => (
              <li key={l.name.en}>
                <p className="font-semibold">{l.name[locale]}</p>
                <p className="mt-0.5 text-[0.9375rem] text-slate">{l.level[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
