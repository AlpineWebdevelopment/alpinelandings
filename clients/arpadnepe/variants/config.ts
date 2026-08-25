/**
 * KÉT FÜGGETLEN TENGELY: VÁLTOZAT és SZÍNSÉMA.
 *
 *   1. VÁLTOZAT (/a, /b, /c) — a hero FELÉPÍTÉSE: mi a fotó szerepe, és hol ül
 *      a legfrissebb Facebook-bejegyzés. Ezt az útvonal dönti el. A szerkezet,
 *      a tipográfia és a motívumtár egyébként mindhárom változatban azonos.
 *
 *   2. SZÍNSÉMA (Pergamen, Indigó, Posztó, Parázs, Szattyán) — kizárólag a
 *      tokenek értéke. A jobb alsó sarokban lévő lebegő váltóval BÁRMELYIK
 *      oldalon cserélhető, tehát mindhárom változat mind az öt színben
 *      megnézhető (3 × 5 = 15 nézet). Ugyanez a váltó visz át a másik két
 *      változatra is — az aktuális aloldalt megtartva.
 *      A választás localStorage-ban marad, így aloldalra lépve is megőrződik.
 *
 * Tényeket ez a fájl nem tartalmaz; azok a /content rétegben vannak.
 */

/* ==========================================================================
   1 — SZÍNSÉMÁK
   ========================================================================== */

export type SemaKulcs = 'pergamen' | 'indigo' | 'poszto' | 'parazs' | 'szattyan';

export type Sema = {
  kulcs: SemaKulcs;
  /** A séma neve. */
  nev: string;
  /** Egysoros leírás. */
  leiras: string;
  /** Honnan jönnek a színek. */
  forras: string;
  /** A paletta fő színei, ügyfélnek olvasható néven. */
  paletta: { nev: string; hex: string }[];
  /** Hatókörosztály a tokenkészlethez (app/globals.css). */
  scope: string;
  /** Sötét alapú séma-e. */
  sotet: boolean;
};

export const semak: Record<SemaKulcs, Sema> = {
  pergamen: {
    kulcs: 'pergamen',
    nev: 'Pergamen',
    leiras:
      'Világos pergamen alap, cinóbervörös kiemelés, aranyfüst díszítés és lazúrkék linkek. A középkori kódexlap festékei.',
    forras: 'Kódexfestékek — pergamen, cinóber, aranyfüst, lazúr',
    paletta: [
      { nev: 'Pergamen', hex: '#F2E8D2' },
      { nev: 'Cinóber', hex: '#A32E17' },
      { nev: 'Aranyfüst', hex: '#9E772B' },
      { nev: 'Lazúr', hex: '#2C4A7C' },
    ],
    scope: 'sema-pergamen',
    sotet: false,
  },
  indigo: {
    kulcs: 'indigo',
    nev: 'Indigó',
    leiras:
      'Sötét indigó alap fehér mintanyomással, a tartalom vászonszínű lapokon, krappvörös kiemeléssel. A kékfestő vászon színei.',
    forras: 'Kékfestő vászon — indigó, fehér mintanyomás, krappvörös',
    paletta: [
      { nev: 'Indigó', hex: '#1B2E52' },
      { nev: 'Vászon', hex: '#F7F2E6' },
      { nev: 'Krappvörös', hex: '#AE3B2C' },
      { nev: 'Mintafehér', hex: '#E8EEF7' },
    ],
    scope: 'sema-indigo',
    sotet: true,
  },
  poszto: {
    kulcs: 'poszto',
    nev: 'Posztó',
    leiras:
      'Fehér gyapjú alap, posztózöld kiemelés és sárgaréz díszítés. A szűrhímzés színei — szándékosan piros nélkül.',
    forras: 'Szűrposztó — fehér gyapjú, posztózöld, sárgaréz',
    paletta: [
      { nev: 'Gyapjú', hex: '#F0EDE3' },
      { nev: 'Posztózöld', hex: '#2C4A38' },
      { nev: 'Sárgaréz', hex: '#91742C' },
      { nev: 'Fakó zöld', hex: '#4F6248' },
    ],
    scope: 'sema-poszto',
    sotet: false,
  },
  parazs: {
    kulcs: 'parazs',
    nev: 'Parázs',
    leiras:
      'Fehér mészfelület, parázsnarancs kiemelés, fekete tinta. A tábortűz színei — a készlet legerősebb kontrasztú, legvilágosabb sémája.',
    forras: 'Tábortűz — mészfehér, parázsnarancs, fekete',
    paletta: [
      { nev: 'Mészfehér', hex: '#FFFFFF' },
      { nev: 'Parázs', hex: '#B04405' },
      { nev: 'Láng', hex: '#E8891F' },
      { nev: 'Korom', hex: '#121212' },
    ],
    scope: 'sema-parazs',
    sotet: false,
  },
  szattyan: {
    kulcs: 'szattyan',
    nev: 'Szattyán',
    leiras:
      'Cserzett bőr: a nomád tarsoly és a kódexkötés ugyanabból az anyagból készült. Sötét bőralap, csontszín tinta, vörösréz és patinazöld.',
    forras: 'Szattyánbőr — cserzett bőr, csont, vörösréz, patina',
    paletta: [
      { nev: 'Szattyán', hex: '#2B1F17' },
      { nev: 'Csont', hex: '#F4EAD9' },
      { nev: 'Vörösréz', hex: '#E3A877' },
      { nev: 'Patina', hex: '#93BDA8' },
    ],
    scope: 'sema-szattyan',
    sotet: true,
  },
};

export const semaKulcsok: SemaKulcs[] = [
  'pergamen',
  'indigo',
  'poszto',
  'parazs',
  'szattyan',
];

/** A lebegő váltó ide menti a választást. */
export const SEMA_TAROLO = 'arpadnepe-sema';

/**
 * A burkolón ülő osztály. Nem cserélődik: a változat ALAPÉRTELMEZETT sémáját
 * a `semak[...].scope` adja mellé, a felhasználó választását pedig a <html>-re
 * tett `valaszt-*` osztály írja felül (lásd app/globals.css).
 */
export const SEMA_GYOKER_OSZTALY = 'sema-gyoker';

/** A <html>-re kerülő felülíró osztály neve. */
export function semaValasztOsztaly(k: SemaKulcs): string {
  return `valaszt-${k}`;
}

/**
 * Az első festés előtt lefutó szkript.
 *
 * A <html> elemre teszi a választott séma felülíró osztályát. Azért a
 * <html>-re, és nem a burkolóra: így a szkript már a <head>-ben lefuthat
 * (a documentElement ott is létezik), tehát a `next/script`
 * `beforeInteractive` stratégiájával adható meg — nem kell React-fába
 * ágyazott <script>, ami kliensoldali renderkor amúgy sem futna le.
 */
export const SEMA_INIT_SCRIPT = `(function(){try{
var t=localStorage.getItem(${JSON.stringify(SEMA_TAROLO)});
var o=${JSON.stringify(semaKulcsok)};
var e=document.documentElement;
o.forEach(function(c){e.classList.remove("valaszt-"+c)});
if(o.indexOf(t)>-1)e.classList.add("valaszt-"+t);
}catch(_){}})();`;

/* ==========================================================================
   2 — VÁLTOZATOK (a hero felépítése)
   ========================================================================== */

export type VariantKey = 'a' | 'b' | 'c';

export type VariantConfig = {
  key: VariantKey;
  /** Rövid jelölés a választóoldalon. */
  cimke: string;
  /** A változat neve. */
  alcim: string;
  /** Egysoros leírás. */
  leiras: string;
  /**
   * A hero felépítése.
   *   'lap' — a hero alapja a papír/vászon felület, a fotó külön mezőben áll
   *   'kep' — a fotó TÖLTI KI a hero hátterét, fátyol alatt; a szöveg és a
   *           bejegyzés a képen ül
   */
  heroHatter: 'lap' | 'kep';
  /**
   * Hol ül a legfrissebb Facebook-bejegyzés.
   *   'sav'         — teljes szélességű csík közvetlenül a fejléc alatt
   *   'hatterkepen' — kártya a hero háttérfotóján, a jobb hasábban
   *   'kepAlja'     — kártya a hero fotójának alsó részére ültetve
   */
  posztHely: 'sav' | 'hatterkepen' | 'kepAlja';
  /** Egysoros leírás a választóoldalra. */
  posztLeiras: string;
  /**
   * Ebben a színben nyílik meg először — hogy a választóoldalon egymás mellett
   * mindhárom séma látszódjon. A váltóval bármelyikre cserélhető.
   */
  alapSema: SemaKulcs;
  /**
   * A hero ALATTI oldal formanyelve. Hatókörosztályként kerül a burkolóra
   * (`stil-*`), és az egész oldalt átformálja — szakaszkeret, lapforma,
   * díszítmény, ritmus. A SZÍNTŐL független: mindhárom stílus mindhárom
   * színsémában működik.
   *
   *   'alap'     — a visszafogott kódexlap-formanyelv (1. változat)
   *   'sztyeppe' — honfoglalás ELŐTTI, nomád formavilág: palmetta, rovásjel,
   *                jurtakarika, tarsolylemez. Kör és sáv, nem doboz.
   *   'kodex'    — középkori magyar kódexlap: vonalazott tükör, rubrikák,
   *                iniciálék, marginália, kéthasábos szedés.
   */
  stilus: 'alap' | 'sztyeppe' | 'kodex';
  /** A formanyelv neve és egysoros leírása a választóoldalra. */
  stilusNev: string;
  stilusLeiras: string;
};

export const variants: Record<VariantKey, VariantConfig> = {
  a: {
    key: 'a',
    cimke: '1. változat',
    alcim: 'Hírcsík',
    leiras:
      'A fotó külön mezőben, a hero jobb hasábjában áll. A legfrissebb bejegyzés teljes szélességű hírcsíkként fut közvetlenül a fejléc alatt.',
    heroHatter: 'lap',
    posztHely: 'sav',
    posztLeiras:
      'Teljes szélességű hírcsík közvetlenül a fejléc alatt — a legfelső lehetséges hely.',
    alapSema: 'pergamen',
    stilus: 'alap',
    stilusNev: 'Visszafogott kódexlap',
    stilusLeiras:
      'Nyugodt, mai szerkezet kódexlap-utalásokkal: keretes lapok, vonalas pecsétmotívum, letisztult rács.',
  },
  b: {
    key: 'b',
    cimke: '2. változat',
    alcim: 'Képes hero',
    leiras:
      'A fotó kitölti a hero teljes hátterét, sötétítő fátyol alatt. A címsor, a bemutatkozó és a bejegyzéskártya a képen ül; külön fotómező nincs.',
    heroHatter: 'kep',
    posztHely: 'hatterkepen',
    posztLeiras: 'Kártya a hero háttérfotóján, a jobb hasábban.',
    alapSema: 'indigo',
    stilus: 'sztyeppe',
    stilusNev: 'Sztyeppe — honfoglalás előtti',
    stilusLeiras:
      'A 890 előtti nomád formavilág: palmettás szalagok, rovásjelek, jurtakarika-rács, tarsolylemez alakú mezők. Doboz helyett kör és sáv.',
  },
  c: {
    key: 'c',
    cimke: '3. változat',
    alcim: 'Cédula a képen',
    leiras:
      'A fotó külön mezőben, a hero jobb hasábjában áll. A bejegyzéskártya a kép alsó részére ül rá, a szélétől behúzva — mint egy múzeumi tárgycédula.',
    heroHatter: 'lap',
    posztHely: 'kepAlja',
    posztLeiras: 'Kártya a hero fotójának alsó részére ültetve, a kép szélétől behúzva.',
    alapSema: 'poszto',
    stilus: 'kodex',
    stilusNev: 'Kódex — középkori magyar',
    stilusLeiras:
      'Középkori kódexlap: vonalazott tükör, rubrikák, iniciálék, lapszéli jegyzetek, kéthasábos szedés és oklevélszerű táblázatok.',
  },
};

export const variantKeys: VariantKey[] = ['a', 'b', 'c'];

/** A formanyelv hatókörosztálya a burkolón. */
export function stilusOsztaly(v: VariantConfig): string {
  return `stil-${v.stilus}`;
}

export function variantHref(v: VariantKey, path: string = ''): string {
  return `/${v}${path}`;
}
