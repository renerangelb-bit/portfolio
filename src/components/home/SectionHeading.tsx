import type { ReactNode } from 'react';

/** Section title used across the home page. */
export function SectionHeading({ id, children, intro }: { id: string; children: ReactNode; intro?: ReactNode }) {
  return (
    <div className="mb-8 sm:mb-10">
      <h2 id={id} className="display text-[2.5rem] sm:text-[3.25rem]">
        {children}
      </h2>
      {intro ? <p className="mt-3 max-w-[38rem] text-slate">{intro}</p> : null}
    </div>
  );
}
