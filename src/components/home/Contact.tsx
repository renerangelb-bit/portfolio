import { getDictionary } from '@/i18n';
import { anchors, type Locale } from '@/i18n/config';
import { profile } from '@/content/profile';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { SectionHeading } from './SectionHeading';

export function Contact({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section id={anchors.contact[locale]} aria-labelledby="contact-title" className="container-x scroll-mt-20 pt-24 sm:pt-32">
      <SectionHeading id="contact-title">{t.contact.title}</SectionHeading>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="max-w-[34rem] text-lg leading-relaxed">{t.contact.lead}</p>
          <p className="mt-5">
            <a
              href={`mailto:${profile.email}`}
              className="display-tight inline-block text-[1.875rem] break-all text-cobalt underline decoration-cobalt/30 decoration-2 underline-offset-[0.15em] transition-colors hover:text-cobalt-deep hover:decoration-current sm:text-[2.75rem]"
            >
              {profile.email}
            </a>
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
            <li>
              <ExternalLink href={profile.linkedin.href} newTabLabel={t.a11y.opensInNewTab} className="link font-semibold">
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={profile.github.href} newTabLabel={t.a11y.opensInNewTab} className="link font-semibold">
                GitHub
              </ExternalLink>
            </li>
            <li>
              <a href={profile.cvPdf[locale]} download className="link font-semibold">
                {t.hero.downloadCv}
              </a>
            </li>
          </ul>
        </div>
        <aside className="self-start rounded-lg border border-line bg-white p-6 md:col-span-5">
          <p className="leading-relaxed">{t.contact.nexa}</p>
          <p className="mt-3">
            <ExternalLink href={profile.nexa} newTabLabel={t.a11y.opensInNewTab} className="link font-semibold">
              {t.contact.nexaLink}
            </ExternalLink>
          </p>
        </aside>
      </div>
    </section>
  );
}
