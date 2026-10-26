import Image from 'next/image';
import type { ProjectImage } from '@/content/projects';
import type { Locale } from '@/i18n/config';

/** A screenshot inside a minimal browser window. The bar shows the site's address. */
export function BrowserFrame({
  image,
  locale,
  host,
  priority,
  sizes = '(min-width: 1184px) 1088px, 100vw',
}: {
  image: ProjectImage;
  locale: Locale;
  host?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_1px_2px_rgb(20_32_58/0.06),0_12px_32px_-12px_rgb(20_32_58/0.18)]">
      <div className="flex h-9 items-center border-b border-line bg-mist/60 px-4">
        {host ? (
          <span className="truncate rounded bg-white px-3 py-0.5 text-xs text-slate" aria-hidden="true">
            {host}
          </span>
        ) : null}
      </div>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt[locale]}
        sizes={sizes}
        preload={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** A phone screenshot with a simple device outline. */
export function PhoneFrame({ image, locale, sizes = '(min-width: 768px) 260px, 45vw' }: { image: ProjectImage; locale: Locale; sizes?: string }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-ink bg-ink shadow-[0_12px_32px_-12px_rgb(20_32_58/0.35)]">
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt[locale]}
        sizes={sizes}
        className="block h-auto w-full rounded-[1.35rem]"
      />
    </div>
  );
}
