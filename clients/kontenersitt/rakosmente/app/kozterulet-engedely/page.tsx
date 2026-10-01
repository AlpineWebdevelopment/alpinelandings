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
    "Közterület-használati engedély konténerhez Rákosmente — 17. kerület",
  description:
    "Kell-e engedély a konténerhez Rákosmentén, hova kell beadni a kérelmet és mennyi a díja? Útmutató a 17. kerületi közterület-használathoz. ☎ +36 21 3355 211",
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
          <h1>Közterület-engedély konténerhez Rákosmentén</h1>
          <p className="lead">
            Rákosmentén a legtöbb konténer a telken belül elfér, így sokszor
            nem is kell engedély. Ha mégis az utcára kerül, itt van, hova
            forduljon és mire számítson.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — utcára, járdára, zöldsávba —
            kerül, <b>közterület-használati hozzájárulás</b> kell a XVII.
            kerületi önkormányzattól. A hatályos helyi rendelet külön nevesíti
            az építőanyag, építési törmelék és lom tárolására használt konténer
            elhelyezését.
          </p>

          <h2>Mikor nem kell?</h2>
          <p>
            Ha a konténer a <b>saját telken, behajtón vagy udvarban</b> áll, nem
            kell engedély. Rákosmente kertvárosias kerület —{" "}
            <b>Rákoskeresztúron</b>, <b>Rákoscsabán</b>, <b>Rákoshegyen</b> és{" "}
            <b>Rákosligeten</b> a legtöbb háznál van annyi hely, hogy a konténer
            a kapun belülre kerüljön. Ez a gyorsabb és olcsóbb megoldás.
          </p>

          <h2>Hol igényelje Rákosmentén?</h2>
          <p>
            A kerület honlapján jelenleg <b>nincs fent letölthető kérelem</b> és
            külön ügyleírás a közterület-használatról, ezért érdemes közvetlenül
            a hivatalt keresni:
          </p>
          <ul>
            <li>
              <b>Budapest Főváros XVII. kerület Rákosmente Polgármesteri
              Hivatala</b>
            </li>
            <li>1173 Budapest, Pesti út 165.</li>
            <li>
              Telefon: <a href="tel:+3612533300">+36 1 253 3300</a> · E-mail:{" "}
              <a href="mailto:onkormanyzat@rakosmente.hu">
                onkormanyzat@rakosmente.hu
              </a>
            </li>
            <li>
              A hatályos szabályozás:{" "}
              <a href="https://njt.jog.gov.hu/jogszabaly/2025-29-SP-5Y266" target="_blank" rel="noopener noreferrer">
                29/2025. (XI. 27.) önkormányzati rendelet
              </a>{" "}
              a Nemzeti Jogszabálytárban
            </li>
          </ul>
          <table className="ptable">
            <tbody>
              <tr>
                <td>
                  <b>Díj</b>
                </td>
                <td>
                  Konténer elhelyezése: <b>4.000 Ft/nap/db</b> az I.
                  kategóriájú, <b>2.500 Ft/nap/db</b> a II. és III. kategóriájú
                  közterületen.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Mikor adja be?</b>
                </td>
                <td>
                  A rendelet nem ír elő határidőt, de a kérelem elbírálása időbe
                  telik — érdemes jóval a munka előtt beadni.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Engedély nélkül?</b>
                </td>
                <td>
                  Nem éri meg: a rendelet szerint pótdíj szabható ki, ami akár a
                  díj <b>tízszerese</b> is lehet.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Rövid, egy-két napos kihelyezésre sincs külön mentesség a
            kerületben, tehát közterületre ilyenkor is kell a hozzájárulás.
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

          <CtaBand text="Nem tudja, befér-e a telekre? Hívjon — megmondjuk, melyik méret fér el, és kell-e engedély." />
        </div>
      </section>
    </main>
  );
}
