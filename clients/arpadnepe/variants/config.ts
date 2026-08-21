/**
 * SZÍNSÉMÁK.
 *
 * A három útvonal (/a, /b, /c) UGYANAZT a tervezést mutatja — azonos
 * szerkezet, tipográfia és motívumtár —, csak más színsémával.
 * Az ügyfél tehát színt választ, nem oldalt.
 *
 * Tényeket ez a fájl nem tartalmaz; azok a /content rétegben vannak.
 */

export type VariantKey = 'a' | 'b' | 'c';

export type VariantConfig = {
  key: VariantKey;
  /** Rövid jelölés a választóoldalon. */
  cimke: string;
  /** A séma neve. */
  alcim: string;
  /** Egysoros leírás. */
  leiras: string;
  /** Honnan jönnek a színek. */
  forras: string;
  /** A paletta fő színei, ügyfélnek olvasható néven. */
  paletta: { nev: string; hex: string }[];
  /** Hatókörosztály a tokenkészlethez. */
  scope: string;
  /** Sötét alapú séma-e (a fotókezeléshez és a lapokhoz kell tudni). */
  sotet: boolean;
  /**
   * A hero felépítése.
   *   'lap' — a hero alapja a papír/vászon felület, a fotó külön mezőben áll
   *   'kep' — a fotó TÖLTI KI a hero hátterét, sötétítő fátyollal; a szöveg
   *           és a bejegyzés a képen ül
   */
  heroHatter: 'lap' | 'kep';
  /**
   * Hol ül a legfrissebb Facebook-bejegyzés. Mindhárom megoldás a hajtás
   * felső részén van — az egyesület ezek közül választ.
   *   'sav'         — teljes szélességű csík közvetlenül a fejléc alatt
   *   'hatterkepen' — kártya a hero háttérfotóján, a jobb hasábban
   *   'kepAlja'     — kártya a hero fotójának alsó részére ültetve
   */
  posztHely: 'sav' | 'hatterkepen' | 'kepAlja';
  /** Egysoros leírás a választóoldalra. */
  posztLeiras: string;
};

export const variants: Record<VariantKey, VariantConfig> = {
  a: {
    key: 'a',
    cimke: '1. séma',
    alcim: 'Pergamen',
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
    heroHatter: 'lap',
    posztHely: 'sav',
    posztLeiras: 'Teljes szélességű hírcsík közvetlenül a fejléc alatt — a legfelső lehetséges hely.',
  },
  b: {
    key: 'b',
    cimke: '2. séma',
    alcim: 'Indigó',
    leiras:
      'Sötét indigó alap fehér mintanyomással, a tartalom vászonszínű lapokon, krappvörös kiemeléssel. A kékfestő vászon színei. A hero teljes hátterét a fotó adja, indigó fátyol alatt.',
    forras: 'Kékfestő vászon — indigó, fehér mintanyomás, krappvörös',
    paletta: [
      { nev: 'Indigó', hex: '#1B2E52' },
      { nev: 'Vászon', hex: '#F7F2E6' },
      { nev: 'Krappvörös', hex: '#AE3B2C' },
      { nev: 'Mintafehér', hex: '#E8EEF7' },
    ],
    scope: 'sema-indigo',
    sotet: true,
    heroHatter: 'kep',
    posztHely: 'hatterkepen',
    posztLeiras:
      'A hero háttere maga a fotó, sötétítő fátyollal — a címsor és a bejegyzéskártya a képen ül.',
  },
  c: {
    key: 'c',
    cimke: '3. séma',
    alcim: 'Posztó',
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
    heroHatter: 'lap',
    posztHely: 'kepAlja',
    posztLeiras: 'Kártya a hero fotójának alsó részére ültetve, a kép szélétől behúzva.',
  },
};

export const variantKeys: VariantKey[] = ['a', 'b', 'c'];

export function variantHref(v: VariantKey, path: string = ''): string {
  return `/${v}${path}`;
}
