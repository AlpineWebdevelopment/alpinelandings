/**
 * KÉT FÜGGETLEN TENGELY: VÁLTOZAT és SZÍNSÉMA.
 *
 *   1. VÁLTOZAT (/a, /b) — a hero FELÉPÍTÉSE: mi a fotó szerepe, és hol ül
 *      a legfrissebb Facebook-bejegyzés. Ezt az útvonal dönti el. A szerkezet,
 *      a tipográfia és a motívumtár egyébként mindkét változatban azonos.
 *
 *      A 3. változat (/c — „Cédula a képen", kódex formanyelv) EGYELŐRE KI VAN
 *      VÉVE: az egyesület elé csak az A és a B kerül. A `kepAlja` poszthely és
 *      a `kodex` stílus alatta megmaradt (Landing.tsx, stilusok.css), így a
 *      visszahozásához csak ez a bejegyzés és az `app/c` útvonalfa kell.
 *
 *   2. SZÍNSÉMA (Arany–fekete, Arany–vörös) — kizárólag a
 *      tokenek értéke. A jobb alsó sarokban lévő lebegő váltóval BÁRMELYIK
 *      oldalon cserélhető, tehát mindkét változat mindkét színben megnézhető
 *      (2 × 2 = 4 nézet). Ugyanez a váltó visz át a másik változatra is — az
 *      aktuális aloldalt megtartva.
 *      A választás localStorage-ban marad, így aloldalra lépve is megőrződik.
 *
 * Tényeket ez a fájl nem tartalmaz; azok a /content rétegben vannak.
 */

/* ==========================================================================
   1 — SZÍNSÉMÁK
   ========================================================================== */

export type SemaKulcs = 'arany-fekete' | 'arany-voros';

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
  'arany-fekete': {
    kulcs: 'arany-fekete',
    nev: 'Arany–fekete',
    leiras:
      'Csontfehér lap, fekete betű, meleg sárgás arany kiemelés és fényes aranyfüst díszítés. A logó aranya viszi az egész oldalt.',
    forras: 'Az egyesület kérése — arany–fekete, világos alapon',
    paletta: [
      { nev: 'Csontfehér', hex: '#FCFAF2' },
      { nev: 'Fekete', hex: '#14120C' },
      { nev: 'Mély arany', hex: '#806700' },
      { nev: 'Aranyfüst', hex: '#E0B81C' },
    ],
    scope: 'sema-arany-fekete',
    sotet: false,
  },
  'arany-voros': {
    kulcs: 'arany-voros',
    nev: 'Arany–vörös',
    leiras:
      'Ugyanaz a világos alap fekete betűvel, de a kiemelés a logó vöröse, a díszítés az aranya. Ez áll a legközelebb magához a logóhoz.',
    forras: 'Az egyesület kérése — arany–vörös, fekete betűvel',
    paletta: [
      { nev: 'Pergamen', hex: '#F8F1E0' },
      { nev: 'Fekete', hex: '#15110B' },
      { nev: 'Vörös', hex: '#A32912' },
      { nev: 'Arany', hex: '#9E772B' },
    ],
    scope: 'sema-arany-voros',
    sotet: false,
  },
};

export const semaKulcsok: SemaKulcs[] = ['arany-fekete', 'arany-voros'];

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

export type VariantKey = 'a' | 'b';

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
   *   'kepAlja'     — kártya a hero fotójának alsó részére ültetve; JELENLEG
   *                     NEM HASZNÁLT (a 3. változattal együtt kivéve)
   */
  posztHely: 'sav' | 'hatterkepen' | 'kepAlja';
  /** Egysoros leírás a választóoldalra. */
  posztLeiras: string;
  /**
   * Ebben a színben nyílik meg először — hogy a választóoldalon egymás mellett
   * mindkét séma látszódjon. A váltóval bármelyikre cserélhető.
   */
  alapSema: SemaKulcs;
  /**
   * A hero ALATTI oldal formanyelve. Hatókörosztályként kerül a burkolóra
   * (`stil-*`), és az egész oldalt átformálja — szakaszkeret, lapforma,
   * díszítmény, ritmus. A SZÍNTŐL független: mindegyik stílus mindkét
   * színsémában működik.
   *
   *   'alap'     — a visszafogott kódexlap-formanyelv (1. változat)
   *   'sztyeppe' — honfoglalás ELŐTTI, nomád formavilág: palmetta, rovásjel,
   *                jurtakarika, tarsolylemez. Kör és sáv, nem doboz.
   *   'kodex'    — középkori magyar kódexlap: vonalazott tükör, rubrikák,
   *                iniciálék, marginália, kéthasábos szedés. JELENLEG NEM
   *                HASZNÁLT — a 3. változattal együtt kivéve, de a stíluslap
   *                megmaradt.
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
    alapSema: 'arany-fekete',
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
    alapSema: 'arany-voros',
    stilus: 'sztyeppe',
    stilusNev: 'Sztyeppe — honfoglalás előtti',
    stilusLeiras:
      'A 890 előtti nomád formavilág: palmettás szalagok, rovásjelek, jurtakarika-rács, tarsolylemez alakú mezők. Doboz helyett kör és sáv.',
  },
};

export const variantKeys: VariantKey[] = ['a', 'b'];

/** A formanyelv hatókörosztálya a burkolón. */
export function stilusOsztaly(v: VariantConfig): string {
  return `stil-${v.stilus}`;
}

export function variantHref(v: VariantKey, path: string = ''): string {
  return `/${v}${path}`;
}
