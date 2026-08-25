import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Próximas seções (Fase 3): Benefícios, Serviços, Diferenciais */}
      </main>
      <WhatsAppButton />
    </>
  );
}
