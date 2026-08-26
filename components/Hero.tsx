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
      {/* Fundo: gradiente + textura (substituir por foto real quando disponível) */}
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
        {/* Linhas diagonais discretas — remetem a reflexos de vidro/película */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 120px)",
          }}
        />

        {/* Silhueta de carro — elemento decorativo discreto, não é foto real */}
        <div
          className="absolute inset-y-0 right-0 hidden w-full opacity-[0.09] sm:block sm:w-[75%] lg:w-[62%]"
          style={{
            maskImage:
              "radial-gradient(ellipse 75% 85% at 78% 62%, black 35%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 85% at 78% 62%, black 35%, transparent 82%)",
          }}
        >
          {/* Glow no chão, atrás do carro */}
          <div
            className="absolute bottom-[18%] right-[5%] h-24 w-[55%] rounded-full opacity-70"
            style={{
              background: "var(--color-red)",
              filter: "blur(60px)",
            }}
          />
          <svg
            viewBox="0 0 900 320"
            className="absolute bottom-[16%] right-[-8%] w-[130%] max-w-none sm:w-[105%]"
            aria-hidden="true"
          >
            <path
              fill="var(--color-red)"
              d="M 48 228 C 48 216 60 208 78 207 L 100 206 C 106 194 116 185 130 180 C 152 172 178 159 202 145 C 227 128 252 108 282 98 C 322 88 366 84 411 84 C 446 84 476 88 501 96 C 516 101 523 108 523 118 L 523 130 C 546 138 576 148 611 155 C 671 168 731 178 779 190 C 803 196 820 203 828 212 C 833 218 830 226 819 230 C 802 236 780 234 764 226 C 762 208 745 195 725 195 C 703 195 686 213 686 235 L 276 235 C 276 210 256 190 230 190 C 204 190 184 210 182 235 L 90 233 C 68 233 50 231 48 228 Z"
            />
            <path
              fill="var(--color-black)"
              d="M 210 143 C 234 127 258 110 285 101 C 322 91 364 87 408 87 C 441 87 469 91 492 98 C 503 102 508 107 507 113 L 500 122 C 470 116 438 114 408 114 C 372 114 337 118 305 128 C 280 136 252 145 226 154 C 219 150 213 147 210 143 Z"
            />
            <circle cx="228" cy="235" r="40" fill="var(--color-black-soft)" stroke="var(--color-red)" strokeWidth="4" />
            <circle cx="228" cy="235" r="15" fill="var(--color-red)" />
            <circle cx="722" cy="235" r="40" fill="var(--color-black-soft)" stroke="var(--color-red)" strokeWidth="4" />
            <circle cx="722" cy="235" r="15" fill="var(--color-red)" />
          </svg>
        </div>
      </div>

      {/* Overlay escuro para garantir leitura do texto (quando houver foto) */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="film-edge inline-block pt-4 font-display text-xs font-semibold uppercase tracking-[0.35em] text-brand-red-bright sm:text-sm">
            Insulfilm Automotivo e Residencial
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
              className="inline-flex items-center justify-center rounded-sm border border-white/15 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-brand-white transition-colors hover:border-white/40"
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
