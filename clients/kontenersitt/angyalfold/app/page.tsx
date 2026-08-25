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
      name: "Mennyibe kerül a konténer rendelés Angyalföldön?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XIII. kerületben 10.250 Ft/m³-tól, nettó, 8 m³-es vegyes konténerre. A pontos ár a mérettől (4–8 m³) és a hulladék típusától függ. Telefonon azonnal, pontos árajánlatot adunk a +36 21 3355 233 számon — a kiszállítással, elszállítással és lerakási díjjal együtt, rejtett költség nélkül.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen gyorsan érkezik a konténer Angyalföldre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XIII. kerületbe jellemzően 24 órán belül, munkaidőben leadott rendelésnél gyakran még aznap kiszállítjuk a konténert. 30 modern konténerszállító autóval és 2000 konténerrel dolgozunk, így ritkán kell várni.",
      },
    },
    {
      "@type": "Question",
      name: "Le tudják tenni a konténert egy sűrűn beépített utcában is?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen. Angyalföld sűrű beépítésű kerület, ezért a szűk parkolókat és forgalmas utcákat (pl. Váci út, Béke tér) ismerve időzítjük a kiszállítást. Ha a konténer közterületre kerül, a közterület-használati engedélyt is intézzük.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e engedély a konténerhez Angyalföldön?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A XIII. kerület sűrűn beépített, ezért a konténer gyakran közterületre — járdára, parkolósávba — kerül, ilyenkor közterület-használati hozzájárulás szükséges a XIII. kerületi önkormányzattól. Zárt udvarban, saját területen belül nincs szükség engedélyre. Az ügyintézésben segítünk.",
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
    <rect x="3.5" y="6" width="17" height="12" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 12h17M9 6v6M15 12v6M12 6v0M12 12v6" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="7" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
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
    desc: `Átlátható, m³-alapú árazás a XIII. kerületben — ${site.m3Price}, nettó, 8 m³-es vegyes konténerre.`,
  },
  {
    href: "/sittszallitas",
    title: "Sittszállítás",
    icon: <IconBrick />,
    desc: "Építési törmelék elszállítása panellakás- és új lakópark-felújításból a XIII. kerületben.",
  },
  {
    href: "/lomtalanitas-zoldhulladek",
    title: "Lomtalanítás · Zöldhulladék",
    icon: <IconTruck />,
    desc: "Bútor, lom és zöldhulladék elvitele Angyalföld társasházaiból, panelházaiból és lakóparkjaiból.",
  },
  {
    href: "/kozterulet-engedely",
    title: "Közterület-engedély",
    icon: <IconDoc />,
    desc: "Sűrű beépítésnél gyakran kell engedély — a XIII. kerületi ügyintézést helyetted intézzük.",
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
              <span className="eyebrow">Angyalföld · XIII. kerület</span>
              <h1>
                Konténer rendelés <em>Angyalföldön</em> — gyorsan, a helyszínre
              </h1>
              <p className="hero-lead">
                Panellakást újít, lakóparkban épít vagy lomtalanít a XIII.
                kerületben? 4–8 m³-es konténereinket kihozzuk Angyalföld bármelyik
                részébe — Újlipótvárostól a Marina-partig —, a telit pedig
                elszállítjuk és szabályosan leadjuk.
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
              <p>Angyalföld és egész Budapest — megbízhatóan.</p>
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
              <h2>Amiben segítünk Angyalföldön</h2>
              <p>
                Panelfelújítástól az új lakóparki építkezésig — konténert
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
                Angyalföldön a leggyakoribb munkákhoz — panellakás-felújítás,
                társasházi lomtalanítás, lakóparki építkezés — az alábbi
                méreteket visszük.
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
                  Teljes lakásfelújítás sittje, válaszfalbontás vagy nagyobb
                  lomtalanítás.
                </p>
              </div>
              <div className="size-card">
                <span className="m3">
                  8<sup>m³</sup>
                </span>
                <h3>Bontás · Építkezés</h3>
                <p>
                  Üzlethelyiség-átalakítás, lakóparki és társasházi építkezés
                  folyamatos cseréje.
                </p>
              </div>
            </div>
            <p className="note">
              A XIII. kerületben <b>{site.m3Price}</b> (nettó, 8 m³-es vegyes
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
              src="/kontener-rendeles-angyalfold.jpg"
              alt="Konténer egy felújítás alatt álló angyalföldi társasház előtt, építési törmelékkel — sittszállítás a XIII. kerületben"
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
              <h2>Angyalföld minden részébe</h2>
            </div>
            <div className="local-grid">
              <div className="local-body">
                <p>
                  A XIII. kerület <b>sűrűn beépített, vegyes</b>: a{" "}
                  <b>Gyöngyösi-lakótelep</b> és a <b>Béke tér</b> panelházai, az{" "}
                  <b>Újlipótváros</b> polgári bérházai, és a Duna-parti új
                  fejlesztések — <b>Vizafogó</b>, <b>Marina-part</b>,{" "}
                  <b>Dagály</b> — mind máshogy közelíthetők meg. A szűk parkolók
                  és a <b>Váci úti</b> forgalom miatt fontos a jó időzítés —
                  sofőrjeink ismerik a kerületet.
                </p>
                <p>
                  Legyen szó egy régi panel fürdőfelújításáról vagy egy új
                  lakópark építési törmelékéről, a konténer oda és akkor érkezik,
                  ahogy megbeszéltük — és ha közterületre kerül, az engedélyt is
                  intézzük.
                </p>
                <div className="area-tags" aria-label="Angyalföld részei">
                  <span className="area-tag">Újlipótváros</span>
                  <span className="area-tag">Vizafogó</span>
                  <span className="area-tag">Népsziget</span>
                  <span className="area-tag">Gyöngyösi-lakótelep</span>
                  <span className="area-tag">Béke tér</span>
                  <span className="area-tag">Dagály</span>
                  <span className="area-tag">Marina-part</span>
                </div>
              </div>
              <div className="local-side">
                <Image
                  src="/angyalfold-utcakep.jpg"
                  alt="Angyalföldi utcakép, ahol a régi bérházak és az új lakóépületek találkoznak — konténer rendelés a XIII. kerületben"
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
                  A megbeszélt időpontban — Angyalföldre jellemzően 24 órán belül
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
              <h2>Konténer rendelés Angyalföldön — amit érdemes tudni</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Mennyibe kerül a konténer rendelés Angyalföldön?</summary>
                <p className="a">
                  A XIII. kerületben {site.m3Price} (nettó, 8 m³-es vegyes
                  konténer). A pontos ár a mérettől és a hulladék típusától függ.
                  Telefonon azonnal pontos árat mondunk, amely a kiszállítást, az
                  elszállítást és a lerakási díjat is tartalmazza — rejtett
                  költség nélkül.
                </p>
              </details>
              <details className="faq-item">
                <summary>Milyen gyorsan érkezik a konténer?</summary>
                <p className="a">
                  A XIII. kerületbe jellemzően 24 órán belül szállítunk,
                  munkaidőben leadott rendelésnél gyakran még aznap. 30 autóval
                  és 2000 konténerrel dolgozunk, ezért ritka, hogy várni kelljen.
                </p>
              </details>
              <details className="faq-item">
                <summary>Le tudják tenni a konténert szűk utcában is?</summary>
                <p className="a">
                  Igen. Angyalföld sűrű beépítésű, ezért a szűk parkolókat és a
                  Váci úti forgalmat figyelembe véve időzítjük a kiszállítást. Ha
                  a konténer közterületre kerül, az engedélyt is intézzük.
                </p>
              </details>
              <details className="faq-item">
                <summary>Kell-e engedély a konténerhez?</summary>
                <p className="a">
                  A sűrű beépítés miatt a konténer gyakran közterületre kerül —
                  ilyenkor közterület-használati hozzájárulás kell a XIII.
                  kerületi önkormányzattól. Zárt udvarban nem kell engedély. Az
                  ügyintézésben segítünk.
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
                    <b>Angyalföld (XIII.) és Budapest</b>
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
