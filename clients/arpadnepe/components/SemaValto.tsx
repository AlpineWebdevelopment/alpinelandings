'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  SEMA_TAROLO,
  semaKulcsok,
  semaValasztOsztaly,
  semak,
  variantKeys,
  variants,
  type SemaKulcs,
  type VariantKey,
} from '@/variants/config';

/**
 * LEBEGŐ BEMUTATÓVÁLTÓ — a demó kezelőszerve, nem a leendő oldal része.
 *
 * Két dolgot kapcsol, a jobb alsó sarokból:
 *
 *   VÁLTOZAT — átvisz a másik két demóra (/a, /b, /c), és MEGTARTJA az
 *   aktuális aloldalt: a /a/akciok-ról a /c/akciok-ra lép, nem a kezdőlapra.
 *
 *   SZÍNSÉMA — a <html> elemre tesz egy felülíró osztályt (`valaszt-*`).
 *   Mivel a teljes paletta CSS-változókból jön, ez az egy osztály átszínezi
 *   az egész oldalt. A változat saját alapértelmezett sémája a burkolón
 *   marad; a felülírás csak fajsúlyban veri.
 *
 * A választás localStorage-ba kerül, tehát aloldalra lépve és a három
 * változat között váltogatva is megmarad. Az első festés előtt a layoutba
 * ágyazott `SEMA_INIT_SCRIPT` állítja be, hogy ne legyen színvillanás.
 *
 * Akadálymentesség: valódi `<button>`-ok, `aria-expanded` / `aria-current`,
 * Escape-re és kívülre kattintásra zár, fókusz a nyitógombra tér vissza,
 * és minden célpont legalább 44 px magas.
 */
export function SemaValto({ alap }: { alap: SemaKulcs }) {
  // null = még nem tudjuk, mi van eltárolva (szerveren nincs localStorage)
  const [valasztott, setValasztott] = useState<SemaKulcs | null>(null);
  const [nyitva, setNyitva] = useState(false);
  const dobozRef = useRef<HTMLDivElement>(null);
  const gombRef = useRef<HTMLButtonElement>(null);
  const utvonal = usePathname();

  const aktiv = valasztott ?? alap;

  /*
    Az aktuális változat és az alatta lévő aloldal az útvonalból. Így a
    változatváltás ugyanarra az aloldalra visz át, nem a kezdőlapra.
  */
  const egyezes = /^\/([abc])(\/.*)?$/.exec(utvonal ?? '');
  const aktivValtozat = (egyezes?.[1] ?? '') as VariantKey | '';
  const alUtvonal = egyezes?.[2] ?? '';

  // induláskor az eltárolt séma
  useEffect(() => {
    let tarolt: string | null = null;
    try {
      tarolt = localStorage.getItem(SEMA_TAROLO);
    } catch {
      /* privát mód, letiltott tároló — marad az alapértelmezés */
    }
    setValasztott(
      tarolt && (semaKulcsok as string[]).includes(tarolt) ? (tarolt as SemaKulcs) : alap,
    );
  }, [alap]);

  // a felülíró osztály felvitele a <html>-re
  useEffect(() => {
    const html = document.documentElement;
    for (const k of semaKulcsok) html.classList.remove(semaValasztOsztaly(k));
    html.classList.add(semaValasztOsztaly(aktiv));
  }, [aktiv]);

  // Escape és kívülre kattintás
  useEffect(() => {
    if (!nyitva) return;
    const billentyu = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setNyitva(false);
        gombRef.current?.focus();
      }
    };
    const kattintas = (e: MouseEvent) => {
      if (!dobozRef.current?.contains(e.target as Node)) setNyitva(false);
    };
    document.addEventListener('keydown', billentyu);
    document.addEventListener('mousedown', kattintas);
    return () => {
      document.removeEventListener('keydown', billentyu);
      document.removeEventListener('mousedown', kattintas);
    };
  }, [nyitva]);

  const valaszt = (k: SemaKulcs) => {
    setValasztott(k);
    try {
      localStorage.setItem(SEMA_TAROLO, k);
    } catch {
      /* nem baj, csak nem marad meg a következő oldalra */
    }
    setNyitva(false);
    gombRef.current?.focus();
  };

  return (
    <div ref={dobozRef} className="fixed bottom-4 right-4 z-[60] print:hidden sm:bottom-6 sm:right-6">
      {/* mindig a DOM-ban van, csak rejtve — így az aria-controls valódi
          elemre mutat, a rejtett gombok pedig nem fókuszálhatók */}
      <div
        id="sema-valto-panel"
        hidden={!nyitva}
        className="mb-3 max-h-[min(78vh,34rem)] w-[17rem] overflow-y-auto border border-line bg-card shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]"
      >
        <p className="border-b border-line px-4 py-3 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
          Bemutató — változat
        </p>

        <ul className="border-b border-line p-2">
          {variantKeys.map((k) => {
            const ez = k === aktivValtozat;
            return (
              <li key={k}>
                <Link
                  href={`/${k}${alUtvonal}`}
                  aria-current={ez ? 'page' : undefined}
                  onClick={() => setNyitva(false)}
                  className={`flex min-h-12 w-full items-center gap-3 px-3 py-2.5 text-left font-body text-base transition-colors ${
                    ez ? 'bg-accent/10 font-semibold text-ink' : 'text-ink2 hover:bg-paper2'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="w-5 shrink-0 font-display text-sm font-bold uppercase text-accent"
                  >
                    {k}
                  </span>
                  <span className="min-w-0 flex-1">{variants[k].alcim}</span>
                  {ez ? (
                    <span aria-hidden="true" className="shrink-0 text-accent">
                      ✓
                    </span>
                  ) : null}
                  <span className="sr-only">{ez ? ' — jelenleg ezt nézed' : ''}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="border-b border-line px-4 py-3 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
          Bemutató — színséma
        </p>

        <ul className="p-2">
          {semaKulcsok.map((k) => {
            const s = semak[k];
            const ez = k === aktiv;
            return (
              <li key={k}>
                <button
                  type="button"
                  onClick={() => valaszt(k)}
                  aria-current={ez ? 'true' : undefined}
                  className={`flex min-h-12 w-full items-center gap-3 px-3 py-2.5 text-left font-body text-base transition-colors ${
                    ez ? 'bg-accent/10 font-semibold text-ink' : 'text-ink2 hover:bg-paper2'
                  }`}
                >
                  <span aria-hidden="true" className="flex shrink-0 gap-0.5">
                    {s.paletta.slice(0, 3).map((sz) => (
                      <span
                        key={sz.hex}
                        className="block h-5 w-2.5 border border-black/15"
                        style={{ background: sz.hex }}
                      />
                    ))}
                  </span>
                  <span className="min-w-0 flex-1">{s.nev}</span>
                  {ez ? (
                    <span aria-hidden="true" className="shrink-0 text-accent">
                      ✓
                    </span>
                  ) : null}
                  <span className="sr-only">{ez ? ' — jelenleg ez aktív' : ''}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-line px-4 py-3">
          <p className="font-body text-sm leading-snug text-muted">
            A változatváltás az aktuális aloldalon marad; a szín mindenhová átjön.
          </p>
          <Link
            href="/"
            onClick={() => setNyitva(false)}
            className="mt-1 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
          >
            Áttekintő oldal <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <button
        ref={gombRef}
        type="button"
        onClick={() => setNyitva((n) => !n)}
        aria-expanded={nyitva}
        aria-controls="sema-valto-panel"
        className="ml-auto flex min-h-12 items-center gap-2.5 border border-accent2/70 bg-card px-4 py-3 font-body text-sm font-bold text-ink shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)] transition-colors hover:bg-paper2"
      >
        <span aria-hidden="true" className="flex shrink-0 gap-0.5">
          {semak[aktiv].paletta.slice(0, 3).map((sz) => (
            <span
              key={sz.hex}
              className="block h-5 w-2.5 border border-black/15"
              style={{ background: sz.hex }}
            />
          ))}
        </span>
        <span className="hidden sm:inline">{semak[aktiv].nev}</span>
        <span className="sr-only">
          Bemutatóváltó — jelenlegi változat: {aktivValtozat ? variants[aktivValtozat].alcim : '—'},
          színséma: {semak[aktiv].nev}
        </span>
      </button>
    </div>
  );
}
