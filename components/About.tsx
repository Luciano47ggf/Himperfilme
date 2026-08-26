import { CalendarCheck, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";

/**
 * FOTO DO PROFISSIONAL (pendente):
 * Quando houver uma foto real do profissional/equipe trabalhando, coloque o
 * arquivo em /public/images/about.jpg, importe next/image e substitua o
 * bloco de placeholder abaixo.
 */
export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - siteConfig.establishedYear;

  return (
    <section id="sobre" className="bg-brand-black-soft px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Placeholder de foto */}
        <div className="order-2 aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] lg:order-1">
          <div className="flex h-full w-full items-center justify-center">
            <span className="px-6 text-center font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-gray/50">
              Foto real da equipe em breve
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Quem somos" title="Sobre a Himperfilme" />

          <p className="mt-6 font-sans text-base leading-relaxed text-brand-gray sm:text-lg">
            A Himperfilme aplica insulfilm automotivo e residencial em Cuiabá,
            com foco em acabamento cuidadoso e atendimento próximo do cliente,
            do primeiro contato até a entrega do veículo ou ambiente.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-start gap-3 rounded-sm border border-white/5 bg-brand-black p-4">
              <CalendarCheck size={22} className="mt-0.5 shrink-0 text-brand-red" />
              <div>
                <p className="font-display text-lg font-semibold text-brand-white">
                  Desde {siteConfig.establishedYear}
                </p>
                <p className="font-sans text-xs text-brand-gray">
                  {yearsActive} anos de atuação no mercado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-sm border border-white/5 bg-brand-black p-4">
              <BadgeCheck size={22} className="mt-0.5 shrink-0 text-brand-red" />
              <div>
                <p className="font-display text-lg font-semibold text-brand-white">
                  Instalador autorizado
                </p>
                <p className="font-sans text-xs text-brand-gray">
                  {siteConfig.authorizedInstallerOf}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
