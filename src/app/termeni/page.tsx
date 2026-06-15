import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description: "Termenii și condițiile de utilizare a platformei rogaleme.online — jocuri sociale fără bani reali.",
  alternates: { canonical: "https://rogaleme.online/termeni" },
  robots: { index: true, follow: true },
};

export default function TermeniPage() {
  return (
    <LegalLayout title="Termeni și Condiții" lastUpdated="15 iunie 2026">
      <Section title="1. Operatorul platformei">
        <p>
          Platforma <strong style={{ color: "var(--text)" }}>rogaleme.online</strong> este operată de{" "}
          <strong style={{ color: "var(--text)" }}>Dwellfort Group s.r.o.</strong>, cu sediul la
          Pitterova 2855/11, Žižkov, 130 00 Praha 3, Republica Cehă, IČO: 23206667.
        </p>
        <p>
          Prin accesarea și utilizarea platformei, acceptați în întregime prezentele Termeni și Condiții.
          Dacă nu sunteți de acord, vă rugăm să nu utilizați platforma.
        </p>
      </Section>

      <Section title="2. Natura platformei — exclusiv jocuri sociale">
        <p>
          rogaleme.online este o platformă de <strong style={{ color: "var(--text)" }}>jocuri sociale</strong>{" "}
          destinată exclusiv divertismentului. Platforma <strong style={{ color: "var(--text)" }}>nu oferă</strong>:
        </p>
        <ul>
          <li>jocuri de noroc cu bani reali;</li>
          <li>posibilitatea de a depune bani reali;</li>
          <li>posibilitatea de a câștiga sau retrage bani reali sau premii cu valoare reală;</li>
          <li>monedă virtuală cu valoare reală sau convertibilă.</li>
        </ul>
        <p>
          Toate jocurile folosesc exclusiv <strong style={{ color: "var(--text)" }}>monedă virtuală fără valoare reală</strong>,
          care nu poate fi cumpărată, transferată sau convertită în bani ori în alte bunuri sau servicii.
        </p>
        <p>
          Platforma funcționează în conformitate cu Legea nr. 190/2015 privind jocurile de noroc și nu
          necesită licență de jocuri de noroc, deoarece nu implică bani reali sau premii cu valoare monetară.
        </p>
      </Section>

      <Section title="3. Restricție de vârstă">
        <p>
          Platforma este destinată <strong style={{ color: "var(--text)" }}>exclusiv persoanelor cu vârsta de 18 ani și peste</strong>.
          Prin utilizarea platformei, confirmați că aveți cel puțin 18 ani. Dacă sunteți minor, vă rugăm să
          părăsiți imediat platforma.
        </p>
        <p>
          Implementăm un mecanism de confirmare a vârstei (age gate) la accesarea paginii de joc. Acest
          mecanism nu înlocuiește responsabilitatea utilizatorului de a respecta restricția de vârstă.
        </p>
      </Section>

      <Section title="4. Joc responsabil">
        <p>
          Chiar dacă platforma nu oferă jocuri cu bani reali, susținem principiile jocului responsabil.
          Dacă dvs. sau o persoană apropiată aveți îngrijorări legate de comportamentul de joc, contactați:
        </p>
        <ul>
          <li>
            <strong style={{ color: "var(--text)" }}>BeGambleAware</strong> —{" "}
            <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              www.begambleaware.org
            </a>
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>GamCare</strong> —{" "}
            <a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              www.gamcare.org.uk
            </a>
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Joc Responsabil (România)</strong> —{" "}
            <a href="https://www.jocresponsabil.ro/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              www.jocresponsabil.ro
            </a>
          </li>
        </ul>
      </Section>

      <Section title="5. Utilizare permisă">
        <p>Utilizatorii sunt de acord să:</p>
        <ul>
          <li>utilizeze platforma exclusiv pentru uz personal, necomercial;</li>
          <li>nu încerce să exploateze sau să manipuleze mecanismele de joc;</li>
          <li>nu utilizeze platforme automatizate (boți) pentru a interacționa cu platforma;</li>
          <li>respecte legislația aplicabilă din țara lor de reședință;</li>
          <li>nu acceseze platforma dacă jocurile sociale sunt interzise în jurisdicția lor.</li>
        </ul>
      </Section>

      <Section title="6. Proprietate intelectuală">
        <p>
          Conținutul platformei (texte, grafică, simboluri, cod sursă) este proprietatea Operatorului sau
          utilizat în baza unor licențe corespunzătoare. Este interzisă reproducerea, distribuirea sau
          modificarea fără acordul scris al Operatorului.
        </p>
        <p>
          Denumirile și imaginile jocurilor sunt <strong style={{ color: "var(--text)" }}>ilustrative și fictive</strong>,
          fără legătură cu niciun brand, logo sau produs existent de jocuri cu bani reali.
        </p>
      </Section>

      <Section title="7. Limitarea răspunderii">
        <p>
          Platforma este furnizată ca atare, fără garanții exprese sau implicite. Operatorul nu răspunde
          pentru daune directe sau indirecte rezultate din utilizarea sau imposibilitatea utilizării platformei.
        </p>
        <p>
          Datele de joc (soldul de monedă virtuală, istoricul rotirilor) pot fi resetate oricând fără
          notificare prealabilă, deoarece nu au valoare reală.
        </p>
      </Section>

      <Section title="8. Legea aplicabilă">
        <p>
          Prezentele Termeni și Condiții sunt guvernate de legislația Republicii Cehe. Orice litigii vor fi
          soluționate de instanțele competente din Praha, Republica Cehă, cu excepția cazurilor în care
          legislația consumatorului din țara de reședință a utilizatorului prevede altfel.
        </p>
      </Section>

      <Section title="9. Modificări">
        <p>
          Ne rezervăm dreptul de a modifica acești termeni oricând. Versiunea actualizată va fi publicată pe
          această pagină cu data ultimei modificări. Utilizarea continuă a platformei după publicarea
          modificărilor constituie acceptarea noilor termeni.
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <h2 style={{
        margin: "0 0 14px", fontSize: 18, fontWeight: 800,
        color: "var(--text)", letterSpacing: "-.01em",
      }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </section>
  );
}
