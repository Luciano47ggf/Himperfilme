import { getWhatsAppLink } from "@/lib/utils";

export default function ContactCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-brand-black px-5 py-20 sm:px-8 sm:py-28"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(210,10,10,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-brand-white sm:text-4xl lg:text-5xl">
          Quer mais conforto e estilo no seu carro?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-brand-gray sm:text-lg">
          Solicite agora seu orçamento e descubra a melhor película para o
          seu veículo ou ambiente.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center rounded-sm bg-brand-red px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-bright"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
