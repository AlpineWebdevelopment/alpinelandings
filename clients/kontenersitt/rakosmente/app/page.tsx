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
      name: "Mennyibe kerül a konténer rendelés Rákosmentén?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XVII. kerületben 9.375 Ft/m³-tól, nettó, 8 m³-es vegyes konténerre. A pontos ár a mérettől (4–8 m³) és a hulladék típusától függ (sitt, lom, zöldhulladék). Telefonon azonnal, pontos árajánlatot adunk a +36 21 3355 211 számon — a kiszállítással, elszállítással és lerakási díjjal együtt, rejtett költség nélkül.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyorsan érkezik a konténer Rákosmentére?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XVII. kerületbe jellemzően 24 órán belül, munkaidőben leadott rendelésnél gyakran még aznap kiszállítjuk a konténert. 30 modern konténerszállító autóval és 2000 konténerrel dolgozunk, így ritkán kell várni.",
      },
    },
    {
      "@type": "Question",
      name: "El tudják szállítani a kerti zöldhulladékot is?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen. Rákosmente kertes kerület, ezért a metszésből, fakivágásból és nagytakarításból származó gallyat, nyesedéket és kerti zöldhulladékot előzetes egyeztetéssel elszállítjuk. A zöldhulladék külön lerakóba kerül, ezért érdemes külön jelezni.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e engedély a konténerhez Rákosmentén?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ha a konténer közterületre — járdára, úttestre — kerül, közterület-használati hozzájárulás szükséges a rákosmenti (XVII. kerületi) önkormányzattól. A kertes házaknál a konténer általában a saját telken vagy a behajtón elfér, ilyenkor nincs szükség engedélyre.",
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
    <rect x="3.5" y="6" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
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
    desc: `Átlátható, m³-alapú árazás a XVII. kerületben — ${site.m3Price}, nettó, 8 m³-es vegyes konténerre. Rejtett költség nélkül.`,
  },
  {
    href: "/sittszallitas",
    title: "Sittszállítás",
    icon: <IconBrick />,
    desc: "Építési törmelék — tégla, beton, csempe, vakolat — elszállítása felújításból és bontásból Rákosmente házainál.",
  },
  {
    href: "/lomtalanitas-zoldhulladek",
    title: "Lomtalanítás · Zöldhulladék",
    icon: <IconLeaf />,
    desc: "Bútor, lom és kerti zöldhulladék (gally, nyesedék) elvitele a kertes kerület házaiból és társasházaiból.",
  },
  {
    href: "/kozterulet-engedely",
    title: "Közterület-engedély",
    icon: <IconDoc />,
    desc: "Mikor kell engedély a XVII. kerületi önkormányzattól a konténerhez, és hogyan intézzük helyetted.",
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
              <span className="eyebrow">Rákosmente · XVII. kerület</span>
              <h1>
                Konténer rendelés <em>Rákosmentén</em>, kényelmesen a ház elé
              </h1>
              <p className="hero-lead">
                Felújít, bont vagy rendet tesz a kertben? 4–8 m³-es
                konténereinket kihozzuk a XVII. kerület bármelyik városrészébe —
                Rákoskeresztúrtól Rákoscsabáig —, a telit pedig elszállítjuk és
                szabályosan leadjuk.
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
                <b>Akár aznapi</b> kiszállítás munkaidőben leadott rendelésnél.
              </p>
            </div>

            <aside className="hero-card">
              <h3>Miért minket válasszon?</h3>
              <p>Rákosmente és egész Budapest — megbízhatóan.</p>
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
                  <b>1 hét</b>
                  <span>díjmentes kint tartás</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <div className="wrap trust-grid">
            <div className="trust-item">
              <b>90%</b>
              <span>újrahasznosított hulladék</span>
            </div>
            <div className="trust-item">
              <b>4–8 m³</b>
              <span>konténerméretek</span>
            </div>
            <div className="trust-item">
              <b>H–Szo</b>
              <span>elérhető ügyfélszolgálat</span>
            </div>
            <div className="trust-item">
              <b>Vegyesen</b>
              <span>pakolható (veszélyesen kívül)</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">Szolgáltatások</span>
              <h2>Amiben segítünk Rákosmentén</h2>
              <p>
                A kertvárosi munkáktól a felújításig — konténert biztosítunk, és
                a hulladékot szabályosan elszállítjuk.
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
                Rákosmentén a leggyakoribb munkákhoz — kerti bontás, tetőcsere,
                ház körüli nagytakarítás, felújítás — az alábbi méreteket
                visszük.
              </p>
            </div>
            <div className="size-grid">
              <div className="size-card">
                <span className="m3">
                  4<sup>m³</sup>
                </span>
                <h3>Kisebb felújítás</h3>
                <p>Fürdő- és konyhafelújítás, kisebb kerti bontás törmeléke.</p>
              </div>
              <div className="size-card">
                <span className="pill">Népszerű</span>
                <span className="m3">
                  6<sup>m³</sup>
                </span>
                <h3>Lomtalanítás · Kert</h3>
                <p>Ház vagy pince kiürítése, kertrendezés, tereprendezés.</p>
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
              A XVII. kerületben <b>{site.m3Price}</b> (nettó, 8 m³-es vegyes
              konténer). Nem tudja, mennyi a hulladék? Hívjon:{" "}
              <a href={tel}>{site.phoneDisplay}</a> — a helyszín alapján
              megmondjuk, melyik méret a legjobb. A díjakról bővebben az{" "}
              <Link href="/arak">Árak</Link> oldalon.
            </p>
          </div>
        </section>
        {/* KÉP — konténer munka közben */}
        <section className="photo-band">
          <div className="wrap">
            <Image
              src="/kontener-rendeles-rakosmente.jpg"
              alt="Zöld konténer egy rákosmenti kertes ház behajtóján, zöldhulladékkal megrakva — konténer rendelés a XVII. kerületben"
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
                    <b>Zöldhulladék</b> — gally, nyesedék, kerti hulladék
                    (egyeztetéssel)
                  </li>
                  <li>
                    <b>Vegyes hulladék</b> — sitt és lom együtt
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
              <h2>Rákosmente minden városrészébe</h2>
            </div>
            <div className="local-grid">
              <div className="local-body">
                <p>
                  Rákosmente <b>kertvárosi kerület</b>: tágas telkek, családi
                  házak, sok kert. Ez a konténerezésnél jó hír — a{" "}
                  <b>Rákoskeresztúr</b>, <b>Rákoscsaba</b> és <b>Rákoshegy</b>{" "}
                  utcáiban a konténer gyakran elfér a behajtón vagy a telken
                  belül, így sokszor engedélyre sincs szükség.
                </p>
                <p>
                  A kertes jelleg miatt <b>zöldhulladékból</b> is sok gyűlik —
                  metszés, fakivágás, lombhullás idején —, ezt előzetes
                  egyeztetéssel szintén elszállítjuk. A <b>Pesti út</b> menti
                  forgalmat és a szűkebb utcákat is ismerjük, így a konténer oda
                  és akkor érkezik, ahogy megbeszéltük.
                </p>
                <div className="area-tags" aria-label="Rákosmente városrészei">
                  <span className="area-tag">Rákoskeresztúr</span>
                  <span className="area-tag">Rákoscsaba</span>
                  <span className="area-tag">Rákoscsaba-Újtelep</span>
                  <span className="area-tag">Rákoshegy</span>
                  <span className="area-tag">Rákoskert</span>
                  <span className="area-tag">Rákosliget</span>
                  <span className="area-tag">Madárdomb</span>
                </div>
              </div>
              <div className="local-side">
                <Image
                  src="/rakosmente-kertvaros.jpg"
                  alt="Rákosmenti kertvárosi utca családi házakkal és sövényekkel — konténer rendelés a XVII. kerületben"
                  width={1200}
                  height={896}
                  sizes="(max-width: 900px) 100vw, 460px"
                  className="local-photo"
                />
              <aside className="info-card">
                <h3>Személyes hulladékleadás</h3>
                <p>
                  Kisebb mennyiséget személyesen is leadhat a telephelyünkön:
                </p>
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
                  A megbeszélt időpontban — Rákosmentére jellemzően 24 órán belül
                  — a lehető legjobb helyre tesszük le.
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
              <h2>Konténer rendelés Rákosmentén — amit érdemes tudni</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Mennyibe kerül a konténer rendelés Rákosmentén?</summary>
                <p className="a">
                  A XVII. kerületben {site.m3Price} (nettó, 8 m³-es vegyes
                  konténer). A pontos ár a mérettől (4–8 m³) és a hulladék
                  típusától függ — a sitt, a lom és a zöldhulladék lerakási díja
                  eltér. A telefonban mondott ár a kiszállítást, az elszállítást
                  és a lerakási díjat is tartalmazza. Rejtett költség nincs.
                </p>
              </details>
              <details className="faq-item">
                <summary>Milyen gyorsan érkezik a konténer?</summary>
                <p className="a">
                  A XVII. kerületbe jellemzően 24 órán belül szállítunk,
                  munkaidőben leadott rendelésnél gyakran még aznap. 30 autóval
                  és 2000 konténerrel dolgozunk, ezért ritka, hogy várni kelljen.
                </p>
              </details>
              <details className="faq-item">
                <summary>El tudják szállítani a kerti zöldhulladékot is?</summary>
                <p className="a">
                  Igen. A metszésből, fakivágásból és nagytakarításból származó
                  gallyat, nyesedéket és kerti zöldhulladékot előzetes
                  egyeztetéssel elszállítjuk. A zöldhulladék külön lerakóba kerül,
                  ezért érdemes külön jelezni.
                </p>
              </details>
              <details className="faq-item">
                <summary>Kell-e engedély a konténerhez?</summary>
                <p className="a">
                  Közterületen — járdán, úttesten — igen: közterület-használati
                  hozzájárulás kell a XVII. kerületi önkormányzattól. A kertes
                  házaknál a konténer általában a telken vagy a behajtón elfér,
                  ilyenkor nem kell engedély. Az ügyintézésben segítünk.
                </p>
              </details>
              <details className="faq-item">
                <summary>Meddig maradhat nálam a konténer?</summary>
                <p className="a">
                  A konténer akár 1 hétig felár nélkül kint maradhat, így
                  nyugodtan haladhat a munkával. Hosszabb időre egyeztetéssel
                  tovább is bérelhető. Közterületen az engedély időtartama a
                  mérvadó.
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
                <span className="foot-h" style={{ color: "var(--green)" }}>
                  A leggyorsabb: hívjon most
                </span>
                <a className="big" href={tel}>
                  {site.phoneDisplay}
                </a>
                <p style={{ color: "var(--stone)", fontSize: ".92rem" }}>
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
                    <b>Rákosmente (XVII.) és Budapest</b>
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
