import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
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
        <BeforeAfter />
        <Gallery />
        <About />
        <Testimonials />
        <ContactCTA />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
