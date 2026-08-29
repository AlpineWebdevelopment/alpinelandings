/**
 * Aktuális ajánlatok.
 * FORRÁS: https://arpadnepe.mozello.hu/ kezdőlap + /referenciak/
 * Az itt szereplő tételek mind a jelenlegi oldal saját közlései.
 * Az időpontokat és árakat NEM ide írjuk: a kártya `foglalkozasId` / `arId`
 * hivatkozással a content/edzesek.ts 2026–27-es adataiból rendereli őket,
 * hogy egy szám se szerepeljen két helyen.
 * A kedvezményjellegű mintakártyák a content/minta.ts fájlban vannak.
 */

import type { ArId, FoglalkozasId } from './edzesek';

export type Ajanlat = {
  cim: string;
  leiras: string;
  cimke: string;
  reszletek?: string[];
  /** A kártyán a foglalkozás 2026–27-es időpontjai jelennek meg. */
  foglalkozasId?: FoglalkozasId;
  /** A kártyán az ártétel jelenik meg. */
  arId?: ArId;
  /** Változaton belüli hivatkozás (pl. '/foglalkozasok#beiratkozas'). */
  link?: { cimke: string; href: string };
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
    reszletek: ['Íj megléte az elején nem kötelező'],
    foglalkozasId: 'ijasz-10',
  },
  {
    cim: 'Várjuk az új jelentkezőket — 2026',
    cimke: 'Beiratkozás',
    leiras: '„2026. Várjuk hagyományőrző foglalkozásainkra az új jelentkezőket!"',
    reszletek: ['Gyerek, ifi és felnőtt csoportok is indulnak'],
    arId: 'havi',
    link: { cimke: 'Beiratkozás és feltételek', href: '/foglalkozasok#beiratkozas' },
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
