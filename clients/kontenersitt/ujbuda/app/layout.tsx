import type { Metadata } from "next";
import { Archivo_Black, Archivo } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieConsent from "./components/CookieConsent";
import PhoneTracking from "./components/PhoneTracking";

// Display: Archivo Black — nehéz, plakátos groteszk (munkagép-súly, nem generikus)
const display = Archivo_Black({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

// Body: Archivo — ugyanaz a család, utilitáriánus szövegtörzs
const body = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontenerrendelesujbuda.hu"),
  title: "Konténer rendelés Újbuda — sittszállítás a XI. kerületben | 11.875 Ft/m³-tól",
  description:
    "Konténer rendelés Újbudán gyors kiszállítással: sitt, lom és vegyes hulladék elszállítása a XI. kerület minden részébe — Kelenföld, Lágymányos, Gazdagrét, Sasad. 11.875 Ft/m³-tól. ☎ +36 21 3355 244",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kontenerrendelesujbuda.hu/",
    title: "Konténer rendelés Újbuda — sitt, lom, vegyes hulladék a XI. kerületben",
    description:
      "Konténer lakásfelújításhoz, panelhez és budai villához Újbudán. Gyors kiszállítás, engedély-ügyintézés. Hívjon: +36 21 3355 244",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Konténer Rendelés Újbuda",
  description:
    "Konténeres sittszállítás, lomtalanítás és hulladékszállítás Újbudán (Budapest XI. kerület). 4–8 m³ konténerek gyors kiszállítással Kelenföld, Lágymányos, Gazdagrét, Őrmező, Sasad, Sashegy és Albertfalva területén.",
  url: "https://kontenerrendelesujbuda.hu/",
  telephone: "+36213355244",
  email: "info@kontenersitt.hu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vidor utca 7.",
    addressLocality: "Budapest",
    postalCode: "1172",
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "Place", name: "Újbuda (Budapest XI. kerület)" },
    { "@type": "Place", name: "Kelenföld" },
    { "@type": "Place", name: "Lágymányos" },
    { "@type": "Place", name: "Gazdagrét" },
    { "@type": "Place", name: "Őrmező" },
    { "@type": "Place", name: "Sasad" },
    { "@type": "Place", name: "Sashegy" },
    { "@type": "Place", name: "Albertfalva" },
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
    <html lang="hu" className={`${display.variable} ${body.variable}`}>
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
