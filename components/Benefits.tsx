import { Sun, Thermometer, EyeOff, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const BENEFITS = [
  {
    icon: Sun,
    title: "Proteção UV",
    description: "Ajuda a reduzir a exposição aos raios ultravioleta.",
  },
  {
    icon: Thermometer,
    title: "Conforto térmico",
    description: "Reduz a entrada de calor no interior do veículo.",
  },
  {
    icon: EyeOff,
    title: "Privacidade",
    description: "Maior privacidade para motorista e passageiros.",
  },
  {
    icon: Sparkles,
    title: "Estética",
    description: "Visual mais moderno e sofisticado para o veículo.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-brand-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Por que instalar película"
          title="Mais do que estética, é proteção para o seu carro."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-sm border border-white/5 bg-brand-black-soft p-6 transition-colors hover:border-brand-red/40 sm:p-8"
            >
              <Icon
                size={30}
                strokeWidth={1.75}
                className="text-brand-red transition-colors group-hover:text-brand-red-bright"
              />
              <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-brand-white">
                {title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-brand-gray">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
