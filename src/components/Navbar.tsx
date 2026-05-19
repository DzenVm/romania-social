"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/#jocuri", label: "Jocuri" },
  { href: "/#cum-functioneaza", label: "Cum funcționează" },
  { href: "/#responsabil", label: "Joc Responsabil" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background .3s, border-color .3s",
        background: scrolled ? "rgba(11,18,32,.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(233,238,252,.1)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: "var(--muted)", fontWeight: 600, fontSize: 14, transition: "color .15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/joc" className="btn" style={{ minWidth: "auto", padding: "10px 22px", fontSize: 14 }}>
          Joacă Acum
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", color: "var(--text)", fontSize: 24, cursor: "pointer" }}
          className="burger-btn"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(11,18,32,.98)", borderTop: "1px solid var(--border)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{ color: "var(--muted)", fontWeight: 600, padding: "8px 0", borderBottom: "1px solid var(--border)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/joc" className="btn" style={{ textAlign: "center", marginTop: 8 }}>
            Joacă Acum
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
