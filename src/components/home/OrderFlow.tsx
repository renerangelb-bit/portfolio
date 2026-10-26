import Link from 'next/link';
import type { CSSProperties } from 'react';
import { getDictionary } from '@/i18n';
import { projectPath, type Locale } from '@/i18n/config';

/**
 * The six order statuses I used to move by hand, and later built as software.
 * The line fills and the steps light up once on page load (CSS only; skipped with reduced motion).
 */
export function OrderFlow({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const steps = t.flow.steps;
  return (
    <section aria-labelledby="flow-title" className="container-x">
      <div className="rounded-xl border border-line bg-white px-5 py-7 sm:px-8 sm:py-9">
        <h2 id="flow-title" className="display-tight text-2xl sm:text-[1.75rem]">
          {t.flow.title}
        </h2>

        <ol aria-label={t.flow.stepsLabel} className="relative mt-7 grid gap-5 md:grid-cols-6 md:gap-3">
          {/* Track and fill: vertical on phones, horizontal from md up. */}
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-line md:hidden" />
          <span aria-hidden="true" className="flow-fill-y absolute top-2 bottom-2 left-[7px] w-0.5 bg-cobalt md:hidden" />
          <span aria-hidden="true" className="absolute top-[7px] right-[calc(100%/12)] left-[calc(100%/12)] hidden h-0.5 bg-line md:block" />
          <span
            aria-hidden="true"
            className="flow-fill-x absolute top-[7px] right-[calc(100%/12)] left-[calc(100%/12)] hidden h-0.5 bg-cobalt md:block"
          />
          {steps.map((step, i) => (
            <li
              key={step}
              style={{ '--i': i } as CSSProperties}
              className="relative flex items-center gap-4 md:flex-col md:items-center md:gap-3 md:text-center"
            >
              <span aria-hidden="true" className="flow-dot relative size-4 shrink-0 rounded-full border-2" />
              <span className="flow-label text-[0.9375rem] leading-snug font-semibold text-ink">
                <span className="sr-only">{i + 1}. </span>
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-slate md:grid-cols-2 md:gap-10">
          <p>{t.flow.byHand}</p>
          <p>
            {t.flow.asSoftware}{' '}
            <Link href={projectPath('volviendo-al-origen')[locale]} className="link">
              {t.flow.link}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
