import Image from 'next/image';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { intro, profile } from '@/content/profile';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="hero-title" className="container-x pt-10 pb-12 sm:pt-16 md:pb-16">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8 lg:col-span-8">
          <h1 id="hero-title" className="display text-[2.875rem] sm:text-[4rem] lg:text-[5.25rem]">
            {intro.headline[locale]}
          </h1>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-ink/90 sm:text-xl sm:leading-relaxed">{intro.lead[locale]}</p>
          {profile.available && (
            <p className="mt-5 flex max-w-[38rem] items-start gap-2.5 text-[0.9375rem] text-slate">
              <span aria-hidden="true" className="mt-[0.5em] size-2 shrink-0 rounded-full bg-mint ring-4 ring-mint/15" />
              <span>{intro.availability[locale]}</span>
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {t.hero.email}
            </a>
            <a href={profile.cvPdf[locale]} className="btn btn-secondary" download>
              {t.hero.downloadCv}
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
            <li>
              <ExternalLink href={profile.linkedin.href} newTabLabel={t.a11y.opensInNewTab} className="link">
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.github.href} newTabLabel={t.a11y.opensInNewTab} className="link">
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className="row-start-1 md:col-span-4 md:row-start-auto md:pt-3">
          <Image
            src="/images/rene.webp"
            width={320}
            height={400}
            alt={t.a11y.photoAlt}
            preload
            sizes="(min-width: 768px) 280px, 112px"
            className="h-auto w-28 rounded-md bg-mist md:ml-auto md:w-full md:max-w-[17.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
