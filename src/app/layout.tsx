import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jocuri Sociale Gratuite (18+) | Fără Bani Reali",
  description:
    "Jocuri sociale doar pentru divertisment. Fără bani reali, fără depuneri și fără retrageri. Doar pentru utilizatori de 18+.",
  robots: "index, follow",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
