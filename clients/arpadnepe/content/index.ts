/**
 * Közös tartalomréteg — mindkét változat (A, B) ugyanezt fogyasztja.
 * A változatok kizárólag tervezésben és kompozícióban térnek el, tényekben soha.
 *
 * Tartalomforrás: https://arpadnepe.mozello.hu/ (2026. 08. 19-i letöltés), valamint
 * az egyesület 2026. 08. 28-án átadott anyagai (forras/ mappa: 2026–27-es
 * táblázat, árlista, eszközbérlés, plakátok, szabályzatok, beiratkozó lap).
 * Kivétel: content/minta.ts — kizárólag MINTA jelvénnyel megjelenő helykitöltők.
 */

export * from './egyesulet';
export * from './edzesek';
export * from './programok';
export * from './referenciak';
export * from './kozossegi';
export * from './dokumentumok';
export * from './akciok';
export * from './minta';
export * from './foglalkozasok';
export * from './galeria';
export * from './hirmondo';
export * from './szabalyzatok';
export * from './jelentkezesiLap';

/**
 * Fotók a jelenlegi oldal saját képgalériájából, az ottani képaláírásokkal —
 * plusz a hero fotója az egyesület 2026. 08. 28-án átadott képeiből
 * (forras/kepek/2022. 03. 02. 22_50_19.webp → scripts/kepek.mjs --hero).
 * A többi átadott fotó a content/galeria.ts galériájában van.
 *
 * Csak az oldalon MEGJELENŐ fotók vannak itt: amelyikre nem hivatkozik egyetlen
 * oldal sem, az nem kerül a public/ alá (forras/nem-hasznalt/, .gitignore-ban).
 */
export const fotok = {
  heroFegyverek: {
    src: '/foto/hero-fegyverek.webp',
    alt: 'Íj, tegez, fokos és szablya egy fa állványon a fűben',
  },
  ijaszatOktatas: { src: '/foto/ijaszat-oktatas.webp', alt: 'Íjászat oktatása iskolás csoportoknak' },
  landzsavetes: { src: '/foto/landzsavetes.webp', alt: 'Lándzsavetés oktatása' },
  jurtakucko: { src: '/foto/jurtakucko.webp', alt: 'Jurtakuckó apróságoknak' },
  csataGyerekekkel: { src: '/foto/csata-gyerekekkel.webp', alt: 'Több gyerek csatája az oktató ellen' },
  fegyvermustra: { src: '/foto/fegyvermustra.webp', alt: 'Fegyvermustra' },
  nemezTulipan: { src: '/foto/nemez-tulipan.webp', alt: 'Kézműves foglalkozás, nemez tulipán készítése' },
  rovasiras: { src: '/foto/rovasiras.webp', alt: 'Kézműves foglalkozás, rovásírás tintával, nád pennával' },
  fegyveresBemutato: { src: '/foto/fegyveres-bemutato.webp', alt: 'Fegyveres harci bemutató, fokosbemutató' },
  jurtaallitas: { src: '/foto/jurtaallitas.webp', alt: 'Közös jurtaállítás' },
  lepenysutes: { src: '/foto/lepenysutes.webp', alt: 'Lepénysütés' },
  tanchaz: { src: '/foto/tanchaz.webp', alt: 'Moldvai családi táncház' },
  borKarkoto: { src: '/foto/bor-karkoto.webp', alt: 'Kézművesség, bőr karkötő készítése' },
  nagyJurta: { src: '/foto/nagy-jurta-kurultaj.webp', alt: 'A nagy jurtánk a Kurultáj díszvacsoráján' },
  sisakproba: { src: '/foto/sisakproba.webp', alt: 'Sisakpróba' },
  gyermekIjaszverseny: { src: '/foto/gyermek-ijaszverseny.webp', alt: 'Gyermek íjászverseny' },
  tarsasjatek: { src: '/foto/tarsasjatek.webp', alt: 'Táblás társasjátékok' },
  kisJurtaBelul: { src: '/foto/kis-jurta-belul.webp', alt: 'A kis jurta belülről' },
  gabonaorlo: { src: '/foto/gabonaorlo.webp', alt: 'Gabonaőrlős játszótér' },
  agyagErmek: { src: '/foto/agyag-ermek.webp', alt: 'Kézművesség, agyag érmék készítése' },
  varvedes: { src: '/foto/varvedes.webp', alt: 'Erdei csata, várvédés' },
} as const;

/** Az oldalak közös navigációja — mindkét változatban ugyanez. */
export const menu = [
  { href: '', cimke: 'Kezdőlap' },
  { href: '/foglalkozasok', cimke: 'Foglalkozások' },
  { href: '/rendezvenyek', cimke: 'Rendezvények' },
  { href: '/kozossegi-szolgalat', cimke: '50 órás szolgálat' },
  { href: '/eredmenyek', cimke: 'Eredmények' },
  { href: '/ertekelesek', cimke: 'Értékelések' },
  { href: '/galeria', cimke: 'Galéria' },
  { href: '/akciok', cimke: 'Akciók' },
  { href: '/dokumentumok', cimke: 'Dokumentumok' },
] as const;

/**
 * Elsődleges CTA — a jelenlegi oldal saját szóhasználata:
 * „VÁLASSZ EDZÉST!" (/kozossegi-szolgalat/) és „Kérje árajánlatunkat!" (/szolgaltatasok/).
 */
export const foCta = { cimke: 'Válassz edzést', href: '#kapcsolat' } as const;
