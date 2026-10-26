import type { ReactNode } from 'react';
import { experience } from '@/content/experience';
import { education, languages } from '@/content/education';
import { skills, skillLabel } from '@/content/skills';
import { projects, minorProjects } from '@/content/projects';
import { intro, profile } from '@/content/profile';
import { formatMonth, formatRange } from '@/content/dates';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';

/**
 * The CV as one A4 page of real text (good for applicant tracking systems).
 * `npm run cv:pdf` prints this page to public/cv/ with Chromium.
 */
export function CvDocument({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const contactRows: { label: string; href?: string }[][] = [
    [
      { label: profile.location[locale] },
      { label: profile.phone.display, href: profile.phone.href },
      { label: profile.email, href: `mailto:${profile.email}` },
    ],
    [
      { label: host(profile.url), href: profile.url },
      { label: profile.linkedin.label, href: profile.linkedin.href },
      { label: profile.github.label, href: profile.github.href },
    ],
  ];
  const academic = minorProjects.filter((p) => !p.name.en.includes('SITO'));

  return (
    <div className="cv-sheet mx-auto bg-white text-[9.3pt] leading-[1.4] text-ink shadow-[0_1px_2px_rgb(20_32_58/0.06),0_16px_40px_-16px_rgb(20_32_58/0.25)] print:shadow-none">
      <header>
        <h1 className="display text-[25pt] leading-none">{profile.fullName}</h1>
        <p className="mt-[5pt] text-[11pt] font-semibold">
          {profile.cvRole[locale]} <span className="font-normal text-slate">|</span> React, Next.js, TypeScript, Node.js, SQL
        </p>
        <div className="mt-[5pt] space-y-[1pt] text-[9pt]">
          {contactRows.map((row, r) => (
            <p key={r}>
              {row.map((c, i) => (
                <span key={c.label}>
                  {i > 0 && <span className="px-[6pt] text-line">|</span>}
                  {c.href ? (
                    <a href={c.href} className="text-cobalt">
                      {c.label}
                    </a>
                  ) : (
                    c.label
                  )}
                </span>
              ))}
            </p>
          ))}
        </div>
        <p className="mt-[4pt] text-[9pt] text-slate">
          {intro.availability[locale]}{' '}
          {languages.map((l) => `${l.name[locale]}: ${l.level[locale]}.`).join(' ')}
        </p>
      </header>

      <CvSection title={t.cv.summary}>
        <p>{intro.cvSummary[locale]}</p>
      </CvSection>

      <CvSection title={t.cv.experience}>
        <div className="space-y-[6pt]">
          {experience.map((job) => (
            <div key={job.org + job.start} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">
                  {job.role[locale]} <span className="font-normal text-slate">|</span> {job.org}
                </h3>
                <p className="shrink-0 text-[9pt] whitespace-nowrap text-slate tabular-nums">
                  {formatRange(job.start, job.end, locale, t.experience.present)}
                </p>
              </div>
              <p className="text-[9pt] text-slate">
                {[job.orgDetail?.[locale], job.place[locale], job.note?.[locale]].filter(Boolean).join('. ')}
              </p>
              <ul className="mt-[2pt] space-y-[1.5pt]">
                {job.bullets[locale].map((b) => (
                  <li key={b} className="relative pl-[10pt]">
                    <span aria-hidden="true" className="absolute left-0">
                      •
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CvSection>

      <CvSection title={t.cv.projects}>
        <div className="space-y-[3pt]">
          {projects.map((p) => (
            <div key={p.slug} className="break-inside-avoid">
              <p>
                <span className="font-semibold">{p.name[locale]}</span>, {p.status[locale].toLowerCase()}.{' '}
                <span className="text-slate">{p.stack.join(', ')}</span>
              </p>
              <p className="text-[9pt]">
                {p.links.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && <span className="px-[6pt] text-line">|</span>}
                    <a href={l.href} className="text-cobalt">
                      {host(l.href)}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
          {academic.map((p) => (
            <p key={p.name.en}>
              <span className="font-semibold">{p.name[locale]}</span> ({p.context[locale]}).{' '}
              <span className="text-slate">{p.stack.join(', ')}</span>
            </p>
          ))}
        </div>
      </CvSection>

      <CvSection title={t.cv.skills}>
        <ul className="space-y-[1.5pt]">
          {skills.map((g) => (
            <li key={g.name.en}>
              <span className="font-semibold">{g.name[locale]}:</span> {g.items.map((s) => skillLabel(s, locale)).join(', ')}
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title={t.cv.education}>
        {[...new Set(education.map((d) => d.school))].map((school) => (
          <div key={school}>
            <p className="font-semibold">{school}</p>
            <ul>
              {education
                .filter((d) => d.school === school)
                .map((d) => (
                  <li key={d.title.en} className="flex items-baseline justify-between gap-4">
                    <span>{d.title[locale]}</span>
                    <span className="shrink-0 text-[9pt] whitespace-nowrap text-slate tabular-nums">
                      {formatMonth(d.start, locale)} – {formatMonth(d.end, locale)}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </CvSection>
    </div>
  );
}

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-[9pt]">
      <h2 className="mb-[4pt] border-b border-line pb-[2pt] text-[10.5pt] font-bold text-cobalt">{title}</h2>
      {children}
    </section>
  );
}
