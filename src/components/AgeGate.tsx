"use client";

import { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { subscribe, getSnapshot, getServerSnapshot, confirmAge } from "@/lib/ageGate";

export default function AgeGate() {
  const verified = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const router = useRouter();

  if (verified) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(7,11,20,.97)",
      backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }}>
      <div style={{
        background: "var(--card)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "40px 32px",
        maxWidth: 440, width: "100%", textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 64, height: 64, borderRadius: 999, marginBottom: 20,
          background: "linear-gradient(135deg,#dc2626,#ff6b35)",
          fontWeight: 900, fontSize: 24, color: "#fff",
          boxShadow: "0 12px 32px rgba(220,38,38,.32)",
        }}>
          18+
        </div>

        <h2 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 900, letterSpacing: "-.02em" }}>
          Confirmare Vârstă
        </h2>

        <p style={{ margin: "0 0 8px", color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
          Această platformă este destinată <strong style={{ color: "var(--text)" }}>exclusiv persoanelor cu vârsta de 18 ani și peste</strong>.
        </p>

        <p style={{ margin: "0 0 28px", color: "var(--muted)", lineHeight: 1.65, fontSize: 13 }}>
          Jocurile sunt sociale, fără bani reali, fără depuneri și fără retrageri.
          Moneda virtuală nu are valoare reală.
        </p>

        <button
          onClick={confirmAge}
          style={{
            display: "block", width: "100%", padding: "14px 20px",
            borderRadius: "var(--radius-md)", border: "none", cursor: "pointer",
            background: "linear-gradient(135deg,var(--accent),var(--accent2))",
            fontWeight: 900, fontSize: 16, color: "#111827",
            marginBottom: 12,
            boxShadow: "0 8px 24px rgba(255,107,53,.25)",
          }}
        >
          Confirm — am 18+ ani
        </button>

        <button
          onClick={() => router.replace("/")}
          style={{
            display: "block", width: "100%", padding: "12px 20px",
            borderRadius: "var(--radius-md)", cursor: "pointer",
            background: "rgba(255,255,255,.04)", border: "1px solid var(--border)",
            color: "var(--muted)", fontWeight: 700, fontSize: 14,
          }}
        >
          Nu am 18 ani — Ieșire
        </button>

        <p style={{ margin: "20px 0 0", color: "var(--muted)", fontSize: 11, lineHeight: 1.5 }}>
          Prin confirmare, îți asumi că ai 18 ani sau mai mult și că ești de acord cu Termenii și Condițiile platformei.
        </p>
      </div>
    </div>
  );
}
