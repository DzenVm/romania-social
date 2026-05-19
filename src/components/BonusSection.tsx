"use client";

const bonuses = [
  {
    emoji: "🎁",
    title: "Bonus de Bun Venit",
    value: "50,000",
    unit: "Monede Virtuale",
    desc: "Primești imediat 50,000 monede virtuale la înregistrare, fără nicio condiție.",
    color: "from-yellow-500 to-orange-600",
    badge: "Nou Venit",
  },
  {
    emoji: "📅",
    title: "Bonus Zilnic",
    value: "10,000",
    unit: "Monede / Zi",
    desc: "Intră zilnic pe platformă și revendică bonusul tău de loialitate garantat.",
    color: "from-purple-600 to-violet-700",
    badge: "Zilnic",
  },
  {
    emoji: "👥",
    title: "Invită un Prieten",
    value: "25,000",
    unit: "Per Invitație",
    desc: "Primești 25,000 monede pentru fiecare prieten invitat care se înregistrează.",
    color: "from-green-600 to-emerald-700",
    badge: "Social",
  },
  {
    emoji: "🏆",
    title: "Turnee Săptămânale",
    value: "1,000,000",
    unit: "Premiu Total",
    desc: "Participă la turneele noastre săptămânale și concurează pentru marele premiu.",
    color: "from-red-600 to-rose-700",
    badge: "Competiție",
  },
];

export default function BonusSection() {
  return (
    <section id="promotii" className="py-20 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
            Oferte Exclusive
          </span>
          <h2 className="text-4xl font-black mt-2 mb-4">
            Bonusuri &amp; <span className="gold-text">Promoții</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Recompensăm fiecare jucător! Beneficiezi de bonusuri zilnice, promoții
            speciale și turnee cu premii uriașe în monede virtuale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="card-bg rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <span className={`absolute top-3 right-3 bg-gradient-to-r ${bonus.color} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                {bonus.badge}
              </span>

              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bonus.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bonus.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {bonus.emoji}
              </div>

              <h3 className="font-bold text-white mb-1">{bonus.title}</h3>

              <div className={`text-2xl font-black bg-gradient-to-r ${bonus.color} bg-clip-text text-transparent`}>
                {bonus.value}
              </div>
              <div className="text-xs text-gray-400 mb-3">{bonus.unit}</div>

              <p className="text-gray-500 text-sm leading-relaxed">{bonus.desc}</p>

              <button className={`mt-4 w-full py-2 rounded-xl text-sm font-bold bg-gradient-to-r ${bonus.color} text-white hover:opacity-90 transition-opacity`}>
                Revendică Acum
              </button>
            </div>
          ))}
        </div>

        {/* VIP Banner */}
        <div className="mt-12 rounded-3xl p-8 relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-yellow-900/30 border border-yellow-500/20">
          <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-2">
                Program Exclusivist
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                Club VIP <span className="gold-text">Regal</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Alătură-te clubului nostru VIP și beneficiezi de bonusuri exclusive,
                asistență prioritară și invitații la evenimente speciale.
              </p>
              <ul className="space-y-2">
                {[
                  "Bonus lunar de 100,000 monede",
                  "Manager de cont dedicat",
                  "Turnee private VIP",
                  "Premii speciale personalizate",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-yellow-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👑</div>
              <button className="btn-gold px-8 py-3 rounded-xl font-bold">
                Aplică pentru VIP
              </button>
              <p className="text-gray-500 text-xs mt-2">
                Selecție bazată pe activitate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
