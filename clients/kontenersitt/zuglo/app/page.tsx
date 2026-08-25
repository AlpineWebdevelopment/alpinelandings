import Link from "next/link";
import Reviews from "./components/Reviews";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { site } from "./lib/site";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mennyibe kerül a konténer rendelés Zuglóban?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az ár a konténer méretétől (4–8 m³) és a hulladék típusától függ (sitt, lom, vegyes hulladék). A XIV. kerületben 9.875 Ft/m³-tól, nettó, 8 m³-es vegyes konténerre. Telefonon azonnali, pontos árajánlatot adunk a +36 21 3355 222 számon — a kiszállítással, elszállítással és lerakási díjjal együtt, rejtett költségek nélkül.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyorsan hozzák ki a konténert Zuglóba?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XIV. kerületbe jellemzően 24 órán belül, munkaidőben leadott rendelésnél gyakran még aznap kiszállítjuk a konténert. 30 modern konténerszállító autóval és 2000 konténerrel dolgozunk, így ritkán kell várni.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e engedély a konténerhez Zuglóban?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha a konténer közterületre — járdára, úttestre, parkolósávba — kerül, közterület-használati hozzájárulás szükséges a zuglói önkormányzattól. Saját telken, udvarban, munkaterületen belül nincs szükség engedélyre. Az ügyintézésben kérésre segítünk, és tanácsot adunk, hova érdemes a konténert helyezni.",
      },
    },
    {
      "@type": "Question",
      name: "Mit lehet a konténerbe rakni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Építési törmeléket (sitt), bútort és lomot, valamint vegyes építkezési hulladékot. Veszélyes hulladék — festék, vegyszer, azbeszt, pala, gumiabroncs, elektronikai hulladék — nem kerülhet a konténerbe. Ha bizonytalan, telefonon segítünk a besorolásban.",
      },
    },
    {
      "@type": "Question",
      name: "Mekkora konténert válasszak panellakás-felújításhoz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Egy átlagos zuglói panellakás (pl. Füredi úti lakótelep) burkolat- és fürdőszoba-felújításához általában a 4 m³-es konténer elegendő. Teljes lakásfelújításnál a 6 m³, társasházi vagy több lakásos munkánál a 8 m³ méretet ajánljuk. Telefonon segítünk a pontos méretválasztásban.",
      },
    },
    {
      "@type": "Question",
      name: "Meddig maradhat kint a konténer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A konténer akár 1 hétig felár nélkül kint maradhat az ügyfélnél, hosszabb időre pedig egyeztetéssel tovább is bérelhető. Közterületen a közterület-használati engedély időtartama a mérvadó.",
      },
    },
  ],
};

const services = [
  {
    href: "/arak",
    title: "Árak",
    desc: `Átlátható m³-alapú árazás Zuglóban — ${site.m3Price}, nettó, 8 m³-es vegyes konténerre. Rejtett költség nélkül.`,
  },
  {
    href: "/sittszallitas",
    title: "Sittszállítás",
    desc: "Építési törmelék — tégla, beton, csempe, vakolat — elszállítása felújításból, bontásból a XIV. kerületben.",
  },
  {
    href: "/lomtalanitas-zoldhulladek",
    title: "Lomtalanítás · Zöldhulladék",
    desc: "Bútor, lom és zöldhulladék (gally, nyesedék) elszállítása Zugló társasházaiból és kertes utcáiból.",
  },
  {
    href: "/kozterulet-engedely",
    title: "Közterület-engedély",
    desc: "Mikor kell közterület-használati engedély a zuglói önkormányzattól, és hogyan intézzük helyetted.",
  },
];

function PhoneNote() {
  return (
    <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
  );
}

export default function Home() {
  const tel = `tel:${site.phoneHref}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <main>
        {/* HERO */}
        <header className="hero">
          <div className="wrap">
            <span className="hero-kicker">
              Sittszállítás · Lomtalanítás · XIV. kerület
            </span>
            <h1>
              Konténer rendelés <em>Zuglóban</em> — akár aznapra
            </h1>
            <p className="hero-sub">
              Felújít, bont vagy lomtalanít a XIV. kerületben?{" "}
              <b>4–8 m³-es konténereinket</b> gyorsan kiszállítjuk Zugló
              bármelyik városrészébe, a teli konténert pedig elszállítjuk és
              szabályosan leadjuk. Egy telefon, és megy a konténer.
            </p>
            <div className="hero-cta">
              <a href={tel} className="btn btn-y">
                ☎ Azonnali árajánlat
              </a>
              <a href="#meretek" className="btn btn-o">
                Konténerméretek ↓
              </a>
            </div>
            <div className="hero-stats">
              <div className="hstat">
                <b>2000</b>
                <span>konténer a flottában</span>
              </div>
              <div className="hstat">
                <b>30</b>
                <span>konténerszállító autó</span>
              </div>
              <div className="hstat">
                <b>24 h</b>
                <span>elszállítás és csere</span>
              </div>
              <div className="hstat">
                <b>90%</b>
                <span>újrahasznosítás</span>
              </div>
            </div>
          </div>
        </header>

        {/* SIZES */}
        <section className="sizes" id="meretek">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Méretek</span>
              <h2>Melyik konténer való a munkához?</h2>
              <p>
                Zuglóban a leggyakoribb munkákhoz — panelfelújítás, társasházi
                lomtalanítás, kertes házi bontás — az alábbi méreteket visszük.
                Ha bizonytalan, telefonon 1 perc alatt segítünk választani.
              </p>
            </div>
            <div className="size-grid">
              <div className="size">
                <span className="m3">
                  4<sup>m³</sup>
                </span>
                <h3>Fürdő + konyha</h3>
                <p>
                  Panellakás burkolat- és fürdőszoba-felújítás törmeléke. A
                  legkeresettebb méret a Füredi úti lakótelepen.
                </p>
              </div>
              <div className="size">
                <span className="tag">Népszerű</span>
                <span className="m3">
                  6<sup>m³</sup>
                </span>
                <h3>Lakásfelújítás</h3>
                <p>
                  Teljes lakásfelújítás sittje, válaszfalbontás, vagy nagyobb
                  lomtalanítás bútorokkal együtt.
                </p>
              </div>
              <div className="size">
                <span className="m3">
                  8<sup>m³</sup>
                </span>
                <h3>Építkezés</h3>
                <p>
                  Építkezések, generálkivitelezés, több lakást érintő projektek
                  folyamatos konténercseréje.
                </p>
              </div>
            </div>
            <p className="size-note">
              Zuglóban <b>{site.m3Price}</b> (nettó ár, 8 m³-es vegyes
              konténerre). Nem tudja, mennyi a törmelék? Hívjon:{" "}
              <PhoneNote /> — a helyszín és a munka alapján megmondjuk, melyik
              méret lesz elég, hogy ne fizessen feleslegesen nagyobbért. Részletes
              árakért lásd az <Link href="/arak">Árak</Link> oldalt.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Szolgáltatások</span>
              <h2>Amiben segítünk Zuglóban</h2>
            </div>
            <div className="svc-grid">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="svc">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="svc-go">Részletek →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* KÉP — konténer munka közben */}
        <section className="photo-band">
          <div className="wrap">
            <Image
              src="/kontener-rendeles-zuglo.jpg"
              alt="Sárga konténer egy zuglói panelház parkolójában, építési törmelékkel megrakva — sittszállítás a XIV. kerületben"
              width={1584}
              height={672}
              sizes="(max-width: 1180px) 100vw, 1140px"
              className="photo-band-img"
              priority={false}
            />
          </div>
        </section>



        {/* WASTE */}
        <section className="waste">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Hulladéktípusok</span>
              <h2>Mit vihet a konténer — és mit nem?</h2>
            </div>
            <div className="waste-grid">
              <div className="wbox ok">
                <h3>Ezt elszállítjuk</h3>
                <ul>
                  <li>
                    <b>Építési törmelék (sitt)</b> — tégla, beton, csempe,
                    vakolat
                  </li>
                  <li>
                    <b>Lom</b> — bútor, ajtó, ablak, szőnyeg, háztartási kacat
                  </li>
                  <li>
                    <b>Vegyes építkezési hulladék</b> — sitt és lom együtt
                  </li>
                  <li>
                    <b>Zöldhulladék</b> — gally, nyesedék (előzetes
                    egyeztetéssel)
                  </li>
                </ul>
                <div className="foot">
                  Az elszállított hulladékot engedéllyel rendelkező lerakóban,
                  szabályosan adjuk le — erről igazolást is tudunk adni.
                </div>
              </div>
              <div className="wbox no">
                <h3>Ez nem kerülhet bele</h3>
                <ul>
                  <li>Festék, oldószer, vegyszer</li>
                  <li>Azbeszt, pala</li>
                  <li>Gumiabroncs</li>
                  <li>Elektronikai hulladék, akkumulátor</li>
                  <li>Kommunális (háztartási) szemét</li>
                </ul>
                <div className="foot">
                  Bizonytalan? Hívjon minket, mielőtt pakolna — megmondjuk, mi
                  mehet a konténerbe, és mit hova lehet szabályosan leadni.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZUGLÓ LOCAL */}
        <section className="zuglo" id="zuglo">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Helyismeret</span>
              <h2>Zugló minden városrészébe</h2>
            </div>
            <div className="z-grid">
              <div className="z-body">
                <p>
                  A XIV. kerület vegyes beépítése miatt nem mindegy, hogyan
                  érkezik a konténer: a <b>Füredi úti lakótelep</b> panelházainál
                  a parkolók szűkössége, a <b>Herminamező</b> és{" "}
                  <b>Istvánmező</b> társasházainál a kapubehajtók, <b>Alsórákos</b>{" "}
                  és <b>Rákosfalva</b> kertes utcáiban pedig a keskeny úttest
                  jelent kihívást. Sofőrjeink nap mint nap járják a kerületet —
                  tudjuk, hova milyen autóval és konténerrel érdemes menni.
                </p>
                <p>
                  A <b>Bosnyák téri</b> piac környéki forgalmat és az{" "}
                  <b>Örs vezér tere</b> csúcsidejét is figyelembe vesszük a
                  kiszállítás időzítésénél, így a konténer akkor érkezik, amikorra
                  ígértük.
                </p>
                <div className="z-parts" aria-label="Zugló városrészei">
                  <span className="z-part">Alsórákos</span>
                  <span className="z-part">Herminamező</span>
                  <span className="z-part">Istvánmező</span>
                  <span className="z-part">Kiszugló</span>
                  <span className="z-part">Nagyzugló</span>
                  <span className="z-part">Rákosfalva</span>
                  <span className="z-part">Törökőr</span>
                </div>
                <p>
                  Természetesen nemcsak Zuglóban, hanem a szomszédos kerületekben
                  és egész Budapesten is dolgozunk.
                </p>
              </div>
              <div className="local-side">
                <Image
                  src="/zuglo-panel-lakotelep.jpg"
                  alt="Zuglói panel lakótelep fasoros utcája őszi délutánon — konténer rendelés a XIV. kerület minden városrészébe"
                  width={1200}
                  height={896}
                  sizes="(max-width: 900px) 100vw, 460px"
                  className="local-photo"
                />
              <aside className="permit">
                <span className="k">Közterületi engedély</span>
                <p>
                  Ha a konténer <b>járdára, úttestre vagy parkolósávba</b> kerül,
                  közterület-használati hozzájárulás szükséges a zuglói
                  önkormányzattól. <b>Saját udvarban, telken belül nincs szükség
                  engedélyre.</b>
                </p>
                <p style={{ marginTop: ".8rem" }}>
                  Kérésre segítünk az ügyintézésben — a részletekért lásd a{" "}
                  <Link href="/kozterulet-engedely">Közterület-engedély</Link>{" "}
                  útmutatót.
                </p>
              </aside>
              </div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="steps">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Folyamat</span>
              <h2>Három lépés, és viszik a sittet</h2>
            </div>
            <div className="step-row">
              <div className="step">
                <h3>Hívjon vagy írjon</h3>
                <p>
                  Mondja el, mit újít fel és hol — azonnal árat mondunk, és
                  időpontot egyeztetünk. <PhoneNote />
                </p>
              </div>
              <div className="step">
                <h3>Kiszállítjuk a konténert</h3>
                <p>
                  A megbeszélt időpontban — Zuglóba jellemzően 24 órán belül — a
                  sofőr a lehető legjobb helyre teszi le a konténert.
                </p>
              </div>
              <div className="step">
                <h3>Elszállítjuk, leadjuk</h3>
                <p>
                  Amikor megtelt, hívásra jövünk, elvisszük, és a hulladékot
                  engedélyezett lerakóban, szabályosan adjuk le.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-sec" id="gyik">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Gyakori kérdések</span>
              <h2>Konténer rendelés Zuglóban — amit tudni érdemes</h2>
            </div>
            <div className="faq">
              <details>
                <summary>Mennyibe kerül a konténer rendelés Zuglóban?</summary>
                <p className="a">
                  Az ár a konténer méretétől (4–8 m³) és a hulladék típusától
                  függ — a sitt, a lom és a vegyes hulladék lerakási díja eltér.
                  Zuglóban {site.m3Price} (nettó, 8 m³-es vegyes konténerre).
                  Telefonon azonnali, pontos árat mondunk, amely a kiszállítást,
                  az elszállítást és a lerakási díjat is tartalmazza. Rejtett
                  költség nincs.
                </p>
              </details>
              <details>
                <summary>Milyen gyorsan hozzák ki a konténert?</summary>
                <p className="a">
                  Zuglóba jellemzően 24 órán belül szállítunk, munkaidőben leadott
                  rendelésnél gyakran még aznap. 30 modern autóval és 2000
                  konténerrel dolgozunk, ezért ritka, hogy várni kelljen.
                </p>
              </details>
              <details>
                <summary>Kell-e engedély a konténerhez?</summary>
                <p className="a">
                  Közterületen — járdán, úttesten, parkolósávban — igen:
                  közterület-használati hozzájárulás kell a zuglói
                  önkormányzattól. Saját telken belül nem kell engedély. Az
                  ügyintézésben kérésre segítünk.
                </p>
              </details>
              <details>
                <summary>
                  Mekkora konténer kell egy panellakás felújításához?
                </summary>
                <p className="a">
                  Egy átlagos zuglói panellakás fürdő- és burkolatfelújításához a
                  4 m³-es konténer általában elég. Teljes felújításnál 6 m³-t,
                  társasházi vagy több lakásos munkánál 8 m³-t ajánlunk.
                </p>
              </details>
              <details>
                <summary>Meddig maradhat nálam a konténer?</summary>
                <p className="a">
                  A konténer <b>akár 1 hétig felár nélkül</b> kint maradhat, így
                  nyugodtan haladhat a munkával. Hosszabb időre egyeztetéssel
                  tovább is bérelhető. Közterületen az engedély időtartama a
                  mérvadó.
                </p>
              </details>
              <details>
                <summary>Hétvégén is szállítanak?</summary>
                <p className="a">
                  Szombaton 7:00–18:00 között is dolgozunk, így a hétvégi
                  felújítási hajrá törmeléke sem marad ott hétfőig. Vasárnap
                  zárva tartunk.
                </p>
              </details>
            </div>
          </div>
        </section>

        <Reviews />

        {/* CONTACT */}
        <section className="contact" id="kapcsolat">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Kapcsolat</span>
              <h2>Kérjen árat — 1 perc az egész</h2>
            </div>
            <div className="c-grid">
              <div className="c-call">
                <span className="k">A leggyorsabb: hívjon most</span>
                <a className="big" href={tel}>
                  {site.phoneDisplay}
                </a>
                <p>
                  Azonnali árajánlat és időpont-egyeztetés telefonon — hétfőtől
                  péntekig 7:00–20:00, szombaton 7:00–18:00 között. Vasárnap zárva.
                </p>
                <div className="c-meta">
                  <div>
                    <span>E-mail</span>
                    <b>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </b>
                  </div>
                  <div>
                    <span>Telephely</span>
                    <b>{site.address}</b>
                  </div>
                  <div>
                    <span>Személyes leadás</span>
                    <b>{site.droppOffPrice}</b>
                  </div>
                  <div>
                    <span>Nyitvatartás</span>
                    <b>H–P 7–20 · Szo 7–18 · V zárva</b>
                  </div>
                  <div>
                    <span>Terület</span>
                    <b>Zugló (XIV.) és egész Budapest</b>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
