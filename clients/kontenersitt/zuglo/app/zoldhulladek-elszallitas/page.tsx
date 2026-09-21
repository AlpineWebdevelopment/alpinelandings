import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Zöldhulladék elszállítás Zugló — gally, lomb, nyesedék, 14. kerület",
  description:
    "Zöldhulladék elszállítás Zuglóban konténerrel: gally, nyesedék, sövény, lomb és kerti hulladék elvitele Alsórákostól Rákosfalváig, egyeztetett időpontban, szombaton is. ☎ +36 21 3355 222",
  alternates: { canonical: "/zoldhulladek-elszallitas" },
};

export default function ZoldPage() {
  return (
    <main>
      <header className="subhero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Zöldhulladék-elszállítás</span>
          </div>
          <span className="k">Zöldhulladék · 14. kerület</span>
          <h1>Zöldhulladék elszállítás Zuglóban</h1>
          <p className="lead">
            Metszés, sövénynyírás, fakivágás vagy őszi lombgyűjtés után a kerti
            zöldhulladékot konténerrel, egyeztetett időpontban elszállítjuk
            Zugló kertes utcáiból és társasházi kertjeiből.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mit viszünk el?</h2>
          <p>
            Előzetes egyeztetéssel a kertben keletkező zöldhulladék minden
            jellemző fajtáját elszállítjuk:
          </p>
          <ul>
            <li>
              <b>Gally, ág, nyesedék</b> — gyümölcsfa-metszésből, fakivágásból
            </li>
            <li>
              <b>Sövény- és bozótnyesedék</b> — tuja, gyertyán, bokrok
            </li>
            <li>
              <b>Lomb és kaszálék</b> — őszi lombgyűjtésből, fűnyírásból
            </li>
            <li>
              <b>Kerti hulladék</b> nagyobb kertrendezésből
            </li>
          </ul>

          <h2>Miért kell külön kérni?</h2>
          <p>
            A zöldhulladék <b>más lerakóba kerül</b>, mint a sitt vagy a lom,
            ezért rendeléskor jelezze, hogy kerti hulladékot pakol. Ha mellé más
            hulladék is kerülne, azt is mondja el — a pontos árat a hulladék
            fajtája alapján, telefonon adjuk meg. Az árakról általánosságban az{" "}
            <Link href="/arak">Árak</Link> oldalon olvashat.
          </p>

          <h2>Mekkora konténer kell hozzá?</h2>
          <p>
            A zöldhulladék könnyű, de <b>terjedelmes</b>: az ágak és a lomb sok
            levegőt visznek magukkal, ezért gyakran nagyobb konténer kell, mint
            amire elsőre gondolna. Egy kisebb metszéshez jellemzően a{" "}
            <b>4 m³</b> is elég, egy teljes kertrendezéshez, sövényirtáshoz vagy
            fakivágáshoz inkább a <b>6–8 m³</b>.
          </p>
          <p>
            Egy egyszerű trükk: ha az ágakat rövidebbre vágja és a konténerbe
            fektetve pakolja, sokkal több fér bele. A méretválasztásról bővebben
            a <Link href="/mekkora-kontener-kell">Mekkora konténer kell?</Link>{" "}
            útmutatóban írunk.
          </p>

          <h2>Zugló kertes részein</h2>
          <p>
            A kerületben a zöldhulladék zöme <b>Alsórákos</b>,{" "}
            <b>Rákosfalva</b> és <b>Nagyzugló</b> kertes házainál keletkezik, de
            a <b>herminamezői</b> és <b>istvánmezői</b> társasházi kertek
            rendbetételénél is gyakran kérnek tőlünk konténert. Kertes háznál a
            konténer sokszor a telken belül vagy a behajtón is elfér; ha csak az
            utcára tehető, ahhoz{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link> kell.
          </p>

          <h2>Mikor érdemes rendelni?</h2>
          <ul>
            <li>
              <b>Ősszel</b> — lombhullás és a fák őszi metszése idején
            </li>
            <li>
              <b>Tavasszal</b> — a téli kár és a nagy tavaszi kertrendezés után
            </li>
            <li>
              <b>Fakivágás vagy sövényirtás</b> után, amikor egyszerre sok ág
              keletkezik
            </li>
          </ul>
          <p>
            A konténer <b>akár 1 hétig felár nélkül</b> kint maradhat, így a
            hétvégi kertmunkához is kényelmesen igazodik. Szombaton is
            szállítunk ({site.hoursSat.replace("Szo: ", "")}), vasárnap zárva
            vagyunk.
          </p>

          <h2>Kisebb mennyiségnél</h2>
          <p>
            Ha csak néhány zsák lomb vagy nyesedék gyűlt össze, arra a lakossági
            zöldhulladék-gyűjtés is megoldás lehet. A konténer akkor éri meg,
            ha egyszerre nagyobb mennyiség keletkezik — egy kertrendezésnél,
            fakivágásnál vagy a szezon végi nagy takarításnál.
          </p>

          <p>
            Bútort vagy lomot is elvinne? Lásd a{" "}
            <Link href="/lomtalanitas-zoldhulladek">lomtalanítás</Link> oldalt.
          </p>

          <CtaBand text="Metszés vagy lombgyűjtés után? Mondja el, mennyi kerti hulladék gyűlt össze — egyeztetjük az időpontot és az árat." />
        </div>
      </section>
    </main>
  );
}
