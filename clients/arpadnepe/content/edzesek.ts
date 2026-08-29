/**
 * Edzés- és foglalkozásrend, árak, eszközbérlés, beiratkozás — 2026–27.
 *
 * FORRÁS (az egyesület 2026. 08. 28-án átadott anyagai, a forras/ mappában):
 *   — forras/Arpad Nepe Egyesulet foglalkozas tablazat 2026-27.jpg  → foglalkozasok
 *   — forras/araink 01. 19_46_26.png                                  → arak, egyebKoltsegek, programlehetosegek
 *   — forras/Alkalmi_eszkozberles 02.jpg                              → felszerelesBerles
 *   — forras/Arpad_Nepe_beiratkozo_lap_2026_27.docx                   → beiratkozas
 *   — https://arpadnepe.mozello.hu/ kezdőlap „KÖZÖSSÉGI ÉLET."       → kozossegiElet (változatlan)
 *
 * Átírási szabály: a forrás szövege szó szerint, magyar tipográfiával
 * (ezres szóköz: 12 500 Ft). Ahol a forrásban ellentmondás vagy csonka szöveg
 * van, azt NEM javítottuk, hanem `egyeztetendo` megjegyzést kapott — a felület
 * „Egyeztetendő" címkével mutatja, a README „Ügyféllel egyeztetendő" listája
 * pedig összegyűjti. Ilyen:
 *   — Kézműves / vasárnap: a cella megjegyzése a képen lemaradt („…ha képes
 *     önállóan is");
 *   — Két edzés hetente: „jellemzően két alkalom per hó" (a forrás szövege).
 * Tisztázva: Íjász edzés / hétfő a táblázat képén „Irha utca 24." — az egyesület
 * 2026. 08. 29-én megerősítette, hogy Irha utca 21. a helyes; így szerepel.
 *
 * A KANONIKUS szerkezet a táblázaté: foglalkozás (sor) × időpont (cella).
 * Minden más nézet — naponkénti lista, az 50 órás szolgálat helyszínei — a
 * `napokSzerint()` / `szolgalatiAlkalmak()` segédekből származik, hogy egyetlen
 * adatból ne lehessen két, egymástól elcsúszó változat.
 */

import { helyszinRovid, type HelyszinId } from './egyesulet';

/* ---------------------------------- NAPOK ---------------------------------- */

export type NapKulcs =
  | 'hetfo'
  | 'kedd'
  | 'szerda'
  | 'csutortok'
  | 'pentek'
  | 'szombat'
  | 'vasarnap';

export const napok: { kulcs: NapKulcs; nev: string }[] = [
  { kulcs: 'hetfo', nev: 'Hétfő' },
  { kulcs: 'kedd', nev: 'Kedd' },
  { kulcs: 'szerda', nev: 'Szerda' },
  { kulcs: 'csutortok', nev: 'Csütörtök' },
  { kulcs: 'pentek', nev: 'Péntek' },
  { kulcs: 'szombat', nev: 'Szombat' },
  { kulcs: 'vasarnap', nev: 'Vasárnap' },
];

export function napNev(kulcs: NapKulcs): string {
  return napok.find((n) => n.kulcs === kulcs)?.nev ?? kulcs;
}

/* ------------------------ FOGLALKOZÁSOK — a táblázat sorai ------------------------ */

export type Idopont = {
  nap: NapKulcs;
  /** A cella szövege: '17:00–19:00' | '21:00-tól játék végéig' | prózai leírás. */
  ido: string;
  /** 'HH:MM' a rendezéshez — csak ha a cellában van óra. */
  kezdet?: string;
  helyszinId: HelyszinId;
  /** A cella zárójeles megjegyzése, szó szerint (zárójel nélkül). */
  megjegyzes?: string;
  /** Forrásbeli ellentmondás / csonka szöveg magyarázata — „Egyeztetendő" címke. */
  egyeztetendo?: string;
};

export type FoglalkozasId =
  | 'gyermek-6-12'
  | 'gyermek-ifjusagi-11'
  | 'ifjusagi-felnott-13'
  | 'ijasz-10'
  | 'kezmuves'
  | 'tarsasjatek'
  | 'kozossegepito';

export type Foglalkozas = {
  id: FoglalkozasId;
  /** A sor címe. */
  nev: string;
  /** '13 éves kortól' — ha a sorban szerepel. */
  korosztaly?: string;
  /** A sor zárójeles kiegészítése, szó szerint. */
  rovid: string;
  idopontok: Idopont[];
  /** Óra nélküli cellák: 'SZÜNET', illetve a Közösségépítő sor napi prózája. */
  napiMegjegyzes?: Partial<Record<NapKulcs, string>>;
  /**
   * Itt lehet az 50 órás közösségi szolgálatot teljesíteni — a /kozossegi-szolgalat/
   * oldal szerint „Segíthetsz a gyerekeknél a foglalkozásainkon", tehát a két
   * gyermekfoglalkozás.
   */
  szolgalat?: boolean;
  /** Mely ártételek vonatkoznak rá. */
  arIds?: ArId[];
};

export const tablazatCim = 'Hagyományőrző foglalkozások és edzések táblázata 2026–2027';
export const programvaltozas = 'A programváltozás jogát fenntartjuk!';

const XVI: HelyszinId = 'xvi';
const XIV: HelyszinId = 'xiv';
const FELARON = 'Hozzánk járó gyermekek szüleinek féláron.';
const TARSAS_ESTE = 'Edzés után lehetőség társasjátékos estre, aki szeretne.';
const TABLAS = 'Táblás játékok vagy igény szerint asztali fantasy szerepjátékok.';
const HOSSZABB_ESTI = 'Itt hosszabb esti programokat is be tudunk szervezni.';

export const foglalkozasok: Foglalkozas[] = [
  {
    id: 'gyermek-6-12',
    nev: 'Gyermek hagyományőrző foglalkozások',
    korosztaly: '6–12 éves korosztály',
    rovid: 'Íjászat, vívás, kézműveskedés, más programelemek.',
    szolgalat: true,
    arIds: ['havi'],
    idopontok: [
      { nap: 'hetfo', ido: '17:00–19:00', kezdet: '17:00', helyszinId: XVI },
      { nap: 'szerda', ido: '13:00–14:45', kezdet: '13:00', helyszinId: XIV },
      { nap: 'pentek', ido: '13:00–14:45', kezdet: '13:00', helyszinId: XIV },
    ],
  },
  {
    id: 'gyermek-ifjusagi-11',
    nev: 'Gyermek és ifjúsági hagyományőrző foglalkozások',
    korosztaly: '11 éves kortól',
    rovid: 'Íjászat, vívás, kézműveskedés, más programelemek.',
    szolgalat: true,
    arIds: ['havi'],
    idopontok: [
      { nap: 'szerda', ido: '16:00–18:00', kezdet: '16:00', helyszinId: XIV },
      { nap: 'pentek', ido: '16:00–18:00', kezdet: '16:00', helyszinId: XIV },
    ],
  },
  {
    id: 'ifjusagi-felnott-13',
    nev: 'Ifjúsági és felnőtt edzések',
    korosztaly: '13 éves kortól',
    rovid: 'Íjászat és vívás.',
    arIds: ['havi'],
    idopontok: [
      { nap: 'hetfo', ido: '19:00–21:00', kezdet: '19:00', helyszinId: XVI, megjegyzes: TARSAS_ESTE },
      { nap: 'szerda', ido: '18:00–19:00', kezdet: '18:00', helyszinId: XIV },
      { nap: 'pentek', ido: '19:00–21:00', kezdet: '19:00', helyszinId: XVI, megjegyzes: TARSAS_ESTE },
      {
        nap: 'vasarnap',
        ido: '15:00–17:00',
        kezdet: '15:00',
        helyszinId: XVI,
        megjegyzes:
          'Edzés után lehetőség társasjátékos estre, délutánra és estére, egyéb közösségi programok.',
      },
    ],
  },
  {
    id: 'ijasz-10',
    nev: 'Íjász edzés',
    korosztaly: '10 éves kortól',
    rovid: 'Fő célunk íjász versenyek látogatása, jó eredmény elérése, de ez nem kötelező érvényű.',
    arIds: ['havi'],
    idopontok: [
      {
        nap: 'hetfo',
        ido: '18:00–19:00',
        kezdet: '18:00',
        helyszinId: XVI,
        // A táblázat képén „Irha utca 24." — az egyesület megerősítette: Irha utca 21.
        megjegyzes: FELARON,
      },
      { nap: 'szerda', ido: '17:00–18:30', kezdet: '17:00', helyszinId: XIV, megjegyzes: FELARON },
      { nap: 'pentek', ido: '17:00–18:00', kezdet: '17:00', helyszinId: XIV, megjegyzes: FELARON },
      { nap: 'vasarnap', ido: '14:00–15:30', kezdet: '14:00', helyszinId: XVI, megjegyzes: FELARON },
    ],
  },
  {
    id: 'kezmuves',
    nev: 'Kézműves és felszereléskészítés',
    rovid: 'Hétköznap a foglalkozások részeként, vasárnap egész napos, önálló munkával.',
    arIds: ['havi', 'hetvegiKezmuvesTag', 'hetvegiKezmuvesKulsos'],
    idopontok: [
      { nap: 'hetfo', ido: '17:00–19:00', kezdet: '17:00', helyszinId: XVI },
      { nap: 'szerda', ido: '16:00–18:00', kezdet: '16:00', helyszinId: XIV },
      { nap: 'pentek', ido: '16:00–18:00', kezdet: '16:00', helyszinId: XIV },
      {
        nap: 'vasarnap',
        ido: '10:00–15:00',
        kezdet: '10:00',
        helyszinId: XVI,
        // A képen a megjegyzés vége lemaradt.
        megjegyzes: 'Felszerelés készítés 12–13 éves kortól, ha képes önállóan is […]',
        egyeztetendo: 'A táblázat képén ennek a megjegyzésnek a vége lemaradt.',
      },
    ],
    napiMegjegyzes: { kedd: 'SZÜNET', csutortok: 'SZÜNET' },
  },
  {
    id: 'tarsasjatek',
    nev: 'Táblás és közösségi játékok',
    rovid:
      'Jellemzően 12 éves kortól, ha tud a játékkal játszani, és tudnak tőle is játszani a felnőttek is.',
    idopontok: [
      { nap: 'hetfo', ido: '21:00-tól játék végéig', kezdet: '21:00', helyszinId: XVI, megjegyzes: TABLAS },
      {
        nap: 'szerda',
        ido: 'Edzés után Zuglóban, megbeszélés szerint',
        helyszinId: XIV,
        megjegyzes: 'csak egy hely van.',
      },
      { nap: 'pentek', ido: '21:00-tól játék végéig', kezdet: '21:00', helyszinId: XVI, megjegyzes: TABLAS },
      {
        nap: 'szombat',
        ido: 'Játék igény szerint, ha van szabadidőnk és más program nem szól közbe, akár egész nap megbeszélés szerint.',
        helyszinId: XVI,
      },
      {
        nap: 'vasarnap',
        ido: 'Edzés után 18:00-tól, ha más program nincsen beszervezve.',
        kezdet: '18:00',
        helyszinId: XVI,
      },
    ],
    napiMegjegyzes: { csutortok: 'SZÜNET' },
  },
  {
    id: 'kozossegepito',
    nev: 'Közösségépítő programok',
    rovid: 'Változó időpontokban.',
    idopontok: [],
    napiMegjegyzes: {
      hetfo:
        '17:00 előtti időpontban előadás, szabadidős gyakorlás, tánctanulás, felszerelés készítés vagy amit kitalálok.',
      kedd: HOSSZABB_ESTI,
      szerda: HOSSZABB_ESTI,
      csutortok: HOSSZABB_ESTI,
      szombat:
        'Jellemzően rendezvényeink vannak, de ha nincsenek és van kedvünk valamit beszervezni, van rá lehetőség akár egész napra is.',
      vasarnap: 'Edzés után 18:00-tól van lehetőség bármi közösségi program megszervezésére.',
    },
  },
];

export function foglalkozasById(id: FoglalkozasId): Foglalkozas {
  const f = foglalkozasok.find((x) => x.id === id);
  if (!f) throw new Error(`Ismeretlen foglalkozás: ${id}`);
  return f;
}

/* ------------------------- SZÁRMAZTATOTT NÉZETEK ------------------------- */

export type NapiAlkalom = Idopont & {
  foglalkozas: Foglalkozas;
  napNev: string;
  /** '16. ker.' */
  ker: string;
  /** 'Irha utca 21.' */
  cim: string;
};

/**
 * Naponkénti lista ugyanabból az adatból. `csakIdovel`: csak az órával
 * megadott alkalmak, kezdés szerint rendezve; az üres napok kimaradnak.
 */
export function napokSzerint(
  opts: { csakIdovel?: boolean } = {},
): { nap: (typeof napok)[number]; alkalmak: NapiAlkalom[] }[] {
  return napok
    .map((nap) => {
      const alkalmak: NapiAlkalom[] = foglalkozasok.flatMap((f) =>
        f.idopontok
          .filter((i) => i.nap === nap.kulcs)
          .map((i) => {
            const hely = helyszinRovid(i.helyszinId);
            return {
              ...i,
              foglalkozas: f,
              napNev: nap.nev,
              ker: hely.ker,
              cim: hely.rovidCim,
            };
          }),
      );
      const szurt = opts.csakIdovel ? alkalmak.filter((a) => a.kezdet) : alkalmak;
      szurt.sort((a, b) => (a.kezdet ?? '99:99').localeCompare(b.kezdet ?? '99:99'));
      return { nap, alkalmak: szurt };
    })
    .filter((n) => n.alkalmak.length > 0);
}

/** Ahol az 50 órás közösségi szolgálat teljesíthető: a gyermekfoglalkozások. */
export function szolgalatiAlkalmak(): NapiAlkalom[] {
  return napokSzerint({ csakIdovel: true }).flatMap((n) =>
    n.alkalmak.filter((a) => a.foglalkozas.szolgalat),
  );
}

/* ---------------------- ÁRAK — forras/araink 01. 19_46_26.png ---------------------- */

export type ArId =
  | 'havi'
  | 'ketEdzes'
  | 'tobbAlkalom'
  | 'alkalmi'
  | 'hetvegiKezmuvesTag'
  | 'hetvegiKezmuvesKulsos';

export type ArTetel = { id: ArId; cim: string; ertek: string; megjegyzes?: string };

export const arak: ArTetel[] = [
  {
    id: 'havi',
    cim: 'Heti egy edzés esetén — havi díj',
    ertek: '12 500 Ft/hó',
    megjegyzes:
      'Ez heti egy alkalmat, jellemzően négy alkalom per hó. Minden hónap egész hónapnak számít.',
  },
  {
    id: 'ketEdzes',
    cim: 'Két edzés hetente — havi díj',
    ertek: '25 000 Ft/hó',
    megjegyzes:
      '12 500 Ft × 2. Ez heti két alkalmat jelent, jellemzően két alkalom per hó. A kieső foglalkozások pótlásának lehetősége erre is ugyanúgy vonatkozik.',
  },
  {
    id: 'tobbAlkalom',
    cim: 'Három vagy több foglalkozás',
    ertek: '+2 000 Ft/alkalom',
    megjegyzes:
      'Ha valaki heti három vagy többször is szeretne valamelyik programunkon részt venni (rokon programok), arra is van lehetőség. A két fixen bejelölt időpontján túl jön valamilyen programra, akkor annak plusz költsége alkalmanként 2 000 Ft.',
  },
  {
    id: 'alkalmi',
    cim: 'Alkalmi díj',
    ertek: '3 500 Ft/alkalom',
    megjegyzes: 'Ha csak alkalmanként (pl. kéthetente, háromhetente) tudsz részt venni.',
  },
  {
    id: 'hetvegiKezmuvesTag',
    cim: 'Hétvégi kézműves foglalkozás (10:00–15:00) — ha már jársz egy foglalkozásra',
    ertek: '5 000 Ft/alkalom',
    megjegyzes:
      'Itt jellemzően egy foglalkozás típusra fókuszálunk, például megvarrni a hagyományőrző nadrágot, kaftánt, vagy nemezelni egy süveget, esetleg elkészíteni egy bőrpáncélt, stb. Itt előfordulhat plusz költség, ha olyan munkát szeretnénk folytatni, amihez kell egy oktató segítségét, illetve az ő gázsiját kifizetni.',
  },
  {
    id: 'hetvegiKezmuvesKulsos',
    cim: 'Hétvégi kézműves foglalkozás (10:00–15:00) — külsősöknek',
    ertek: '7 000 Ft/alkalom',
  },
];

export const arakById = Object.fromEntries(arak.map((a) => [a.id, a])) as Record<ArId, ArTetel>;

export const arMegjegyzes =
  'Minden hónap egész hónapnak számít. Mivel több napon is vannak foglalkozásaink, a betegségek vagy egyéb problémák miatt kieső edzések pótlása biztosított — éljetek vele.';

export const egyebKoltsegek = {
  cim: 'Egyéb költségek',
  tetelek: ['kirándulás', 'múzeumlátogatás', 'erdei csata', 'közös sütés-főzés', 'íjászverseny'],
  szoveg:
    'Minden ilyen program költsége az adott helyszíntől és programtól függ. A belépőt, nevezési díjat, utazást vagy egyéb költségeket mindenki saját maga fizeti.',
  eszkoz:
    'A kezdéshez természetesen nem szükséges azonnal minden felszerelést megvásárolni. A nagyobbak, felnőttek számára az egyesületi felszerelések használata bérléshez kötött. Az eszközbérlés díja külön tájékoztatás alapján történik.',
} as const;

/**
 * „Foglalkozásokon kívüli programlehetőségek" — az árlistán és több plakáton
 * ugyanez az öt tétel szerepel; egyszer tároljuk.
 */
export const programlehetosegek: { cim: string; szoveg: string }[] = [
  {
    cim: 'Egyesület munkájában való mélyebb részvétel.',
    szoveg:
      'Az egyesület működésében aktívabban részt vehetsz, segíthetsz a mindennapi feladatokban és a hosszú távú tervek megvalósításában.',
  },
  {
    cim: 'Lehetőség nyílik egyesületünk programjainak elsajátítására.',
    szoveg:
      'Első lépésként az ifjúsági vagy gyermek csoportoknál segítőként veszel részt az ottani programokon, így sajátítod el az oktatási és szervezési feladatokat, hogy később saját csapatot indíthass.',
  },
  {
    cim: 'Rendezvényeken való részvétel, segítés.',
    szoveg: 'Megmutathatjuk hagyományainkat olyan embereknek is, akik egyébként nem találkoznának vele.',
  },
  {
    cim: 'Közösségi életben való aktív közreműködés, részvétel.',
    szoveg:
      'Szeretnénk nagyobb hangsúlyt fektetni a hagyományőrzők szellemi és tudásbeli képzésére, ezért előadásokat, múzeumlátogatásokat, kirándulásokat, jeles napok megünneplését és más, nemzeti érzelmet és identitást erősítő programokat szervezünk.',
  },
  {
    cim: 'Az egyesület közösségi életében való aktívabb részvétel.',
    szoveg:
      'Ide tartozik az íjász- és vívóversenyek szervezésében és az arra való felkészülésben való aktív közreműködés, előadáson való részvétel vagy előadás tartása, egyesületi programokon való aktív részvétel, részfeladatok vállalása.',
  },
];

/* ---------------- ESZKÖZBÉRLÉS A TAGOKNAK — forras/Alkalmi_eszkozberles 02.jpg ----------------
   (Nem tévesztendő össze a rendezvényszervezőknek szóló eszközbérléssel:
   az a content/programok.ts `eszkozberles` exportja.) */

export type BerlesTetel = { eszkoz: string; reszlet?: string; alkalmi: string; havi: string };

export const felszerelesBerles = {
  cim: 'Alkalmi eszközbérlés',
  bevezeto:
    'A nagyobbak és felnőttek számára az egyesületi felszerelések használata bérléshez kötött.',
  oszlopok: {
    eszkoz: 'Eszköz',
    alkalmi: 'Alkalmi díj (1 alkalom)',
    havi: 'Havi díj (fix edzéshely esetén)',
  },
  tetelek: [
    { eszkoz: 'Íj', reszlet: 'kezdő/felnőtt', alkalmi: '1 000 Ft', havi: '3 000 Ft' },
    { eszkoz: 'Vesszőbérlés', reszlet: '5 db', alkalmi: '800 Ft', havi: '2 500 Ft' },
    { eszkoz: 'Vesszőbérlés', reszlet: '3 db', alkalmi: '300 Ft', havi: '1 000 Ft' },
    { eszkoz: 'Gyakorló fa fegyver', reszlet: 'kard, fokos, lándzsa, kés', alkalmi: '800 Ft', havi: '2 500 Ft' },
    { eszkoz: 'Fém szablya', alkalmi: '1 000 Ft', havi: '3 000 Ft' },
    { eszkoz: 'Védősisak', alkalmi: '1 000 Ft', havi: '3 000 Ft' },
    { eszkoz: 'Páncél', reszlet: 'bőr páncél / láncing', alkalmi: '1 500 Ft', havi: '4 000 Ft' },
    { eszkoz: 'Párnázott kabát', reszlet: 'vastag védőruha', alkalmi: '800 Ft', havi: '2 500 Ft' },
    { eszkoz: 'Védőkesztyű', alkalmi: '300 Ft', havi: '1 000 Ft' },
  ] as BerlesTetel[],
  hasznalat:
    'Az eszközöket rendeltetésszerűen kell használni, és minden használat után tisztán, ép állapotban kell visszaadni. Sérülés vagy elvesztés esetén a bérlő felel a kárért.',
  feltetelekCim: 'Bérlési feltételek',
  feltetelek: [
    { cim: '11 éves kortól lehetséges', szoveg: 'A bérlés 11 éves kortól vehető igénybe.' },
    { cim: 'Tagság szükséges', szoveg: 'Csak beiratott tagok vehetik igénybe a bérlési lehetőséget.' },
    { cim: 'Lemondás esetén', szoveg: 'A bérlés díja a lemondás esetén nem jár vissza.' },
    {
      cim: 'Óvjuk és becsüljük',
      szoveg:
        'Óvjuk és becsüljük meg az egyesület eszközeit! Együttműködésünkkel mindenki hosszú távon használhatja őket.',
    },
    {
      cim: 'Közösségben minden könnyebb',
      szoveg:
        'Ha kérdésed van az eszközökkel vagy felszereléssel kapcsolatban, keress bátran oktatóinkat vagy a nagyobb diákokat – szívesen segítünk!',
    },
  ],
  sajatFelszereles: [
    {
      cim: 'Saját felszerelés',
      szoveg:
        'A megfelelő eszközök beszerzésében tudunk segíteni, beszerzési helyeket és lehetőségeket ajánlunk.',
    },
    {
      cim: 'Saját eszközeid tárolása',
      szoveg:
        'Saját felszerelésedet magaddal is hordhatod, de ha már van fix edzőhelyed, lehetőség szerint személyre szólóan ott is tárolhatod.',
    },
    {
      cim: 'Saját felszerelés vásárlása',
      szoveg:
        'Saját felszerelésed megvásárlására akár apránként, a bérlésen keresztül is lehetőséget biztosítunk.',
    },
  ],
};

/* -------------- BEIRATKOZÁS — forras/Arpad_Nepe_beiratkozo_lap_2026_27.docx -------------- */

export const beiratkozas = {
  ev: '2026–27',
  cim: 'Beiratkozás a 2026–27-es évre',
  urlap: 'Beiratkozó lap 2026–27',
  letoltes: '/dokumentumok/beiratkozo-lap-2026-27.docx',
  urlapMegjegyzes:
    'A beiratkozó lapot nyomtatva, nagybetűvel, olvasható nyomtatott betűvel kérjük kitölteni; 18 év alatt a szülő/gondviselő adataival és aláírásával.',
  feltetelekCim: 'Jelentkezési és fizetési feltételek',
  feltetelek: [
    'A 2026–27-es év díja 12 500 Ft/hó egy választott foglalkozás/csoport esetén.',
    'Több választott foglalkozás esetén a díj ennek megfelelően szorzódik; a harmadik választott foglalkozástól csak jelképes, alkalmankénti hozzájárulást kérünk.',
    'Szeptemberben tört hónap esetén a díj arányosan fizetendő. Ezt követően minden hónap egész hónapnak számít (4 alkalom/hó); hiányzás esetén más foglalkozáson lehetőség van pótlásra.',
    'Az első félév szeptembertől január végéig tart. November elején azoktól, akik folytatni szeretnék, kérjük az első félév fennmaradó díjának egyösszegű rendezését.',
    'A második félév februártól június közepéig tart; ennek díját februárban kérjük egy összegben rendezni.',
    'A díjat egy lezárt borítékban a gyermek neve, osztálya és az időszak megjelölésével, vagy személyesen a foglalkozásokon lehet befizetni. Utalással nem tudunk foglalkozni.',
  ],
  felszerelesCim: 'Szükséges felszerelések',
  felszerelesBevezeto:
    'Azoknak, akik rendszeresen szeretnének járni az egyesülethez, az első, illetve később a második félévben a következő tárgyakat kell beszerezniük; ebben segítséget adunk:',
  felszereles: [
    '3 db nyílvessző',
    'üres doboz a kézműves foglalkozásokhoz',
    'kesztyű a víváshoz',
    'gyakorló fakard',
    'elkészíthető gyakorlókés',
    'nagyobbaknak arcvédő sisak (vívósporthoz való)',
    'egyesületi póló az egységes megjelenéshez',
    'egyesületi tagkönyv',
  ],
  biztonsagCim: 'Biztonság és szabályzat',
  biztonsag:
    'Az íjászat, vívás és egyéb foglalkozások során az oktató biztonsági utasításait és az egyesület szabályzatát kötelező betartani.',
  adatkezelesCim: 'Adatkezelés',
  adatkezeles:
    'A megadott személyes adatokat az Árpád Népe Egyesület a jelentkezés, kapcsolattartás, a foglalkozások szervezése és a díjfizetés nyilvántartása céljából kezeli. Az adatkezelés részletes feltételeiről az egyesület adatkezelési tájékoztatójában lehet tájékozódni.',
} as const;

/* ------------- KÖZÖSSÉGI ÉLET — FORRÁS: kezdőlap „KÖZÖSSÉGI ÉLET." (változatlan) ------------- */

export const kozossegiElet = [
  {
    cim: 'Külsős rendezvényeken való részvétel',
    szoveg:
      'Ezek családi rendezvényektől fesztiválokig bármilyen típusúak lehetnek. Az ilyen rendezvényeken sok emberrel találkozunk, és tudjuk az Egyesületet, illetve a hagyományőrzést népszerűsíteni.',
  },
  {
    cim: 'Saját nyílt napok',
    szoveg:
      'December 21. körül téli napforduló, január–február farsang, március kiszézés — de egyéb programot is kitalálhatunk.',
  },
  {
    cim: 'Kardos és íjász bemutató, fellépés',
    szoveg: 'Bemutatók gyakorlása és fellépés rendezvényeken.',
  },
  {
    cim: 'Erdei csata, íjászverseny',
    szoveg:
      'Jellemzően a XVII. kerületi Turulmezőre szoktunk járni, de más verseny is szóba jöhet igény szerint.',
  },
  {
    cim: 'Táblás társasjátékozás',
    szoveg: 'Van vagy 150 társasjátékunk, komoly, összetettebb játékok is.',
  },
  {
    cim: 'Asztali szerepjáték',
    szoveg:
      'Most M.A.G.U.S. parti fut Predokban, de van D&D történet, Mage és egy saját 10. századi elképzelés izgalmas történetekkel és karakterekkel.',
  },
  {
    cim: 'Népzenélés, éneklés',
    szoveg:
      'Ha van rá igény, moldvai dallamokat tanulhatunk, gyakorolhatunk; ha kialakul egy jó csapat, még saját táncházakat is tarthatunk.',
  },
  {
    cim: 'Esti testedzés',
    szoveg:
      'Saját testsúlyos edzések, súlyzós edzések, de van boxzsák is. Ez nem edzés, magunkat képezzük.',
  },
  {
    cim: 'Táncházlátogatás',
    szoveg: 'Budapesten jellemzően péntek vagy hétvége.',
  },
  {
    cim: 'Sütés, főzés',
    szoveg: 'Szabadtűzön, kemencében vagy egyszerű villanytűzhelyen.',
  },
  {
    cim: 'Felszerelés készítése, karbantartása',
    szoveg:
      'Saját és az egyesület felszereléseinek elkészítése, javítása — pl. jurta, páncél, gyakorló fegyver, ruházat.',
  },
];
