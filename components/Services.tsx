import { Car, Flame, Star, Shield, Eraser, RefreshCw, Home } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { getWhatsAppLink } from "@/lib/utils";

const SERVICES = [
  {
    icon: Car,
    title: "Insulfilm automotivo",
    description: "Instalação profissional de películas automotivas.",
  },
  {
    icon: Flame,
    title: "Película térmica",
    description: "Películas focadas na redução de calor.",
  },
  {
    icon: Star,
    title: "Película premium",
    description: "Opções com melhor desempenho térmico e visual.",
  },
  {
    icon: Shield,
    title: "Película de segurança",
    description: "Películas que aumentam a resistência dos vidros.",
  },
  {
    icon: Eraser,
    title: "Remoção de película",
    description: "Retirada profissional de películas antigas.",
  },
  {
    icon: RefreshCw,
    title: "Substituição de película",
    description: "Remoção e instalação de nova película.",
  },
  {
    icon: Home,
    title: "Insulfilm residencial",
    description: "Aplicação de insulfilm em janelas e vidros residenciais.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-brand-black-soft px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Serviços"
          description="Soluções em película automotiva para cada necessidade do seu veículo."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col rounded-sm border border-brand-hairline bg-brand-black p-6 transition-colors hover:border-brand-red/40 sm:p-8"
            >
              <Icon
                size={28}
                strokeWidth={1.75}
                className="text-brand-red transition-colors group-hover:text-brand-red-bright"
              />
              <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-brand-white">
                {title}
              </h3>
              <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-brand-gray">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-brand-red px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-bright"
          >
            Fazer orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
