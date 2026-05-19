const infoCards = [
  {
    title: "Cum funcționează platforma",
    desc: "Platforma este destinată exclusiv divertismentului pentru utilizatori 18+. Jocurile folosesc doar monedă virtuală, fără valoare reală, astfel încât experiența rămâne socială și fără risc financiar.",
    items: [
      "Accesezi jocul instant, direct din browser.",
      "Primești și folosești doar monedă virtuală.",
      "Nu există depuneri, retrageri sau conversii în bani reali.",
    ],
  },
  {
    title: "De ce aleg utilizatorii această platformă",
    desc: "Interfața este optimizată pentru mobil, tabletă și desktop, iar sesiunile de joc sunt concepute pentru acces rapid, navigare clară și informații transparente despre reguli și joc responsabil.",
    items: [
      "Design clar și ușor de folosit.",
      "Conținut transparent despre limitări și 18+.",
      "Linkuri directe către resurse de suport responsabil.",
    ],
  },
  {
    title: "Siguranță și transparență",
    desc: "Ne concentrăm pe comunicare clară: ce oferă platforma, ce nu oferă platforma și unde găsești informațiile legale necesare pentru utilizare responsabilă.",
    items: [
      "Politici și termeni disponibili în footer.",
      'Mesaje vizibile privind 18+ și "fără bani reali".',
      "Resurse externe recomandate pentru joc responsabil.",
    ],
  },
];

const faqs = [
  {
    q: "Pot câștiga bani reali pe această platformă?",
    a: "Nu, în niciun caz. Platforma funcționează exclusiv ca un joc social — toate jocurile folosesc monedă virtuală fără nicio valoare financiară reală. Nu există mecanisme de câștig monetar, nu se acordă premii în bani și nu există nicio posibilitate de a transforma moneda virtuală în bani reali.",
  },
  {
    q: "Se pot face depuneri sau retrageri de bani?",
    a: "Nu. Platforma nu acceptă și nu procesează niciun fel de plăți sau transferuri financiare. Moneda virtuală este oferită gratuit pentru demonstrație și nu poate fi convertită, transferată sau retrasă sub nicio formă.",
  },
  {
    q: "Ce este moneda virtuală și cum funcționează?",
    a: "Moneda virtuală este un element de joc folosit exclusiv în cadrul platformei noastre. Funcționează ca un scor intern — poți paria cu ea, o poți câștiga sau pierde în joc, dar nu are nicio valoare în afara platformei.",
  },
  {
    q: "Platforma este permisă pentru minori?",
    a: "Nu. Accesul este strict rezervat persoanelor care au împlinit vârsta de 18 ani. Rugăm părinții și tutorii să monitorizeze activitatea online a minorilor.",
  },
  {
    q: "Este necesară o înregistrare sau un cont?",
    a: "Nu este obligatorie crearea unui cont pentru a accesa jocurile demonstrative. Poți juca direct din browser, fără a furniza date personale sau financiare.",
  },
  {
    q: "Platforma are nevoie de licență din partea autorității?",
    a: "Nu. Conform legislației românești (Legea nr. 190/2015), platformele care nu oferă posibilitatea de a paria sau câștiga bani reali nu intră sub incidența reglementărilor privind jocurile de noroc.",
  },
  {
    q: "Jocurile reflectă probabilitățile reale ale sloturilor?",
    a: "Nu. Jocurile de pe această platformă sunt versiuni sociale simplificate, create exclusiv pentru demonstrație și divertisment. Rezultatele sunt generate aleatoriu în scop recreativ.",
  },
  {
    q: "Unde găsesc informații despre joc responsabil?",
    a: 'In sectiunea "Resurse pentru Jocuri Responsabile" de pe aceasta pagina gasesti linkuri catre organizatii specializate pentru sprijin. Daca tu sau cineva apropiat prezinta semne de dependenta, te incurajam sa contactezi una dintre aceste organizatii.',
  },
];

export default function InfoSection() {
  return (
    <section id="cum-functioneaza" style={{ padding: "0 0 80px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 20 }} className="info-grid">
          {infoCards.map(card => (
            <article key={card.title} style={{
              background: "rgba(15,26,46,.58)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: 20,
            }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 20, letterSpacing: "-.02em" }}>{card.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.65 }}>{card.desc}</p>
              <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>
                {card.items.map(item => <li key={item} style={{ margin: "6px 0" }}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <article style={{
          background: "rgba(15,26,46,.58)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "28px 28px 12px",
        }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 22, letterSpacing: "-.02em" }}>Întrebări frecvente (FAQ)</h3>
          <p style={{ margin: "0 0 20px", color: "var(--muted)", fontSize: 14 }}>
            Tot ce trebuie să știi despre această platformă de jocuri sociale.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }} className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} style={{
                padding: "16px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(233,238,252,.09)",
              }}>
                <strong style={{ display: "block", marginBottom: 8, fontSize: 15, color: "var(--text)" }}>{faq.q}</strong>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .info-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 760px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
