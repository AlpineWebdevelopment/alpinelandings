/**
 * Az egyesület alapadatai.
 * FORRÁS: https://arpadnepe.mozello.hu/ — /kapcsolat/, /bemutatkozas/, /bemutatkozas/page-1/
 * Minden adat a jelenlegi weboldalról származik. Kitalált adat nincs benne.
 */

export const egyesulet = {
  teljesNev: 'Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület',
  rovidNev: 'Árpád Népe Egyesület',
  elnok: 'Urbán Péter',
  szekhely: 'Budapest, 1162 Irha u. 21.',
  adoszam: '18184785-1-42',
  bankszamla: '10102237-02872400-01003005',
  bank: 'MBH Bank',
  iban: 'HU53-10102237-02872400-01003005',
  telefon: '06/20-473-59-63',
  telefonHref: 'tel:+36204735963',
  email: 'arpadnepemail@gmail.com',
} as const;

export type HelyszinId = 'xvi' | 'xiv';

export type Helyszin = {
  id: HelyszinId;
  nev: string;
  cim: string;
  /** '16. ker.' — a 2026–27-es táblázat jelölése. */
  ker: string;
  /** 'Irha utca 21.' — a táblázat cellái szerint. */
  rovidCim: string;
  leiras: string;
};

/**
 * FORRÁS: kezdőlap „Helyszínek címei" + /kozossegi-szolgalat/;
 * `ker` és `rovidCim`: forras/Arpad Nepe Egyesulet foglalkozas tablazat 2026-27.jpg
 */
export const helyszinek: Helyszin[] = [
  {
    id: 'xvi',
    nev: 'XVI. kerület — egyesületi központ',
    cim: 'Budapest, 1162 Irha u. 21.',
    ker: '16. ker.',
    rovidCim: 'Irha utca 21.',
    leiras:
      'Itt szoktuk a szabadidős programjaink nagyját is lebonyolítani (sütögetés, társasozás, felszerelések készítése…).',
  },
  {
    id: 'xiv',
    nev: 'XIV. kerület — Hunyadi J. Ált. Isk. pince lőtér',
    cim: 'Budapest, 1148 Wass Albert tér 12.',
    ker: '14. ker.',
    rovidCim: 'Wass Albert tér 12.',
    leiras: 'Lassan 20 éve működnek itt foglalkozások.',
  },
];

export function helyszinRovid(id: HelyszinId): Helyszin {
  const h = helyszinek.find((x) => x.id === id);
  if (!h) throw new Error(`Ismeretlen helyszín: ${id}`);
  return h;
}

export const linkek = {
  facebook:
    'https://www.facebook.com/p/%C3%81rp%C3%A1d-N%C3%A9pe-Hagyom%C3%A1ny%C5%91rz%C5%91-Kultur%C3%A1lis-%C3%A9s-Sport-Egyes%C3%BClet-100064858143780/',
  googleErtekeles: 'https://g.page/r/Cd8epvTjw6dLEBM/review',
  tamogatoiOldal: 'https://arpadnepeegyesulet.wixsite.com/my-site-1',
  hirlevel: 'https://preview.mailerlite.io/forms/2121188/179677010674583377/share',
  jelenlegiOldal: 'https://arpadnepe.mozello.hu/',
} as const;

/**
 * Bemutatkozó szöveg — szó szerint a /bemutatkozas/ oldalról.
 */
export const bemutatkozas = {
  vezeto:
    'Az Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület célja, hogy a magyar történelem, hagyományok és népi kultúra értékeit élő közösségi élményeken keresztül adja tovább a következő generációknak.',
  pontok: [
    {
      cim: 'Saját élmény, nem tananyag',
      szoveg:
        'Foglalkozásainkon a gyerekek, felnőttek nemcsak hallanak a múltról, hanem saját élményeken keresztül ismerkedhetnek meg őseink világával. Íjászat, kézműveskedés, hagyományőrzés, népi játékok, történelmi ismeretek és közösségi programok várják az érdeklődőket.',
    },
    {
      cim: 'Hobbi és komoly szint külön',
      szoveg:
        'Külön foglalkozásaink vannak a gyerekeknek és ifjaknak, akik inkább hobbiként tekintenek a programokra, és külön vannak edzéseink azoknak, akik komolyabb szinten szeretnék művelni a hagyományőrzést.',
    },
    {
      cim: 'Mozgás, önfegyelem, együttműködés',
      szoveg:
        'Fontosnak tartjuk az aktív mozgást, az önfegyelem és az együttműködés fejlesztését. Programjaink során a gyerekek játékos formában találkozhatnak a honfoglalás korának és más történelmi korszakoknak az eszközeivel, viseleteivel és hagyományaival.',
    },
    {
      cim: 'Kézzel készített tárgyak',
      szoveg:
        'A kézműves foglalkozások során a résztvevők saját tárgyakat készíthetnek, miközben különböző anyagokkal és hagyományos technikákkal ismerkednek meg.',
    },
    {
      cim: 'Közösség, nem tanfolyam',
      szoveg:
        'Közösségünk rendszeresen szervez kirándulásokat, bemutatókat, családi programokat, táborokat és közösségi összejöveteleket. Célunk, hogy olyan baráti közösséget építsünk, ahol a tanulás, az alkotás és a közös élmények egyaránt fontos szerepet kapnak.',
    },
  ],
} as const;

/** FORRÁS: kezdőlap — „Szablyás edzéseink" */
export const szablyavivas = {
  cim: 'Szablyavívás',
  szoveg:
    'Több mint egy évtizede tartjuk edzéseinket a zuglói Hunyadi iskolában, a pince bérleményünkben. Fő célunk a vívás és a hozzá tartozó mozgáskultúra elsajátítása. Alap és egyéb vágásgyakorlatokon kívül a fő fókuszt a párbajokra, csatagyakorlatokra, a vívás valóságban való elsajátítására helyezzük. Mihamarabb rátérünk a fém fegyverekre a gyakorló fegyverek mellett, illetve a sisak és páncélok használatára.',
} as const;

/** FORRÁS: kezdőlap — „Felszerelés készítés" */
export const felszeresKeszites = {
  cim: 'Felszereléskészítés',
  szoveg:
    'Megbeszélés alapján hétvégén vagy hétköznap este elkészíthetjük saját felszerelési tárgyainkat: ruházat, szőtt vagy bőr öv, páncélozott kesztyű, ékszer, bőr páncél.',
} as const;

/** FORRÁS: kezdőlap — „Íjászversenyeken" */
export const versenyek = {
  szoveg:
    'Egyesületünk tagjaival, igény szerint járunk íjászversenyekre a XVII. kerületi Turulmezőre, hogy kipróbáljuk magunkat. A 2025-ös évben több versenyen is részt vettünk és sok érmet nyertünk.',
  terv: 'Tervezett íjászversenyek látogatása idén Turulmezőn: 2026-ban szintén tervezzük versenyek látogatását.',
} as const;

/**
 * FORRÁS: kezdőlap — „Támogasd egyesületünket!", valamint az egyesület
 * „TÁMOGASD EGYESÜLETÜNKET!" plakátja (forras/kepek/), amely négy módot sorol:
 * adó 1%, tárgyadomány, pénzadomány projektekre, „járj edzéseinkre, azzal is
 * támogathatsz". Az adószám a saját oldalukról való; ennél többet az 1%-ról
 * nem állítunk.
 */
export const tamogatas = {
  cim: 'Támogasd egyesületünket!',
  modok: [
    {
      cim: 'Banki utalással',
      szoveg: `Közvetlenül az Egyesület bankszámlájára való utalással. ${egyesulet.bank}: ${egyesulet.bankszamla}`,
    },
    {
      cim: 'Tárgyi adományokkal',
      szoveg:
        'Van a családban olyan használt, de jó minőségű holmi, amit szívesen nekünk adományoznátok? Szívesen fogadunk mindenfélét, hogy az egyesületi évkezdéskor a szorgos tanulóinkat meg tudjuk jutalmazni.',
    },
    {
      cim: 'Felszereléssel',
      szoveg:
        'Íjász vagy egyéb sportfelszerelés, vívómaszk, fegyverek, páncélok, társasjátékok, könyvek, kézműves alapanyagok, szerszámok, viseletek, ruhaanyag és sok minden más, amit használni tudunk.',
    },
    {
      cim: 'Adó 1%',
      szoveg: `Személyi jövedelemadód 1%-át felajánlhatod az egyesületnek. Adószám: ${egyesulet.adoszam}.`,
    },
    {
      cim: 'Járj az edzéseinkre',
      szoveg: 'Járj edzéseinkre, azzal is támogathatsz.',
    },
  ],
} as const;
