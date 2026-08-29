/**
 * Az egyesület két szabályzata — TELJES SZÖVEGGEL, a DOCX-ból kinyerve.
 *
 * FORRÁS (az egyesület 2026. 08. 28-án átadott anyagai):
 *   — forras/Arpad_Nepe_Egyesuleti_Ertek_es_Magatartasi_Szabalyzat_javitott.docx
 *     (a forras/Arpad_Nepe_Szabalyzat_A4_diszes_olvashato.docx ugyanez a szöveg
 *      díszített tördeléssel — a letöltések között szerepel)
 *   — forras/Arpad_Nepe_Ijaszati_es_Vivasi_Biztonsagi_Szabalyzat.docx
 *
 * A szöveg szó szerinti; a szakaszcímek és a pontok a dokumentum saját
 * tagolása. GENERÁLT FÁJL — kézzel ne szerkeszd, a python-kinyerés a
 * README „Dokumentumok" részében van leírva.
 *
 * Mindkét dokumentum a saját szövege szerint még nem elfogadott (üres
 * hatálybalépési dátum, illetve „munkaváltozat") — ezért „Tervezet" címkét
 * kapnak, és a README „Ügyféllel egyeztetendő" listáján szerepelnek.
 */

export type SzabalyzatSzakasz = { cim: string; pontok: string[]; szamozott: boolean };

export type Szabalyzat = {
  id: 'ertek' | 'biztonsag';
  cim: string;
  alcim?: string;
  bevezeto?: string;
  szakaszok: SzabalyzatSzakasz[];
  zaro: string[];
  jelzes: { cimke: 'Tervezet'; forras: string };
  letoltesek: { href: string; cimke: string }[];
};

export const szabalyzatok: Szabalyzat[] = [
  {
    id: 'ertek',
    cim: 'Egyesületi érték- és magatartási szabályzat',
    alcim: 'Közösségi alapelvek',
    bevezeto: "Küldetésünk. Az Árpád Népe Egyesület célja a magyar történelmi, népi és katonai hagyományok (elsősorban a IX–X. század, a honfoglalás korszaka), élményszerű továbbadása. Törekedjünk a korhűségre, de ha nincs rá mód, vagy idő kell hozzá, úgy is meg tudod találni a helyed nálunk. A hazaszeretet, az identitásunk, illetve a család és barátaink felé való elköteleződés erősítése, az ifjúság és az idősebb generáció jellemének fejlesztése viszont nem kérdés számunkra. Közösségünkben illik tudni, mivel foglalkozunk, az elsajátított tudást, gyakorlatot önállóan is tudjuk használni. A fegyelem és az egymás iránti tisztelet, bajtársiasság legyen kísérőnk egy életen át.",
    szakaszok: [
  {
    "cim": "1. Alapértékeink",
    "pontok": [
      "Magyarság és hazaszeretet – tiszteljük Magyarország történelmét, kultúráját, nyelvét, jelképeit és elődeink örökségét; értékeinket nem mások lenézésével, hanem saját hagyományaink megismerésével és méltó képviseletével ápoljuk.",
      "Ha nem vagyok elég jó, akkor nem másokat akarok a mélybe rántani, akik nálam jobbak, hanem igyekszem fejlődni, hogy úgy érjem el a vágyott eredményt, hogy magamat fejlesztem, és nem másnak ártok.",
      "Hagyomány és hitelesség – törekszünk a korhűségre, hogy a bemutatott viseletek, tárgyak, fegyverek, kézműves technikák és szokások történeti ismeretekre épüljenek. Ha a korszakunkon kívüli vagy egyszerű hagyományos eszközöket stb. használunk vagy a 21. század népies, hagyományőrző viseletei kerülnek elő, az sem akadály, de tudjuk, hogy az nem korhű, de helye van történelmünkben, identitásunk kifejezésében. Viszont ne katyvaszoljunk össze mindenféle korszakot, mert csak úgy van kedvünk.",
      "Jellem és becsület – elvárjuk az őszinteséget, a vállalt szó megtartását, a felelősségvállalást, a pontosságot és a tisztességes magatartást.",
      "Közösség és bajtársiasság – segítjük egymást, a kezdőt tanítjuk, a tapasztaltabb pedig példát mutat.",
      "Szolgálat és felelősség – rendezvényeinken nemcsak magunkat, hanem az egyesületet és a magyar hagyományőrzést is képviseljük. Tessék méltóképpen viselkedni!"
    ],
    "szamozott": false
  },
  {
    "cim": "2. Ifjúságnevelés és közösségépítés",
    "pontok": [
      "A gyermekeket, fiatalokat és felnőtteket a példamutatásunk és a cselekedeteink tanítják: íjászat, vívás, kézművesség, történelmi ismeretek, népi játékok, táborok és közösségi feladatok, valamint sokféle program segítségével.",
      "A cél nem pusztán technikák elsajátítása, hanem önfegyelem, kitartás, figyelem, segítőkészség, együttműködés és felelősségtudat kialakítása. Mindennek van következménye.",
      "A fiatalabb vagy új tagok fokozatosan találkoznak majd feladatokkal és felelősséggel. Aki már tud valamit, természetes késztetésnek érezze, tekintse, hogy türelemmel segítsen annak, aki még tanul.",
      "A közösségi programokon mindenki képességeihez és életkorához mérten vegyen részt a közös munkában, előkészítésben, rendrakásban és az eszközök megóvásában.",
      "A hazaszeretet, az identitás, a barátság és más értékek nem maguktól jönnek, odafigyeléssel, egy életen át való csiszolással, folyamatos fejlesztést igényelnek. Ez nem magányos, hanem csoportos folyamat, amelyben mindannyian részt veszünk és igyekszünk a csoport hasznára válni, mivel az a mi érdekünk is."
    ],
    "szamozott": false
  },
  {
    "cim": "3. A közösség rendje és felépítése",
    "pontok": [
      "Az egyesület munkáját az elnökség és az általa megbízott foglalkozásvezetők, oktatók és csoportvezetők szervezik. Olykor viszont természetes módon más elkötelezett tagok is automatikusan (a rangtól vagy az egyesülettel eltöltött időtől függetlenül), a kellő tisztelettel segítenek az eredményes munkában, valamint a rend és a rendszer fenntartásában.",
      "A foglalkozáson a kijelölt vezető felel a program rendjéért és biztonságáért. Biztonsági kérdésben az oktató utasítása azonnal követendő, és a leírt szabályzat követendő.",
      "A csoportok lehetőség szerint életkor, tudásszint és választott foglalkozás szerint szerveződnek. Nagyobb létszám esetén kisebb, jól irányítható csoportok kialakítására törekszünk.",
      "A vezetői tekintély alapja a karizmatikus kisugárzás; ehhez társul a tudás, a felelősség és a példamutatás. A vezető ugyanazokat az alapvető normákat köteles betartani, amelyeket a tagoktól is elvár."
    ],
    "szamozott": false
  },
  {
    "cim": "4. Magatartási normáink",
    "pontok": [
      "Egymással, vendégeinkkel, rendezvényszervezőkkel és a közönséggel kulturáltan, tisztelettel beszélünk és viselkedünk.",
      "Csúnya beszéd a gyerekeknél nincs, a felnőtteknél viszont előfordulhat. Ez bizonyos szinten természetes az elmúlt pár ezer évet tekintve. Szóval a minőségi csúnya beszéd használatát ki kell érdemelni, de nem lehet vele visszaélni.",
      "Nincs helye a másik öncélú csesztetésének. Aki viszont a csapat számára elviselhetetlen, és a rossz vagy a normalitással nem egyeztethető szokásaihoz ragaszkodik attól fájó szívvel búcsúzunk.",
      "Szintén nincs hely a csapatban az áskálódásnak, fúrásnak, a csapat szétzilálásának, megosztásának, az árulásnak. Ezektől szintén búcsúzunk, de nem fájó szívvel.",
      "A nézeteltéréseket nem kiabálással vagy erőfitogtatással, hanem megbeszéléssel rendezzük; szükség esetén a csoportvezető vagy az elnökség döntését kérjük. Csak normálisan!",
      "A foglalkozásokat és bemutatókat alkohol vagy tudatmódosító szer hatása alatt látogatni, illetve ilyen állapotban eszközt vagy gyakorlófegyvert használni tilos. Igyatok máskor és máshol; biztos megvan annak is a helye.",
      "Az egyesület tulajdonát, felszereléseit és a ránk bízott helyszíneket mindenki köteles rendeltetésszerűen használni és megóvni."
    ],
    "szamozott": false
  },
  {
    "cim": "5. Hagyományőrző megjelenés és képviselet",
    "pontok": [
      "Hivatalos fellépésen törekszünk rendezett, az adott korszakhoz és programhoz illő megjelenésre. Az egyesületi pólót, viseletet, jelvényt és más közösségi jelképet méltó módon viseljük.",
      "A történelmi fegyverek, másolatok és gyakorlóeszközök nem játékok: bemutatásuk és használatuk kizárólag a külön biztonsági szabályzat szerint történhet.",
      "Nyilvános rendezvényen, sajtóban és közösségi médiában úgy nyilatkozunk és viselkedünk, hogy az ne veszélyeztesse az egyesület jó hírnevét vagy más tagok biztonságát és méltóságát. Ha nem tudunk nyilatkozni, a médiát lehet a vezetők felé is irányítani.",
      "Az egyesület nevében hivatalos állásfoglalást az arra felhatalmazott személy tehet."
    ],
    "szamozott": false
  },
  {
    "cim": "6. Részvétel, fegyelem és következmények",
    "pontok": [
      "Aki vállalt foglalkozásra, bemutatóra vagy rendezvényre jelentkezik, törekedjen a pontos megjelenésre; akadályoztatás esetén időben jelezze távolmaradását.",
      "A biztonsági szabály megszegése esetén az oktató a tevékenységet azonnal megállíthatja, az eszköz használatát megtilthatja, illetve a résztvevőt az adott foglalkozásból kizárhatja.",
      "Kisebb fegyelmi probléma elsődlegesen figyelmeztetéssel és megbeszéléssel rendezendő. Ismételt vagy súlyos szabályszegés esetén az elnökség korlátozhatja a részvételt, illetve az alapszabály és a vonatkozó egyesületi döntések szerint járhat el.",
      "Kiskorú résztvevő visszatérő vagy súlyos problémája esetén a szülőt/gondviselőt tájékoztatjuk, és vele együtt keressük a megoldást."
    ],
    "szamozott": false
  },
  {
    "cim": "7. Amit minden tagunktól kérünk",
    "pontok": [
      "Légy becsületes, tanulni kész és megbízható.",
      "Tiszteld hazádat, közösségedet, társaidat és az előtted járók munkáját.",
      "Vigyázz a rád bízott emberre, eszközre és tudásra.",
      "Fegyelmezetten gyakorolj, és biztonsági kérdésben ne vitatkozz a foglalkozás közben.",
      "Segíts annak, aki kevesebbet tud, és fogadd el a segítséget attól, aki tapasztaltabb.",
      "Úgy viselkedj, hogy jelenléted erősítse, ne gyengítse a közösséget."
    ],
    "szamozott": false
  }
],
    zaro: [
  "Záró rendelkezés. Ez a szabályzat az Árpád Népe Egyesület közösségi és magatartási alapelveit foglalja össze. Nem helyettesíti az egyesület alapszabályát, a külön biztonsági szabályzatokat vagy a jogszabályi előírásokat. A közösséghez csatlakozóktól azt kérjük, hogy ezeket az alapelveket megismerjék, elfogadják és a gyakorlatban is képviseljék.",
  "Elfogadás / hatálybalépés dátuma: __________________________",
  "Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület elnöksége"
],
    jelzes: {
      cimke: 'Tervezet',
      forras: 'A dokumentumban az elfogadás / hatálybalépés dátuma üresen áll.',
    },
    letoltesek: [
      { href: '/dokumentumok/ertek-es-magatartasi-szabalyzat.docx', cimke: 'Letöltés (DOCX)' },
      {
        href: '/dokumentumok/ertek-es-magatartasi-szabalyzat-diszes-a4.docx',
        cimke: 'Díszes A4 változat (DOCX)',
      },
    ],
  },
  {
    id: 'biztonsag',
    cim: 'Íjászati és vívó foglalkozások biztonsági szabályzata',
    alcim: '2026–2027',
    szakaszok: [
  {
    "cim": "1. Általános szabályok",
    "pontok": [
      "A foglalkozásokon minden résztvevő köteles betartani az oktató, edzésvezető vagy foglalkozásvezető utasításait, illetve a józan ész szabályait.",
      "A foglalkozások célja a biztonságos tanulás, gyakorlás és fejlődés. Más résztvevő szándékos veszélyeztetése tilos.",
      "Íjat, nyílvesszőt, gyakorlókardot, gyakorlókést, lándzsát vagy más gyakorlófegyvert kizárólag az oktató engedélyével és az általa meghatározott módon szabad használni.",
      "Edzés előtt ellenőrizni kell a használt felszerelést. Sérült, repedt, szálkás, meglazult vagy más módon veszélyessé vált felszerelést használni tilos.",
      "Alkohol vagy más, a biztonságos részvételt befolyásoló szer hatása alatt edzésen részt venni tilos.",
      "Aki rosszul érzi magát, megsérült, szédül vagy úgy érzi, hogy nem képes biztonságosan folytatni a gyakorlatot, köteles ezt azonnal jelezni.",
      "„ÁLLJ!” vezényszóra minden tevékenységet azonnal abba kell hagyni. Veszélyhelyzet észlelésekor bármely résztvevő jelezheti, hogy a gyakorlatot állítsák le."
    ],
    "szamozott": true
  },
  {
    "cim": "2. Íjászati biztonsági szabályok",
    "pontok": [
      "Íjjal kizárólag a kijelölt lővonalon és a kijelölt cél irányába szabad tartani, lőni.",
      "A lővonal elé az oktató engedélye nélkül lépni tilos. Akkor is csak úgy ha saját magunk megbizonyosodtunk, tényleg nincs veszély, mindenki letette az íjat,stb.",
      "A lövészet megkezdése előtt meg kell győződni arról, hogy a célok előtt, mellett és mögött nincs ember, illetve nincs más olyan körülmény, amely veszélyt jelenthet.",
      "Nyilat az íjra helyezni és az íjat kihúzni csak akkor szabad, amikor erre az oktató engedélyt adott.",
      "Emberre célozni tilos akkor is, ha az íjon nincs nyílvessző. A vesszőt magában sem dobáljuk.",
      "Az íjat nyílvesszővel kizárólag a cél irányába szabad kihúzni.",
      "A lővonalon a lövők az oktató utasítására kezdik és fejezik be a lövést.",
      "A kilőtt vesszők összeszedésére kizárólag az oktató engedélye után szabad elindulni.",
      "A vesszők kihúzásakor figyelni kell arra, hogy senki ne álljon közvetlenül a kihúzott nyílvessző mögött.",
      "Sérült, repedt vagy hibás nyílvesszővel lőni tilos.",
      "Sérült íjat, ideget vagy más felszerelést használni tilos.",
      "A lövészetet úgy kell megszervezni, hogy a célok mögött megfelelő biztonsági terület vagy nyílfogó legyen.",
      "Gyermekek az íjászfelszerelést kizárólag az oktató által meghatározott módon használhatják.",
      "Az íjászatot kizárólag egy vonalból lehet folytatni, úgy, hogy megfelelően elférünk egymás mellett."
    ],
    "szamozott": true
  },
  {
    "cim": "3. Vívási biztonsági szabályok",
    "pontok": [
      "Vívógyakorlatot kizárólag megfelelő méretű, akadálymentes területen szabad végezni.",
      "A gyakorlat megkezdése előtt ellenőrizni kell a gyakorlófegyvereket.",
      "Repedt, törött, szálkás, éles vagy hegyessé vált gyakorlófegyvert használni tilos.",
      "Páros gyakorlat előtt mindkét félnek készen kell állnia. Meglepésszerű támadás tilos.",
      "A támadások erejét és sebességét mindig a gyakorlat jellegéhez, a résztvevők tudásszintjéhez és a használt védőfelszereléshez kell igazítani.",
      "A cél a technika biztonságos végrehajtása, nem a másik fél sérülésének okozása.",
      "Kezdőknél a gyakorlatokat lassan és ellenőrzötten kell végrehajtani. A sebesség és intenzitás csak az oktató engedélyével növelhető.",
      "A fejre, arcra, torokra, kézre vagy más sérülékeny területre irányuló gyakorlatokat csak az adott gyakorlathoz megfelelő védőfelszerelésben szabad végezni.",
      "Olyan gyakorlatnál, ahol a fej találati terület lehet, megfelelő vívómaszk vagy fejvédelem kötelező.",
      "Intenzívebb szabadvívásnál az oktató által meghatározott védőfelszerelés kötelező. Ez a gyakorlat jellegétől függően tartalmazhat fej- és arcvédőt, torokvédőt, megfelelő kesztyűt, könyök- és alkarvédőt, térdvédőt, lágyékvédőt és megfelelő testvédelmet.",
      "A védőfelszerelés nem jogosít fel kontrollálatlan vagy szükségtelenül erős ütésekre.",
      "Birkózás, földre vitel, ízületi feszítés vagy más emelt sérülési kockázatú technika kizárólag akkor gyakorolható, ha azt az oktató kifejezetten engedélyezi és vezeti."
    ],
    "szamozott": true
  },
  {
    "cim": "4. Gyakorlókés és egyéb gyakorlófegyverek",
    "pontok": [
      "Késes gyakorlatra kizárólag erre a célra készített tompa, biztonságos gyakorlóeszköz használható.",
      "Valódi, élezett kés vagy kard az edzés gyakorlóterületén nem használható.",
      "Gyakorlókést, kardot vagy más fegyvert játékból másokra dobálni, velük hadonászni vagy felügyelet nélkül használni tilos.",
      "Dobófegyvereket kizárólag kijelölt dobóhelyről és kijelölt célra szabad használni.",
      "A dobóterületre a dobások befejezéséig belépni tilos."
    ],
    "szamozott": true
  },
  {
    "cim": "5. Gyermekekre vonatkozó külön szabályok",
    "pontok": [
      "Gyermek csak olyan gyakorlatban vehet részt, amelyet az oktató életkorának és tudásszintjének megfelelőnek ítél.",
      "A gyermek köteles az oktató utasítására azonnal megállni és a gyakorlófegyvert biztonságos helyzetbe tenni.",
      "Más gyermekre játékból íjat fogni, karddal vagy más gyakorlófegyverrel engedély nélkül támadást imitálni tilos.",
      "Aki ismételten nem tartja be a biztonsági szabályokat, az adott gyakorlatból vagy az edzésből azonnal kizárható."
    ],
    "szamozott": true
  },
  {
    "cim": "6. Baleset és veszélyhelyzet",
    "pontok": [
      "Baleset vagy sérülés esetén a foglalkozást szükség szerint azonnal meg kell szakítani. A sérült ellátása elsőbbséget élvez minden más tevékenységgel szemben.",
      "Súlyos vagy annak feltételezett sérülés esetén értesíteni kell a 112-es segélyhívót.",
      "A balesetet vagy veszélyes eseményt az edzésvezetőnek jelezni kell, és indokolt esetben fel kell jegyezni annak körülményeit."
    ],
    "szamozott": true
  },
  {
    "cim": "7. A szabályzat betartása",
    "pontok": [
      "A biztonság minden résztvevő közös érdeke és felelőssége.",
      "Az oktató jogosult megtiltani valamely felszerelés használatát, egy gyakorlat végrehajtását vagy a résztvevő további edzését, ha azt veszélyesnek ítéli.",
      "A biztonsági szabályok súlyos vagy ismételt megszegése az edzésről történő kizárást, ismétlődő esetben pedig az egyesületi foglalkozások látogatásának felfüggesztését vonhatja maga után.",
      "Az Árpád Népe Egyesület foglalkozásain való részvétellel a résztvevő – kiskorú esetén szülője vagy gondviselője – tudomásul veszi és elfogadja a biztonsági szabályzat rendelkezéseit."
    ],
    "szamozott": true
  }
],
    zaro: [
  "Szerkesztési megjegyzés: Ez az egyesület számára összeállított munkaváltozat; a végleges elfogadás előtt az egyesület saját helyszíneihez, eszközeihez és oktatási gyakorlatához igazítható."
],
    jelzes: {
      cimke: 'Tervezet',
      forras:
        'A dokumentum saját szerkesztési megjegyzése szerint munkaváltozat, amely a végleges elfogadás előtt még igazítható.',
    },
    letoltesek: [
      { href: '/dokumentumok/ijaszati-es-vivasi-biztonsagi-szabalyzat.docx', cimke: 'Letöltés (DOCX)' },
    ],
  },
];
