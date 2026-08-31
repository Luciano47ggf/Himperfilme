import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
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
        <Gallery />
        <About />
        <ContactCTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
