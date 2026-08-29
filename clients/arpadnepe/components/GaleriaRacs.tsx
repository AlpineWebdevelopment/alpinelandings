'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { GaleriaKategoria, GaleriaKep } from '@/content';

/**
 * Galéria-rács kategóriaszűrővel és nagyítóval.
 *
 * — A szűrő valódi gombok `aria-pressed` állapottal; a találatszám
 *   `aria-live` sorban jelenik meg.
 * — A nagyító natív <dialog>: a `showModal()` adja a fókuszcsapdát, az Escape
 *   kezelését, a hátteret, és záráskor visszaadja a fókuszt a bélyegképre.
 *   Nyíl billentyűkkel lapozható. Görgetés a háttérben zárolva.
 * — Nincs átmenet: a globals.css reduced-motion blokkja így nem szól bele.
 * — Bélyegkép: a gomb neve az alt („Nagyítás: …"), a kép maga alt="" — így a
 *   képernyőolvasó nem hallja kétszer.
 */
export function GaleriaRacs({
  kepek,
  kategoriak,
}: {
  kepek: GaleriaKep[];
  kategoriak: { kulcs: GaleriaKategoria; nev: string }[];
}) {
  const [szuro, setSzuro] = useState<GaleriaKategoria | 'mind'>('mind');
  const [nyitott, setNyitott] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const szurt = szuro === 'mind' ? kepek : kepek.filter((k) => k.kategoria === szuro);
  const darab = (kulcs: GaleriaKategoria) => kepek.filter((k) => k.kategoria === kulcs).length;

  // a <dialog> nyitása/zárása az állapot után
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (nyitott !== null && !d.open) d.showModal();
    if (nyitott === null && d.open) d.close();
  }, [nyitott]);

  // háttérgörgetés zárolása, amíg nyitva van
  useEffect(() => {
    if (nyitott === null) return;
    const elozo = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = elozo;
    };
  }, [nyitott]);

  const lepes = (irany: -1 | 1) => {
    setNyitott((n) => {
      if (n === null || szurt.length === 0) return n;
      return (n + irany + szurt.length) % szurt.length;
    });
  };

  const aktiv = nyitott !== null ? szurt[nyitott] : null;

  const gomb =
    'gomb inline-flex min-h-11 items-center gap-2 px-4 py-2 font-body text-sm font-bold transition';
  const gombAktiv = 'bg-accent text-onaccent';
  const gombInaktiv = 'border border-ink text-ink hover:bg-ink hover:text-paper';

  return (
    <div>
      <div role="group" aria-label="Kategória szerinti szűrés" className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={szuro === 'mind'}
          onClick={() => setSzuro('mind')}
          className={`${gomb} ${szuro === 'mind' ? gombAktiv : gombInaktiv}`}
        >
          Mind <span className="font-normal opacity-80">({kepek.length})</span>
        </button>
        {kategoriak.map((k) => (
          <button
            key={k.kulcs}
            type="button"
            aria-pressed={szuro === k.kulcs}
            onClick={() => setSzuro(k.kulcs)}
            className={`${gomb} ${szuro === k.kulcs ? gombAktiv : gombInaktiv}`}
          >
            {k.nev} <span className="font-normal opacity-80">({darab(k.kulcs)})</span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-4 font-body text-sm text-muted">
        {szurt.length} kép
        {szuro !== 'mind' ? ` — ${kategoriak.find((k) => k.kulcs === szuro)?.nev}` : ''}
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {szurt.map((k, i) => (
          <li key={k.slug}>
            <button
              type="button"
              onClick={() => setNyitott(i)}
              aria-label={`Nagyítás: ${k.alt}`}
              className="galeria-kep block w-full overflow-hidden border border-line bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={k.src}
                alt=""
                width={k.w}
                height={k.h}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="aspect-square h-auto w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setNyitott(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') lepes(1);
          if (e.key === 'ArrowLeft') lepes(-1);
        }}
        aria-labelledby="galeria-kepalairas"
        className="m-auto w-[min(96vw,80rem)] max-w-none border border-line bg-paper p-0 text-ink backdrop:bg-black/85"
      >
        {aktiv ? (
          <figure className="flex flex-col">
            <div className="relative h-[min(72vh,60rem)] w-full bg-black/90">
              <Image
                key={aktiv.slug}
                src={aktiv.src}
                alt={aktiv.alt}
                fill
                sizes="96vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <figcaption id="galeria-kepalairas" className="font-body text-sm text-ink2">
                <span className="font-semibold text-ink">
                  {nyitott !== null ? nyitott + 1 : 0}/{szurt.length}
                </span>{' '}
                {aktiv.alt}
              </figcaption>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => lepes(-1)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink px-3 font-body text-sm font-bold text-ink hover:bg-ink hover:text-paper"
                >
                  <span aria-hidden="true">←</span>
                  <span className="sr-only">Előző kép</span>
                </button>
                <button
                  type="button"
                  onClick={() => lepes(1)}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink px-3 font-body text-sm font-bold text-ink hover:bg-ink hover:text-paper"
                >
                  <span aria-hidden="true">→</span>
                  <span className="sr-only">Következő kép</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNyitott(null)}
                  className="inline-flex min-h-11 items-center justify-center bg-accent px-4 font-body text-sm font-bold text-onaccent hover:opacity-90"
                >
                  Bezárás
                </button>
              </div>
            </div>
          </figure>
        ) : null}
      </dialog>
    </div>
  );
}
