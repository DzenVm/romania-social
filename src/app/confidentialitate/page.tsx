import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description: "Politica de confidențialitate a platformei rogaleme.online — cum colectăm, folosim și protejăm datele dvs.",
  alternates: { canonical: "https://rogaleme.online/confidentialitate" },
};

export default function ConfidentialittatePage() {
  return (
    <LegalLayout title="Politica de Confidențialitate" lastUpdated="15 iunie 2026">
      <Section title="1. Operator de date">
        <p>
          Datele cu caracter personal prelucrate prin intermediul platformei <strong style={{ color: "var(--text)" }}>rogaleme.online</strong> sunt
          controlate de <strong style={{ color: "var(--text)" }}>Dwellfort Group s.r.o.</strong>, cu sediul la Pitterova 2855/11, Žižkov, 130 00
          Praha 3, Republica Cehă, IČO: 23206667 (denumit în continuare Operatorul sau noi).
        </p>
        <p>
          Puteți contacta Operatorul la adresa de e-mail indicată în Termenii și Condițiile platformei.
        </p>
      </Section>

      <Section title="2. Ce date colectăm">
        <p>Platforma noastră poate colecta sau prelucra următoarele categorii de date:</p>
        <ul>
          <li>
            <strong style={{ color: "var(--text)" }}>Date tehnice de navigare</strong> — adresa IP,
            tipul browserului, sistemul de operare, URL-ul paginilor vizitate, data și ora accesului.
            Aceste date sunt colectate automat prin jurnalele serverului.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Date de cookie-uri și stocare locală</strong> —
            stocăm în localStorage al browserului preferința de confirmare a vârstei (cheia age_verified).
            Aceasta nu identifică personal utilizatorul.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Parametri de marketing</strong> — dacă accesați
            platforma printr-un link cu parametri UTM sau identificatori de campanie publicitară (gclid,
            fbclid etc.), acești parametri pot fi transmiși între pagini pentru a analiza performanța
            campaniilor. Ei nu sunt stocați pe serverele noastre fără acordul dvs. explicit.
          </li>
        </ul>
        <p>
          <strong style={{ color: "var(--text)" }}>Nu colectăm</strong> nume, adrese de e-mail, numere de telefon,
          date financiare sau orice alte date cu caracter personal identificabil, cu excepția cazurilor în care
          ni le furnizați voluntar.
        </p>
      </Section>

      <Section title="3. Scopul și temeiul juridic al prelucrării">
        <p>Prelucrăm datele tehnice în baza interesului nostru legitim (art. 6 alin. 1 lit. f GDPR) pentru:</p>
        <ul>
          <li>asigurarea funcționării tehnice și a securității platformei;</li>
          <li>analiza traficului și îmbunătățirea experienței de utilizare;</li>
          <li>măsurarea eficienței campaniilor de marketing.</li>
        </ul>
      </Section>

      <Section title="4. Cookie-uri și stocare locală">
        <p>
          Folosim <strong style={{ color: "var(--text)" }}>localStorage</strong> pentru a reține confirmarea
          dvs. că aveți 18 ani sau mai mult. Această informație nu este transmisă serverelor noastre și nu
          identifică personal utilizatorul.
        </p>
        <p>
          Dacă utilizăm cookie-uri de analiză sau publicitate (ex. Google Analytics, Google Ads), vom solicita
          consimțământul dvs. în mod explicit prin intermediul unui banner de consimțământ.
        </p>
      </Section>

      <Section title="5. Terți și transferuri de date">
        <p>Putem partaja date tehnice anonimizate sau agregate cu:</p>
        <ul>
          <li>furnizori de infrastructură cloud (hosting, CDN);</li>
          <li>platforme de analiză web (ex. Google Analytics, dacă este activat);</li>
          <li>rețele publicitare (ex. Google Ads, dacă utilizați platforma prin un link de publicitate).</li>
        </ul>
        <p>
          Nu vindem datele dvs. cu caracter personal unor terțe părți. Transferurile în afara UE/SEE se
          realizează cu garanțiile adecvate (Clauze Contractuale Standard sau decizii de adecvare ale
          Comisiei Europene).
        </p>
      </Section>

      <Section title="6. Drepturile dvs.">
        <p>În conformitate cu GDPR, aveți dreptul de:</p>
        <ul>
          <li>acces la datele prelucrate;</li>
          <li>rectificare a datelor incorecte;</li>
          <li>ștergere (dreptul de a fi uitat);</li>
          <li>restricționare a prelucrării;</li>
          <li>portabilitate a datelor;</li>
          <li>opoziție la prelucrarea bazată pe interes legitim;</li>
          <li>retragerea consimțământului, dacă prelucrarea se bazează pe acesta.</li>
        </ul>
        <p>
          Puteți exercita aceste drepturi contactând Operatorul. De asemenea, aveți dreptul de a depune o
          plângere la autoritatea de supraveghere a protecției datelor din țara dvs. (în România: ANSPDCP,
          <strong style={{ color: "var(--text)" }}> www.dataprotection.ro</strong>).
        </p>
      </Section>

      <Section title="7. Securitate">
        <p>
          Aplicăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor dvs. împotriva
          accesului neautorizat, pierderii sau distrugerii, inclusiv transmisia prin HTTPS și restricții
          de acces la infrastructura serverului.
        </p>
      </Section>

      <Section title="8. Durata retenției">
        <p>
          Datele tehnice din jurnalele serverului sunt păstrate maxim 90 de zile, după care sunt șterse
          automat. Datele stocate local în browserul dvs. (localStorage) rămân până la ștergerea manuală
          a datelor browserului.
        </p>
      </Section>

      <Section title="9. Modificări ale politicii">
        <p>
          Ne rezervăm dreptul de a actualiza această politică. Versiunea actualizată va fi publicată pe această
          pagină cu data ultimei modificări. Continuarea utilizării platformei după publicarea modificărilor
          constituie acceptarea noii versiuni.
        </p>
      </Section>

      <Section title="10. Disclaimer jocuri sociale">
        <p>
          Platforma <strong style={{ color: "var(--text)" }}>rogaleme.online</strong> oferă exclusiv jocuri sociale
          pentru divertisment. Nu există jocuri de noroc cu bani reali, depuneri, retrageri sau câștiguri financiare.
          Moneda virtuală nu are valoare reală. Platforma este destinată persoanelor cu vârsta de 18 ani și peste.
          Denumirile și imaginile jocurilor sunt ilustrative și fictive, fără legătură cu niciun brand, logo sau
          produs de jocuri cu bani reali.
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
