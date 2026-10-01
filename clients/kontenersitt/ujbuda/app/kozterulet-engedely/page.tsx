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
    "Közterület-használati engedély konténerhez Újbuda — 11. kerület",
  description:
    "Kell-e engedély a konténerhez Újbudán, hol igényelje, mennyi idő és mennyibe kerül? Útmutató a 11. kerületi közterület-használathoz, a lakásfelújítási díjmentességgel. ☎ +36 21 3355 244",
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
          <h1>Közterület-engedély konténerhez Újbudán</h1>
          <p className="lead">
            Ha a konténer az utcára kerül, az újbudai önkormányzat
            hozzájárulása kell hozzá. Jó hír: lakásfelújításnál a díj alól
            mentesség kérhető, és konténerre gyorsított eljárás van.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — járdára, úttestre, parkolósávba —
            kerül, <b>közterület-használati hozzájárulás</b> kell a XI. kerületi
            önkormányzattól. A panelesebb részeken —{" "}
            <b>Kelenföld</b>, <b>Gazdagrét</b>, <b>Őrmező</b> — ez a jellemző,
            mert a konténer jellemzően parkolóhelyre kerül.
          </p>

          <h2>Mikor nem kell?</h2>
          <p>
            Nem kell engedély, ha a konténer <b>telken belül</b> marad. A budai
            kertes részeken — <b>Sasad</b>, <b>Sashegy</b>,{" "}
            <b>Kelenvölgy</b> — a behajtón vagy az udvarban sokszor elfér, és
            így a díjat is megspórolja.
          </p>

          <h2>Hol igényelje Újbudán?</h2>
          <p>
            A kérelmet a <b>XI. kerületi Polgármesteri Hivatal Városüzemeltetési
            Osztályához</b> kell benyújtani (1113 Budapest, Zsombolyai utca 5.):
          </p>
          <ul>
            <li>
              <a href="https://ujbuda.hu/ugyek/72" target="_blank" rel="noopener noreferrer">
                ujbuda.hu — Közterület-használati hozzájárulás
              </a>{" "}
              (ügyleírás, nyomtatványok)
            </li>
            <li>
              <a href="https://api.ujbuda.hu/files/IssueDocuments/file/ae12c830-bfcf-4cd9-94e7-3f703aa25bac.doc" target="_blank" rel="noopener noreferrer">
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
                  Sittes konténerre <b>gyorsított eljárás</b> van: legkésőbb a
                  kezdés előtti <b>5. munkanapon</b>. Utólag nem adható ki
                  hozzájárulás.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Hogyan?</b>
                </td>
                <td>
                  E-papíron (epapir.gov.hu) — cégeknek kötelező így.
                  Magánszemély személyesen vagy postán is beadhatja.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Díj</b>
                </td>
                <td>
                  Övezettől függően <b>300–500 Ft/m²/nap</b> az építési
                  tevékenységhez kapcsolódó konténerre.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Díjmentesség</b>
                </td>
                <td>
                  Lakásfelújításhoz, ha a kérelmező magánszemély és egyben az
                  ingatlan tulajdonosa: <b>évente egyszer, legfeljebb 30 napra</b>{" "}
                  (fizető parkolóövezetben 15 napra), konténerre legfeljebb egy
                  parkolóhelynyi területre. A kérelmet ilyenkor is be kell adni,
                  helyszínrajzzal és tulajdoni lappal.
                </td>
              </tr>
            </tbody>
          </table>

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

          <CtaBand text="Lakásfelújítás előtt áll? Hívjon — megmondjuk, mekkora konténer kell, és kell-e hozzá engedély." />
        </div>
      </section>
    </main>
  );
}
