"use client";

export default function ResponsibleSection() {
  return (
    <section id="responsabil" style={{ padding: "0 0 80px" }}>
      <div className="container">
        <div style={{
          background: "rgba(15,26,46,.65)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: 28,
        }}>
          <h2 style={{ margin: "0 0 16px", fontSize: 22, fontWeight: 900, letterSpacing: "-.02em" }}>
            Resurse pentru Jocuri Responsabile
          </h2>

          <div style={{ display: "flex", alignItems: "stretch", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "0 18px", minHeight: 50, borderRadius: "var(--radius-md)",
              border: "1px solid rgba(220,38,38,.35)",
              background: "linear-gradient(135deg, #dc2626, #ff6b35)",
              fontWeight: 900, fontSize: 22, color: "#fff",
              boxShadow: "0 12px 32px rgba(220,38,38,.22)",
              flexShrink: 0,
            }}>
              18+
            </div>
            {[
              { label: "BeGambleAware", href: "https://www.begambleaware.org/" },
              { label: "GamCare", href: "https://www.gamcare.org.uk/" },
              { label: "Joc Responsabil", href: "https://www.jocresponsabil.ro/" },
            ].map(org => (
              <a
                key={org.label}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "0 16px", minHeight: 50, flex: "1 1 120px", minWidth: 120,
                  borderRadius: "var(--radius-md)", border: "1px solid var(--border)",
                  background: "rgba(255,255,255,.04)", fontWeight: 800,
                  fontSize: "clamp(13px,1.5vw,16px)", color: "var(--text)", whiteSpace: "nowrap",
                  transition: "transform var(--transition), border-color var(--transition)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                {org.label}
              </a>
            ))}
          </div>

          <p style={{ margin: "0 0 14px", color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
            Aceste organizații oferă suport și resurse pentru jocuri responsabile. Această platformă nu oferă
            jocuri de noroc cu bani reali și nu necesită licență din partea autorității naționale.
          </p>

          <div style={{
            padding: "16px 18px", borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)", background: "rgba(255,255,255,.02)", marginBottom: 18,
          }}>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7, fontSize: 13 }}>
              <strong>Disclaimer Legal Conform Legislației Românești:</strong> Această platformă oferă jocuri
              sociale doar pentru scopuri de divertisment, conform Legea nr. 190/2015 privind jocurile de noroc.
              Aceasta este o platformă de jocuri sociale — nu sunt disponibile jocuri de noroc cu bani reali.
              Toate jocurile folosesc doar monedă virtuală fără valoare reală. Nu poți depune, câștiga sau retrage
              bani reali. Moneda virtuală nu are valoare reală și nu poate fi schimbată în bani reali.
              Platforma este destinată utilizatorilor de 18 ani și peste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
