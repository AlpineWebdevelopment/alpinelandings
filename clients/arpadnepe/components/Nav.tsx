import Link from 'next/link';
import { egyesulet, menu } from '@/content';
import { variantHref, type VariantConfig } from '@/variants/config';
import { LogoKep } from './Logo';

/**
 * Fejléc — mindkét változatban ugyanaz a menü + egy elsődleges CTA.
 * Az asztali sorban a Kezdőlap nem szerepel (a logó a kezdőlap hivatkozása),
 * így a nyolc aloldal xl-től elfér; alatta a <details>/<summary> mobilmenü
 * hozza mind a kilenc pontot — billentyűzettel kezelhető, JS nélkül.
 */
export function Nav({ v }: { v: VariantConfig }) {
  const cta = { cimke: 'Válassz edzést', href: variantHref(v.key, '#kapcsolat') };

  // inline-flex + min-h-6: a menüpont célterülete így legalább 24 px magas
  // (WCAG 2.5.8), miközben a fejléc magassága nem változik — azt a logó és
  // a CTA adja.
  const link =
    'inline-flex min-h-6 items-center font-body text-sm font-medium text-ink2 transition-colors hover:text-accent';

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href={variantHref(v.key)}
          className="group flex shrink-0 items-center gap-3 py-2"
        >
          <LogoKep className="h-11 w-11 sm:h-12 sm:w-12" betolt="eager" />
          <span className="flex flex-col">
            <span className="font-display text-lg font-bold leading-none text-ink">
              Árpád Népe
            </span>
            <span className="mt-1 hidden font-body text-xs uppercase leading-none tracking-[0.16em] text-muted sm:inline">
              Egyesület
            </span>
          </span>
        </Link>

        <nav aria-label="Fő navigáció" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {menu.filter((m) => m.href !== '').map((m) => (
              <li key={m.href || 'kezdolap'}>
                <Link href={variantHref(v.key, m.href)} className={link}>
                  {m.cimke}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={egyesulet.telefonHref}
            className="hidden min-h-11 items-center font-body text-sm font-semibold text-ink 2xl:inline-flex"
          >
            {egyesulet.telefon}
          </a>
          <Link
            href={cta.href}
            className="hidden min-h-11 items-center bg-accent px-4 py-2.5 font-body text-sm font-bold text-onaccent transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {cta.cimke}
          </Link>

          <details className="relative xl:hidden">
            <summary
              className="flex min-h-11 cursor-pointer list-none items-center gap-2 border border-line px-3.5 py-2 font-body text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden"
              aria-label="Menü megnyitása"
            >
              <span aria-hidden="true" className="flex flex-col gap-[3px]">
                <span className="block h-px w-4 bg-ink" />
                <span className="block h-px w-4 bg-ink" />
                <span className="block h-px w-4 bg-ink" />
              </span>
              Menü
            </summary>
            <nav
              aria-label="Fő navigáció (mobil)"
              className="absolute right-0 top-[calc(100%+0.5rem)] w-64 border border-line bg-paper p-2 shadow-xl"
            >
              <ul className="flex flex-col">
                {menu.map((m) => (
                  <li key={m.href || 'kezdolap-mobil'}>
                    <Link
                      href={variantHref(v.key, m.href)}
                      className="block px-3 py-3.5 font-body text-base text-ink2 hover:bg-paper2 hover:text-accent"
                    >
                      {m.cimke}
                    </Link>
                  </li>
                ))}
                <li className="mt-1 border-t border-line pt-1">
                  <Link
                    href={cta.href}
                    className="block bg-accent px-3 py-3.5 text-center font-body text-base font-bold text-onaccent"
                  >
                    {cta.cimke}
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
