"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import SlotSymbol, { SYMBOLS, SYMBOL_LABEL, type SymbolName } from "./SlotSymbol";
import styles from "./game.module.css";

type Cell = SymbolName | "?";

const GAMES = {
  pharaoh: {
    name: "Slot social: Egipt antic",
    tab: "Egipt antic",
    desc: "Un slot social clasic inspirat din Egiptul antic. Joci exclusiv cu monedă virtuală, fără valoare reală și fără bani reali.",
  },
  cleopatra: {
    name: "Slot social: Regine egiptene",
    tab: "Regine egiptene",
    desc: "Slot social cu simboluri regale. Toate recompensele sunt virtuale — nu există depuneri, retrageri sau câștiguri financiare.",
  },
  aztec: {
    name: "Slot social: Civilizații aztece",
    tab: "Civilizații aztece",
    desc: "Experiență socială inspirată din legendele aztece. Doar divertisment, fără câștiguri cu valoare reală.",
  },
  bonanza: {
    name: "Slot social: Aventură wild",
    tab: "Aventură wild",
    desc: "Slot social wild pentru distracție. Fără depuneri și fără retrageri; moneda rămâne mereu virtuală.",
  },
} as const;

type GameKey = keyof typeof GAMES;

const INITIAL_CREDITS = 1000;
const BETS = [10, 20, 50, 100];

const rand = (): SymbolName => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
const emptyGrid = (): Cell[][] => [
  ["?", "?", "?"],
  ["?", "?", "?"],
  ["?", "?", "?"],
];

interface SpinEntry {
  combo: string;
  win: number;
}
interface Message {
  text: string;
  type: "info" | "win" | "error";
}

export default function GamePageClient() {
  const param = useSearchParams().get("game");
  const [activeGame, setActiveGame] = useState<GameKey>(
    param && param in GAMES ? (param as GameKey) : "pharaoh"
  );
  const game = GAMES[activeGame];

  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [bet, setBet] = useState(20);
  const [grid, setGrid] = useState<Cell[][]>(emptyGrid);
  const [colSpinning, setColSpinning] = useState([false, false, false]);
  const [spinning, setSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(0);
  const [totalSpins, setTotalSpins] = useState(0);
  const [history, setHistory] = useState<SpinEntry[]>([]);
  const [winCells, setWinCells] = useState([false, false, false]);
  const [showBanner, setShowBanner] = useState(false);
  const [message, setMessage] = useState<Message>({
    text: "Alege miza virtuală și apasă Rotire pentru a începe demonstrația.",
    type: "info",
  });

  const timersRef = useRef<number[]>([]);
  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => {
      window.clearInterval(id);
      window.clearTimeout(id);
    });
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const finishSpin = useCallback(
    (final: SymbolName[]) => {
      const [a, b, c] = final;
      let cells: [boolean, boolean, boolean] = [false, false, false];
      let win = 0;
      if (a === b && b === c) {
        cells = [true, true, true];
        win = a === "seven" ? bet * 8 : bet * 6;
      } else if (a === b) {
        cells = [true, true, false];
        win = bet * 2;
      } else if (b === c) {
        cells = [false, true, true];
        win = bet * 2;
      } else if (a === c) {
        cells = [true, false, true];
        win = bet * 2;
      }

      setCredits((cr) => cr + win);
      setLastWin(win);
      setTotalSpins((s) => s + 1);
      setWinCells(cells);
      setSpinning(false);
      if (win > 0) {
        setShowBanner(true);
        setMessage({ text: `Recompensă virtuală: +${win} monede. Felicitări!`, type: "win" });
      } else {
        setMessage({ text: "Nicio combinație câștigătoare pe linia centrală. Mai încearcă!", type: "info" });
      }
      setHistory((h) =>
        [{ combo: final.map((s) => SYMBOL_LABEL[s]).join(" · "), win }, ...h].slice(0, 6)
      );
    },
    [bet]
  );

  const spin = useCallback(() => {
    if (spinning) return;
    if (credits < bet) {
      setMessage({ text: "Sold virtual insuficient. Apasă Resetează pentru a continua demonstrația.", type: "error" });
      return;
    }

    clearTimers();
    setCredits((c) => c - bet);
    setLastWin(0);
    setWinCells([false, false, false]);
    setShowBanner(false);
    setSpinning(true);
    setColSpinning([true, true, true]);
    setMessage({ text: "Barabanele se rotesc... rezultat virtual în curs.", type: "info" });

    const final: SymbolName[] = [rand(), rand(), rand()];

    for (let col = 0; col < 3; col++) {
      const iv = window.setInterval(() => {
        setGrid((g) => {
          const ng = g.map((c) => [...c]);
          ng[col] = [rand(), rand(), rand()];
          return ng;
        });
      }, 75);
      timersRef.current.push(iv);

      const stop = window.setTimeout(() => {
        window.clearInterval(iv);
        setGrid((g) => {
          const ng = g.map((c) => [...c]);
          ng[col] = [rand(), final[col], rand()];
          return ng;
        });
        setColSpinning((cs) => {
          const ncs = [...cs];
          ncs[col] = false;
          return ncs;
        });
        if (col === 2) {
          const fin = window.setTimeout(() => finishSpin(final), 200);
          timersRef.current.push(fin);
        }
      }, 650 + col * 360);
      timersRef.current.push(stop);
    }
  }, [spinning, credits, bet, clearTimers, finishSpin]);

  const reset = () => {
    if (spinning) return;
    clearTimers();
    setCredits(INITIAL_CREDITS);
    setBet(20);
    setGrid(emptyGrid());
    setColSpinning([false, false, false]);
    setLastWin(0);
    setTotalSpins(0);
    setWinCells([false, false, false]);
    setShowBanner(false);
    setHistory([]);
    setMessage({ text: "Demonstrație resetată. Sold virtual: 1000. Doar pentru divertisment.", type: "info" });
  };

  const switchGame = (key: GameKey) => {
    if (key === activeGame || spinning) return;
    clearTimers();
    setActiveGame(key);
    setGrid(emptyGrid());
    setColSpinning([false, false, false]);
    setLastWin(0);
    setWinCells([false, false, false]);
    setShowBanner(false);
    setHistory([]);
    setMessage({ text: "Joc nou selectat. Apasă Rotire pentru a începe.", type: "info" });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `/joc?game=${key}`);
    }
  };

  const machineWin = winCells.some(Boolean);
  const msgClass =
    message.type === "win" ? styles.messageWin : message.type === "error" ? styles.messageError : "";

  return (
    <div className={styles.wrap}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.pills}>
          <span className={`${styles.pill} ${styles.pillDanger}`}>18+ DOAR PENTRU ADULȚI</span>
          <span className={styles.pill}>FĂRĂ BANI REALI</span>
          <span className={styles.pill}>DOAR MONEDĂ VIRTUALĂ</span>
        </div>
        <Link href="/" className={styles.back}>
          &larr; Înapoi la pagina principală
        </Link>
      </div>

      <main>
        <div className="container">
          {/* Header */}
          <header className={styles.head}>
            <h1 className={styles.title}>{game.name}</h1>
            <p className={styles.theme}>{game.desc}</p>
            <div className={styles.switcher}>
              {(Object.keys(GAMES) as GameKey[]).map((key) => (
                <button
                  key={key}
                  className={`${styles.tab} ${key === activeGame ? styles.tabActive : ""}`}
                  onClick={() => switchGame(key)}
                  disabled={spinning}
                >
                  {GAMES[key].tab}
                </button>
              ))}
            </div>
          </header>

          {/* Layout */}
          <div className={styles.layout}>
            {/* Slot machine */}
            <section>
              <div className={`${styles.machine} ${machineWin ? styles.machineWin : ""}`}>
                {showBanner && lastWin > 0 && (
                  <div className={styles.winBanner}>CÂȘTIG +{lastWin} MONEDE VIRTUALE</div>
                )}
                <div className={styles.machineInner}>
                  {/* Stats */}
                  <div className={styles.statRow}>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Sold virtual</div>
                      <div
                        className={`${styles.statValue} ${
                          credits <= 0 ? styles.statDanger : credits <= 100 ? styles.statWarn : ""
                        }`}
                      >
                        {credits.toLocaleString("ro-RO")}
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Câștig ultima rotire</div>
                      <div className={`${styles.statValue} ${lastWin > 0 ? styles.statWin : ""}`}>
                        {lastWin}
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <div className={styles.statLabel}>Total rotiri</div>
                      <div className={styles.statValue}>{totalSpins}</div>
                    </div>
                  </div>

                  {/* Screen */}
                  <div className={styles.screen}>
                    <span className={`${styles.payMark} ${styles.payMarkLeft}`} />
                    <span className={`${styles.payMark} ${styles.payMarkRight}`} />
                    <div className={styles.grid}>
                      {[0, 1, 2].map((col) => (
                        <div
                          key={col}
                          className={`${styles.col} ${colSpinning[col] ? styles.colSpinning : ""}`}
                        >
                          {[0, 1, 2].map((row) => (
                            <div
                              key={row}
                              className={`${styles.cell} ${row === 1 ? styles.cellMid : ""} ${
                                row === 1 && winCells[col] ? styles.cellWin : ""
                              }`}
                            >
                              <SlotSymbol name={grid[col][row]} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={`${styles.message} ${msgClass}`}>{message.text}</div>

                  {/* Controls */}
                  <div className={styles.controls}>
                    <div className={styles.betGroup}>
                      {BETS.map((b) => (
                        <button
                          key={b}
                          className={`${styles.betBtn} ${b === bet ? styles.betBtnActive : ""}`}
                          onClick={() => setBet(b)}
                          disabled={spinning}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    <div className={styles.actions}>
                      <button
                        className={styles.spinBtn}
                        onClick={spin}
                        disabled={spinning || credits < bet}
                      >
                        <span>{spinning ? "SE ROTEȘTE..." : "ROTIRE"}</span>
                        <span className={styles.spinBet}>Miză virtuală: {bet}</span>
                      </button>
                      <button className={styles.resetBtn} onClick={reset} disabled={spinning}>
                        Resetează
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sidebar */}
            <aside className={styles.side}>
              {/* Paytable */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Tabel recompense virtuale</h3>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    <SlotSymbol name="seven" /> Trei simboluri Șapte
                  </span>
                  <span className={styles.payVal}>Miză × 8</span>
                </div>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    <SlotSymbol name="star" /> Trei simboluri identice
                  </span>
                  <span className={styles.payVal}>Miză × 6</span>
                </div>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>
                    <SlotSymbol name="diamond" /> Două simboluri identice
                  </span>
                  <span className={styles.payVal}>Miză × 2</span>
                </div>
                <div className={styles.payRow}>
                  <span className={styles.paySym}>Fără potrivire pe linie</span>
                  <span className={styles.payVal}>0</span>
                </div>
                <p className={styles.cardNote} style={{ marginTop: 10 }}>
                  Câștigurile se evaluează doar pe linia centrală. Toate valorile sunt în monedă
                  virtuală fără valoare reală.
                </p>
              </div>

              {/* History */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Istoric rotiri (ultimele 6)</h3>
                {history.length === 0 ? (
                  <p className={styles.historyEmpty}>
                    Încă nu există rotiri în această sesiune. Apasă Rotire pentru a începe.
                  </p>
                ) : (
                  <div className={styles.history}>
                    {history.map((h, i) => (
                      <div key={i} className={styles.historyItem}>
                        <span className={styles.historyCombo}>{h.combo}</span>
                        <span className={h.win > 0 ? styles.historyWin : styles.historyZero}>
                          {h.win > 0 ? `+${h.win}` : "0"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Responsible gaming */}
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Joc responsabil</h3>
                <p className={styles.cardNote} style={{ marginBottom: 12 }}>
                  Chiar dacă platforma nu oferă jocuri cu bani reali, susținem jocul responsabil.
                  Dacă tu sau cineva apropiat are îngrijorări, contactează:
                </p>
                <div className={styles.orgLinks}>
                  {[
                    { label: "BeGambleAware", href: "https://www.begambleaware.org/" },
                    { label: "GamCare", href: "https://www.gamcare.org.uk/" },
                    { label: "Joc Responsabil", href: "https://www.jocresponsabil.ro/" },
                  ].map((o) => (
                    <a
                      key={o.label}
                      className={styles.orgLink}
                      href={o.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {o.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Legal */}
          <div className={styles.legal}>
            <p className={styles.legalText}>
              <strong>Disclaimer legal:</strong> Acest joc este o experiență socială destinată
              exclusiv divertismentului, conform Legea nr. 190/2015 privind jocurile de noroc. Nu
              sunt disponibile jocuri de noroc cu bani reali. Toate rezultatele sunt generate
              aleatoriu pentru demonstrație și nu reflectă probabilități reale de câștig. Moneda
              virtuală nu are valoare reală, nu poate fi cumpărată, retrasă sau convertită în bani
              reali ori premii. Nu poți depune sau câștiga bani reali. Platforma este destinată
              persoanelor de 18 ani și peste.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
