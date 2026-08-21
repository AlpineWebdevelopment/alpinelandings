import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató | Konténer Rendelés Újpest",
  description:
    "A kontenerrendelesujpest.hu weboldal ajánlatkérő űrlapján megadott személyes adatok kezelésére vonatkozó tájékoztató a GDPR szerint.",
  alternates: { canonical: "/adatkezeles" },
};

export default function AdatkezelesPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Adatkezelési tájékoztató</span>
          </div>
          <h1>Adatkezelési tájékoztató</h1>
          <p className="lead">
            Ez a tájékoztató a <b>kontenerrendelesujpest.hu</b> weboldal
            ajánlatkérő űrlapján megadott személyes adatok kezeléséről szól, az
            Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR) alapján.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>1. Az adatkezelő</h2>
          <p>
            A weboldalt és a rajta megadott adatok kezelését az alábbi gazdasági
            társaság végzi:
          </p>
          <table className="ptable">
            <tbody>
              <tr>
                <td>Cégnév</td>
                <td>
                  <b>SZERVIZ-TRANS Kft.</b>
                </td>
              </tr>
              <tr>
                <td>Székhely</td>
                <td>1172 Budapest, VIII. utca 2. II. em. 5.</td>
              </tr>
              <tr>
                <td>Telephely (személyes hulladékleadás)</td>
                <td>{site.address}</td>
              </tr>
              <tr>
                <td>Adószám</td>
                <td>12989946-2-42</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>{site.email}</td>
              </tr>
              <tr>
                <td>Telefon</td>
                <td>{site.phoneDisplay}</td>
              </tr>
            </tbody>
          </table>
          <p>
            A weboldal „Konténer Rendelés Újpest" néven, a IV. kerületi
            szolgáltatásra fókuszálva jelenik meg; az adatkezelő a fenti cég.
          </p>

          <h2>2. A kezelt adatok köre</h2>
          <p>
            A weboldal ajánlatkérő űrlapjának kitöltésekor az alábbi adatokat
            adhatja meg:
          </p>
          <ul>
            <li>
              <b>név</b>
            </li>
            <li>
              <b>telefonszám</b>
            </li>
            <li>
              <b>a kért konténerméret</b>
            </li>
            <li>
              <b>a munka helyszíne</b> (utca, városrész)
            </li>
            <li>
              <b>üzenet</b> — a munka rövid leírása (amit Ön beír)
            </li>
          </ul>
          <p>
            Kérjük, az üzenet mezőbe csak a megrendeléshez szükséges információt
            írjon, és ne adjon meg különleges (pl. egészségügyi) adatot.
          </p>

          <h2>3. Az adatkezelés célja</h2>
          <p>
            A megadott adatokat kizárólag azért kezeljük, hogy{" "}
            <b>felvegyük Önnel a kapcsolatot</b>, árajánlatot adjunk, és
            egyeztessük a konténer kiszállításának részleteit. Reklám- vagy
            hírlevélküldés céljából az adatokat nem használjuk fel.
          </p>

          <h2>4. Az adatkezelés jogalapja</h2>
          <p>
            Az adatkezelés jogalapja az Ön <b>hozzájárulása</b> (GDPR 6. cikk (1)
            bekezdés a) pont), amelyet az űrlap elküldésével ad meg, illetve a{" "}
            <b>szerződéskötést megelőző lépések</b> megtétele az Ön kérésére
            (GDPR 6. cikk (1) bekezdés b) pont). A hozzájárulását bármikor
            visszavonhatja.
          </p>

          <h2>5. Az adatkezelés időtartama</h2>
          <p>
            Az adatokat az ajánlatkérés elintézéséhez szükséges ideig, illetve a
            kapcsolatfelvétel lezárultáig, de legfeljebb az adatok megadásától
            számított <b>1 évig</b> kezeljük, kivéve, ha jogszabály ennél
            hosszabb megőrzést ír elő, vagy ha Ön a hozzájárulását korábban
            visszavonja.
          </p>

          <h2>6. Adatfeldolgozók</h2>
          <p>
            Az adatkezelő a működéshez az alábbi adatfeldolgozók
            szolgáltatásait veszi igénybe:
          </p>
          <table className="ptable">
            <thead>
              <tr>
                <th>Adatfeldolgozó</th>
                <th>Tevékenység</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel Inc. (USA)</td>
                <td>A weboldal tárhelyszolgáltatása (hosting)</td>
              </tr>
              <tr>
                <td>Brevo (Sendinblue SAS, Franciaország)</td>
                <td>
                  Az űrlapon beküldött adatok e-mailben történő továbbítása az
                  adatkezelő címére (transzakciós e-mail szolgáltatás, EU-s
                  adatközpont)
                </td>
              </tr>
              <tr>
                <td>Google Ireland Limited (Írország)</td>
                <td>
                  Látogatottság-mérés (Google Analytics 4) — kizárólag a
                  látogató előzetes hozzájárulása esetén, anonimizált IP-címmel
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Az űrlapon beküldött adatok közvetlenül az adatkezelő e-mail címére
            (diszpecser@kontenersitt.hu) érkeznek; az e-mail továbbítása EU-s
            (franciaországi) adatközponton keresztül történik. A tárhelyszolgáltató
            egyesült államokbeli, az oda történő adattovábbítás a szolgáltató
            megfelelő garanciái (pl. EU–USA adatvédelmi keret, általános
            szerződési feltételek) alapján történik. Az adatokat harmadik félnek
            marketing céljából nem adjuk át.
          </p>

          <h2>7. Az Ön jogai</h2>
          <p>Ön az adatkezeléssel kapcsolatban jogosult:</p>
          <ul>
            <li>tájékoztatást kérni a kezelt adatairól (hozzáférés joga);</li>
            <li>a pontatlan adatok helyesbítését kérni;</li>
            <li>az adatai törlését kérni („elfeledtetéshez való jog");</li>
            <li>az adatkezelés korlátozását kérni;</li>
            <li>tiltakozni az adatkezelés ellen;</li>
            <li>élni az adathordozhatósághoz való jogával;</li>
            <li>
              a hozzájárulását bármikor visszavonni (ez nem érinti a visszavonás
              előtti adatkezelés jogszerűségét).
            </li>
          </ul>
          <p>
            Kérelmét a fenti elérhetőségeken (e-mail: {site.email}) jelezheti; a
            kérelemre indokolatlan késedelem nélkül, legkésőbb 1 hónapon belül
            válaszolunk.
          </p>

          <h2>8. Jogorvoslat</h2>
          <p>
            Ha úgy érzi, hogy az adatkezelés során sérültek a jogai, panaszt
            tehet a felügyeleti hatóságnál, vagy bírósághoz fordulhat.
          </p>
          <p>
            <b>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</b>
            <br />
            Cím: 1055 Budapest, Falk Miksa utca 9–11.
            <br />
            Postacím: 1363 Budapest, Pf. 9.
            <br />
            Telefon: +36 1 391 1400
            <br />
            E-mail: ugyfelszolgalat@naih.hu · Web:{" "}
            <a href="https://naih.hu" target="_blank" rel="noopener noreferrer">
              naih.hu
            </a>
          </p>

          <h2>9. Adatbiztonság</h2>
          <p>
            A weboldal titkosított (HTTPS) kapcsolaton keresztül továbbítja az
            adatokat. Az adatkezelő és az adatfeldolgozók megfelelő technikai és
            szervezési intézkedésekkel védik az adatokat a jogosulatlan
            hozzáférés, megváltoztatás és megsemmisülés ellen.
          </p>

          <h2>10. Sütik (cookie-k) és látogatottság-mérés</h2>
          <p>
            A weboldal kétféle sütit használ:
          </p>
          <table className="ptable">
            <thead>
              <tr>
                <th>Süti típusa</th>
                <th>Cél, jogalap, időtartam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Működéshez szükséges</td>
                <td>
                  Az oldal alapvető működését és a süti-döntés megjegyzését
                  szolgálják. Jogalap: az adatkezelő jogos érdeke
                  [GDPR 6. cikk (1) f)], illetve elektronikus hírközlési
                  szolgáltatás nyújtása. Hozzájárulás nem szükséges.
                  Időtartam: legfeljebb 12 hónap.
                </td>
              </tr>
              <tr>
                <td>Statisztikai (Google Analytics 4)</td>
                <td>
                  A látogatottság mérése: hány látogató érkezik, mely aloldalak
                  a leghasznosabbak, honnan érkeznek a látogatók. Jogalap:
                  az érintett hozzájárulása [GDPR 6. cikk (1) a)]. A mérőkód
                  <b> kizárólag az „Elfogadom” gomb megnyomása után töltődik be</b> —
                  addig egyetlen statisztikai süti sem keletkezik. Időtartam:
                  legfeljebb 14 hónap.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            A Google Analytics 4 esetében az IP-cím anonimizálva kerül
            feldolgozásra, és az adatkezelő nem használ hirdetési vagy
            profilalkotási (remarketing) funkciót. Az így nyert adatok
            összesített, statisztikai jellegűek, azokból az egyes látogatók nem
            azonosíthatók. Az adatokat a Google Ireland Limited
            (Gordon House, Barrow Street, Dublin 4, Írország) mint adatfeldolgozó
            kezeli; adatvédelmi tájékoztatója a{" "}
            <a
              href="https://policies.google.com/privacy?hl=hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>{" "}
            címen érhető el.
          </p>
          <p>
            <b>A hozzájárulás bármikor visszavonható</b> a lap alján található
            „Süti-beállítások” gombbal, illetve a böngésző sütijeinek törlésével.
            A visszavonás nem érinti a visszavonás előtti adatkezelés
            jogszerűségét. A sütik a böngésző beállításaiban is bármikor
            letilthatók vagy törölhetők.
          </p>
          <h2>11. A tájékoztató módosítása</h2>
          <p>
            Az adatkezelő fenntartja a jogot a jelen tájékoztató módosítására. A
            mindenkor hatályos változat a weboldalon érhető el.
          </p>
          <p style={{ fontSize: ".85rem", color: "var(--slate)" }}>
            Hatályos: 2026. augusztus 14.
          </p>
        </div>
      </section>
    </main>
  );
}
