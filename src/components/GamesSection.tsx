"use client";

import Link from "next/link";
import Image from "next/image";

const games = [
  {
    slug: "pharaoh",
    name: "Slot social: Egipt antic",
    desc: "Un slot social clasic și popular. Fără bani reali — doar monedă virtuală.",
    image: "/images/game-pharaoh.jpg",
  },
  {
    slug: "cleopatra",
    name: "Slot social: Regine egiptene",
    desc: "Un slot social popular, cu simboluri clasice. Nu există câștiguri în bani reali.",
    image: "/images/game-cleopatra.jpg",
  },
  {
    slug: "aztec",
    name: "Slot social: Civilizații aztece",
    desc: "O experiență socială tip slot, inspirată din legende. Doar divertisment, fără valoare reală.",
    image: "/images/game-aztec.jpg",
  },
  {
    slug: "bonanza",
    name: "Slot social: Aventură wild",
    desc: "Slot social wild pentru distracție. Fără depuneri și fără retrageri; moneda rămâne virtuală.",
    image: "/images/game-bonanza.jpg",
  },
];

export default function GamesSection() {
  return (
    <section id="jocuri" style={{ padding: "80px 0" }}>
      <div className="container">
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, letterSpacing: "-.02em" }}>
            Alege un joc social
          </h2>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>
            Sloturi sociale gratuite — fără bani reali, doar monedă virtuală
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="games-grid">
          {games.map(game => (
            <article
              key={game.slug}
              style={{
                background: "rgba(15,26,46,.65)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "transform var(--transition), box-shadow var(--transition), border-color var(--transition)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(255,107,53,.14), 0 8px 24px rgba(0,0,0,.28)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,.28)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              {/* Badge */}
              <div style={{ padding: "14px 16px 0" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,.12)",
                  background: "rgba(255,255,255,.04)", fontWeight: 800, fontSize: 12,
                }}>
                  Social · Gratuit
                </span>
              </div>

              {/* Game image */}
              <div style={{
                margin: "14px 16px 0", borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255,255,255,.1)", overflow: "hidden",
                aspectRatio: "19/11", position: "relative",
              }}>
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>

              {/* Body */}
              <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 900, letterSpacing: "-.01em" }}>{game.name}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, flex: 1, lineHeight: 1.5 }}>{game.desc}</p>
                <div style={{ paddingTop: 4 }}>
                  <Link
                    href={`/joc?game=${game.slug}`}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      padding: "12px 14px", borderRadius: "var(--radius-md)", width: "100%",
                      fontWeight: 900, fontSize: 15,
                      background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                      border: "1px solid rgba(255,215,0,.25)", color: "#111827",
                      boxShadow: "0 10px 24px rgba(255,107,53,.16)",
                    }}
                  >
                    Joacă
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .games-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
