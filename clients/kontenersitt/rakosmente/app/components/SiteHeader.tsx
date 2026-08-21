import Link from "next/link";
import { site } from "../lib/site";
import { PhoneIcon } from "./PhoneIcon";

export const navLinks = [
  { href: "/arak", label: "Árak" },
  { href: "/sittszallitas", label: "Sittszállítás" },
  { href: "/lomtalanitas-zoldhulladek", label: "Lomtalanítás" },
  { href: "/kozterulet-engedely", label: "Engedély" },
];

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8h16l-1.6 10.5a1 1 0 0 1-1 .85H6.6a1 1 0 0 1-1-.85L4 8Z"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M3 8h18" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M12 5c1.6.9 1.6 2.4 0 3.3M9.5 6c1 .6 1 1.6 0 2.2"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  const tel = `tel:${site.phoneHref}`;
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>
            {site.hoursWeekday} · {site.hoursSat} · {site.hoursSun}
          </span>
          <span className="tmid">Rákosmente és egész Budapest</span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>

      <header className="nav">
        <div className="wrap nav-in">
          <Link href="/" className="brand" aria-label="Konténer rendelés Rákosmente">
            <BrandMark />
            <span className="brand-name">
              Konténer Rákosmente
              <small>XVII. kerület</small>
            </span>
          </Link>
          <nav className="nav-menu">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={tel} className="nav-cta">
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
        </div>
      </header>
    </>
  );
}
