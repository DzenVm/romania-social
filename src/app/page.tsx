import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import InfoSection from "@/components/InfoSection";
import ResponsibleSection from "@/components/ResponsibleSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GamesSection />
        <InfoSection />
        <ResponsibleSection />
      </main>
      <Footer />
    </>
  );
}
