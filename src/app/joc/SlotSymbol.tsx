export type SymbolName = "seven" | "crown" | "star" | "diamond" | "bell";

export const SYMBOLS: SymbolName[] = ["seven", "crown", "star", "diamond", "bell"];

export const SYMBOL_LABEL: Record<SymbolName, string> = {
  seven: "Șapte",
  crown: "Coroană",
  star: "Stea",
  diamond: "Diamant",
  bell: "Clopot",
};

const COLOR: Record<SymbolName, string> = {
  seven: "#ffd54a",
  crown: "#ffb454",
  star: "#ff7a45",
  diamond: "#5ad1ff",
  bell: "#ffd98a",
};

export default function SlotSymbol({ name }: { name: SymbolName | "?" }) {
  if (name === "?") {
    return (
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="56"
          fontWeight="900"
          fill="rgba(233,238,252,.25)"
        >
          ?
        </text>
      </svg>
    );
  }

  const c = COLOR[name];

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      {name === "seven" && (
        <path
          d="M28 24 H75 V40 L53 82 H34 L58 41 H28 Z"
          fill={c}
          stroke="rgba(0,0,0,.35)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}

      {name === "crown" && (
        <>
          <path
            d="M16 74 V37 L34 53 L50 25 L66 53 L84 37 V74 Z"
            fill={c}
            stroke="rgba(0,0,0,.35)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="37" r="5" fill={c} />
          <circle cx="50" cy="25" r="5.5" fill={c} />
          <circle cx="84" cy="37" r="5" fill={c} />
        </>
      )}

      {name === "star" && (
        <path
          d="M50 8 L60.8 38.5 L94 39 L67.5 59 L77 91 L50 71.5 L23 91 L32.5 59 L6 39 L39.2 38.5 Z"
          fill={c}
          stroke="rgba(0,0,0,.35)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}

      {name === "diamond" && (
        <>
          <path
            d="M50 9 L87 50 L50 91 L13 50 Z"
            fill={c}
            stroke="rgba(0,0,0,.35)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M50 9 L50 91 M13 50 L87 50"
            stroke="rgba(255,255,255,.4)"
            strokeWidth="2"
            fill="none"
          />
        </>
      )}

      {name === "bell" && (
        <>
          <path
            d="M50 14 c-2.7 0-4.8 2.1-4.8 4.8 v2.3 c-11.6 4-18.5 15.4-18.5 30.2 c0 9.5-2.7 14.8-7.5 19.6 c-2.1 2.1-0.6 5.5 2.2 5.5 h57.2 c2.8 0 4.3-3.4 2.2-5.5 c-4.8-4.8-7.5-10.1-7.5-19.6 c0-14.8-6.9-26.2-18.5-30.2 v-2.3 c0-2.7-2.1-4.8-4.8-4.8 Z"
            fill={c}
            stroke="rgba(0,0,0,.35)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="83" r="6" fill={c} stroke="rgba(0,0,0,.35)" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}
