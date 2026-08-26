import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Differentials />
        <BeforeAfter />
        <Gallery />
        {/* Próximas seções (Fase 5): Sobre, Depoimentos, CTA final, Localização, Footer */}
      </main>
      <WhatsAppButton />
    </>
  );
}
