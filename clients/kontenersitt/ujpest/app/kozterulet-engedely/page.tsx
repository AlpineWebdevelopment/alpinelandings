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
    "Közterület-használati engedély konténerhez Újpest — 4. kerület",
  description:
    "Kell-e engedély a konténerhez Újpesten? 24 óráig elég a bejelentés, hosszabb időre kérelem kell. Útmutató a 4. kerületi közterület-használathoz. ☎ +36 21 3355 255",
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
          <h1>Közterület-engedély konténerhez Újpesten</h1>
          <p className="lead">
            Újpesten egy hasznos szabály van: ha a konténer legfeljebb egy
            napig áll kint a saját ingatlanához, elég bejelenteni. Hosszabb
            időre viszont kérelmet kell beadni.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — járdára, úttestre, parkolóhelyre —
            kerül <b>egy napnál hosszabb</b> időre, közterület-használati
            hozzájárulás kell a IV. kerületi önkormányzattól. Ez a jellemző a{" "}
            <b>Káposztásmegyeri</b> lakótelep és az <b>újpesti belváros</b>{" "}
            bérházainál, ahol nincs saját udvar.
          </p>

          <h2>Mikor nem kell?</h2>
          <p>
            Két esetben nem kell engedélyt kérnie:
          </p>
          <ul>
            <li>
              Ha a konténer végig <b>a saját telkén</b> áll — ez a tipikus{" "}
              <b>Megyeren</b> és <b>Istvántelken</b>, a kertes utcákban.
            </li>
            <li>
              Ha Ön az <b>ingatlan tulajdonosa</b>, és a saját ingatlanához
              kapcsolódóan tesz ki <b>legfeljebb 9 m³-es</b> konténert{" "}
              <b>legfeljebb 24 órára</b> egy parkolóhelyre. Ilyenkor nem kell
              engedély, csak <b>bejelentés</b>, elektronikusan, legkésőbb a
              kihelyezés megkezdésekor. Mind a három méretünk — a 4, a 6 és a 8
              m³-es — belefér ebbe.
            </li>
          </ul>

          <h2>Hol igényelje Újpesten?</h2>
          <p>
            A kérelmet és a bejelentést is a <b>IV. kerületi Polgármesteri
            Hivatalhoz</b> kell benyújtani:
          </p>
          <ul>
            <li>
              <a href="https://ujpest.hu/hivatali-ugy/?ugyid=418" target="_blank" rel="noopener noreferrer">
                ujpest.hu — Közterület-használat engedélyezése
              </a>{" "}
              (ügyleírás)
            </li>
            <li>
              <a href="https://ujpest.hu/dokumentumok/540_kerelem_kozterulet-hasznalat_engedelyezese_irant.pdf" target="_blank" rel="noopener noreferrer">
                Kérelem nyomtatvány (PDF)
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
                  A kérelmet <b>15 nappal</b> a tervezett időszak előtt.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Hogyan?</b>
                </td>
                <td>
                  Személyesen: 1041 Budapest, István út 14. fszt. 3., vagy
                  e-papíron (epapir.gov.hu) — cégeknek kötelező elektronikusan.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Díj</b>
                </td>
                <td>
                  A díjat az önkormányzat rendelete állapítja meg, a terület
                  kategóriája szerint. A pontos összeget kérdezze meg a hivatal
                  Vagyongazdálkodási Osztályán:{" "}
                  <a href="tel:+3612313101">+36 1 231 3101</a>.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            A 24 órás szabály miatt Újpesten sokszor az a legegyszerűbb, ha 
            <b>reggel kihozzuk, és még aznap elvisszük</b> a konténert. Mondja
            meg telefonon, mit pakol bele, és megmondjuk, reális-e ez egy nap
            alatt.
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

          <CtaBand text="Egy nap alatt megvan a pakolás? Hívjon — reggel kihozzuk, estére elvisszük, engedély nélkül." />
        </div>
      </section>
    </main>
  );
}
