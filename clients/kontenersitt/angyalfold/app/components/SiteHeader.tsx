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
        <path d="M5 8h14l-1 11H6L5 8Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M4 8h16" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9.5 8V5.5h5V8" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" />
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
          <span className="tmid">Angyalföld és egész Budapest</span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>

      <header className="nav">
        <div className="wrap nav-in">
          <Link href="/" className="brand" aria-label="Konténer rendelés Angyalföld">
            <BrandMark />
            <span className="brand-name">
              Konténer Angyalföld
              <small>XIII. kerület</small>
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
