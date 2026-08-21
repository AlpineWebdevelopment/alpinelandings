import Link from 'next/link';
import { egyesulet, helyszinek, linkek, menu } from '@/content';
import { variantHref, type VariantConfig } from '@/variants/config';
import { Ornament } from './Ornament';

export function Footer({ v }: { v: VariantConfig }) {
  return (
    <footer className="border-t border-line bg-paper2">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14">
        <Ornament className="mb-10" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold leading-tight text-ink">
              {egyesulet.rovidNev}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ink2">
              {egyesulet.teljesNev}
            </p>
            <p className="mt-4 font-body text-sm text-ink2">
              Elnök: <strong className="font-semibold text-ink">{egyesulet.elnok}</strong>
            </p>
          </div>

          <div>
            <h2 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Elérhetőség
            </h2>
            <ul className="mt-4 space-y-2 font-body text-sm text-ink2">
              <li>
                <a href={egyesulet.telefonHref} className="inline-block py-1 hover:text-accent">
                  {egyesulet.telefon}
                </a>
              </li>
              <li>
                <a href={`mailto:${egyesulet.email}`} className="inline-block break-all py-1 hover:text-accent">
                  {egyesulet.email}
                </a>
              </li>
              <li className="pt-2 text-muted">Székhely: {egyesulet.szekhely}</li>
              <li className="text-muted">Adószám: {egyesulet.adoszam}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Helyszínek
            </h2>
            <ul className="mt-4 space-y-3 font-body text-sm text-ink2">
              {helyszinek.map((h) => (
                <li key={h.id}>
                  <span className="block font-semibold text-ink">{h.nev}</span>
                  <span className="block text-muted">{h.cim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Oldalak
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 font-body text-sm text-ink2">
              {menu.map((m) => (
                <li key={`footer-${m.href || 'kezdolap'}`}>
                  <Link href={variantHref(v.key, m.href)} className="inline-block py-1 hover:text-accent">
                    {m.cimke}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-3 font-body text-sm">
              <li>
                <a
                  href={linkek.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-link underline-offset-4 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={linkek.googleErtekeles}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-link underline-offset-4 hover:underline"
                >
                  Értékelj minket
                </a>
              </li>
              <li>
                <a
                  href={linkek.hirlevel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 text-link underline-offset-4 hover:underline"
                >
                  Hírlevél
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 font-body text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {egyesulet.teljesNev} · {egyesulet.bank}: {egyesulet.bankszamla}
          </p>
          <p>
            Bemutató oldal — a tartalom forrása a{' '}
            <a
              href={linkek.jelenlegiOldal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 underline underline-offset-2 hover:text-accent"
            >
              jelenlegi weboldal
            </a>
            .{' '}
            <Link href="/" className="inline-block py-1 underline underline-offset-2 hover:text-accent">
              Változatválasztó
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
