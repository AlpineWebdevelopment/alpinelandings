/**
 * Rendezvényszervezés, programkínálat, eszközbérlés.
 * FORRÁS: /szolgaltatasok/, /szolgaltatasok/rendezvenyszervezes/,
 * /szolgaltatasok/kosaras-korhinta/, /szolgaltatasok/eszkozberles/,
 * /szolgaltatasaink-kepekben/ (a programelemek nevei a képgaléria saját képaláírásai).
 */

export const rendezvenyBevezeto = {
  megszolitas: 'Tisztelt Rendezvényszervezők!',
  szoveg:
    'Ezen az oldalon az eddigi munkáink alapján összeállított példarendezvényeket találod. Ezek a rendezvények már több alkalommal sikeresek voltak a különböző intézményekben.',
  nyitottsag:
    'Nem csak történelmi vagy hagyományőrző programokhoz, hanem — függetlenül a tematikától — családi és gyerekprogramokhoz is bátran kérheti foglalkozásainkat.',
  egyedi:
    'Természetesen a megrendelő igényeihez igazodva megvalósíthatunk teljesen egyedi ötleteket, illetve alkothatunk az Önök számára a programjuknak megfelelő új foglalkozásokat is.',
  ar: 'A rendezvényekhez árat nem írtunk. A megrendelővel egyeztetve, a kért program függvényében tudunk árajánlatot küldeni.',
};

/** FORRÁS: /szolgaltatasok/ — a négy megrendelhető szolgáltatástípus. */
export const szolgaltatasok = [
  {
    cim: 'Csatlakozás a csapathoz',
    szoveg:
      'Csatlakozhatsz az egyesület csapatához: heti foglalkozások és edzések a XIV. és XVI. kerületben.',
  },
  {
    cim: 'Eszközbérlés',
    szoveg:
      'Bérelhetsz felszerelést az eszköztárunkból. Jellemzően az eszközeinket elkísérjük, segítünk beállítani, vagy ha társasjátékról van szó, akkor szívesen megtanítjuk a szabályait.',
  },
  {
    cim: 'Kisebb programok',
    szoveg:
      'Rendelhetsz kisebb programokat: iskolai bemutató nap, projektnap, óvodai foglalkozás, sportnap, családi nap, szülinap.',
  },
  {
    cim: 'Nagyobb rendezvények, fesztiválok',
    szoveg:
      'Nagyobb rendezvényekre, fesztiválokra is felkérheted az egyesületünket.',
  },
];

/** FORRÁS: /szolgaltatasaink-kepekben/ — a galéria saját képaláírásai. */
export type Programelem = { nev: string; kep?: string; alt?: string };

export const programelemek: Programelem[] = [
  { nev: 'Íjászat oktatása', kep: 'ijaszat-oktatas.webp', alt: 'Íjászat oktatása iskolás csoportoknak' },
  { nev: 'Lándzsavetés oktatása', kep: 'landzsavetes.webp', alt: 'Lándzsavetés oktatása' },
  { nev: 'Fegyveres harci bemutató', kep: 'fegyveres-bemutato.webp', alt: 'Fegyveres harci bemutató' },
  { nev: 'Csata a gyerekekkel', kep: 'csata-gyerekekkel.webp', alt: 'Több gyerek csatája az oktató ellen' },
  { nev: 'Jurtakuckó apróságoknak', kep: 'jurtakucko.webp', alt: 'Jurtakuckó apróságoknak' },
  { nev: 'Kis jurtafalu játékokkal', kep: 'kis-jurta-belul.webp', alt: 'A kis jurta belülről' },
  { nev: 'Közös jurtaállítás', kep: 'jurtaallitas.webp', alt: 'Közös jurta építés' },
  { nev: 'Kézműves — nemez tulipán', kep: 'nemez-tulipan.webp', alt: 'Kézműves foglalkozás, nemez tulipán készítése' },
  { nev: 'Kézműves — rovásírás nád pennával', kep: 'rovasiras.webp', alt: 'Kézműves, rovásírás tintával, nád pennával' },
  { nev: 'Kézműves — bőr karkötő', kep: 'bor-karkoto.webp', alt: 'Kézművesség, bőr karkötő készítése' },
  { nev: 'Kézműves — agyag érmék', kep: 'agyag-ermek.webp', alt: 'Kézművesség, agyag érmék készítése' },
  { nev: 'Népi ügyességi játékok', kep: 'gabonaorlo.webp', alt: 'Gabonaőrlős játszótér' },
  { nev: 'Fegyvermustra, beöltözés, sisakpróba', kep: 'sisakproba.webp', alt: 'Sisakpróba' },
  { nev: 'Lepénysütés, szalonnasütés', kep: 'lepenysutes.webp', alt: 'Lepénysütés' },
  { nev: 'Táncház, élő népzene', kep: 'tanchaz.webp', alt: 'Moldvai családi táncház' },
  { nev: 'Erdei csata, várvédés', kep: 'varvedes.webp', alt: 'Erdei csata, várvédés' },
  { nev: 'Táblás társasjátékok', kep: 'tarsasjatek.webp', alt: 'Táblás társasjátékok, program' },
  { nev: 'Gyermek íjászverseny', kep: 'gyermek-ijaszverseny.webp', alt: 'Gyermek íjászverseny' },
];

/** További, kép nélküli programelemek — szintén a galéria képaláírásaiból. */
export const tovabbiProgramelemek = [
  'Élő történelemóra',
  'Célbadobós ügyességi népi játék',
  'Célbalövés biztonsági vesszőkkel',
  'Dobófegyverek',
  'Régi tárgyak, szerszámok kiállítása',
  'Használati tárgyak kiállítása a nagy jurtában',
  'Mesemondás a kis jurtánál',
  'Mesetár és más előadások a nagy jurtában',
  'Táltos énektanulás, dobolás a jurtában',
  'Ismerkedés a hangszerekkel',
  'Csapatos vívógyakorlatok',
  'Vitézi Ötpróba',
  'Fűzfa halacska, horgász ügyességi játék',
  'Patkótartás, ügyességi népi játékok',
  'Beütős ügyességi népi játék',
  'Kis tál faragás',
  'Gyöngy karkötő készítése',
  'Bőr könyvjelző készítése',
  'Tűzugrás, tüzesvessző lövés',
  'Néptánc az óvodában',
  'Népzenei koncert és táncház szervezése',
];

/** FORRÁS: /szolgaltatasok/kosaras-korhinta/ */
export const korhinta = {
  cim: 'Kézzel hajtott kosaras fa körhinta',
  szoveg:
    'Körhintánkat megrendelés esetén a rendezvény helyszínére szállítjuk, összeszereljük és a program ideje alatt üzemeltetjük. A körhintát lehet önmagában is kérni mint látványos programelemet, vagy más programokkal is kombinálhatjuk.',
  vizsga:
    'Körhintánk a működéshez szükséges vizsgákkal, vizsgakönyvekkel rendelkezik.',
  kiegeszitok: [
    'Kis jurta népi játékokkal',
    'Kis jurta őrlőkerékkel és gabonakonyhás játékokkal',
    'Ügyességi népi játékok',
    '„Jurtafalu" játékokkal, kiállítással',
  ],
};

/** FORRÁS: /szolgaltatasok/eszkozberles/ */
export const eszkozberles = {
  cim: 'Eszközbérlés',
  szoveg:
    'Szeretnél bérelni valamit az eszköztárunkból? Nézz körül a fényképeink között, vagy keress meg minket telefonon vagy írásban, és mondd el, mit szeretnél, mit képzeltél el — ha tudunk, segítünk. Kérj ajánlatot, hogy mit mennyiért tudunk bérbe adni.',
};

/** FORRÁS: /szolgaltatasok/rendezvenyszervezes/ — „Az árajánlat szempontjai" */
export const arajanlatSzempontok = [
  'szállítási költségek',
  'a program előkészítésének ideje',
  'a felszerelés mennyisége',
  'a foglalkoztató személyek száma',
  'anyagköltség',
  'a program időtartama',
  'a programon résztvevő emberek száma',
  'egyéb paraméterek',
];

/** FORRÁS: /szolgaltatasok/rendezvenyszervezes/ — „Ajánlatkérés" űrlap mezői */
export const ajanlatkeresMezok = {
  program: [
    'Az egyesülettől kért program elképzelése',
    'A program helye és időpontja',
    'A program időtartama',
    'A program várható látogatottsága',
    'Hány fajta programelemet kérnek',
    'Milyen összeget szán a megrendelő az egyesület programjaira',
  ],
  megrendelo: [
    'A megrendelő intézmény neve',
    'A megrendelő intézmény címe',
    'Kapcsolattartó neve',
    'Telefonszám',
    'E-mail cím',
  ],
};
