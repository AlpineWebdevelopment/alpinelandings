import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Sóder, homok, termőföld szállítás Rákosmentén — XVII. kerület",
  description:
    "Sóder, homok és termőföld kiszállítása Rákosmentére: betonozáshoz, térkövezéshez, gyepesítéshez és kertépítéshez. Rákoskeresztúr, Rákoscsaba, Rákoshegy. Mennyiség és ár telefonon. ☎ +36 21 3355 211",
  alternates: { canonical: "/soder-homok-termofold" },
};

export default function SoderPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sóder, homok, termőföld</span>
          </div>
          <h1>Sóder, homok és termőföld szállítás Rákosmentén</h1>
          <p className="lead">
            Nemcsak elvisszük, hozzuk is: sódert, homokot és termőföldet
            szállítunk ki a XVII. kerület kertes házaihoz, építkezéseihez és
            kertépítéseihez.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Melyik mire kell?</h2>
          <ul>
            <li>
              <b>Sóder</b> — betonozás, járda és kocsibeálló alapja, térkő alá
              ágyazat
            </li>
            <li>
              <b>Homok</b> — falazás, vakolás, térkövezésnél a fugák kitöltése
            </li>
            <li>
              <b>Termőföld</b> — gyepesítés, virágágyás, a kert feltöltése és
              szintkiegyenlítése
            </li>
          </ul>

          <h2>Kertvárosi munkákhoz, közvetlenül a telekre</h2>
          <p>
            Rákosmentén a legtöbb megrendelés <b>kertes házhoz</b> érkezik: új
            kocsibeálló, térkövezett udvar, felújított kert. A tágas telkek miatt
            az anyagot sok esetben <b>közvetlenül a telekre vagy a behajtóra</b>{" "}
            tudjuk leszállítani — <b>Rákoskeresztúron</b>, <b>Rákoscsabán</b> és{" "}
            <b>Rákoshegyen</b> egyaránt —, így nem kell talicskával hordania az
            utcáról.
          </p>

          <h2>Mennyi kell belőle?</h2>
          <p>
            A mennyiséget egyszerű kiszámolni: <b>a felület (m²) szorozva a
            rétegvastagsággal (m)</b> adja meg, hány köbméter kell. Egy 20 m²-es
            kocsibeállóhoz például 15 cm vastag sóderágy esetén 20 × 0,15 ={" "}
            <b>3 m³</b> anyag szükséges. Mivel az anyag bedolgozáskor tömörödik,
            érdemes kicsit ráhagyni.
          </p>
          <p>
            Ha nem biztos a számításban, mondja meg telefonon a felület méretét
            és azt, hogy mit épít — segítünk meghatározni a mennyiséget, és
            megmondjuk az árat a kiszállítással együtt.
          </p>

          <h2>A telephelyünk a kerületben van</h2>
          <p>
            Rákosmentén dolgozunk: a telephelyünk a <b>{site.address}</b> címen
            található, így a XVII. kerületen belül rövid az út a helyszínig.
          </p>

          <h2>Egy kézből a teljes kertépítéshez</h2>
          <p>
            A kertépítésnél nemcsak anyag kell, hulladék is keletkezik: a régi
            burkolat, a kiszedett beton és a gyep maradéka. Ezeket konténerrel
            el is szállítjuk — lásd a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> és a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              zöldhulladék-szállítás
            </Link>{" "}
            oldalakat, az árakért pedig az <Link href="/arak">Árak</Link> oldalt.
          </p>

          <CtaBand text="Mondja meg, mire kell, mekkora a felület és hova vigyük — megmondjuk a mennyiséget és az árat." />
        </div>
      </section>
    </main>
  );
}
