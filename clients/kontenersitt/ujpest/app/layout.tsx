import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieConsent from "./components/CookieConsent";
import PhoneTracking from "./components/PhoneTracking";

// Rubik — lágyított sarkú betűformák (illik a lekerekített matrica-stílushoz),
// display és body egy családból (800-as display súly a CSS-ben)
const body = Rubik({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontenerrendelesujpest.hu"),
  title: "Konténer rendelés Újpest — sittszállítás a IV. kerületben | 10.125 Ft/m³-tól",
  description:
    "Konténer rendelés Újpesten gyors kiszállítással: sitt, lom és vegyes hulladék elszállítása a IV. kerület minden részébe — Újpest-központ, Káposztásmegyer, Megyer, Istvántelek. 10.125 Ft/m³-tól. ☎ +36 21 3355 255",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kontenerrendelesujpest.hu/",
    title: "Konténer rendelés Újpest — sitt, lom, vegyes hulladék a IV. kerületben",
    description:
      "Konténer panellakáshoz, kertes házhoz és felújításhoz Újpesten. Gyors kiszállítás, engedély-ügyintézés. Hívjon: +36 21 3355 255",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Konténer Rendelés Újpest",
  description:
    "Konténeres sittszállítás, lomtalanítás és hulladékszállítás Újpesten (Budapest IV. kerület). 4–8 m³ konténerek gyors kiszállítással Újpest-központ, Káposztásmegyer, Megyer, Istvántelek, Népsziget és Városkapu területén.",
  url: "https://kontenerrendelesujpest.hu/",
  telephone: "+36213355255",
  email: "info@kontenersitt.hu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vidor utca 7.",
    addressLocality: "Budapest",
    postalCode: "1172",
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "Place", name: "Újpest (Budapest IV. kerület)" },
    { "@type": "Place", name: "Újpest-központ" },
    { "@type": "Place", name: "Káposztásmegyer" },
    { "@type": "Place", name: "Megyer" },
    { "@type": "Place", name: "Istvántelek" },
    { "@type": "Place", name: "Népsziget" },
    { "@type": "Place", name: "Városkapu" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={body.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
        <PhoneTracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </body>
    </html>
  );
}
