/**
 * MINTA TARTALOM — ez az EGYETLEN fájl, amelyben nem a jelenlegi weboldalról
 * származó szöveg szerepel.
 *
 * Minden itt lévő elem MINTA jelvénnyel jelenik meg a felületen, hogy az
 * ügyfél azonnal lássa: ide kerül majd a valós tartalom.
 *
 * A támogatók neve szándékosan generikus („Támogató Kft. — minta"), hogy
 * véletlenül se tűnjön valós cégnévnek.
 */

export type MintaErtekeles = {
  nev: string;
  szerep: string;
  szoveg: string;
};

/**
 * A valós értékelések a Facebook-oldalon és a Google-térképen élnek,
 * onnan nem tudtuk letölteni őket — az egyesület adja majd meg.
 */
export const mintaErtekelesek: MintaErtekeles[] = [
  {
    nev: 'Szülő — minta',
    szerep: 'Gyerekfoglalkozás, XIV. kerület',
    szoveg:
      'Ide kerül majd egy valós szülői visszajelzés a heti foglalkozásokról. A szöveg hossza kb. ennyi legyen, hogy a kártyák egyforma magasak maradjanak.',
  },
  {
    nev: 'Iskolai szervező — minta',
    szerep: 'Bemutató nap, általános iskola',
    szoveg:
      'Ide kerül majd egy intézményi visszajelzés egy iskolai bemutató napról: mit kértek, hogyan zajlott, mit szóltak a gyerekek.',
  },
  {
    nev: 'Felnőtt tag — minta',
    szerep: 'Szablyavívás, ifi és felnőtt edzés',
    szoveg:
      'Ide kerül majd egy felnőtt tag visszajelzése az edzésekről és a közösségről.',
  },
  {
    nev: 'Rendezvényszervező — minta',
    szerep: 'Falunap, önkormányzat',
    szoveg:
      'Ide kerül majd egy önkormányzati vagy fesztiválszervezői visszajelzés a helyszíni programokról.',
  },
  {
    nev: 'Diák — minta',
    szerep: '50 órás közösségi szolgálat',
    szoveg:
      'Ide kerül majd egy diák visszajelzése arról, milyen volt nálunk letölteni a közösségi szolgálatot.',
  },
  {
    nev: 'Óvodapedagógus — minta',
    szerep: 'Óvodai foglalkozás',
    szoveg:
      'Ide kerül majd egy óvodai visszajelzés a kis jurtás és népi játékos programról.',
  },
];

export type MintaEredmeny = {
  ev: string;
  verseny: string;
  helyezes: string;
  resztvevo: string;
};

/**
 * A jelenlegi oldal annyit ír: „A 2025-ös évben több versenyen is részt vettünk
 * és sok érmet nyertünk." Konkrét helyezés, versenynév és név nem szerepel rajta.
 * Az alábbi sorok ezért mintasorok.
 */
export const mintaEredmenyek: MintaEredmeny[] = [
  { ev: '2025', verseny: 'Íjászverseny, Turulmező — minta', helyezes: '1. helyezés', resztvevo: 'Tag neve — minta' },
  { ev: '2025', verseny: 'Íjászverseny, Turulmező — minta', helyezes: '2. helyezés', resztvevo: 'Tag neve — minta' },
  { ev: '2025', verseny: 'Íjászverseny, Turulmező — minta', helyezes: '3. helyezés', resztvevo: 'Tag neve — minta' },
  { ev: '2024', verseny: 'Íjászverseny — minta', helyezes: 'Korosztályos helyezés', resztvevo: 'Tag neve — minta' },
];

export type MintaAkcio = {
  cim: string;
  leiras: string;
  ertek: string;
  ervenyes: string;
};

export const mintaAkciok: MintaAkcio[] = [
  {
    cim: 'Ingyenes próbaalkalom',
    leiras:
      'Ha az egyesület ad próbaalkalmat, ez a kártya mutatja meg. A feltételeket az egyesület határozza meg.',
    ertek: 'Ingyenes',
    ervenyes: 'Érvényesség — minta',
  },
  {
    cim: 'Hozz egy barátot',
    leiras:
      'Kedvezmény annak, aki új tagot hoz. Az összeget és a feltételt az egyesület adja meg.',
    ertek: 'Kedvezmény összege — minta',
    ervenyes: 'Érvényesség — minta',
  },
  {
    cim: 'Testvérkedvezmény',
    leiras:
      'Ha egy családból többen járnak, ide kerülhet a családi kedvezmény.',
    ertek: 'Kedvezmény összege — minta',
    ervenyes: 'Érvényesség — minta',
  },
];

export type MintaTamogato = { nev: string };

/**
 * A jelenlegi oldalon nincs megnevezett támogató, ezért a hero támogatói sávja
 * generikus mintaneveket futtat. A valós logókat az egyesület adja majd meg.
 */
export const mintaTamogatok: MintaTamogato[] = [
  { nev: 'Támogató Kft. — minta' },
  { nev: 'Támogató Bt. — minta' },
  { nev: 'Támogató Alapítvány — minta' },
  { nev: 'Támogató Önkormányzat — minta' },
  { nev: 'Támogató Zrt. — minta' },
  { nev: 'Támogató Egyesület — minta' },
];

/**
 * A hero „legfrissebb bejegyzés" eleme MOCK — a Facebookot nem tudjuk lekérni.
 * A benne megjelenő szöveg a jelenlegi weboldal saját nyílt napos hirdetéséből
 * származik, hogy kitalált állítás ne kerüljön a demóba.
 * FORRÁS a szöveghez: kezdőlap, „Várunk szeretettel!" doboz.
 */
export const mockFacebookPoszt = {
  szerzo: 'Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület',
  datum: 'Legutóbbi bejegyzés',
  szoveg:
    'Várunk szeretettel! 08. 02. vasárnap — 10:00-tól gyerekeknek 13:00-ig, 15:00-tól felnőtteknek és tiniknek 18:00-ig. Bejelentkezés kötelező, hogy tudjuk, hány főre számíthatunk! Cím: XVI. ker. Irha u. 21.',
  ctaFelirat: 'Tovább a Facebookra',
};
