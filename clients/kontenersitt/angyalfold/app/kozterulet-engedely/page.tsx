import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

// FIGYELEM: a kerületi rendeletek díjtételei és határidői ÉVENTE változnak.
// Az alábbi adatok 2026-10-01-én, a hivatkozott hivatalos oldalakon ellenőrizve.
// Évente egyszer át kell nézni, és a hivatkozásokat is újra meg kell nyitni.
// 2026-10-01 (Tamás kérése): a cég NEM vállalja az engedély ügyintézését —
// ez az oldal útmutató, nem szolgáltatás-ígéret.
export const metadata: Metadata = {
  title:
    "Közterület-használati engedély konténerhez Angyalföld — 13. kerület",
  description:
    "Kell-e engedély a konténerhez Angyalföldön, hol igényelje és mennyibe kerül? Útmutató a 13. kerületi közterület-használathoz, hivatalos linkekkel. ☎ +36 21 3355 233",
  alternates: { canonical: "/kozterulet-engedely" },
};

export default function EngedelyPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Közterület-engedély</span>
          </div>
          <h1>Közterület-engedély konténerhez Angyalföldön</h1>
          <p className="lead">
            A XIII. kerület sűrűn beépített, ezért a konténer legtöbbször
            közterületre kerül — ahhoz pedig engedély kell. Itt van, hol
            igényelje, mennyi idő és mennyibe kerül.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — járdára, parkolósávba, úttestre —
            kerül, <b>közterület-használati hozzájárulás</b> kell a XIII.
            kerületi önkormányzattól. Angyalföldön ez a gyakoribb eset: a{" "}
            <b>Gyöngyösi-lakótelep</b>, a <b>Béke tér</b> és{" "}
            <b>Újlipótváros</b> utcáin ritkán van más lehetőség.
          </p>

          <h2>Mikor nem kell?</h2>
          <p>
            Nem kell engedély, ha a konténer végig <b>magánterületen</b> áll:
            belső udvarban, a társasház saját parkolójában vagy a
            munkaterületen belül. Sok bérháznál van annyi hely az udvarban, hogy
            a 4 m³-es konténer beférjen — telefonon segítünk eldönteni.
          </p>

          <h2>Hol igényelje Angyalföldön?</h2>
          <p>
            A kérelmet a <b>XIII. kerületi Polgármesteri Hivatalhoz</b> kell
            benyújtani, az előírt formanyomtatványon:
          </p>
          <ul>
            <li>
              <a href="https://www.budapest13.hu/ugy/kozterulet-hasznalat-maganszemely-reszere/" target="_blank" rel="noopener noreferrer">
                budapest13.hu — Közterület-használat magánszemély részére
              </a>
            </li>
            <li>
              <a href="https://www.budapest13.hu/ugy/kozterulet-hasznalat-vallalkozas-reszere/" target="_blank" rel="noopener noreferrer">
                budapest13.hu — Közterület-használat vállalkozás részére
              </a>
            </li>
            <li>
              <a href="https://www.budapest13.hu/wp-content/uploads/2024/04/Kerelem-1.doc" target="_blank" rel="noopener noreferrer">
                Kérelem nyomtatvány (DOC)
              </a>
            </li>
          </ul>
          <table className="ptable">
            <tbody>
              <tr>
                <td>
                  <b>Mikor adja be?</b>
                </td>
                <td>
                  Konténernél <b>legalább 8 nappal</b> a kihelyezés előtt.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Hogyan?</b>
                </td>
                <td>
                  Személyesen (1139 Budapest, Béke tér 1. — hétfő 13:30–18:00,
                  szerda 8:00–16:30, péntek 8:00–11:30), postán, vagy
                  ügyfélkapun át ÁNYK-nyomtatvánnyal.{" "}
                  <b>Sima e-mail nem elég.</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Díj</b>
                </td>
                <td>
                  Hulladékgyűjtő konténer elhelyezése: <b>9.986 Ft/db/nap</b>{" "}
                  (2026-os díjtáblázat).
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Rövid, egynapos kihelyezésre a XIII. kerületben nincs mentesség,
            tehát a néhány órás munkához is kell a hozzájárulás, ha közterületre
            kerül a konténer. A napidíj miatt itt különösen megéri a pontos
            időzítés: ne álljon kint a konténer feleslegesen.
          </p>

          <h2>Miben segítünk mi?</h2>
          <p>
            Őszintén: <b>az engedélyt nem tudjuk Ön helyett elintézni.</b> A
            kérelmet az ingatlan tulajdonosa vagy használója nyújtja be, és az
            ügyintézés napokig tart — a konténerre pedig általában hamarabb
            szükség van. Amiben viszont segítünk:
          </p>
          <ul>
            <li>
              Telefonon <b>megmondjuk, kell-e egyáltalán engedély</b> oda, ahova
              a konténert szánja.
            </li>
            <li>
              Megmondjuk, <b>mekkora helyet foglal</b> a választott konténer, és
              hány napra érdemes kérni — ezek az adatok kellenek a kérelembe.
            </li>
            <li>
              A konténert <b>az engedélyben szereplő helyre és időben</b> tesszük
              le, és a lejárat előtt elvisszük.
            </li>
            <li>
              Ha nincs idő az engedélyre, együtt megkeressük, <b>hol fér el
              magánterületen</b> — udvarban, behajtón, a telken belül.
            </li>
          </ul>

          <h2>Jó, ha tudja</h2>
          <ul>
            <li>
              Engedély nélküli közterület-használatért <b>bírság</b> járhat, és
              a konténert el is szállíttathatják — ezt egy kis tervezéssel
              könnyű elkerülni.
            </li>
            <li>
              Meddig maradhat kint a konténer? Közterületen azt az{" "}
              <b>engedély időtartama</b> szabja meg, nem a mi egy hetünk.
            </li>
            <li>
              Ha van rá mód, tegye a konténert <b>magánterületre</b> — az
              gyorsabb és olcsóbb, mert nem kell hozzá engedély.
            </li>
          </ul>

          <p className="muted-note">
            Az itt szereplő adatok tájékoztató jellegűek, 2026 októberi
            állapot szerint. A kerületi rendeletek és díjak évente változnak,
            ezért indulás előtt mindig ellenőrizze a hivatkozott hivatalos
            oldalon.
          </p>

          <p>
            Ha megvan a hely, nézze meg a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> és a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomtalanítás · zöldhulladék
            </Link>{" "}
            részleteit, vagy kérjen árat az <Link href="/arak">Árak</Link>{" "}
            oldalon.
          </p>

          <CtaBand text="Sűrű az utca, nincs hely? Hívjon — megmondjuk, hova fér el a konténer, és kell-e hozzá engedély." />
        </div>
      </section>
    </main>
  );
}
