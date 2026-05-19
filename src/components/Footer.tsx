import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Acasă" },
  { href: "/cum-sa-joci", label: "Cum să joci" },
  { href: "/#responsabil", label: "Jocuri Responsabile" },
  { href: "/confidentialitate", label: "Confidențialitate & Termeni" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0 40px" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {footerLinks.map(l => (
                <Link key={l.href} href={l.href} style={{
                  padding: "9px 12px", borderRadius: 10, border: "1px solid var(--border)",
                  background: "rgba(255,255,255,.03)", color: "var(--muted)", fontWeight: 700, fontSize: 13,
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,107,53,.1)", border: "1px solid rgba(255,107,53,.2)",
              borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: "var(--accent)",
            }}>
              DOAR 18+ | FĂRĂ BANI REALI | DOAR PENTRU DIVERTISMENT
            </div>
          </div>

          <div style={{ color: "var(--muted)", fontSize: 12, maxWidth: 420, lineHeight: 1.6 }}>
            Nu oferim posibilitatea de a câștiga sau retrage bani reali. Moneda virtuală nu are valoare reală.
            <br /><br />
            <strong>Informații juridice (Polonia):</strong><br />
            NIP: 6812099049<br />
            Firmă: ER SP Z O O<br />
            Adresă: 8 Ul. Marii Konopnickiej, Limanowa, 34-600<br />
            Țara: Polonia
          </div>
        </div>
      </div>
    </footer>
  );
}
