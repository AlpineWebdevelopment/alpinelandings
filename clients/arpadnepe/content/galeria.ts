/**
 * Galéria — az egyesület 2026. 08. 28-án átadott fotóiból.
 *
 * A kézirat a content/galeria.json (nyers fájl → slug, alt, kategória); a
 * méreteket a scripts/kepek.mjs írja a content/galeria.meretek.json fájlba a
 * public/galeria/*.webp legyártásakor. A nyers, 110 MB-os anyag a
 * forras/kepek/ alatt van, és NINCS a gitben.
 *
 * Alt-szöveg elve: az, ami a képen látszik. Hely, esemény, év csak akkor, ha
 * a fájlnév mondja (Lepenysutes_Cinkotan, 2014 majalis…); személynév soha.
 */

import kezirat from './galeria.json';
import meretek from './galeria.meretek.json';

export type GaleriaKategoria =
  | 'ijaszat'
  | 'vivas'
  | 'kezmuves'
  | 'jurta'
  | 'rendezveny'
  | 'tarsasjatek'
  | 'kozosseg';

export const galeriaKategoriak: { kulcs: GaleriaKategoria; nev: string }[] = [
  { kulcs: 'ijaszat', nev: 'Íjászat' },
  { kulcs: 'vivas', nev: 'Vívás, fegyverdobás' },
  { kulcs: 'kezmuves', nev: 'Kézművesség' },
  { kulcs: 'jurta', nev: 'Jurta, kiállítás' },
  { kulcs: 'rendezveny', nev: 'Rendezvények' },
  { kulcs: 'tarsasjatek', nev: 'Társasjáték' },
  { kulcs: 'kozosseg', nev: 'Közösségi élet' },
];

export type GaleriaKep = {
  slug: string;
  src: string;
  alt: string;
  kategoria: GaleriaKategoria;
  kiemelt: boolean;
  w: number;
  h: number;
};

type Meret = { w: number; h: number };
const meretTabla = meretek as Record<string, Meret>;

/** Minden kép a kézirat sorrendjében — a kiemeltek elöl. */
export const galeria: GaleriaKep[] = kezirat.kepek
  .map((k) => {
    const m = meretTabla[k.slug];
    if (!m) throw new Error(`Nincs méret a galériaképhez: ${k.slug} — futtasd: node scripts/kepek.mjs`);
    return {
      slug: k.slug,
      src: `/galeria/${k.slug}.webp`,
      alt: k.alt,
      kategoria: k.kategoria as GaleriaKategoria,
      kiemelt: Boolean(k.kiemelt),
      w: m.w,
      h: m.h,
    };
  })
  .sort((a, b) => Number(b.kiemelt) - Number(a.kiemelt));

export function galeriaKep(slug: string): GaleriaKep {
  const k = galeria.find((x) => x.slug === slug);
  if (!k) throw new Error(`Ismeretlen galériakép: ${slug}`);
  return k;
}
