import { Suspense } from "react";
import GamePageClient from "./GamePageClient";

export default function GamePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)" }}>Se încarcă...</div>}>
      <GamePageClient />
    </Suspense>
  );
}
