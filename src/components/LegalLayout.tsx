import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "100px 20px 60px" }}>
        <Link
          href="/"
          style={{ color: "var(--accent)", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
        >
          ← Înapoi acasă
        </Link>

        <h1 style={{
          margin: "24px 0 8px",
          fontSize: "clamp(26px,4vw,40px)",
          fontWeight: 900,
          letterSpacing: "-.02em",
          lineHeight: 1.08,
        }}>
          {title}
        </h1>

        {lastUpdated && (
          <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 40px" }}>
            Ultima actualizare: {lastUpdated}
          </p>
        )}

        <div style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 15 }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
