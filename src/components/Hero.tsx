import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const trustItems = [
  "Fără depuneri",
  "Fără retrageri",
  "Monedă virtuală",
  "Doar 18+",
  "Acces instant din browser",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Mobile fold: title + image + button fill the screen */}
        <div className={styles.fold}>
          <h1 className={styles.title}>
            Sloturi Sociale <span className={styles.accent}>Online</span>
          </h1>

          <Link href="/joc" className={styles.image} aria-label="Joacă slotul social acum">
            <Image
              src="/images/hero.webp"
              alt="Jocuri sociale online — monedă virtuală"
              width={560}
              height={520}
              priority
              className={styles.img}
            />
          </Link>

          <Link href="/joc" className={`btn btn-hero-cta ${styles.cta}`}>
            Joacă Acum
          </Link>
        </div>

        {/* Rest of the hero content */}
        <div className={styles.rest}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Platformă Sigură · 18+ · Fără Bani Reali
          </div>

          <p className={styles.desc}>
            Aceste jocuri sunt exclusiv pentru divertisment. Nu oferim posibilitatea
            de a câștiga bani reali sau premii cu valoare reală. Totul se joacă cu
            monedă virtuală fără valoare reală.
          </p>

          <p className={styles.note}>
            Acesta este un conținut de joc social. Dacă apar întrebări, consultă{" "}
            <Link href="/#responsabil" className={styles.noteLink}>
              pagina de joc responsabil
            </Link>
            .
          </p>
        </div>

        {/* Trust row */}
        <div className={styles.trust}>
          {trustItems.map(text => (
            <span key={text} className={styles.trustItem}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
