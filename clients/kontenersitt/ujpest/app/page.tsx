import Link from "next/link";
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
      name: "Mennyibe kerül a konténer rendelés Újpesten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A IV. kerületben 10.125 Ft/m³-tól, nettó, 8 m³-es vegyes konténerre. A pontos ár a mérettől (4–8 m³) és a hulladék típusától függ. Telefonon azonnal, pontos árajánlatot adunk a +36 21 3355 255 számon — a kiszállítással, elszállítással és lerakási díjjal együtt, rejtett költség nélkül.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyorsan érkezik a konténer Újpestre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A IV. kerületbe jellemzően 24 órán belül, munkaidőben leadott rendelésnél gyakran még aznap kiszállítjuk a konténert. 30 modern konténerszállító autóval és 2000 konténerrel dolgozunk, így ritkán kell várni.",
      },
    },
    {
      "@type": "Question",
      name: "Kihozzák a konténert a káposztásmegyeri lakótelepre is?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen. Káposztásmegyer és az újpesti lakótelepek panelházainál a szűkös parkolókat figyelembe véve tesszük le a konténert. Ha közterületre kerül, a közterület-használati engedélyt is intézzük.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e engedély a konténerhez Újpesten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha a konténer közterületre — járdára, úttestre, parkolósávba — kerül, közterület-használati hozzájárulás szükséges az újpesti (IV. kerületi) önkormányzattól. A megyeri kertes házaknál a konténer gyakran a telken belül is elfér, ilyenkor nem kell engedély. Az ügyintézésben segítünk.",
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
    <rect x="3.5" y="6" width="17" height="12" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
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
    desc: `Átlátható, m³-alapú árazás a IV. kerületben — ${site.m3Price}, nettó, 8 m³-es vegyes konténerre.`,
  },
  {
    href: "/sittszallitas",
    title: "Sittszállítás",
    icon: <IconBrick />,
    desc: "Építési törmelék elszállítása panellakás- és kertes házi felújításból az újpesti IV. kerületben.",
  },
  {
    href: "/lomtalanitas-zoldhulladek",
    title: "Lomtalanítás · Zöldhulladék",
    icon: <IconLeaf />,
    desc: "Bútor, lom és kerti zöldhulladék elvitele Újpest panelházaiból, társasházaiból és kertes utcáiból.",
  },
  {
    href: "/kozterulet-engedely",
    title: "Közterület-engedély",
    icon: <IconDoc />,
    desc: "Mikor kell engedély a IV. kerületi önkormányzattól a konténerhez, és hogyan intézzük helyetted.",
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
              <span className="eyebrow">Újpest · IV. kerület</span>
              <h1>
                Konténer rendelés <em>Újpesten</em> — gyorsan, a kapu elé
              </h1>
              <p className="hero-lead">
                Panellakást újít, kertet rendez vagy bont a IV. kerületben? 4–8
                m³-es konténereinket kihozzuk Újpest bármelyik részébe —
                Újpest-központtól Káposztásmegyerig —, a telit pedig elszállítjuk
                és szabályosan leadjuk.
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
              <p>Újpest és egész Budapest — megbízhatóan.</p>
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
              <h2>Amiben segítünk Újpesten</h2>
              <p>
                A lakótelepi panelfelújítástól a megyeri kertes házakig —
                konténert biztosítunk, és a hulladékot szabályosan elszállítjuk.
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
                Újpesten a leggyakoribb munkákhoz — panellakás-felújítás,
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
                <h3>Lakásfelújítás</h3>
                <p>
                  Teljes lakásfelújítás sittje, válaszfalbontás, ház körüli
                  nagytakarítás.
                </p>
              </div>
              <div className="size-card">
                <span className="m3">
                  8<sup>m³</sup>
                </span>
                <h3>Bontás · Építkezés</h3>
                <p>
                  Melléképület-bontás, tetőcsere, új építés folyamatos
                  konténercseréje.
                </p>
              </div>
            </div>
            <p className="note">
              A IV. kerületben <b>{site.m3Price}</b> (nettó, 8 m³-es vegyes
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
              src="/kontener-rendeles-ujpest.jpg"
              alt="Piros konténer egy újpesti lakótelep parkolójában, lomtalanításból származó bútorokkal — lomtalanítás a IV. kerületben"
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
              <h2>Újpest minden részébe</h2>
            </div>
            <div className="local-grid">
              <div className="local-body">
                <p>
                  Újpestnek erős, önálló <b>városrész-identitása</b> van, és
                  ehhez illő a beépítése is: a <b>Káposztásmegyeri</b> lakótelep
                  panelházai, az <b>Újpest-központ</b> (Árpád út, István út) régi
                  bérházai, valamint <b>Megyer</b> és <b>Istvántelek</b> kertes,
                  családi házas utcái — mind más megközelítést kívánnak.
                </p>
                <p>
                  A lakótelepi szűk parkolókat és az <b>Árpád úti</b> forgalmat is
                  ismerjük, ezért a konténer oda és akkor érkezik, ahogy
                  megbeszéltük — és ha közterületre kerül, az engedélyt is
                  intézzük.
                </p>
                <div className="area-tags" aria-label="Újpest részei">
                  <span className="area-tag">Újpest-központ</span>
                  <span className="area-tag">Káposztásmegyer</span>
                  <span className="area-tag">Megyer</span>
                  <span className="area-tag">Istvántelek</span>
                  <span className="area-tag">Népsziget</span>
                  <span className="area-tag">Városkapu</span>
                </div>
              </div>
              <div className="local-side">
                <Image
                  src="/ujpest-lakotelep.jpg"
                  alt="Újpesti lakótelep tágas zöld területe hosszú panelházak között — konténer rendelés a IV. kerületben"
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
                  A megbeszélt időpontban — Újpestre jellemzően 24 órán belül — a
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
              <h2>Konténer rendelés Újpesten — amit érdemes tudni</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Mennyibe kerül a konténer rendelés Újpesten?</summary>
                <p className="a">
                  A IV. kerületben {site.m3Price} (nettó, 8 m³-es vegyes
                  konténer). A pontos ár a mérettől és a hulladék típusától függ.
                  Telefonon azonnal pontos árat mondunk, amely a kiszállítást, az
                  elszállítást és a lerakási díjat is tartalmazza — rejtett
                  költség nélkül.
                </p>
              </details>
              <details className="faq-item">
                <summary>Milyen gyorsan érkezik a konténer?</summary>
                <p className="a">
                  A IV. kerületbe jellemzően 24 órán belül szállítunk, munkaidőben
                  leadott rendelésnél gyakran még aznap. 30 autóval és 2000
                  konténerrel dolgozunk, ezért ritka, hogy várni kelljen.
                </p>
              </details>
              <details className="faq-item">
                <summary>Kihozzák a konténert a káposztásmegyeri lakótelepre is?</summary>
                <p className="a">
                  Igen. Káposztásmegyer és az újpesti lakótelepek panelházainál a
                  szűkös parkolókat figyelembe véve tesszük le a konténert. Ha
                  közterületre kerül, a közterület-használati engedélyt is
                  intézzük.
                </p>
              </details>
              <details className="faq-item">
                <summary>Kell-e engedély a konténerhez?</summary>
                <p className="a">
                  Közterületen — járdán, úttesten — igen: közterület-használati
                  hozzájárulás kell a IV. kerületi önkormányzattól. A megyeri
                  kertes házaknál a konténer gyakran a telken belül is elfér,
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
                    <b>Újpest (IV.) és Budapest</b>
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
