import type { Locale } from '@/i18n/config';

const months: Record<Locale, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
};

/** '2026-01' → 'Jan 2026' / 'Ene 2026'. */
export function formatMonth(ym: string, locale: Locale): string {
  const [y, m] = ym.split('-').map(Number);
  return `${months[locale][m - 1]} ${y}`;
}

/** A date range; a missing end means "Present". */
export function formatRange(start: string, end: string | undefined, locale: Locale, present: string): string {
  return `${formatMonth(start, locale)} – ${end ? formatMonth(end, locale) : present}`;
}
