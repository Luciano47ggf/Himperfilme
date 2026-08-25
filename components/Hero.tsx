"use client";

import { getWhatsAppLink } from "@/lib/utils";

/**
 * IMAGEM DE FUNDO (pendente):
 * Quando houver uma foto real de alta qualidade do veículo com película,
 * coloque o arquivo em /public/images/hero-car.jpg, adicione
 * `import Image from "next/image";` no topo deste arquivo e descomente o
 * bloco <Image> abaixo. Até lá, o fundo usa um gradiente escuro com textura
 * sutil para manter a estética premium sem simular um trabalho que não existe.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-black pt-16 sm:pt-20"
    >
      {/* Fundo: gradiente + textura */}
      <div className="absolute inset-0">
        {/*
        <Image
          src="/images/hero-car.jpg"
          alt="Veículo com instalação de película automotiva"
          fill
          priority
          className="object-cover"
        />
        */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(210,10,10,0.16) 0%, transparent 60%), linear-gradient(180deg, #0c0c0c 0%, #080808 55%, #050505 100%)",
          }}
        />

        {/* Linhas diagonais discretas */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 120px)",
          }}
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="film-edge inline-block pt-4 font-display text-xs font-semibold uppercase tracking-[0.35em] text-brand-red-bright sm:text-sm">
            Especialista em Películas Automotivas
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-brand-white sm:text-6xl lg:text-7xl">
            Proteção, conforto e{" "}
            <span className="text-brand-red">estilo</span> para o seu carro.
          </h1>

          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-brand-gray sm:text-lg">
            Películas automotivas com instalação profissional, acabamento
            impecável e mais conforto para você e seu veículo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-brand-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-brand-white transition-colors hover:bg-brand-red-bright"
            >
              Solicitar orçamento
            </a>

            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();

                document.querySelector("#servicos")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="inline-flex items-center justify-center rounded-sm border border-white/15 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-brand-white transition-colors hover:border-white/40"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>

      {/* Assinatura visual */}
      <div className="diagonal-cut-t absolute inset-x-0 bottom-0 h-10 bg-brand-black sm:h-16" />
    </section>
  );
}
