/**
 * Aktuális ajánlatok.
 * FORRÁS: https://arpadnepe.mozello.hu/ kezdőlap + /referenciak/
 * Az itt szereplő tételek mind a jelenlegi oldal saját közlései.
 * A kedvezményjellegű mintakártyák a content/minta.ts fájlban vannak.
 */

export type Ajanlat = {
  cim: string;
  leiras: string;
  cimke: string;
  reszletek?: string[];
};

export const valosAjanlatok: Ajanlat[] = [
  {
    cim: 'Ingyenes nyílt nap',
    cimke: 'Ingyenes',
    leiras:
      'Az egyesületi központban rendszeresen tartunk nyílt napot, ahol ki lehet próbálni az íjászatot, a vívást és a kézműves foglalkozásokat. 2025-ben négy alkalommal, 2024-ben ingyenes nyílt napokkal is vártuk az érdeklődőket.',
    reszletek: [
      'Helyszín: XVI. ker. Irha u. 21. — egyesületi központ',
      'A jelenlegi oldal hirdetése: 08. 02. vasárnap, 10:00–13:00 gyerekeknek, 15:00–18:00 felnőtteknek és tiniknek',
      'Bejelentkezés kötelező, hogy tudjuk, hány főre számíthatunk',
    ],
  },
  {
    cim: 'Új edzés kezdőknek',
    cimke: 'Új',
    leiras:
      'A jelenlegi oldal két helyen is jelzi: új edzés indul kezdőknek is. Íjászat és szablyavívás, előzetes tudás nélkül.',
    reszletek: [
      'Tradi íjász edzés: hétfő 19:00–20:00 (XVI.), szerda és péntek 17:30–18:30 (XIV.)',
      'Íj megléte az elején nem kötelező',
    ],
  },
  {
    cim: 'Várjuk az új jelentkezőket — 2026',
    cimke: 'Beiratkozás',
    leiras:
      '„2026. Várjuk hagyományőrző foglalkozásainkra az új jelentkezőket!" Heti foglalkozás, edzés ára: 11 000 Ft/hónap (4 alkalom).',
    reszletek: [
      'Gyerek, ifi és felnőtt csoportok is indulnak',
      'Vasárnapi családi délután: 4 500 Ft/alkalom',
      'Korlátozott férőhely — csoportonként 3–12 fő',
    ],
  },
  {
    cim: 'Aktivitás jutalmazása',
    cimke: 'Tagoknak',
    leiras:
      'A tagsági igazolványhoz csatolunk egy pótlapot, amelyben nyomon tudjuk követni az aktivitást, melyet a következő év kezdetén (szeptember 1-től) szeretnénk majd jutalmazni.',
  },
  {
    cim: 'Tárgyi adomány — jutalom a tanulóknak',
    cimke: 'Támogatás',
    leiras:
      'Van a családban olyan használt, de jó minőségű holmi, amit szívesen nekünk adományoznátok? Szívesen fogadunk mindenfélét, hogy az egyesületi évkezdéskor a szorgos tanulóinkat meg tudjuk jutalmazni.',
    reszletek: [
      'Íjász vagy egyéb sportfelszerelés, vívómaszk, fegyverek, páncélok',
      'Társasjátékok, könyvek, kézműves alapanyagok, szerszámok',
      'Viseletek, ruhaanyag és sok minden más, amit használni tudunk',
    ],
  },
];
