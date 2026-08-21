import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Sittszállítás Rákosmente — építési törmelék elszállítása a XVII. kerületben",
  description:
    "Sittszállítás Rákosmentén: tégla, beton, csempe, vakolat elszállítása felújításból, bontásból. 4–8 m³-es konténer, gyors kiszállítás a XVII. kerület kertes házaihoz. ☎ +36 21 3355 211",
  alternates: { canonical: "/sittszallitas" },
};

export default function SittPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sittszállítás</span>
          </div>
          <h1>Sittszállítás Rákosmentén</h1>
          <p className="lead">
            Építési törmelék — tégla, beton, csempe, vakolat — elszállítása
            felújításból és bontásból, konténerrel, a XVII. kerület minden
            városrészébe.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mi számít sittnek?</h2>
          <p>
            A sitt az építkezés és felújítás <b>ásványi eredetű törmeléke</b>,
            amelyet konténerben, szabályosan szállítunk el:
          </p>
          <ul>
            <li>
              <b>Tégla és beton</b> — falbontás, aljzat, régi kerítés
            </li>
            <li>
              <b>Csempe és járólap</b> — fürdő- és konyhafelújítás
            </li>
            <li>
              <b>Vakolat, kőműves törmelék</b>
            </li>
            <li>
              <b>Tetőcserép, kőzet</b> — tetőfelújítás, kertépítés
            </li>
          </ul>

          <h2>Sittszállítás a rákosmenti házaknál</h2>
          <p>
            Rákosmente kertvárosi kerület, ezért a sitt gyakran{" "}
            <b>régi házak felújításából</b>, melléképület-bontásból vagy
            tetőcseréből keletkezik. A tágas telkek előnyt jelentenek: a
            konténer sok esetben a <b>behajtón vagy a telken belül</b> is elfér —
            <b> Rákoskeresztúron</b>, <b>Rákoscsabán</b> és <b>Rákoshegyen</b>{" "}
            egyaránt —, így kényelmesen tudja pakolni a törmeléket.
          </p>

          <h2>Melyik konténer kell a sitthez?</h2>
          <p>
            A sitt nehéz, ezért nem kell a legnagyobb konténer. Egy átlagos
            fürdő- és konyhafelújításhoz a <b>4 m³</b>, teljes felújításhoz a{" "}
            <b>6 m³</b>, bontáshoz a <b>8 m³</b> a jellemző. Ha bizonytalan,
            telefonon segítünk választani, hogy ne fizessen feleslegesen
            nagyobbért. Az árakról bővebben az <Link href="/arak">Árak</Link>{" "}
            oldalon.
          </p>

          <h2>Hogyan zajlik?</h2>
          <ul>
            <li>Felhív, elmondja, mit bont és hol — azonnal árat mondunk.</li>
            <li>Kihozzuk a konténert, jellemzően 24 órán belül.</li>
            <li>Megpakolja; a konténer akár 1 hétig felár nélkül kint maradhat.</li>
            <li>Hívásra elszállítjuk, és engedélyes lerakóban adjuk le.</li>
          </ul>

          <p>
            Nemcsak sitt:{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomot és zöldhulladékot
            </Link>{" "}
            is elszállítunk. Közterületre kerülne a konténer? Lásd a{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link>{" "}
            útmutatót.
          </p>

          <CtaBand text="Mondja el, mit bont — azonnal árat mondunk a sittszállításra, kiszállítással és lerakással együtt." />
        </div>
      </section>
    </main>
  );
}
