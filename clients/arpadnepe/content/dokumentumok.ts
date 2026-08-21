/**
 * Egyesületi papírok.
 * FORRÁS: https://arpadnepe.mozello.hu/bemutatkozas/page-1/
 *
 * A jelenlegi oldalon az alábbi dokumentumok szkennelt képként szerepelnek:
 * — Egyesületi alapszabály (10 oldal)
 * — 2022. évi közgyűlés jegyzőkönyve (3 oldal)
 * — 2023. évi végzés
 * Letölthető PDF nincs közöttük; a demóban ezért a sorok „a jelenlegi oldalon"
 * hivatkozásra mutatnak, a valós fájlokat az egyesület adja majd meg.
 */

export type Dokumentum = {
  cim: string;
  leiras: string;
  /** 'letoltheto' = a jelenlegi oldalon elérhető anyag; 'minta' = nincs ilyen tartalom, helykitöltő */
  allapot: 'elerheto' | 'minta';
  formatum: string;
  href?: string;
};

export const dokumentumok: Dokumentum[] = [
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
      'Ilyen dokumentum jelenleg nem szerepel a weboldalon. Jelentkezési űrlap és hírlevél mellé mindenképp szükséges lesz.',
    allapot: 'minta',
    formatum: 'PDF vagy aloldal',
  },
  {
    cim: 'Adó 1% felajánlás',
    leiras:
      'A jelenlegi weboldal nem ír 1%-os felajánlásról. Ha az egyesület fogadhat 1%-ot, ide kerül a tájékoztató.',
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
