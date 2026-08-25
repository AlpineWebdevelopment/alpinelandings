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
import { Cinzel, Cormorant_Unicase, EB_Garamond, Grenze_Gotisch } from 'next/font/google';

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

/**
 * A 2. változat (Sztyeppe) címbetűje: unicase — a kis- és nagybetűk egy
 * magasságban futnak, mint egy vésett feliraton. Nincs benne semmi
 * kódexes vagy gótikus utalás, ami a 890 előtti korban anakronizmus lenne.
 */
export const cormorantUnicase = Cormorant_Unicase({
  subsets: ['latin-ext'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant-unicase',
  display: 'swap',
});

/**
 * A 3. változat (Kódex) címbetűje: gótikus textúra. A középkori magyar
 * oklevelek és kódexek írásképe — nagybetűs szedésben olvashatatlan lenne,
 * ezért ott a `text-transform: uppercase` ki van kapcsolva (app/globals.css).
 */
export const grenzeGotisch = Grenze_Gotisch({
  subsets: ['latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-grenze-gotisch',
  display: 'swap',
});

/** Együtt alkalmazandó osztálynevek — a gyökérlayout ezt teszi a <html>-re. */
export const betuValtozok = [
  cinzel.variable,
  ebGaramond.variable,
  cormorantUnicase.variable,
  grenzeGotisch.variable,
].join(' ');
