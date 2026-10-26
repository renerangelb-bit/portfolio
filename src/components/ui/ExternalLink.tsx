import type { ReactNode } from 'react';

/** A link to another site that opens in a new tab and says so to screen readers. */
export function ExternalLink({
  href,
  children,
  className,
  newTabLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  newTabLabel: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}
