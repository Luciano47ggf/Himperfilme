import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
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
        {/* Próximas seções (Fase 4): Antes/Depois, Galeria */}
      </main>
      <WhatsAppButton />
    </>
  );
}
