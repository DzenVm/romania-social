import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE = "https://rogaleme.online";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Sloturi Sociale Online (18+) | Fără Bani Reali | rogaleme.online",
    template: "%s | rogaleme.online",
  },
  description:
    "Jocuri sociale de sloturi gratuite — exclusiv pentru divertisment, fără bani reali, fără depuneri, fără retrageri. Monedă virtuală fără valoare reală. Doar 18+.",
  keywords: [
    "sloturi sociale",
    "jocuri sociale online",
    "slot fara bani reali",
    "jocuri divertisment Romania",
    "slot social gratuit",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: BASE,
    siteName: "rogaleme.online",
    title: "Sloturi Sociale Online (18+) | Fără Bani Reali",
    description:
      "Jocuri sociale de sloturi gratuite — exclusiv pentru divertisment. Fără bani reali, fără depuneri, fără retrageri. Monedă virtuală. Doar 18+.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Sloturi Sociale Online — Fără Bani Reali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloturi Sociale Online (18+) | Fără Bani Reali",
    description:
      "Jocuri sociale de sloturi gratuite. Fără bani reali. Monedă virtuală. Doar 18+.",
    images: ["/images/hero.webp"],
  },
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: BASE },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: BASE,
      name: "rogaleme.online",
      description: "Jocuri sociale de sloturi gratuite pentru divertisment",
      inLanguage: "ro-RO",
    },
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Dwellfort Group s.r.o.",
      url: BASE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pitterova 2855/11",
        addressLocality: "Praha 3 - Žižkov",
        postalCode: "130 00",
        addressCountry: "CZ",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
