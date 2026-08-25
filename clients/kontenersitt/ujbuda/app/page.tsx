import Link from "next/link";
import Reviews from "./components/Reviews";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { PhoneIcon } from "./components/PhoneIcon";
import { site } from "./lib/site";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mennyibe kerül a konténer rendelés Újbudán?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XI. kerületben 11.875 Ft/m³-tól, nettó, 8 m³-es vegyes konténerre. A pontos ár a mérettől (4–8 m³) és a hulladék típusától függ. Telefonon azonnal, pontos árajánlatot adunk a +36 21 3355 244 számon — a kiszállítással, elszállítással és lerakási díjjal együtt, rejtett költség nélkül.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyorsan érkezik a konténer Újbudára?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XI. kerületbe jellemzően 24 órán belül, munkaidőben leadott rendelésnél gyakran még aznap kiszállítjuk a konténert. 30 modern konténerszállító autóval és 2000 konténerrel dolgozunk, így ritkán kell várni.",
      },
    },
    {
      "@type": "Question",
      name: "Fel tudják vinni a konténert a budai domboldalra is?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen. Sasad, Sashegy és Gellérthegy meredek, szűk utcáit ismerjük, és a megfelelő autóval oda is kihozzuk a konténert. A helyszín alapján előre megbeszéljük, hova érdemes tenni.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e engedély a konténerhez Újbudán?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha a konténer közterületre — járdára, úttestre, parkolósávba — kerül, közterület-használati hozzájárulás szükséges az újbudai (XI. kerületi) önkormányzattól. A kertes, villás részeken a konténer gyakran a telken belül is elfér, ilyenkor nem kell engedély. Az ügyintézésben segítünk.",
      },
    },
    {
      "@type": "Question",
      name: "Meddig maradhat kint a konténer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A konténer akár 1 hétig felár nélkül kint maradhat, így nyugodtan haladhat a munkával. Hosszabb időre egyeztetéssel tovább is bérelhető. Közterületen a közterület-használati engedély időtartama a mérvadó.",
      },
    },
  ],
};

const IconForint = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 8h-3.2a1.8 1.8 0 0 0-1.8 1.8V16M8.4 11.6h4.2M8.4 13.8h3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconBrick = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="6" width="17" height="12" rx="0.6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 12h17M9 6v6M15 12v6M12 6v0M12 12v6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M5 19c-1-7 4-13 14-13 0 10-6 15-13 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 18c3-5 6-7 11-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M6 3.5h8l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M14 3.5V8h4M9 12.5h6M9 15.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    href: "/arak",
    title: "Árak",
    icon: <IconForint />,
    desc: `Átlátható, m³-alapú árazás a XI. kerületben — ${site.m3Price}, nettó, 8 m³-es vegyes konténerre.`,
  },
  {
    href: "/sittszallitas",
    title: "Sittszállítás",
    icon: <IconBrick />,
    desc: "Építési törmelék elszállítása lakásfelújításból, panelből és budai villából a XI. kerületben.",
  },
  {
    href: "/lomtalanitas-zoldhulladek",
    title: "Lomtalanítás · Zöldhulladék",
    icon: <IconLeaf />,
    desc: "Bútor, lom és kerti zöldhulladék elvitele Újbuda társasházaiból, panelházaiból és villáiból.",
  },
  {
    href: "/kozterulet-engedely",
    title: "Közterület-engedély",
    icon: <IconDoc />,
    desc: "Mikor kell engedély a XI. kerületi önkormányzattól a konténerhez, és hogyan intézzük helyetted.",
  },
];

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
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Újbuda · XI. kerület</span>
              <h1>
                Konténer rendelés <em>Újbudán</em> — a panellakástól a budai
                villáig
              </h1>
              <p className="hero-lead">
                Lakást újít, kertet rendez vagy bont a XI. kerületben? 4–8 m³-es
                konténereinket kihozzuk Újbuda bármelyik részébe — Kelenföldtől
                Sasadig —, a telit pedig elszállítjuk és szabályosan leadjuk.
              </p>
              <div className="hero-actions">
                <a href={tel} className="btn btn-primary">
                  <PhoneIcon />
                  {site.phoneDisplay}
                </a>
                <a href="#kapcsolat" className="btn btn-ghost">
                  Árajánlatot kérek
                </a>
              </div>
              <p className="hero-note">
                <b>{site.m3Price}</b> · akár aznapi kiszállítás munkaidőben.
              </p>
            </div>

            <aside className="hero-card">
              <h3>Miért minket válasszon?</h3>
              <p>Újbuda és egész Budapest — megbízhatóan.</p>
              <div className="hc-stats">
                <div className="hc-stat">
                  <b>2000</b>
                  <span>konténer a flottában</span>
                </div>
                <div className="hc-stat">
                  <b>30</b>
                  <span>szállítóautó</span>
                </div>
                <div className="hc-stat">
                  <b>24 óra</b>
                  <span>elszállítás és csere</span>
                </div>
                <div className="hc-stat">
                  <b>90%</b>
                  <span>újrahasznosítás</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <div className="wrap trust-grid">
            <div className="trust-item">
              <b>{site.m3Price}</b>
              <span>vegyes konténer (nettó)</span>
            </div>
            <div className="trust-item">
              <b>1 hét</b>
              <span>díjmentes kint tartás</span>
            </div>
            <div className="trust-item">
              <b>4–8 m³</b>
              <span>konténerméretek</span>
            </div>
            <div className="trust-item">
              <b>Engedély</b>
              <span>ügyintézést vállalunk</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Szolgáltatások</span>
              <h2>Amiben segítünk Újbudán</h2>
              <p>
                Panelfelújítástól a budai villák kertrendezéséig — konténert
                biztosítunk, és a hulladékot szabályosan elszállítjuk.
              </p>
            </div>
            <div className="svc-grid">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="svc-card">
                  <span className="svc-ic">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="svc-go">Részletek →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SIZES */}
        <section className="section section-tint" id="meretek">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Méretek</span>
              <h2>Melyik konténer való a munkához?</h2>
              <p>
                Újbudán a leggyakoribb munkákhoz — panellakás-felújítás,
                társasházi lomtalanítás, kertes házi bontás — az alábbi méreteket
                visszük.
              </p>
            </div>
            <div className="size-grid">
              <div className="size-card">
                <span className="m3">
                  4<sup>m³</sup>
                </span>
                <h3>Fürdő + konyha</h3>
                <p>Panellakás burkolat- és fürdőfelújítás törmeléke.</p>
              </div>
              <div className="size-card">
                <span className="pill">Népszerű</span>
                <span className="m3">
                  6<sup>m³</sup>
                </span>
                <h3>Lakásfelújítás · Kert</h3>
                <p>
                  Teljes lakásfelújítás sittje, kertrendezés, nagyobb
                  lomtalanítás.
                </p>
              </div>
              <div className="size-card">
                <span className="m3">
                  8<sup>m³</sup>
                </span>
                <h3>Bontás · Építkezés</h3>
                <p>
                  Villabontás, tetőcsere, új építés folyamatos
                  konténercseréje.
                </p>
              </div>
            </div>
            <p className="note">
              A XI. kerületben <b>{site.m3Price}</b> (nettó, 8 m³-es vegyes
              konténer). Nem tudja, mekkora kell? Hívjon:{" "}
              <a href={tel}>{site.phoneDisplay}</a>. Részletes árak az{" "}
              <Link href="/arak">Árak</Link> oldalon.
            </p>
          </div>
        </section>
        {/* KÉP — konténer munka közben */}
        <section className="photo-band">
          <div className="wrap">
            <Image
              src="/kontener-rendeles-ujbuda.jpg"
              alt="Narancssárga konténer egy újbudai lakópark szervizútján, lakásfelújítás törmelékével — sittszállítás a XI. kerületben"
              width={1584}
              height={672}
              sizes="(max-width: 1180px) 100vw, 1140px"
              className="photo-band-img"
              priority={false}
            />
          </div>
        </section>



        {/* WASTE */}
        <section className="section">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Hulladéktípusok</span>
              <h2>Mit vihet a konténer — és mit nem?</h2>
            </div>
            <div className="waste-grid">
              <div className="w-card yes">
                <h3>
                  <span className="w-badge">✓</span> Ezt elszállítjuk
                </h3>
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
                    <b>Zöldhulladék</b> — gally, nyesedék (egyeztetéssel)
                  </li>
                </ul>
                <div className="foot">
                  A hulladékot engedélyes lerakóban, szabályosan adjuk le — akár
                  90%-a újrahasznosításra kerül, és igazolást is adunk róla.
                </div>
              </div>
              <div className="w-card no">
                <h3>
                  <span className="w-badge">✕</span> Ez nem kerülhet bele
                </h3>
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

        {/* LOCAL */}
        <section className="section section-tint">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Helyismeret</span>
              <h2>Újbuda minden részébe</h2>
            </div>
            <div className="local-grid">
              <div className="local-body">
                <p>
                  A XI. kerület Buda egyik <b>legváltozatosabb</b> része: a{" "}
                  <b>Gazdagréti</b>, <b>kelenföldi</b> és <b>őrmezői</b>{" "}
                  lakótelepek panelházai, a <b>Lágymányos</b> és a{" "}
                  <b>Móricz Zsigmond körtér</b> polgári bérházai, valamint a{" "}
                  <b>Sasad</b>, <b>Sashegy</b> és <b>Gellérthegy</b> meredek
                  utcáiban álló villák — mind más megközelítést kívánnak.
                </p>
                <p>
                  A domboldali szűk utcákat és a <b>Fehérvári úti</b>,{" "}
                  <b>Bartók Béla úti</b> forgalmat is ismerjük, ezért a megfelelő
                  autóval és időzítéssel érkezünk — a konténer oda kerül, ahova
                  kényelmes.
                </p>
                <div className="area-tags" aria-label="Újbuda részei">
                  <span className="area-tag">Kelenföld</span>
                  <span className="area-tag">Lágymányos</span>
                  <span className="area-tag">Gazdagrét</span>
                  <span className="area-tag">Őrmező</span>
                  <span className="area-tag">Sasad</span>
                  <span className="area-tag">Sashegy</span>
                  <span className="area-tag">Albertfalva</span>
                </div>
              </div>
              <div className="local-side">
                <Image
                  src="/ujbuda-lakopark.jpg"
                  alt="Újbudai lakópark zöld belső udvara tavasszal — konténer rendelés a XI. kerületben"
                  width={1200}
                  height={896}
                  sizes="(max-width: 900px) 100vw, 460px"
                  className="local-photo"
                />
              <aside className="info-card">
                <h3>Személyes hulladékleadás</h3>
                <p>Kisebb mennyiséget személyesen is leadhat a telephelyünkön:</p>
                <p>
                  <b>{site.address}</b>
                </p>
                <p>
                  Telephelyi hulladékátvétel: <b>{site.droppOffPrice}</b>
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Nem biztos benne, konténer vagy személyes leadás éri-e meg
                  jobban? <b>Hívjon, megmondjuk.</b>
                </p>
              </aside>
              </div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="section">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Így zajlik</span>
              <h2>Három lépés, és viszik a hulladékot</h2>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <h3>Hívjon vagy írjon</h3>
                <p>
                  Mondja el, mit szállítsunk el és hol — azonnal árat mondunk, és
                  időpontot egyeztetünk. <a href={tel}>{site.phoneDisplay}</a>
                </p>
              </div>
              <div className="step-card">
                <h3>Kihozzuk a konténert</h3>
                <p>
                  A megbeszélt időpontban — Újbudára jellemzően 24 órán belül — a
                  lehető legjobb helyre tesszük le.
                </p>
              </div>
              <div className="step-card">
                <h3>Elszállítjuk, leadjuk</h3>
                <p>
                  Amikor megtelt, hívásra jövünk, elvisszük, és a hulladékot
                  engedélyes lerakóban, szabályosan adjuk le.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tint" id="gyik">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Gyakori kérdések</span>
              <h2>Konténer rendelés Újbudán — amit érdemes tudni</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Mennyibe kerül a konténer rendelés Újbudán?</summary>
                <p className="a">
                  A XI. kerületben {site.m3Price} (nettó, 8 m³-es vegyes
                  konténer). A pontos ár a mérettől és a hulladék típusától függ.
                  Telefonon azonnal pontos árat mondunk, amely a kiszállítást, az
                  elszállítást és a lerakási díjat is tartalmazza — rejtett
                  költség nélkül.
                </p>
              </details>
              <details className="faq-item">
                <summary>Milyen gyorsan érkezik a konténer?</summary>
                <p className="a">
                  A XI. kerületbe jellemzően 24 órán belül szállítunk, munkaidőben
                  leadott rendelésnél gyakran még aznap. 30 autóval és 2000
                  konténerrel dolgozunk, ezért ritka, hogy várni kelljen.
                </p>
              </details>
              <details className="faq-item">
                <summary>Fel tudják vinni a konténert a domboldalra is?</summary>
                <p className="a">
                  Igen. Sasad, Sashegy és Gellérthegy meredek, szűk utcáit
                  ismerjük, és a megfelelő autóval oda is kihozzuk a konténert. A
                  helyszín alapján előre megbeszéljük, hova érdemes tenni.
                </p>
              </details>
              <details className="faq-item">
                <summary>Kell-e engedély a konténerhez?</summary>
                <p className="a">
                  Közterületen — járdán, úttesten — igen: közterület-használati
                  hozzájárulás kell a XI. kerületi önkormányzattól. A kertes,
                  villás részeken a konténer gyakran a telken belül is elfér,
                  ilyenkor nem kell engedély. Az ügyintézésben segítünk.
                </p>
              </details>
              <details className="faq-item">
                <summary>Meddig maradhat nálam a konténer?</summary>
                <p className="a">
                  A konténer akár 1 hétig felár nélkül kint maradhat. Hosszabb
                  időre egyeztetéssel tovább is bérelhető. Közterületen az
                  engedély időtartama a mérvadó.
                </p>
              </details>
            </div>
          </div>
        </section>

        <Reviews />

        {/* CONTACT */}
        <section className="section" id="kapcsolat">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Kapcsolat</span>
              <h2>Kérjen árat — 1 perc az egész</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <span className="foot-h">A leggyorsabb: hívjon most</span>
                <a className="big" href={tel}>
                  {site.phoneDisplay}
                </a>
                <p>
                  Azonnali árajánlat és időpont-egyeztetés — H–P 7:00–20:00, Szo
                  7:00–18:00. Vasárnap zárva.
                </p>
                <div className="ci-meta">
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
                    <span>Terület</span>
                    <b>Újbuda (XI.) és Budapest</b>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
