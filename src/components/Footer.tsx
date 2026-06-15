import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Acasă" },
  { href: "/#responsabil", label: "Jocuri Responsabile" },
  { href: "/confidentialitate", label: "Confidențialitate" },
  { href: "/termeni", label: "Termeni" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0 40px" }}>
      <div className="container">
        <div style={{
          display: "flex", justifyContent: "space-between",
          gap: 20, flexWrap: "wrap", alignItems: "flex-start",
        }}>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {footerLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    padding: "9px 12px", borderRadius: 10, border: "1px solid var(--border)",
                    background: "rgba(255,255,255,.03)", color: "var(--muted)", fontWeight: 700, fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 14,
              background: "rgba(255,107,53,.1)", border: "1px solid rgba(255,107,53,.2)",
              borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: "var(--accent)",
            }}>
              18+ | FĂRĂ BANI REALI | FĂRĂ PREMII REALE | DOAR PENTRU DIVERTISMENT
            </div>

            <p style={{ margin: 0, color: "var(--muted)", fontSize: 12, lineHeight: 1.6, maxWidth: 460 }}>
              Denumirile și imaginile jocurilor sunt ilustrative și fictive, fără legătură cu niciun
              brand, logo sau produs de jocuri cu bani reali.
            </p>
          </div>

          <div style={{ color: "var(--muted)", fontSize: 12, maxWidth: 360, lineHeight: 1.7 }}>
            <p style={{ margin: "0 0 6px" }}>
              Nu oferim posibilitatea de a câștiga sau retrage bani reali. Moneda virtuală nu are valoare reală.
              Platforma este destinată persoanelor cu vârsta de 18 ani și peste.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "var(--text)" }}>Dwellfort Group s.r.o.</strong><br />
              Pitterova 2855/11, Žižkov, 130 00 Praha 3<br />
              Republica Cehă · IČO: 23206667
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
