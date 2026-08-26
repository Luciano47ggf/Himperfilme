import SectionHeading from "./SectionHeading";

// Observação: "garantia" foi propositalmente omitida daqui, pois o brief
// pede para não apresentar garantias que não tenham sido confirmadas pelo
// proprietário. Adicionar quando essa informação for validada.
const DIFFERENTIALS = [
  {
    number: "01",
    title: "Instalação profissional",
    description: "Processo cuidadoso do início ao fim, sem atalhos.",
  },
  {
    number: "02",
    title: "Acabamento de qualidade",
    description: "Atenção aos detalhes para um resultado impecável.",
  },
  {
    number: "03",
    title: "Materiais selecionados",
    description: "Películas escolhidas pensando em desempenho e durabilidade.",
  },
  {
    number: "04",
    title: "Atendimento personalizado",
    description: "Cada veículo recebe uma avaliação individual.",
  },
  {
    number: "05",
    title: "Cuidado com o veículo",
    description: "Seu carro é tratado com o mesmo cuidado que o nosso.",
  },
  {
    number: "06",
    title: "Orçamento rápido",
    description: "Resposta ágil pelo WhatsApp, sem enrolação.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-brand-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Nossos diferenciais"
          title="Motivos para escolher a Himperfilme."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {DIFFERENTIALS.map(({ number, title, description }) => (
            <div key={number} className="flex gap-5">
              <span className="font-display text-3xl font-semibold text-brand-red/50 sm:text-4xl">
                {number}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brand-white">
                  {title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-brand-gray">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
