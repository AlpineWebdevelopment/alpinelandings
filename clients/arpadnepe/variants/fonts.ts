/**
 * Betűtípusok — mindhárom színséma ugyanezt a párost használja.
 *
 * Cinzel: vésett római kapitálisok, a kódexek és a kőfeliratok címbetűje.
 * EB Garamond: kódex-antikva, kurzívval — hosszú szövegre is kényelmes.
 *
 * MINDKETTŐN szerepel a 'latin-ext' subset. A next/font build közben hibát dob,
 * ha egy fontnak nincs latin-ext változata, tehát a sikeres `npm run build`
 * egyben azt is igazolja, hogy az ő / ű / Ő / Ű karakterek megvannak.
 * Ezen felül az `npm run check-fonts` a build kimenetéből ellenőrzi ugyanezt.
 */
import { Cinzel, EB_Garamond } from 'next/font/google';

export const cinzel = Cinzel({
  subsets: ['latin-ext'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const ebGaramond = EB_Garamond({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

/** Együtt alkalmazandó osztálynevek — a layoutok ezt teszik a gyökérre. */
export const betuValtozok = `${cinzel.variable} ${ebGaramond.variable}`;
