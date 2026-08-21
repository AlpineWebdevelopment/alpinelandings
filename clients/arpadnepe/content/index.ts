/**
 * Közös tartalomréteg — mindhárom változat (A, B, C) ugyanezt fogyasztja.
 * A változatok kizárólag tervezésben és kompozícióban térnek el, tényekben soha.
 *
 * Tartalomforrás: https://arpadnepe.mozello.hu/ (2026. 08. 19-i letöltés)
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

/** Fotók a jelenlegi oldal saját képgalériájából, az ottani képaláírásokkal. */
export const fotok = {
  ijaszatOktatas: { src: '/foto/ijaszat-oktatas.webp', alt: 'Íjászat oktatása iskolás csoportoknak' },
  harciBemutato: { src: '/foto/harci-bemutato.webp', alt: 'Harci bemutató az egyesület udvarán' },
  landzsavetes: { src: '/foto/landzsavetes.webp', alt: 'Lándzsavetés oktatása' },
  jurtakucko: { src: '/foto/jurtakucko.webp', alt: 'Jurtakuckó apróságoknak' },
  csataGyerekekkel: { src: '/foto/csata-gyerekekkel.webp', alt: 'Több gyerek csatája az oktató ellen' },
  fegyvermustra: { src: '/foto/fegyvermustra.webp', alt: 'Fegyvermustra' },
  nemezTulipan: { src: '/foto/nemez-tulipan.webp', alt: 'Kézműves foglalkozás, nemez tulipán készítése' },
  rovasiras: { src: '/foto/rovasiras.webp', alt: 'Kézműves foglalkozás, rovásírás tintával, nád pennával' },
  ijaszbemutato: { src: '/foto/ijaszbemutato.webp', alt: 'Felnőtt íjász bemutató' },
  fegyveresBemutato: { src: '/foto/fegyveres-bemutato.webp', alt: 'Fegyveres harci bemutató, fokosbemutató' },
  jurtaallitas: { src: '/foto/jurtaallitas.webp', alt: 'Közös jurtaállítás' },
  lepenysutes: { src: '/foto/lepenysutes.webp', alt: 'Lepénysütés' },
  erdeiCsata: { src: '/foto/erdei-csata.webp', alt: 'Indul az erdei csata' },
  tanchaz: { src: '/foto/tanchaz.webp', alt: 'Moldvai családi táncház' },
  kirandulas: { src: '/foto/kirandulas-pilis.webp', alt: 'Kirándulásunk a Pilisben' },
  borKarkoto: { src: '/foto/bor-karkoto.webp', alt: 'Kézművesség, bőr karkötő készítése' },
  nagyJurta: { src: '/foto/nagy-jurta-kurultaj.webp', alt: 'A nagy jurtánk a Kurultáj díszvacsoráján' },
  sisakproba: { src: '/foto/sisakproba.webp', alt: 'Sisakpróba' },
  gyermekIjaszverseny: { src: '/foto/gyermek-ijaszverseny.webp', alt: 'Gyermek íjászverseny' },
  tarsasjatek: { src: '/foto/tarsasjatek.webp', alt: 'Táblás társasjátékok' },
  kisJurtaBelul: { src: '/foto/kis-jurta-belul.webp', alt: 'A kis jurta belülről' },
  nyariEdzotabor: { src: '/foto/nyari-edzotabor.webp', alt: 'Nyári edzőtábor' },
  gabonaorlo: { src: '/foto/gabonaorlo.webp', alt: 'Gabonaőrlős játszótér' },
  agyagErmek: { src: '/foto/agyag-ermek.webp', alt: 'Kézművesség, agyag érmék készítése' },
  varvedes: { src: '/foto/varvedes.webp', alt: 'Erdei csata, várvédés' },
} as const;

/** Az oldalak közös navigációja — mindhárom változatban ugyanez. */
export const menu = [
  { href: '', cimke: 'Kezdőlap' },
  { href: '/rendezvenyek', cimke: 'Rendezvények' },
  { href: '/kozossegi-szolgalat', cimke: '50 órás szolgálat' },
  { href: '/eredmenyek', cimke: 'Eredmények' },
  { href: '/ertekelesek', cimke: 'Értékelések' },
  { href: '/akciok', cimke: 'Akciók' },
  { href: '/dokumentumok', cimke: 'Dokumentumok' },
] as const;

/**
 * Elsődleges CTA — a jelenlegi oldal saját szóhasználata:
 * „VÁLASSZ EDZÉST!" (/kozossegi-szolgalat/) és „Kérje árajánlatunkat!" (/szolgaltatasok/).
 */
export const foCta = { cimke: 'Válassz edzést', href: '#kapcsolat' } as const;
