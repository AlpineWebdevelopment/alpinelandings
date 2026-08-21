import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title:
    "Lomtalanítás és zöldhulladék Rákosmente — lom és kerti hulladék elszállítás XVII. kerület",
  description:
    "Lomtalanítás és zöldhulladék elszállítás Rákosmentén: bútor, lom, gally és nyesedék elvitele konténerrel a XVII. kerület kertes házaiból. ☎ +36 21 3355 211",
  alternates: { canonical: "/lomtalanitas-zoldhulladek" },
};

export default function LomPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Lomtalanítás · Zöldhulladék</span>
          </div>
          <h1>Lomtalanítás és zöldhulladék Rákosmentén</h1>
          <p className="lead">
            Bútor, lom és kerti zöldhulladék elszállítása konténerrel — a
            kertvárosi kerület házaiból és társasházaiból, egyeztetett
            időpontban.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Lomtalanítás Rákosmentén</h2>
          <p>
            Nem kell megvárnia a kerületi lomtalanítást — konténert biztosítunk,
            és a lomot szabályosan elszállítjuk. Elvisszük a jellemző háztartási
            és felújítási lomot:
          </p>
          <ul>
            <li>
              <b>Bútor</b> — szekrény, ágy, kanapé, asztal, szék
            </li>
            <li>
              <b>Ajtó, ablak, redőny</b> — felújításból, cseréből
            </li>
            <li>
              <b>Szőnyeg, padló, függöny</b>
            </li>
            <li>
              <b>Háztartási lom</b> — pince, padlás, garázs, melléképület
              kiürítése
            </li>
          </ul>
          <p>
            A tágas rákosmenti telkeknél a konténer általában kényelmesen elfér a
            ház előtt vagy a behajtón, így a nagyobb bútorokat sem kell messzire
            cipelni.
          </p>

          <h2>Zöldhulladék elszállítás</h2>
          <p>
            Rákosmente kertes kerület — <b>Rákoscsaba</b>, <b>Rákoskert</b>,{" "}
            <b>Rákoshegy</b> —, ahol sok a kert, így sok a zöldhulladék is.
            Előzetes egyeztetéssel elszállítjuk:
          </p>
          <ul>
            <li>
              <b>Gally, nyesedék, ág</b> — metszésből, fakivágásból
            </li>
            <li>
              <b>Sövény- és bozótnyesedék</b>
            </li>
            <li>
              <b>Lombhullás és kerti hulladék</b> nagytakarításból
            </li>
          </ul>
          <p>
            A zöldhulladék külön lerakóba kerül, ezért érdemes külön kérni —
            telefonon egyeztetjük a részleteket és az árat.
          </p>

          <h2>Mit nem szállítunk el?</h2>
          <p>
            Veszélyes hulladék nem kerülhet a konténerbe:{" "}
            <b>festék, oldószer, vegyszer, azbeszt, pala, gumiabroncs,
            elektronikai hulladék és akkumulátor</b>. Ha bizonytalan, hívjon,
            mielőtt pakolna — megmondjuk, mi mehet bele, és mit hova lehet
            szabályosan leadni.
          </p>

          <p>
            Építési törmelék is van? Lásd a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> oldalt, az árakat
            pedig az <Link href="/arak">Árak</Link> oldalon.
          </p>

          <CtaBand text="Bútor, lom vagy zöldhulladék? Mondja el, mit vigyünk el — azonnal árat és időpontot egyeztetünk." />
        </div>
      </section>
    </main>
  );
}
