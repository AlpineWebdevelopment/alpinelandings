import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title:
    "Lomtalanítás és zöldhulladék Zugló — lom és kerti hulladék elszállítás XIV. kerület",
  description:
    "Lomtalanítás és zöldhulladék elszállítás Zuglóban: bútor, lom, gally és nyesedék elvitele konténerrel a XIV. kerület társasházaiból és kertes utcáiból. ☎ +36 21 3355 222",
  alternates: { canonical: "/lomtalanitas-zoldhulladek" },
};

export default function LomPage() {
  return (
    <main>
      <header className="subhero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Lomtalanítás · Zöldhulladék</span>
          </div>
          <span className="k">Lomtalanítás · Zöldhulladék · XIV. kerület</span>
          <h1>Lomtalanítás és zöldhulladék Zuglóban</h1>
          <p className="lead">
            Bútor, lom és kerti zöldhulladék elszállítása konténerrel — Zugló
            társasházaiból, panellakásaiból és kertes utcáiból, egyeztetett
            időpontban.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Lomtalanítás Zuglóban</h2>
          <p>
            Nem kell megvárnia az önkormányzati lomtalanítást — konténert
            biztosítunk, és a lomot szabályosan elszállítjuk. Elvisszük a
            jellemző háztartási és felújítási lomot:
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
              <b>Háztartási lom</b> — pince, padlás, tároló kiürítése
            </li>
          </ul>
          <p>
            A <b>Füredi úti lakótelep</b> és a <b>herminamezői</b>,{" "}
            <b>törökőri</b> társasházak kiürítésénél a szűkös parkolókra és
            kapubehajtókra is figyelünk, hogy a konténer a lehető legjobb helyre
            kerüljön.
          </p>

          <h2>Zöldhulladék elszállítás</h2>
          <p>
            Zugló kertes részein — <b>Alsórákos</b>, <b>Rákosfalva</b>,{" "}
            <b>Nagyzugló</b> — gyűlik a kerti zöldhulladék. Ezt előzetes
            egyeztetéssel szintén elszállítjuk:
          </p>
          <ul>
            <li>
              <b>Gally, nyesedék, ág</b> — metszésből, fakivágásból
            </li>
            <li>
              <b>Sövény- és bozótnyesedék</b>
            </li>
            <li>
              <b>Kerti hulladék</b> nagytakarításból
            </li>
          </ul>
          <p>
            A zöldhulladékot érdemes külön kérni, mert más lerakóba kerül —
            telefonon egyeztetjük a pontos részleteket és az árat.
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
