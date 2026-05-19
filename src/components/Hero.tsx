import Link from "next/link";

export default function Hero() {
  return (
    <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: 64 }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,107,53,.12)", border: "1px solid rgba(255,107,53,.3)",
              borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 700,
              color: "var(--accent)", marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, background: "#33d17a", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
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
              <Link href="/joc" className="btn btn-hero-cta">🎰 Joacă Acum</Link>
            </div>

            <p style={{ margin: 0, color: "var(--muted)", fontSize: 13, lineHeight: 1.6, maxWidth: "50ch" }}>
              Acesta este un conținut de joc social. Dacă apar întrebări, consultă{" "}
              <Link href="/#responsabil" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                pagina de joc responsabil
              </Link>.
            </p>
          </div>

          {/* Right — visual slot preview */}
          <div style={{ display: "flex", justifyContent: "center" }} className="hero-visual">
            <div style={{
              background: "rgba(15,26,46,.8)", border: "1px solid var(--border)",
              borderRadius: 24, padding: 32, maxWidth: 380, width: "100%",
              boxShadow: "0 32px 80px rgba(255,107,53,.15)",
            }}>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".08em" }}>Demo Slot Social</span>
              </div>

              {/* Reel preview */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
                {["🏺", "💎", "☀️", "⭐", "7", "🪙", "🔥", "👑", "🌸"].map((s, i) => (
                  <div key={i} style={{
                    aspectRatio: "1", background: "rgba(255,255,255,.04)", border: "1px solid var(--border)",
                    borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28, transition: "border-color .2s",
                  }}>
                    {s}
                  </div>
                ))}
              </div>

              {/* Fake stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "Sold virtual", val: "1,000" },
                  { label: "Miză", val: "20" },
                ].map(({ label, val }) => (
                  <div key={label} style={{ background: "rgba(255,255,255,.03)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" }}>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>{val}</div>
                  </div>
                ))}
              </div>

              <Link href="/joc" className="btn" style={{ width: "100%", fontSize: 16, borderRadius: 14, justifyContent: "center" }}>
                ▶ Joacă Demonstrativ Acum
              </Link>

              <p style={{ textAlign: "center", margin: "12px 0 0", fontSize: 11, color: "var(--muted)" }}>
                100% Gratuit · Fără Înregistrare · Fără Bani Reali
              </p>
            </div>
          </div>
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 56, justifyContent: "center" }}>
          {[
            { icon: "✅", text: "Fără depuneri" },
            { icon: "🚫", text: "Fără retrageri" },
            { icon: "🎮", text: "Monedă virtuală" },
            { icon: "🔞", text: "Doar 18+" },
            { icon: "⚡", text: "Acces instant din browser" },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: "flex", alignItems: "center", gap: 7,
              background: "rgba(15,26,46,.6)", border: "1px solid var(--border)",
              borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "var(--muted)",
            }}>
              {icon} {text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .4; }
        }
      `}</style>
    </section>
  );
}
