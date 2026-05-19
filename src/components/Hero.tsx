import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: 64 }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,107,53,.12)", border: "1px solid rgba(255,107,53,.3)",
              borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 700,
              color: "var(--accent)", marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, background: "#33d17a", borderRadius: "50%", display: "inline-block" }} />
              Platformă Sigură · 18+ · Fără Bani Reali
            </div>

            <h1 style={{ margin: "0 0 24px", fontSize: "clamp(36px,4.4vw,60px)", fontWeight: 900, letterSpacing: "-.02em", lineHeight: 1.06 }}>
              Sloturi Sociale{" "}
              <span style={{ background: "linear-gradient(135deg, #ff6b35, #ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Online
              </span>
            </h1>

            <p style={{ margin: "0 0 36px", color: "var(--muted)", fontSize: "clamp(16px,1.8vw,18px)", lineHeight: 1.7, maxWidth: "54ch" }}>
              Aceste jocuri sunt exclusiv pentru divertisment. Nu oferim posibilitatea
              de a câștiga bani reali sau premii cu valoare reală. Totul se joacă cu
              monedă virtuală fără valoare reală.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}>
              <Link href="/joc" className="btn btn-hero-cta">Joacă Acum</Link>
            </div>

            <p style={{ margin: 0, color: "var(--muted)", fontSize: 13, lineHeight: 1.6, maxWidth: "50ch" }}>
              Acesta este un conținut de joc social. Dacă apar întrebări, consultă{" "}
              <Link href="/#responsabil" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                pagina de joc responsabil
              </Link>.
            </p>
          </div>

          {/* Right — hero image */}
          <div style={{ display: "flex", justifyContent: "center" }} className="hero-visual">
            <Image
              src="/images/hero.webp"
              alt="Jocuri sociale online"
              width={540}
              height={480}
              priority
              style={{ width: "100%", height: "auto", maxHeight: "80svh", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 56, justifyContent: "center" }}>
          {[
            "Fără depuneri",
            "Fără retrageri",
            "Monedă virtuală",
            "Doar 18+",
            "Acces instant din browser",
          ].map(text => (
            <div key={text} style={{
              display: "flex", alignItems: "center", gap: 7,
              background: "rgba(15,26,46,.6)", border: "1px solid var(--border)",
              borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "var(--muted)",
            }}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
