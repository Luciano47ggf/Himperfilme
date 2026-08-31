import Image from "next/image";
import { getWhatsAppLink } from "@/lib/utils";

/**
 * IMAGEM DE FUNDO:
 * Foto de banco de imagens com licença livre para uso comercial (Unsplash
 * License — uso comercial permitido, sem necessidade de crédito).
 * Arquivo: /public/images/hero-car.jpg (foto: Patrik Storm / Alstra Pictures).
 * Quando houver fotos reais de trabalhos da Himperfilme, pode trocar por elas.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-black pt-16 sm:pt-20"
    >
      {/* Fundo: foto + overlays escuros para leitura do texto */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Carro esportivo escuro com acabamento premium"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "68% 42%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(210,10,10,0.14) 0%, transparent 60%), linear-gradient(90deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.75) 32%, rgba(8,8,8,0.25) 60%, rgba(8,8,8,0.55) 100%)",
          }}
        />
        {/* Linhas diagonais discretas — remetem a reflexos de vidro/película */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 120px)",
          }}
        />
      </div>

      {/* Overlay escuro adicional para garantir leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="film-edge inline-block pt-4 font-display text-xs font-semibold uppercase tracking-[0.35em] text-brand-red-bright sm:text-sm">
            Insulfilm Automotivo e Residencial
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Proteção, conforto e{" "}
            <span className="text-brand-red">estilo</span> para o seu carro.
          </h1>

          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-gray-300 sm:text-lg">
            Películas automotivas com instalação profissional, acabamento
            impecável e mais conforto para você e seu veículo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brand-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-bright"
            >
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-sm border border-white/15 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/40"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>

      {/* Assinatura visual: corte diagonal na base da seção */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-black diagonal-cut-t sm:h-16" />
    </section>
  );
}
