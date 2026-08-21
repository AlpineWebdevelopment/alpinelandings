/**
 * 50 órás közösségi szolgálat.
 * FORRÁS: https://arpadnepe.mozello.hu/kozossegi-szolgalat/
 */

export const kozossegiSzolgalat = {
  vezeto:
    'Ha szeretnéd az 50 órás közösségi szolgálatodat egy hagyományőrző csapatnál eltölteni, ne gondolkozz tovább: keress meg minket és segíts nekünk.',
  lehetosegekCim: 'Leggyakoribb lehetőségek',
  lehetosegek: [
    'Segíthetsz a gyerekeknél a foglalkozásainkon.',
    'Segíthetsz a programjainkon, a különböző rendezvényeken, ahova meghívnak minket.',
  ],
  allandoCim: 'Állandó programjaink',
  allando: [
    { nap: 'Hétfő', ker: 'XVI. ker.', ido: '17:00–19:00', leiras: 'Gyerek hagyományőrző foglalkozás' },
    { nap: 'Szerda', ker: 'XIV. ker.', ido: '13:00–15:00', leiras: 'Alsós gyerekekkel hagyományőrző foglalkozás' },
    { nap: 'Szerda', ker: 'XIV. ker.', ido: '16:00–18:00', leiras: 'Gyerekek és ifi hagyományőrző foglalkozás' },
    { nap: 'Péntek', ker: 'XIV. ker.', ido: '13:00–15:00', leiras: 'Gyerek hagyományőrző foglalkozás' },
    { nap: 'Péntek', ker: 'XIV. ker.', ido: '16:00–18:00', leiras: 'Gyerekek és ifi hagyományőrző foglalkozás' },
  ],
  alkalmi: {
    cim: 'Alkalmi programlehetőségek, tervek',
    szoveg:
      'Ha érdeklődsz valamelyik program iránt, akkor írj, és megírom, mikor lenne megszervezve, illetve hogy egy vagy több fővel indul.',
  },
  tagsag:
    'Ha tetszik egyesületünk, akkor szívesen várunk rendes tagként is foglalkozásainkra, edzéseinkre!',
  kapcsolattarto: 'Urbán Péter',
};

/**
 * A jelentkezés menete.
 * Az 01–03. lépés a forrásoldal saját mondataiból következik
 * („keress meg minket" → „írj, és megírom, mikor lenne megszervezve" →
 * „segíthetsz a gyerekeknél a foglalkozásainkon").
 * A 04. lépés (óraigazolás, iskolai adminisztráció) NEM szerepel a jelenlegi
 * oldalon — ezért MINTA jelöléssel jelenik meg, a valós menetet az egyesület adja meg.
 */
export const jelentkezesLepesek: {
  szam: string;
  cim: string;
  szoveg: string;
  minta?: boolean;
}[] = [
  {
    szam: '01',
    cim: 'Keress meg minket',
    szoveg:
      'Írj e-mailt vagy hívj telefonon. Elég annyit megírnod, hogy melyik napokon érnél rá, és hány órát kell teljesítened.',
  },
  {
    szam: '02',
    cim: 'Egyeztetünk egy időpontot',
    szoveg:
      'Megbeszéljük, melyik állandó foglalkozáshoz tudsz csatlakozni, illetve mikor lesz olyan rendezvényünk, ahol segíthetsz.',
  },
  {
    szam: '03',
    cim: 'Jössz és segítesz',
    szoveg:
      'A gyerekfoglalkozásokon az oktatók mellett segítesz, rendezvényeken pedig a programelemek működtetésében — íjászat, népi játékok, kézműves asztal.',
  },
  {
    szam: '04',
    cim: 'Igazoljuk az órákat',
    szoveg:
      'A teljesített órákat az egyesület igazolja, az iskolád által kért formanyomtatványon. — Ez a lépés minta: a pontos menetet az egyesület adja meg.',
    minta: true,
  },
];
