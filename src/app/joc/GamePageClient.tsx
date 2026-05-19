"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

const GAMES: Record<string, { name: string; symbols: string[]; theme: string }> = {
  pharaoh: {
    name: "Slot social: Egipt antic",
    symbols: ["A", "K", "Q", "J", "7", "★"],
    theme: "Egipt Antic",
  },
  cleopatra: {
    name: "Slot social: Regine egiptene",
    symbols: ["A", "K", "Q", "J", "7", "♦"],
    theme: "Cleopatra",
  },
  aztec: {
    name: "Slot social: Civilizații aztece",
    symbols: ["A", "K", "Q", "J", "7", "♣"],
    theme: "Aztec",
  },
  bonanza: {
    name: "Slot social: Aventură wild",
    symbols: ["A", "K", "Q", "J", "7", "♠"],
    theme: "Wild",
  },
};

const INITIAL_CREDITS = 1000;

function calcWin(a: string, b: string, c: string, bet: number): number {
  if (a === b && b === c) return a === "7" ? bet * 8 : bet * 6;
  if (a === b || b === c || a === c) return bet * 2;
  return 0;
}

interface SpinEntry {
  combo: string;
  result: string;
}

export default function GamePageClient() {
  const params = useSearchParams();
  const gameKey = params.get("game") || "pharaoh";
  const game = GAMES[gameKey] || GAMES.pharaoh;

  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(20);
  const [reels, setReels] = useState(["?", "?", "?"]);
  const [spinning, setSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(0);
  const [totalSpins, setTotalSpins] = useState(0);
  const [history, setHistory] = useState<SpinEntry[]>([]);
  const [message, setMessage] = useState({ text: "Apasa Rotire pentru a incepe demonstratia.", type: "info" });
  const [winHighlight, setWinHighlight] = useState(false);

  const rand = () => game.symbols[Math.floor(Math.random() * game.symbols.length)];

  const spin = useCallback(() => {
    if (spinning || credits < bet) {
      if (credits < bet) setMessage({ text: "Nu ai suficiente monede virtuale. Foloseste Reseteaza.", type: "error" });
      return;
    }

    setSpinning(true);
    setWinHighlight(false);
    setCredits(c => c - bet);
    setLastWin(0);
    setMessage({ text: "Se roteste... rezultat virtual in curs.", type: "info" });

    let ticks = 0;
    const timer = setInterval(() => {
      setReels([rand(), rand(), rand()]);
      ticks++;
      if (ticks >= 12) {
        clearInterval(timer);
        const final = [rand(), rand(), rand()];
        setReels(final);

        const win = calcWin(final[0], final[1], final[2], bet);
        setCredits(c => c + win);
        setLastWin(win);
        setTotalSpins(s => s + 1);

        if (win > 0) {
          setWinHighlight(true);
          setMessage({ text: `Recompensa virtuala: +${win} monede. Felicitari!`, type: "win" });
        } else {
          setMessage({ text: "Nicio combinatie castigatoare. Incearca din nou!", type: "info" });
        }

        setHistory(h => [{ combo: final.join(" | "), result: win > 0 ? `+${win} virtual` : "0" }, ...h].slice(0, 5));
        setSpinning(false);
      }
    }, 80);
  }, [spinning, credits, bet, game.symbols]);

  const reset = () => {
    if (spinning) return;
    setCredits(INITIAL_CREDITS);
    setBet(20);
    setReels(["?", "?", "?"]);
    setLastWin(0);
    setTotalSpins(0);
    setHistory([]);
    setWinHighlight(false);
    setMessage({ text: "Demonstratie resetata. Sold virtual: 1000. Doar pentru divertisment!", type: "info" });
  };

  const msgColors: Record<string, string> = {
    win: "rgba(51,209,122,.15)",
    error: "rgba(239,68,68,.15)",
    info: "rgba(255,107,53,.08)",
  };
  const msgBorders: Record<string, string> = {
    win: "rgba(51,209,122,.4)",
    error: "rgba(239,68,68,.4)",
    info: "rgba(255,107,53,.3)",
  };
  const msgTextColors: Record<string, string> = {
    win: "#33d17a",
    error: "#ef4444",
    info: "var(--muted)",
  };

  return (
    <>
      <main style={{ minHeight: "100svh" }}>
        {/* Topbar */}
        <div style={{
          background: "rgba(15,26,46,.9)", borderBottom: "1px solid var(--border)",
          padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 10, position: "sticky", top: 0, zIndex: 40,
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { color: "#ef4444", text: "18+ DOAR PENTRU ADULTI" },
              { color: "rgba(255,255,255,.1)", text: "FARA BANI REALI" },
              { color: "rgba(255,255,255,.1)", text: "DOAR MONEDA VIRTUALA" },
            ].map(pill => (
              <span key={pill.text} style={{
                display: "inline-flex", alignItems: "center", padding: "6px 12px",
                borderRadius: 999, background: pill.color, border: "1px solid rgba(255,255,255,.12)",
                fontWeight: 800, fontSize: 11, color: "#fff", whiteSpace: "nowrap",
              }}>{pill.text}</span>
            ))}
          </div>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13,
            color: "var(--muted)", fontWeight: 600, padding: "6px 12px",
            background: "rgba(255,255,255,.05)", borderRadius: 8, border: "1px solid var(--border)",
          }}>
            &larr; Inapoi
          </Link>
        </div>

        {/* Game hero */}
        <section style={{ background: "rgba(255,107,53,.04)", borderBottom: "1px solid var(--border)", padding: "28px 0" }}>
          <div className="container">
            <h1 style={{ margin: "0 0 12px", fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, letterSpacing: "-.02em" }}>
              {game.name}
            </h1>
            <p style={{ margin: "0 0 16px", color: "var(--muted)", fontSize: 14, maxWidth: "70ch", lineHeight: 1.65 }}>
              <strong>Tema: {game.theme}</strong> — Acesta este un joc social creat exclusiv pentru divertisment.
              Nu implica bani reali, nu exista depuneri, retrageri sau posibilitatea de a castiga premii cu valoare financiara.
              Toate recompensele sunt in moneda virtuala fara valoare reala.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Joc Social", "Fara Depuneri", "Fara Retrageri", "Doar Divertisment"].map(badge => (
                <span key={badge} style={{
                  padding: "6px 12px", borderRadius: 8, border: "1px solid var(--border)",
                  background: "rgba(255,255,255,.04)", fontSize: 12, fontWeight: 700,
                }}>{badge}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section style={{ padding: "32px 0 80px" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24, alignItems: "start" }} className="game-layout">

              {/* Slot machine */}
              <article style={{ background: "rgba(15,26,46,.65)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 24 }}>
                <div style={{ marginBottom: 20 }}>
                  <h2 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 900 }}>Joaca Slot Social</h2>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>Selecteaza miza virtuala si apasa Rotire. Rezultatele sunt generate local pentru demonstratie.</p>
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 24 }}>
                  {[
                    { label: "Sold virtual", val: credits.toString(), warn: credits <= 100, danger: credits <= 0 },
                    { label: "Miza virtuala", val: bet.toString() },
                    { label: "Castig ultim spin", val: lastWin.toString(), ok: lastWin > 0 },
                    { label: "Total spin-uri", val: totalSpins.toString() },
                  ].map(stat => (
                    <div key={stat.label} style={{
                      background: "rgba(255,255,255,.03)", border: "1px solid var(--border)",
                      borderRadius: 10, padding: "10px 12px",
                    }}>
                      <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>{stat.label}</div>
                      <div style={{
                        fontWeight: 900, fontSize: 18,
                        color: stat.danger ? "#ef4444" : stat.warn ? "#f59e0b" : stat.ok ? "#33d17a" : "var(--text)",
                      }}>{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Reels */}
                <div style={{
                  background: "rgba(0,0,0,.3)", borderRadius: 16, padding: 20, marginBottom: 20,
                  border: winHighlight ? "1px solid rgba(51,209,122,.5)" : "1px solid var(--border)",
                  transition: "border-color .3s",
                  boxShadow: winHighlight ? "0 0 30px rgba(51,209,122,.2)" : "none",
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                    {reels.map((sym, i) => (
                      <div key={i} style={{
                        aspectRatio: "1", background: "rgba(255,255,255,.05)", border: "1px solid var(--border)",
                        borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 36, fontWeight: 900, color: sym === "7" ? "var(--accent2)" : "var(--text)",
                        letterSpacing: "-.02em",
                      }}>
                        {sym}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bet buttons */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                  {[10, 20, 50, 100].map(b => (
                    <button key={b} onClick={() => { if (!spinning) setBet(b); }} style={{
                      flex: "1 1 60px", padding: "10px 8px", borderRadius: 10, border: "1px solid",
                      borderColor: bet === b ? "var(--accent)" : "var(--border)",
                      background: bet === b ? "rgba(255,107,53,.2)" : "rgba(255,255,255,.04)",
                      color: bet === b ? "var(--accent)" : "var(--muted)",
                      fontWeight: 800, fontSize: 14, cursor: "pointer",
                    }}>
                      {b}
                    </button>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, marginBottom: 16 }}>
                  <button onClick={spin} disabled={spinning || credits < bet} style={{
                    padding: "16px", borderRadius: 14, border: "none",
                    background: spinning || credits < bet ? "rgba(255,255,255,.1)" : "linear-gradient(135deg, var(--accent), var(--accent2))",
                    color: spinning || credits < bet ? "var(--muted)" : "#111827",
                    fontWeight: 900, fontSize: 17, cursor: spinning || credits < bet ? "not-allowed" : "pointer",
                  }}>
                    {spinning ? "Se roteste..." : "Rotire"}
                  </button>
                  <button onClick={reset} disabled={spinning} style={{
                    padding: "16px 18px", borderRadius: 14, border: "1px solid var(--border)",
                    background: "rgba(255,255,255,.04)", color: "var(--muted)",
                    fontWeight: 700, fontSize: 14, cursor: spinning ? "not-allowed" : "pointer",
                  }}>
                    Reseteaza
                  </button>
                </div>

                {/* Message */}
                <div style={{
                  padding: "12px 16px", borderRadius: 10,
                  background: msgColors[message.type] || msgColors.info,
                  border: `1px solid ${msgBorders[message.type] || msgBorders.info}`,
                  color: msgTextColors[message.type] || msgTextColors.info,
                  fontSize: 14, fontWeight: 600, marginBottom: 16,
                }}>
                  {message.text}
                </div>

                {/* History */}
                <div style={{
                  background: "rgba(0,0,0,.2)", borderRadius: 10, padding: "12px 16px",
                  fontSize: 13, color: "var(--muted)", lineHeight: 1.8,
                }}>
                  <strong>Istoric (ultimele 5 spin-uri):</strong>
                  {history.length === 0 ? (
                    <span> inca nu exista spin-uri in aceasta sesiune.</span>
                  ) : (
                    history.map((h, i) => (
                      <div key={i} style={{ marginTop: 4, color: i === 0 ? "var(--text)" : "var(--muted)" }}>
                        {i === 0 ? "> " : "  "}{h.combo} &mdash; <span style={{ color: h.result !== "0" ? "#33d17a" : "var(--muted)" }}>{h.result}</span>
                      </div>
                    ))
                  )}
                </div>

                <div style={{
                  marginTop: 16, padding: "14px 16px", borderRadius: 10,
                  border: "1px solid rgba(239,68,68,.2)", background: "rgba(239,68,68,.05)",
                  fontSize: 13, color: "var(--muted)", lineHeight: 1.65,
                }}>
                  <strong style={{ color: "#ef4444" }}>Atentie — Joc Social:</strong> Acest joc este destinat
                  exclusiv divertismentului si nu implica jocuri de noroc cu bani reali. Nu poti depune, retrage
                  sau converti moneda virtuala in bani reali.
                </div>

                <div style={{
                  marginTop: 12, padding: "12px 16px", borderRadius: 10,
                  border: "1px solid var(--border)", background: "rgba(255,255,255,.02)",
                  fontSize: 12, color: "var(--muted)", lineHeight: 1.65,
                }}>
                  <strong>Disclaimer:</strong> Platforma ofera jocuri sociale doar pentru scopuri de divertisment.
                  Nu sunt jocuri de noroc cu bani reali. Toate rezultatele sunt generate aleatoriu pentru demonstratie
                  si nu reflecta probabilitati reale de castig. Jocul este destinat persoanelor de 18 ani si peste.
                </div>
              </article>

              {/* Sidebar */}
              <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "rgba(15,26,46,.65)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 900 }}>Ce este un joc social?</h3>
                  <p style={{ margin: "0 0 12px", color: "var(--muted)", fontSize: 13, lineHeight: 1.65 }}>
                    Un joc social online ofera experiențe similare sloturilor, dar fara implicarea banilor reali.
                    Utilizatorii joaca cu moneda virtuala care nu poate fi convertita in bani reali.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", fontSize: 13, lineHeight: 1.7 }}>
                    {[
                      "Nu exista depuneri de bani reali.",
                      "Nu exista retrageri sau castiguri financiare.",
                      "Moneda virtuala este doar pentru divertisment.",
                      "Destinat exclusiv adultilor (18+).",
                    ].map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <div style={{ background: "rgba(15,26,46,.65)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
                  <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 900 }}>Tabel recompense virtuale</h3>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border)" }}>
                        <th style={{ textAlign: "left", padding: "6px 0", color: "var(--muted)", fontWeight: 700 }}>Combinatie</th>
                        <th style={{ textAlign: "right", padding: "6px 0", color: "var(--muted)", fontWeight: 700 }}>Recompensa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { combo: '3x simboluri "7"', reward: "Miza x 8" },
                        { combo: "3x simboluri identice", reward: "Miza x 6" },
                        { combo: "2x simboluri identice", reward: "Miza x 2" },
                        { combo: "Fara potrivire", reward: "0" },
                      ].map(row => (
                        <tr key={row.combo} style={{ borderBottom: "1px solid rgba(233,238,252,.06)" }}>
                          <td style={{ padding: "8px 0", color: "var(--muted)" }}>{row.combo}</td>
                          <td style={{ padding: "8px 0", textAlign: "right", color: "var(--text)", fontWeight: 700 }}>{row.reward}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ background: "rgba(15,26,46,.65)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
                  <h3 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 900 }}>Joc Responsabil</h3>
                  <p style={{ margin: "0 0 12px", color: "var(--muted)", fontSize: 13, lineHeight: 1.65 }}>
                    Daca tu sau cineva apropiat are ingrijorari legate de comportamentul de joc:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { label: "BeGambleAware", href: "https://www.begambleaware.org/" },
                      { label: "GamCare", href: "https://www.gamcare.org.uk/" },
                      { label: "Joc Responsabil", href: "https://www.jocresponsabil.ro/" },
                    ].map(org => (
                      <a key={org.label} href={org.href} target="_blank" rel="noopener noreferrer" style={{
                        padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border)",
                        background: "rgba(255,255,255,.04)", fontWeight: 700, fontSize: 13, display: "block",
                      }}>
                        {org.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: "14px 16px", borderRadius: 10, border: "1px solid rgba(220,38,38,.2)",
                  background: "rgba(220,38,38,.05)", fontSize: 12, color: "var(--muted)", lineHeight: 1.65,
                }}>
                  <strong style={{ color: "#ef4444" }}>Cerinta de varsta:</strong> Aceasta platforma este
                  destinata exclusiv persoanelor de 18 ani si peste.
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .game-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
