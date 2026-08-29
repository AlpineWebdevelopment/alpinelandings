/**
 * Egyesületi papírok.
 * FORRÁS: https://arpadnepe.mozello.hu/bemutatkozas/page-1/, valamint az
 * egyesület 2026. 08. 28-án átadott DOCX-ai (forras/*.docx → public/dokumentumok/).
 *
 * A jelenlegi oldalon az alábbi dokumentumok szkennelt képként szerepelnek:
 * — Egyesületi alapszabály (10 oldal)
 * — 2022. évi közgyűlés jegyzőkönyve (3 oldal)
 * — 2023. évi végzés
 * Letölthető PDF nincs közöttük; a demóban ezért ezek a sorok „a jelenlegi
 * oldalon" hivatkozásra mutatnak. Az átadott szabályzatok és a beiratkozó lap
 * viszont letölthetők (DOCX — PDF-et ezen a gépen nem tudtunk készíteni), a két
 * szabályzat teljes szövege pedig a /szabalyzatok oldalon olvasható.
 */

export type Dokumentum = {
  cim: string;
  leiras: string;
  /** 'elerheto' = valós, meglévő anyag; 'minta' = nincs ilyen tartalom, helykitöltő */
  allapot: 'elerheto' | 'minta';
  formatum: string;
  /** Külső hivatkozás (a jelenlegi oldalra). */
  href?: string;
  /** Letölthető fájlok a public/ alól. */
  letoltesek?: { href: string; cimke: string }[];
  /** Változaton belüli oldal, ahol a szöveg olvasható (pl. '/szabalyzatok#ertek'). */
  oldal?: string;
  /** Megjegyzés a dokumentum saját szövege alapján (pl. tervezet). */
  jelzes?: { cimke: string; forras: string };
};

export const dokumentumok: Dokumentum[] = [
  {
    cim: 'Egyesületi érték- és magatartási szabályzat',
    leiras:
      'Küldetés, alapértékek, a közösség rendje, magatartási normák és a részvétel szabályai hét szakaszban. Teljes szöveggel olvasható a weboldalon; a díszes A4-es változat is letölthető.',
    allapot: 'elerheto',
    formatum: 'DOCX · 7 szakasz',
    letoltesek: [
      { href: '/dokumentumok/ertek-es-magatartasi-szabalyzat.docx', cimke: 'DOCX' },
      { href: '/dokumentumok/ertek-es-magatartasi-szabalyzat-diszes-a4.docx', cimke: 'Díszes A4' },
    ],
    oldal: '/szabalyzatok#ertek',
    jelzes: {
      cimke: 'Tervezet',
      forras: 'A dokumentumban az elfogadás / hatálybalépés dátuma üresen áll.',
    },
  },
  {
    cim: 'Íjászati és vívó foglalkozások biztonsági szabályzata 2026–2027',
    leiras:
      'Általános, íjászati, vívási, gyakorlófegyveres és gyermekekre vonatkozó biztonsági szabályok, baleset esetén teendők. Teljes szöveggel olvasható a weboldalon.',
    allapot: 'elerheto',
    formatum: 'DOCX · 7 szakasz',
    letoltesek: [{ href: '/dokumentumok/ijaszati-es-vivasi-biztonsagi-szabalyzat.docx', cimke: 'DOCX' }],
    oldal: '/szabalyzatok#biztonsag',
    jelzes: {
      cimke: 'Tervezet',
      forras: 'A dokumentum saját szerkesztési megjegyzése szerint munkaváltozat.',
    },
  },
  {
    cim: 'Beiratkozó lap 2026–27',
    leiras:
      'A jelentkező adatai, a választott foglalkozások, a jelentkezési és fizetési feltételek, a szükséges felszerelés és az adatkezelési hozzájárulás — nyomtatva, kézzel kitöltve. Ugyanez online a kezdőlap jelentkezési lapján.',
    allapot: 'elerheto',
    formatum: 'DOCX · 1 lap',
    letoltesek: [{ href: '/dokumentumok/beiratkozo-lap-2026-27.docx', cimke: 'DOCX' }],
    oldal: '/foglalkozasok#beiratkozas',
  },
  {
    cim: 'Egyesületi alapszabály',
    leiras:
      'A jelenlegi weboldalon 10 szkennelt oldalként érhető el. A demóhoz egységes PDF-et javaslunk.',
    allapot: 'elerheto',
    formatum: '10 oldal · szkennelt kép',
    href: 'https://arpadnepe.mozello.hu/bemutatkozas/page-1/',
  },
  {
    cim: '2022. évi közgyűlés jegyzőkönyve',
    leiras: 'A jelenlegi weboldalon 3 szkennelt oldalként érhető el.',
    allapot: 'elerheto',
    formatum: '3 oldal · szkennelt kép',
    href: 'https://arpadnepe.mozello.hu/bemutatkozas/page-1/',
  },
  {
    cim: '2023. évi végzés',
    leiras: 'Bírósági végzés — a jelenlegi weboldalon szkennelt képként érhető el.',
    allapot: 'elerheto',
    formatum: 'szkennelt kép',
    href: 'https://arpadnepe.mozello.hu/bemutatkozas/page-1/',
  },
  {
    cim: 'Programajánló füzet',
    leiras:
      'A jelenlegi oldal négy helyen hivatkozik rá, de a fájl jelenleg nem tölthető le (a tárhely csak belső hálózatról érhető el). A végleges oldalra új PDF kell.',
    allapot: 'minta',
    formatum: 'PDF · pótlandó',
  },
  {
    cim: 'Éves beszámoló',
    leiras:
      'Ilyen dokumentum jelenleg nem szerepel a weboldalon. Ide kerülnek majd az egyesület éves beszámolói.',
    allapot: 'minta',
    formatum: 'PDF · évenként',
  },
  {
    cim: 'Adatkezelési tájékoztató',
    leiras:
      'Ilyen dokumentum jelenleg nem szerepel a weboldalon, pedig a beiratkozó lap már hivatkozik rá („weboldalunkon érhető el"). Jelentkezési űrlap és hírlevél mellé mindenképp szükséges.',
    allapot: 'minta',
    formatum: 'PDF vagy aloldal',
  },
  {
    cim: 'Adó 1% felajánlás',
    leiras:
      'A támogatói plakát szerint az egyesület fogad 1%-os felajánlást; a rendelkező nyilatkozathoz szükséges tájékoztató (adószám, kitöltési útmutató) még nincs dokumentumként.',
    allapot: 'minta',
    formatum: 'tájékoztató',
  },
];

/** Ezek az adatok a /bemutatkozas/page-1/ oldalon szerepelnek. */
export const nyilvanosAdatok = [
  { cimke: 'Egyesület neve', ertek: 'Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület' },
  { cimke: 'Székhely', ertek: 'Budapest, 1162 Irha u. 21.' },
  { cimke: 'Adószám', ertek: '18184785-1-42' },
  { cimke: 'Bankszámlaszám', ertek: '10102237-02872400-01003005' },
  { cimke: 'IBAN', ertek: 'HU53-10102237-02872400-01003005' },
  { cimke: 'Elnök', ertek: 'Urbán Péter' },
];
