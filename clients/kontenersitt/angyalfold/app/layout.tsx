import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieConsent from "./components/CookieConsent";
import PhoneTracking from "./components/PhoneTracking";

// Urbanist — elegáns geometrikus (Duna-parti modern), display és body egy családból
const body = Urbanist({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontenerrendelesangyalfold.hu"),
  title:
    "Konténer rendelés Angyalföld — sittszállítás a XIII. kerületben | 4–8 m³",
  description:
    "Konténer rendelés Angyalföldön gyors kiszállítással: sitt, lom és vegyes hulladék elszállítása a XIII. kerület minden részébe — Újlipótváros, Vizafogó, Gyöngyösi, Marina-part. 10.250 Ft/m³-tól. ☎ +36 21 3355 233",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kontenerrendelesangyalfold.hu/",
    title: "Konténer rendelés Angyalföld — sitt, lom, vegyes hulladék a XIII. kerületben",
    description:
      "Konténer panellakáshoz, új lakóparkhoz és felújításhoz Angyalföldön. Gyors kiszállítás, engedély-ügyintézés. Hívjon: +36 21 3355 233",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Konténer Rendelés Angyalföld",
  description:
    "Konténeres sittszállítás, lomtalanítás és hulladékszállítás Angyalföldön (Budapest XIII. kerület). 4–8 m³ konténerek gyors kiszállítással Újlipótváros, Vizafogó, Népsziget, Gyöngyösi-lakótelep, Béke tér, Dagály és Marina-part területén.",
  url: "https://kontenerrendelesangyalfold.hu/",
  telephone: "+36213355233",
  email: "info@kontenersitt.hu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vidor utca 7.",
    addressLocality: "Budapest",
    postalCode: "1172",
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "Place", name: "Angyalföld (Budapest XIII. kerület)" },
    { "@type": "Place", name: "Újlipótváros" },
    { "@type": "Place", name: "Vizafogó" },
    { "@type": "Place", name: "Népsziget" },
    { "@type": "Place", name: "Gyöngyösi-lakótelep" },
    { "@type": "Place", name: "Béke tér" },
    { "@type": "Place", name: "Dagály" },
    { "@type": "Place", name: "Marina-part" },
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
