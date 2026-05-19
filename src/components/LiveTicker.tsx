"use client";

const wins = [
  { user: "Andrei M.", game: "Book of Ra", amount: "125,000", emoji: "📖" },
  { user: "Elena P.", game: "Lucky Wheel", amount: "88,500", emoji: "🎡" },
  { user: "Bogdan T.", game: "Golden Dragon", amount: "210,000", emoji: "🐉" },
  { user: "Maria C.", game: "Poker Deluxe", amount: "55,000", emoji: "🃏" },
  { user: "Radu I.", game: "Slots Vegas", amount: "340,000", emoji: "🎰" },
  { user: "Ioana S.", game: "Blackjack Pro", amount: "92,000", emoji: "♠️" },
  { user: "Vlad N.", game: "Roulette Live", amount: "175,000", emoji: "🎡" },
  { user: "Alina D.", game: "Diamond Slots", amount: "430,000", emoji: "💎" },
  { user: "Mihai G.", game: "Fortune Tiger", amount: "68,000", emoji: "🐯" },
  { user: "Cristina R.", game: "Book of Dead", amount: "295,000", emoji: "💀" },
];

export default function LiveTicker() {
  const doubled = [...wins, ...wins];

  return (
    <div className="bg-[#0D0D18] border-y border-[#1E1E2E] py-3 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-green-500 text-black text-xs font-black px-3 py-1.5 rounded-r-lg">
          LIVE
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-8 marquee-inner whitespace-nowrap">
            {doubled.map((win, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm">
                <span>{win.emoji}</span>
                <span className="text-gray-400">{win.user}</span>
                <span className="text-gray-500">a câștigat</span>
                <span className="text-yellow-400 font-bold">{win.amount} monede</span>
                <span className="text-gray-600">în</span>
                <span className="text-purple-400">{win.game}</span>
                <span className="text-gray-700 ml-4">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
