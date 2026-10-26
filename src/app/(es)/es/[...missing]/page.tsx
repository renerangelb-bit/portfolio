import { notFound } from 'next/navigation';

/**
 * Catches every URL that doesn't match a page in this language, so visitors get the translated
 * 404 (not-found.tsx) inside the normal layout instead of the framework default.
 */
export default function CatchAll() {
  notFound();
}
