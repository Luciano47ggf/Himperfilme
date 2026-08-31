import { CalendarCheck, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";

export default function About() {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - siteConfig.establishedYear;

  return (
    <section id="sobre" className="bg-brand-black-soft px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Quem somos"
          title="Sobre a Himperfilme"
          align="center"
        />

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-brand-gray sm:text-lg">
          A Himperfilme aplica insulfilm automotivo e residencial em Cuiabá,
          com foco em acabamento cuidadoso e atendimento próximo do cliente,
          do primeiro contato até a entrega do veículo ou ambiente.
        </p>

        <div className="mx-auto mt-10 flex max-w-lg flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-start gap-3 rounded-sm border border-brand-hairline bg-brand-black p-4 text-left">
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

          <div className="flex flex-1 items-start gap-3 rounded-sm border border-brand-hairline bg-brand-black p-4 text-left">
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
    </section>
  );
}
