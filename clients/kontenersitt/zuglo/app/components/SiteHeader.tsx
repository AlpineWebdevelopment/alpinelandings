import Link from "next/link";
import { site } from "../lib/site";
import { PhoneIcon } from "./PhoneIcon";

export const navLinks = [
  { href: "/arak", label: "Árak" },
  { href: "/sittszallitas", label: "Sittszállítás" },
  { href: "/lomtalanitas-zoldhulladek", label: "Lomtalanítás" },
  { href: "/kozterulet-engedely", label: "Engedély" },
];

export default function SiteHeader() {
  const tel = `tel:${site.phoneHref}`;
  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="wrap">
          <span>
            {site.hoursWeekday} · {site.hoursSat} · {site.hoursSun}
          </span>
          <span className="t2">Zugló és egész Budapest</span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>
      <div className="hazard" aria-hidden="true" />

      {/* NAV */}
      <nav>
        <div className="wrap nav-in">
          <Link href="/" className="brand" aria-label="Konténer rendelés Zugló">
            <svg className="brand-ic" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M6 16h36l-4 18H10L6 16z"
                fill="none"
                stroke="#FFCC00"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              <path
                d="M12 16v18M18 16v18M24 16v18M30 16v18M36 16v18"
                stroke="#FFCC00"
                strokeWidth="1.4"
                opacity=".55"
              />
              <path
                d="M4 16h40"
                stroke="#FFCC00"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="brand-tx">
              Konténer <span>Zugló</span>
              <small>XIV. KERÜLET</small>
            </span>
          </Link>
          <div className="nav-menu">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <a href={tel} className="nav-call">
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
        </div>
      </nav>
    </>
  );
}
