import Link from "next/link";
import { CookieSettingsLink } from "./CookieConsent";
import { site } from "../lib/site";
import { PhoneIcon } from "./PhoneIcon";
import { navLinks } from "./SiteHeader";

export default function SiteFooter() {
  const tel = `tel:${site.phoneHref}`;
  return (
    <>
      <footer className="site-foot">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-col">
              <span className="foot-brand">
                Konténer <span>Újpest</span>
              </span>
              <p>
                Konténeres sittszállítás, lomtalanítás és hulladékszállítás
                Budapest IV. kerületében — Újpest-központtól Káposztásmegyerig.
              </p>
            </div>
            <div className="foot-col">
              <span className="foot-h">Szolgáltatások</span>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label === "Lomtalanítás"
                    ? "Lomtalanítás · Zöldhulladék"
                    : l.label === "Engedély"
                      ? "Közterület-engedély"
                      : l.label}
                </Link>
              ))}
            </div>
            <div className="foot-col">
              <span className="foot-h">Kapcsolat</span>
              <a href={tel} className="foot-tel">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.address}</span>
              <span>
                {site.hoursWeekday} · {site.hoursSat} · {site.hoursSun}
              </span>
            </div>
          </div>
          <div className="foot-legal">
            <span>© 2026 Konténer Rendelés Újpest · Minden jog fenntartva.</span>
            <Link href="/adatkezeles">Adatkezelési tájékoztató</Link>
          <CookieSettingsLink />
          </div>
        </div>
      </footer>

      <div className="callbar">
        <a href={tel}>
          <PhoneIcon />
          Hívás: {site.phoneDisplay}
        </a>
      </div>
    </>
  );
}
