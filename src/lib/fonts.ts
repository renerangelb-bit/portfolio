import { Instrument_Sans } from 'next/font/google';

/**
 * Instrument Sans (SIL Open Font License), downloaded at build time and served from this domain.
 * The width axis gives condensed headlines (wdth 75) and normal body text (wdth 100) from one family.
 */
export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  axes: ['wdth'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const fontVariables = instrumentSans.variable;
