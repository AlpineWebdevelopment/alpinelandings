/**
 * Jelentkezési lap — a kezdőlap online űrlapja a foglalkozásokra.
 *
 * FORRÁS: forras/Arpad_Nepe_beiratkozo_lap_2026_27.docx („Beíratkozó lap 2026-27").
 * A mezők nevei, a kérdés, a nyilatkozatok mondatai onnan, szó szerint. A
 * jelentkezési és fizetési feltételek, a felszereléslista, a biztonsági és az
 * adatkezelési bekezdés a `beiratkozas` objektumban van (content/edzesek.ts) —
 * az űrlap azt jeleníti meg, nem másolja le.
 *
 * Amit a papír és a web különbsége miatt megváltoztattunk — és csak ezt:
 *   — „Aláírásommal igazolom / Aláírásommal tudomásul veszem" → „Igazolom /
 *     Tudomásul veszem": a papíron aláírás áll, a weben jelölőnégyzet;
 *   — az adatkezelési bekezdés „weboldalunkon érhető el: arpadnepe.mozello.hu"
 *     része a jelenlegi oldal címe; itt a Dokumentumok oldalra mutató hivatkozás
 *     áll helyette (a tájékoztató még nem létezik — README „Ügyféllel egyeztetendő");
 *   — a papír három üres sora (Foglalkozás / csoport · Nap · Időpont) helyett a
 *     2026–27-es táblázat díjköteles alkalmai választhatók jelölőnégyzettel, így
 *     nem lehet nem létező napot vagy időpontot beírni;
 *   — 18 év alatt a jelentkező saját telefonja és e-mailje nem kötelező, a
 *     szülő/gondviselőé igen (a papíron kötelezőség nincs jelölve);
 *   — a „Dátum" és a két aláírás a weben elmarad; egy nem kötelező „Megjegyzés"
 *     mező jött hozzá.
 *
 * Az egyesület 2026. 08. 29-én KÉPKÉNT küldött egy újabb változatot, amely a
 * DOCX-nál bővebb (felszerelés-bérlési mondatok a feltételekben, „kesztyű a
 * víváshoz; íjászathoz", az adatkezelési nyilatkozat záró tagmondata). Képről
 * nem írtuk át — a README „Ügyféllel egyeztetendő" listája kéri az új DOCX-ot.
 */

export type NyilatkozatId = 'feltetelek' | 'szabalyzat' | 'adatkezeles';

export type Nyilatkozat = {
  id: NyilatkozatId;
  /** A papír szakaszcíme. */
  cim: string;
  /** Tájékoztató bekezdés a jelölőnégyzet fölött — a papír bekezdésének első fele. */
  bevezeto?: string;
  /** A jelölőnégyzet szövege — a papíron az aláírással igazolt mondat. */
  nyilatkozat: string;
  /** Belső hivatkozás a részletekhez; változat nélküli út, a komponens egészíti ki. */
  link?: { cimke: string; href: string };
};

export const jelentkezesiLap = {
  cimke: 'Jelentkezés',
  cim: 'Beiratkozó lap 2026–27',
  lead: 'Ugyanazok az adatok, mint a nyomtatott beiratkozó lapon. Kiskorú jelentkezőnél a szülő/gondviselő adatait is kérjük.',
  kotelezoMegjegyzes: 'Minden mező kötelező, kivéve ahol jelezzük.',

  adatokCim: 'Jelentkező adatai',
  gondviseloCim: '18 év alatt a szülő/gondviselő adatai',
  mezok: {
    nev: 'Név',
    eletkor: 'Életkor',
    eletkorTipp: '18 év alatt a szülő/gondviselő adatait is kérjük.',
    lakcim: 'Lakcím',
    telefon: 'Telefon',
    email: 'E-mail cím',
    megjegyzes: 'Megjegyzés',
    megjegyzesTipp: 'Kérdés, több időpont, bármi, amit tudnunk kell.',
  },

  valasztasCim: 'Melyik foglalkozást vagy foglalkozásokat szeretnéd választani?',
  valasztasMegjegyzes:
    'A foglalkozások időpontjait a plakátokon, szórólapjainkon és weboldalunkon találod meg.',
  valasztasLink: 'Minden foglalkozás részletesen',

  nyilatkozatokCim: 'Nyilatkozatok',
  alairasMegjegyzes: 'A jelölőnégyzetek a nyomtatott lap aláírását helyettesítik.',
  reszletekCim: 'A feltételek teljes szövege és a szükséges felszerelések',
  nyilatkozatok: [
    {
      id: 'feltetelek',
      cim: 'Jelentkezési és fizetési feltételek',
      nyilatkozat:
        'Igazolom, hogy én, illetve kiskorú jelentkező esetén a szülő/gondviselő és a gyermek közös döntése alapján jelentkezés történt az Árpád Népe Egyesület fent megjelölt foglalkozására/edzésére. Tudomásul veszem, hogy a foglalkozás díjköteles.',
      link: { cimke: 'Beiratkozás és díjak', href: '/foglalkozasok#beiratkozas' },
    },
    {
      id: 'szabalyzat',
      cim: 'Biztonság és szabályzat',
      bevezeto:
        'Az íjászat, vívás és egyéb foglalkozások során az oktató biztonsági utasításait és az egyesület szabályzatát kötelező betartani.',
      nyilatkozat:
        'Tudomásul veszem, hogy én, illetve gyermekem az egyesület foglalkozásaira jelentkezett, és a szabályzatot, valamint az egyesület elvárásait magunkra nézve kötelezőnek tekintjük.',
      link: { cimke: 'A szabályzatok teljes szövege', href: '/szabalyzatok' },
    },
    {
      id: 'adatkezeles',
      cim: 'Adatkezelési tájékoztatás és hozzájárulás',
      bevezeto:
        'A megadott személyes adatokat az Árpád Népe Egyesület a jelentkezés, kapcsolattartás, a foglalkozások szervezése és a díjfizetés nyilvántartása céljából kezeli. Az adatkezelés részletes feltételeiről az egyesület adatkezelési tájékoztatójában lehet tájékozódni; a tájékoztató az egyesülettől kérhető, illetve weboldalunkon érhető el.',
      nyilatkozat:
        'Igazolom, hogy az adatkezelésről szóló tájékoztatást megismertem, és a jelentkezéshez szükséges adatkezelést tudomásul veszem.',
      link: { cimke: 'Adatkezelési tájékoztató', href: '/dokumentumok' },
    },
  ] satisfies Nyilatkozat[],

  kuldGomb: 'Jelentkezés elküldése',
  papirLink: 'Inkább papíron? Beiratkozó lap letöltése (DOCX)',
  /** MINTA megjegyzés: a bemutató nem küld adatot. */
  kuldesMegjegyzes:
    'A bemutatóban az űrlap nem küld adatot: a gomb egy összegzést mutat, amit e-mailben lehet elküldeni az egyesületnek. Az éles oldalon a jelentkezés közvetlenül az egyesület postafiókjába érkezik.',

  osszegzes: {
    cim: 'Összegzés',
    bevezeto: 'Ellenőrizd az adatokat, aztán küldd el.',
    valasztott: 'Választott foglalkozások',
    gondviselo: 'Szülő/gondviselő',
    nyilatkozatok: 'Elfogadott nyilatkozatok',
    emailGomb: 'Elküldöm e-mailben',
    vissza: 'Vissza az űrlaphoz',
    targy: 'Jelentkezés a 2026–27-es foglalkozásokra',
  },
} as const;

export const urlapHibak = {
  kotelezo: 'Ezt a mezőt kérjük kitölteni.',
  eletkor: 'Az életkort számmal kérjük (1–120).',
  email: 'Kérjük, érvényes e-mail-címet adj meg.',
  telefon: 'Kérjük, érvényes telefonszámot adj meg.',
  foglalkozas: 'Válassz legalább egy foglalkozást.',
  nyilatkozat: 'A jelentkezéshez ezt el kell fogadni.',
  osszegzes: 'Kérjük, javítsd a megjelölt mezőket.',
} as const;
