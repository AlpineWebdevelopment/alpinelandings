/**
 * A hat foglalkozás részletes leírása — az egyesület plakátjairól átírva.
 *
 * FORRÁS: az egyesület 2026. 08. 28-án átadott hat plakátja (forras/*.jpg), a
 * letölthető másolatuk a public/plakat/ alatt. A plakátok illusztrált,
 * 769 px széles képek: a szövegüket azért írtuk át élő szöveggé, hogy
 * olvasható, kereshető és képernyőolvasóval is elérhető legyen; maga a plakát
 * letöltésként érhető el minden foglalkozásnál.
 *
 * ÁTÍRÁSI SZABÁLY: szó szerint, a plakát saját szakaszcímeivel és
 * bekezdéstagolásával, magyar tipográfiával. Kizárólag a nyilvánvaló
 * generálási hibákat javítottuk — mindet itt felsorolva:
 *   — 11+ plakát, Biztonsági felszerelések: „foglalkozáss" → „foglalkozás"
 *   — Társasjáték plakát, Fantasy szerepjátékok: „szabálykönyvzet" → „szabálykönyv"
 *   — Társasjáték plakát, Más lehetőség: „vagyha" → „vagy ha"
 * NEM javítottuk, mert nem egyértelmű, mit akart mondani a szerző —
 * a README „Ügyféllel egyeztetendő" listáján szerepel:
 *   — Íjászat plakát, Biztonsági felszerelések: „Ajánlott kiegészítők:
 *     alkarvédő, ujjvédő, kesztyű, kifutó, Y vagy kifutó vagy Y kesztyű,
 *     és egyéb kiegészítők."
 *   — 11+ plakát: „gelevész" (az alsós plakáton „kelevész").
 *
 * A „Foglalkozásokon kívüli programlehetőségek" öt tétele több plakáton és az
 * árlistán is ugyanaz — egyszer tároljuk (content/edzesek.ts
 * `programlehetosegek`), itt csak a bevezető mondat van.
 */

import type { FoglalkozasId } from './edzesek';

export type PlakatResz = {
  cim: string;
  bekezdesek: string[];
  /** Külön kiemelt sor a plakáton (pl. a fegyveres gyakorlatok sorrendje). */
  kiemelt?: string;
  /** Felsorolás a szakaszban. */
  lista?: string[];
};

export type Plakat = {
  cim: string;
  korosztaly: string;
  alcim?: string;
  reszek: PlakatResz[];
  /** Ha a plakáton szerepel az ötös „programlehetőségek" blokk: a bevezetője. */
  programlehetosegekBevezeto?: string;
  zaro?: string;
  /** Letölthető plakát. */
  fajl: string;
  forras: string;
  /** Galériakép slugja a kártyához. */
  kep: string;
};

export type PlakatId = Exclude<FoglalkozasId, 'kozossegepito'>;

const KOZOSSEGI_KOR =
  'Az elkötelezettebb tagokból alakul ki egy belső kör, amivel a külvilág felé is meg tudjuk mutatni az egyesület és a hagyományőrzés erejét. Ez nem kötelezettség, hanem jutalom.';

const VARUNK =
  'Várunk minden érdeklődő gyermeket szeretettel, hogy együtt őrizzük és továbbadjuk hagyományainkat!';

export const plakatok: Record<PlakatId, Plakat> = {
  'gyermek-6-12': {
    cim: 'Gyermek hagyományőrző foglalkozások',
    korosztaly: 'Korosztály: 6–12 évesek',
    fajl: '/plakat/gyermek-6-12.jpg',
    forras: 'Gyermek_hagyomanyorzo_foglalkozasok_6-12_evesek.jpg',
    kep: 'kislany-ijat-feszit',
    reszek: [
      {
        cim: 'Íjászat',
        bekezdesek: [
          'Gyermek foglalkozásunkon jellemzően az alsós korosztály vesz részt.',
          'Íjászattal kezdjük a foglalkozást, a kezdőknek az alapokat megtanítjuk, és minél hamarabb az önálló munkára igyekszünk őket szoktatni.',
          'Később a képességeikhez mérten fokozatosan igyekszünk fejlődést elérni.',
          'A biztonsági szabályokat rögtön az elején és aztán folyamatosan mindig ismételjük, hogy a lőtéren minden szabályt automatikusan mindenki betartson.',
        ],
      },
      {
        cim: 'Fegyveres gyakorlatok – vívás',
        bekezdesek: [
          'Többféle fegyvert is fogunk majd tanulni, de a legelső, amivel kezdünk, az a magyar szablya.',
          'Mozgásgyakorlatok, vágásvédekező gyakorlatok, kontrollgyakorlatok, csatagyakorlatok a kezdőkkel mindaddig, ameddig jól nem teljesítenek, csak egy edző ellen a lehetségesek.',
          'Ha valaki már meglépte azt a szintet ügyességben, fegyelemben, akkor egymás ellen is tudnak majd párbajozni, illetve csatagyakorlatokban is bátran részt tudnak venni.',
        ],
        kiemelt:
          'A fegyveres gyakorlatok sorrendje: gyakorlófa szablya – késharc – fokos és pajzs használat – lándzsával való harc.',
      },
      {
        cim: 'Biztonsági felszerelések',
        bekezdesek: [
          'Kezdőknél, kicsiknél, amíg az oktató ellen megy a harc, addig nem kell semmilyen biztonsági felszerelés.',
          'Később mindenkinek lesz majd egy saját kesztyűje az ujjak védelmére, és egy arcvédős sisak, hogy védjük a fejet.',
          'A nagyobb és komolyabb védőfelszerelés, páncélok pedig a felsősök, tinédzserek és felnőtteknek a kiegészítői.',
        ],
      },
      {
        cim: 'Kézműves foglalkozások',
        bekezdesek: [
          'A gyerekek a kézművesség alapjaival kezdik, különböző tárgyak, eszközök, technikákkal találkozhatnak majd.',
          'Mindenki hozzon majd egy dobozt, amiben a saját munkadarabjait tudja majd tartani, amiken még van munka.',
          'Később lesznek olyan kézműves munkáink, amik több alkalmat is igénybe vesznek, így a dobozban tudjuk tárolni a félkész munkadarabokat, illetve akár a saját felszerelési tárgyainkat is.',
        ],
      },
      {
        cim: 'Más elemekkel is foglalkozunk',
        bekezdesek: [
          'Az Árpád Népe Egyesület fontosnak tartja, hogy tudjuk, mivel foglalkozunk, ismerjük az eszközeinket, azok részeit.',
          'Fogunk a történelmünkkel is foglalkozni, hagyományainkkal, játékainkkal.',
          'Tanulunk majd éneket, táncot is, illetve mindazon dolgokat érintjük, ami kultúránknak a része.',
        ],
      },
      {
        cim: 'Fegyverdobás',
        bekezdesek: ['Csatacsillag, balta, kés, kelevész használata. Alkalmanként kerül majd sorra.'],
      },
    ],
    zaro: VARUNK,
  },

  'gyermek-ifjusagi-11': {
    cim: 'Gyermek- és ifjúsági hagyományőrző foglalkozások',
    korosztaly: '11 éves kortól akár egyetemista korig',
    fajl: '/plakat/gyermek-ifjusagi-11.jpg',
    forras: 'Gyermek_es_ifjusagi_hagyomanyorzo_foglalkozasok_11_evestol_egyetemista_korig.jpg',
    kep: 'vivas-udvaron-fakard',
    reszek: [
      {
        cim: 'Íjászat',
        bekezdesek: [
          'Íjászattal kezdjük a programot.',
          'Jellemzően itt már haladó tanítványok vesznek részt, de ha kezdő jön hozzánk, akkor megtanítjuk az íjászat alapjait, és a képességeihez mérten adunk új feladatokat, hogy fejlődjék.',
          'A biztonsági szabályok betartása mindenkire kötelező érvényű.',
          'Itt már elvárható részünkről a saját felszerelés megléte, illetve ha nem, akkor a havi díjhoz eszközbérleti díj is társul.',
          'Az eszközbérleti díját meg lehet úgy is oldani, hogy apránként a bérlési díj, amikor eléri a megvételi árat, akkor automatikusan átkerül az új tulajdonosához.',
          'Milyen eszköz megléte szükséges? Legfontosabb 3–5 saját nyílvessző, gyakorló kesztyű, és a legvégén a saját íj.',
          'Egyéb kiegészítők, mint ruházat, tegez, öv, stb. Ez a saját elvárásaira van bízva.',
        ],
      },
      {
        cim: 'Az elkötelezettebb tagoknak lehetőség nyílik',
        bekezdesek: [],
        lista: [
          'Az egyesület munkájában való mélyebb részvételre.',
          'A kisebbek csoportjában segítségnyújtással kézműves vagy egyéb feladatoknál.',
          'Rendezvényeken való részvételre.',
          'Közösségi életben való aktívabb közreműködésre, részvételre.',
          'Illetve az érdeklődésünknek megfelelő programok, rendszeres programok, ha igény mutatkozik ilyesmire.',
        ],
      },
      {
        cim: 'Kézműves foglalkozások',
        bekezdesek: [
          'A gyerekek az alap kézműves tevékenységeken túl összetettebb feladatokkal is találkozhatnak.',
          'Többféle szerszámmal, anyaggal és technikával dolgozunk, illetve itt már van lehetőség egyéni ötletek megvalósítására is.',
          'A foglalkozáson jellemzően a régebbi tanítványok vesznek részt, akiknek már vannak tapasztalataik.',
          'Ha új tanítvány érkezik, képességeinek megfelelően tud becsatlakozni a foglalkozásba.',
          'Mindenkinek legyen saját doboza, amiben tárolni tudja a saját szerszámait, illetve a még készülő tárgyait.',
        ],
      },
      {
        cim: 'Fegyveres gyakorlat – vívás',
        bekezdesek: [
          'Íjászat után fegyvert fogunk.',
          'Sorakozóval, bemelegítéssel és erősítéssel kezdünk, utána pedig vágásgyakorlatok, kontrollgyakorlatok és sokféle csatagyakorlaton túl a párviadalok és a csatagyakorlatok világával is megismerkedhetnek a gyerekek.',
        ],
      },
      {
        cim: 'Biztonsági felszerelések',
        bekezdesek: [
          'Legfelső és legfontosabb a jól védő kesztyű.',
          'A kesztyűnket a kézműves foglalkozás alatt mi is fel tudjuk tuningolni.',
          'Második legfontosabb az arcot védő sisak.',
          'Harmadik: ruházat – hosszú ujjú felső és hosszú nadrág.',
          'Egyéb kiegészítőket is lehet felvenni, ha a tanítvány szeretné.',
        ],
      },
      {
        cim: 'Más elemekkel is foglalkozunk',
        bekezdesek: [
          'Az Árpád Népe Egyesület fontosnak tartja, hogy tudjuk, mit csinálunk, ezért különös hangsúlyt fektetünk a fegyvereink ismeretére.',
          'Találkozhatnak majd nálunk a diákok a történelmünkkel, népi szokásainkkal, táncokkal, énekekkel, játékokkal és mindenféle érdekes feladattal.',
          'Alkalomadtán fegyverdobást is gyakorlunk majd. Belekóstolhatsz a csatacsillag, gelevész, kés és balta dobásba is.',
        ],
      },
    ],
    zaro: VARUNK,
  },

  'ifjusagi-felnott-13': {
    cim: 'Ifjúsági és felnőtt foglalkozások, vívó és íjász csapat',
    korosztaly: '13 éves kortól felfelé',
    fajl: '/plakat/ifjusagi-felnott-13.jpg',
    forras: 'Ifjusagi_es_felnott_vivo_es_ijasz_csapat_nagyfelbontasu.jpg',
    kep: 'vivoedzes-sisakban',
    reszek: [
      {
        cim: 'Íjászat',
        bekezdesek: [
          'A foglalkozás elején kezdjük az íjászatot, jellemzően olyan fél órát hagyunk a műveletre.',
          'Mindenki az egyéni gyakorlás vagy a kijelölt edzés alapján cselekszik.',
          'A kezdőket megtanítjuk az íj használatára, és fokozatosan önálló munkára serkentjük.',
          'A haladóknak pedig olyan feladatokat igyekszünk adni, amelyek fejlesztik a már meglévő tudásukat.',
          'Elvárjuk a szigorú biztonsági szabályok betartását, amit ismétlünk is elég gyakran, hogy elkerüljük a baleseteket.',
        ],
        kiemelt: 'Íjászfoglalkozás: kb. 30 perc.',
      },
      {
        cim: 'Kézműves foglalkozások',
        bekezdesek: [
          'Ezen a programon külön kézműves foglalkozás nincs.',
          'Aki szeretne felszerelést készíteni, valamelyik időpontot, vagy a hétvégi nagy felszereléskészítő időpontot jelölje meg célnak. Akár rendszeresen, akár alkalomként.',
        ],
      },
      {
        cim: 'Fegyveres gyakorlat – vívás',
        bekezdesek: [
          'Íjászat után, sorakozó és a nap értékelését követően bemelegítéssel kezdünk, utána rövid erősítő gyakorlat következik, utána pedig elmerülünk a fegyverhasználatban. Különböző vágásgyakorlatok, védekező gyakorlatok, kontroll, illetve páros gyakorlatok következnek.',
          'A program vége felé jönnek a párbajok, illetve a csatajátékok.',
          'Ha olyan az idő és úgy egyezünk meg, akkor a program a kijelölt szabadtéri területen is folyhat, akkor pedig más formulákat követünk, de ezt majd az edzés előtti programon külön egyeztetjük.',
          'Itt lehet szó erdei csatáról, szabadtéri nagy gyakorlatról, plusz időpont, plusz időnyerés, tehát plusz egy óra edzés, ahol csak a csatát vagy a különböző csatajátékokat gyakoroljuk, más csapatokkal való megmérkőztés is lehetséges, illetve ami még csak eszünkbe jut.',
        ],
      },
      {
        cim: 'Más elemek a foglalkozásokon',
        bekezdesek: [
          'Hagyományaink többi szegmensét külön programokon tudjuk elsajátítani vagy megismerni.',
          'Ezekről mindig adok tájékoztatást, de önállóan is érdemes utánajárni és bekapcsolódni a megfelelő területekbe.',
        ],
      },
      {
        cim: 'Biztonsági felszerelés',
        bekezdesek: [
          'A biztonsági szabályok betartása kötelező. Ezeket rendszeresen ismertetem is, aki nem ismeri, weboldalunkon megtalálja.',
          'Szükséges felszerelések: kesztyű, ami jól védi a kezet. Vagy úgy szerezzük be, hogy az ujjakat, kézfejet protektorok védik, vagy elkészítjük magunknak bőr pikkelyekkel, ami szintén ugyanolyan jól véd.',
          'Arcvédő, sisak (plexis vagy hálós) a víváshoz: 1) a fejet tudjuk támadni sérülés nélkül, 2) ha a fejre csúszik egy ütés, akkor ne okozzon sérülést.',
          'Hosszú ujjú, hosszú nadrág kötelező, azok is védenek.',
          'Lehetőség van kiegészítőkre: alkarvédő, könyök, sípcsont, térdvédő, vagy akár gambeson és láncing.',
        ],
      },
    ],
    programlehetosegekBevezeto: `Ifi és felnőtt tagságunknak lehetőséget biztosítunk az edzéseken kívüli közösségi programokra. ${KOZOSSEGI_KOR}`,
  },

  'ijasz-10': {
    cim: 'Gyermek- és felnőtt íjászat',
    korosztaly: '10 éves kortól',
    alcim: 'Hagyományőrző foglalkozások',
    fajl: '/plakat/ijasz-10.jpg',
    forras: 'Gyermek_es_felnott_ijaszat.jpg',
    kep: 'ijaszok-lovonalon-pincelo',
    reszek: [
      {
        cim: 'Íjász edzések',
        bekezdesek: [
          'Ha valakit csak az íjászat érdekel, erre több időpontot is talál, római számmal jelölt helyszíneinken: XIV. és XVI. kerületben.',
          'Ezek jellemzően örömíjász edzések, laza tematikával.',
          'Az íjászat elkezdése előtt minden edzésen lesz egy kis alap bemelegítés.',
          'Kezdőket megtanítjuk az íjászat alapfogásaira, utána pedig a teljesítményüket alapul véve fejlesztjük tudásukat. Ha valahol hibát érzünk, azt fogjuk kigyakorolni.',
          'Mindenki önálló fejlődési utat jár be, és segítünk a hibák kiköszörülésében.',
          'Elsődleges célunk, hogy megmérettessük magunkat íjász versenyeken, de ez nem kötelező. Ha valaki nem szeretne versenyezni, nem kell ilyenre jelentkeznie.',
        ],
      },
      {
        cim: 'Biztonsági felszerelések',
        bekezdesek: [
          'Öltözetünk ne legyen lógós, semmi olyan ne legyen rajtunk, se ékszer, se kiegészítő, se a ruhánk olyan része, amit fel tud kapni a kilövéskor az íj, és az arcunkba vagy máshova tud csapni.',
          'Felszerelésünket mindig ellenőrizzük, hogy hibátlan legyen.',
          'A lőtér biztonsági szabályzatát kifüggesztjük, ismertetjük, és mindig felhívjuk rá a figyelmet.',
          'Ajánlott kiegészítők: alkarvédő, ujjvédő, kesztyű, kifutó, Y vagy kifutó vagy Y kesztyű, és egyéb kiegészítők.',
        ],
      },
      {
        cim: 'Íjász kézműves foglalkozás',
        bekezdesek: [
          'A foglalkozásnak nincs kézműves foglalkozás része.',
          'Ha valaki szeretne kézműveskedni, külön foglalkozásainkra szeretettel várjuk.',
        ],
      },
      {
        cim: 'Ha az egyesület munkájában jobban szeretnél elmélyedni, akkor lehetőség nyílik az alábbiakra',
        bekezdesek: [],
        lista: [
          'Rendezvényeken való részvétel, segítés. Lehetőség nyílik a rendezvényeken való részvételre, a saját szervezet rendezvényeinknél való segítői részvételre.',
          'Saját csapat indítása. Ha szeretnél idővel saját csapatot indítani más kerületben vagy más településen, akkor a megbeszéltek szerint erre is lesz lehetőség.',
          'Versenyzés, csapatszellem. Íjász csapatunk fő célja az íjászat gyakorlásán kívül a különböző versenyeken való részvétel. Ez természetesen nem kötelező, de segíti a csapat morálját, a csapat és az egyén fejlődését.',
        ],
      },
      {
        cim: 'Más elemek is a foglalkozásunkon',
        bekezdesek: [
          'Jellemzően az íjászat köti le az időnket, de fontos számunkra, hogy tudjuk, milyen eszközöket használunk, illetve mik a biztonsági előírásaink.',
          'Az íjász edzéseken történelmünkkel is találkozhatsz.',
        ],
      },
    ],
    zaro: `Ifi és felnőtt tagságunknak lehetőséget biztosítunk az edzéseken kívüli közösségi programokra. ${KOZOSSEGI_KOR}`,
  },

  kezmuves: {
    cim: 'Kézműveskedés és felszereléskészítés',
    korosztaly: '11–12 éves kortól felnőttekig',
    alcim: 'Olyanokat várunk, akik önállóan is képesek majd dolgozni.',
    fajl: '/plakat/kezmuves.jpg',
    forras: 'Kezmuveskedes_es_felszereleskeszites.jpg',
    kep: 'bor-pikkelyvert-keszul',
    reszek: [
      {
        cim: 'Kézműves foglalkozások',
        bekezdesek: [
          'A hétköznap megrendezésre kerülő kézműves foglalkozásainkra elsős gyerekektől várunk mindenkit szeretettel.',
          'Hétvégi, vasárnapi programunkra olyanokat várunk, akik önállóan képesek dolgozni, tűvel, éles késsel, stb., mert ott komolyabb felszerelési tárgyakat is szeretnénk elkészíteni.',
          'A hétköznap délutáni foglalkozásokon megismerkedhetünk különböző anyagokkal, különböző szerszámokkal és technikákkal.',
          'A kezdőkkel alapoktól indulunk, a haladókkal kívánságuk szerint összetettebb dolgokat is tudunk csinálni. A nagyobbakkal, akiknek már saját elképzeléseik vannak, nagyobb, összetettebb dolgokat is készíthetünk: akár szerkesztett, szép rajzzal ellátott pajzs, kis bőrpáncél, egyéb kiegészítők, ruházat, játékok, régi társasjátékok elkészítése, vagy bonyolultabb gyöngyös feladatok, nemezés – bármi jöhet.',
        ],
      },
      {
        cim: 'Íjászat',
        bekezdesek: [
          'Egyes foglalkozások alatt íjászfoglalkozás is elérhető. Tehát ha valaki ki szeretné próbálni, arra van lehetőség, de ez nem rendszeres, nem része a programnak.',
        ],
      },
      {
        cim: 'Fegyveres gyakorlatok – vívás',
        bekezdesek: [
          'Egyes foglalkozások alatt vívófoglalkozás is elérhető. Tehát ha valaki ki szeretné próbálni, arra van lehetőség, de ez nem rendszeres, nem része a programnak.',
        ],
      },
      {
        cim: 'Egyéb lehetőségek',
        bekezdesek: [
          'Foglalkozáson kívüli közösségépítő programjainkon hagyományaink más szegmenseivel is találkozhatsz.',
        ],
      },
      {
        cim: 'Saját felszerelés',
        bekezdesek: [
          'Elején mindenkinek mindenféle eszközt biztosítunk.',
          'Egy kérésünk lenne, hogy egy (pl. cipős) doboz legyen, amit ott tudsz tartani a foglalkozásod helyszínén, hogy abban tarthasd a még el nem készült tárgyaidat.',
          'Később ebbe a dobozba összegyűjtjük azokat a szerszámokat, amit már sajátként akarsz használni: bőrözéshez különböző árak, kalapács, ceruzák, mérőeszközök, bármi, ami segítheti a munkádat és akár otthon is, amikor kézműveskedsz, hasznodra válik.',
          '(Ilyenkor a dobozodat érdemes hazavinni és visszahozni, ha otthon is dolgoznál a kijelölt munkán.)',
          'A programon úgy veszünk részt, hogy másokat ne zavarjunk, illetve mivel éles vagy szúrószerszámokkal is dolgozunk, másokat és önmagunkat nem veszélyeztetjük.',
          'Ha valami ilyesmivel problémánk van, akkor szólunk az oktatónak vagy egy nagyobb diáknak, hogy segítsen azon a részen túljutni.',
        ],
      },
    ],
    programlehetosegekBevezeto: 'Az elkötelezettebb tagoknak lehetőség nyílik az alábbiakra:',
  },

  tarsasjatek: {
    cim: 'Edzés utáni társasjátékozás',
    korosztaly: '13 éves kortól',
    alcim:
      'Táblás játékok, táblás társasjátékok, fantasy szerepjátékok — azoknak a tinédzsereknek, akik szeretik a hosszabb, összetettebb játékokat.',
    fajl: '/plakat/tarsasjatek.jpg',
    forras: 'Edzes_utani_tarsasjatekozas.jpg',
    kep: 'tarsasjatek-nyilt-nap',
    reszek: [
      {
        cim: 'Táblás társasjátékok',
        bekezdesek: [
          'Az egyesületnek több mint 150 társasjátéka van az egyszerűtől az összetettebbig.',
          'Ha van olyan játék, amit többen is szeretnének játszani, de nincs meg, akkor azt beszerezzük, hogy ki tudjuk próbálni, és ha megtetszik, akkor végig tudjuk játszani.',
          'Jellemzően az összetettebb hosszabb játékokat szokta szeretni a csapat (például Arkham Horror, DND alapú társasjátékok, Nemesis, Alkonyjárók, Homályrév, Fagyosrév, stb.).',
          'Ez a kis társasjáték klub nem kötelező, csak egy lehetőség azoknak, akik ráérnek esténként, és szeretnek jó társaságban játszani.',
        ],
      },
      {
        cim: 'Fantasy szerepjátékok',
        bekezdesek: [
          'Ha netán a társasjátékokon túl egy összetettebb játékformát is szeretnénk kipróbálni, akkor többféle szabálykönyv is a rendelkezésünkre áll (DND, Vampire, Werewolf, Mage, Cthulhu hívása, Mágus, …).',
          'A fantasy szerepjátékokra jellemző, hogy kétféle módon játszhatjuk. Az egyik, hogy az elkészített karakterrel egy mondjuk 4–5–6 alkalommal egy kampányt játszunk végig, és utána kipróbálunk valami újat, vagy, amit mi jobban szeretünk, életút játékot játszunk, ahol egy karakterrel akár évekig is játszunk (ez nem jelenti azt, hogy néha ne tudnánk berakni más kampányt is).',
          'Itt is van lehetőség bármi új kipróbálására, vagy akár saját elképzelések megvalósítására is. A fő, hogy jól érezzük magunkat a játék alatt.',
        ],
      },
      {
        cim: 'Íjászat',
        bekezdesek: [
          'Jellemzően a társasjáték vagy szerepjáték est előtt kerül rá sor. De ha esetleg egy másik csapatban vagy, és csak a játékhoz csatlakoznál, arra is van lehetőség.',
        ],
      },
      {
        cim: 'Fegyverforgatás – vívás',
        bekezdesek: [
          'Jellemzően a társasjáték vagy szerepjáték est előtt kerül rá sor. De ha esetleg egy másik csapatban vagy, és csak a játékhoz csatlakoznál, arra is van lehetőség.',
        ],
      },
      {
        cim: 'Más lehetőség',
        bekezdesek: [
          'Hétvégén, vagy ha úgy alakul, hogy nincs semmi dolgunk, és van kedvünk egy nagyobb, akár 8–12 órás játéknapba belefolyni, arra is tudunk lehetőséget biztosítani megbeszélés alapján.',
        ],
      },
    ],
    programlehetosegekBevezeto: 'Foglalkozáson kívüli programlehetőségek',
  },
};

export const plakatIdk = Object.keys(plakatok) as PlakatId[];
