/**
 * Edzés- és foglalkozásrend, árak.
 * FORRÁS: https://arpadnepe.mozello.hu/ kezdőlap — „Programok Gyerekeknek",
 * „Programok IFIKNEK ÉS FELNŐTTEKNEK", valamint a nyitó edzéslista (férőhelyszámok).
 */

export type Alkalom = {
  ido: string;
  cim: string;
  korosztaly: string;
  leiras: string;
  ferohely?: string;
  ar?: string;
};

export type Nap = {
  nap: string;
  helyszinId: 'xvi' | 'xiv';
  helyszin: string;
  cim: string;
  alkalmak: Alkalom[];
};

export const heti: Nap[] = [
  {
    nap: 'Hétfő',
    helyszinId: 'xvi',
    helyszin: 'XVI. ker. — egyesületi központ',
    cim: 'Irha u. 21.',
    alkalmak: [
      {
        ido: '17:00–19:00',
        cim: 'Hagyományőrző foglalkozás',
        korosztaly: 'Gyerek és ifi',
        leiras: 'Vívás, íjászat, kézműves és egyéb népi kultúra.',
        ferohely: '8 férőhely',
      },
      {
        ido: '19:00–20:00',
        cim: 'Tradi íjász edzés',
        korosztaly: 'Minden korosztály',
        leiras: 'Íjászat minden korosztálynak.',
      },
    ],
  },
  {
    nap: 'Szerda',
    helyszinId: 'xiv',
    helyszin: 'XIV. ker. — Hunyadi iskola',
    cim: 'Wass Albert tér 12.',
    alkalmak: [
      {
        ido: '13:00–15:00',
        cim: 'Hagyományőrző foglalkozás',
        korosztaly: 'Alsós gyerekek',
        leiras: 'Vívás, íjászat, kézműves és egyéb népi kultúra.',
      },
      {
        ido: '16:00–18:00',
        cim: 'Hagyományőrző foglalkozás',
        korosztaly: 'Gyerek és ifi',
        leiras:
          'Fókusz: vívás, íjászat — igény szerint kézműves és egyéb népi kultúra.',
        ferohely: '7 férőhely',
      },
      {
        ido: '17:30–18:30',
        cim: 'Tradi íjász edzés',
        korosztaly: 'Vegyes korosztály',
        leiras: 'Íjászat minden korosztálynak.',
        ferohely: '3 férőhely',
      },
      {
        ido: '18:00–20:00',
        cim: 'Íjász és szablyavívó edzés',
        korosztaly: 'Ifi és felnőtt',
        leiras: 'Íjászat és vívás.',
        ferohely: '6 férőhely',
      },
    ],
  },
  {
    nap: 'Péntek',
    helyszinId: 'xiv',
    helyszin: 'XIV. ker. — Hunyadi iskola',
    cim: 'Wass Albert tér 12.',
    alkalmak: [
      {
        ido: '13:00–15:00',
        cim: 'Hagyományőrző foglalkozás',
        korosztaly: 'Gyerek',
        leiras: 'Vívás, íjászat, kézműves és egyéb népi kultúra.',
      },
      {
        ido: '16:00–18:00',
        cim: 'Hagyományőrző foglalkozás',
        korosztaly: 'Felsősök és középiskolások',
        leiras: 'Vívás, íjászat, kézműves és egyéb népi kultúra.',
        ferohely: '4 férőhely',
      },
      {
        ido: '17:30–18:30',
        cim: 'Tradi íjász edzés',
        korosztaly: 'Vegyes korosztály',
        leiras: 'Íjászat minden korosztálynak.',
        ferohely: '4 férőhely',
      },
      {
        ido: '18:00–20:00',
        cim: 'Íjászat és vívás',
        korosztaly: 'Ifi és felnőtt',
        leiras: 'Íjászat és vívás.',
      },
    ],
  },
  {
    nap: 'Vasárnap',
    helyszinId: 'xvi',
    helyszin: 'XVI. ker. — egyesületi központ',
    cim: 'Irha u. 21.',
    alkalmak: [
      {
        ido: '16:00–19:00',
        cim: 'Hagyományőrző délután családoknak',
        korosztaly: 'Vegyes korosztály',
        leiras:
          'Íjászat, vívás, fegyverdobás, kézművesség, sütés, főzés, néptánc, történelem, társasjátékozás, egyéb közösségi programok.',
        ar: '4 500 Ft/alkalom',
      },
      {
        ido: '19:00–21:00',
        cim: 'Szablyavívó és íjász edzés',
        korosztaly: 'Ifi és felnőtt',
        leiras: 'Vívás, íjászat.',
        ferohely: '12 férőhely',
        ar: '3 000 Ft/alkalom',
      },
    ],
  },
];

export type ArTetel = { cim: string; ertek: string; megjegyzes?: string };

/** FORRÁS: kezdőlap — árak a „Programok…" szakaszok végén. */
export const arak: ArTetel[] = [
  {
    cim: 'Heti foglalkozás, edzés (4 alkalom)',
    ertek: '11 000 Ft/hónap',
    megjegyzes:
      'Minden olyan foglalkozásra, amelynél külön ár nincs feltüntetve.',
  },
  {
    cim: 'Vasárnapi családi hagyományőrző délután',
    ertek: '4 500 Ft/alkalom',
  },
  {
    cim: 'Vasárnap esti ifi és felnőtt edzés',
    ertek: '3 000 Ft/alkalom',
  },
  {
    cim: 'Heti 3 vagy több alkalom',
    ertek: '+5 000 Ft/hónap',
    megjegyzes:
      'Heti két edzés esetén a két edzés, foglalkozás összege fizetendő; heti 3 vagy több alkalomnál még +5 000 Ft/hónap.',
  },
];

export const arMegjegyzes =
  'Nagyobb, összetettebb kézműves munkáknál lehet + alapanyagköltség, pl. tegez, tarsoly, faragott tál, ruha készítésekor.';

/** FORRÁS: kezdőlap — „2025-26-os tanév edzési, foglalkozásai" */
export const felszereles = {
  bevezeto:
    'Októbertől törekszünk az egységes kép elérésére, ezért a programokra járó gyerekeknek, felnőtteknek a következőknek kell majd mielőbb megfelelnie. A felszerelések egy részét mi magunk is el tudjuk készíteni!',
  tetelek: [
    {
      cim: 'Edzésruházat',
      szoveg:
        'Fekete, egyesületi póló. Az edzés egyéb ruházata nincs meghatározva — célszerű kényelmesen, sportosan öltözni. Idővel, igény szerint korhű hagyományőrző ruhában, páncélban is végig lehet nyomni majd az edzéseket.',
    },
    {
      cim: 'Kesztyű',
      szoveg:
        'Bármi jó lehet, de érdemes olyat venni, ami protektoros, vagy víváshoz készült kesztyű. Lesz lehetőség pl. taktikai kesztyű vívókesztyűvé alakítására hétvégi kézműves foglalkozás keretében.',
    },
    {
      cim: 'Nyílvessző',
      szoveg:
        '3 vagy 5 db megfelelő névvel ellátott nyílvessző, hordozáshoz megfelelő zárt tárolóval. Egyes edzéshelyszíneken a tárolás is megoldható. Íj megléte az elején nem kötelező.',
    },
    {
      cim: 'Gyakorló fegyverek',
      szoveg:
        '1 db gyakorló fa szablya. Ezt a már asztalossal legyártatott alapanyagból workshopunkon el tudja mindenki magának készíteni. Más gyártású gyakorló kardok nem jók! Később gyakorló fokost, dárdát és kést is tudunk készíteni.',
    },
    {
      cim: 'Tagsági igazolvány',
      szoveg:
        'Szükség lesz egy normál fényképre. Az igazolványhoz csatolunk egy pótlapot, amelyben nyomon tudjuk követni az aktivitást, melyet a következő év kezdetén (szeptember 1-től) szeretnénk majd jutalmazni.',
    },
  ],
  felnott: {
    cim: 'Felnőtt edzés — felszerelési célok az első 1–3 évben',
    bevezeto:
      'A fenti felszerelési tárgyakon felül. A felsorolt eszközök ahhoz kellenek, hogy a fémfegyveres edzést el tudjuk kezdeni. Fontos a test védelme.',
    tetelek: [
      'Jó minőségű kesztyű, ami véd az erős ütések ellen',
      'Vastag harci fegyverkabát (gambeson)',
      'Öv',
      'Jó minőségű fém szablya és tok szíjjal',
      'Arcvédő sisak, fejvédő (plexis vagy rácsos)',
      'Láncing vagy bőrpáncél',
      'Gyakorló kés (vásárolt, de készíteni is tudunk)',
    ],
  },
} as const;

/** FORRÁS: kezdőlap — „KÖZÖSSÉGI ÉLET." */
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
