import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

/**
 * Nenhum depoimento fictício é exibido aqui — apenas um aviso de que os
 * depoimentos reais serão adicionados em breve, conforme orientação do
 * cliente. Quando houver avaliações reais (ex: do Google), substituir o
 * bloco de placeholder por cards com nome, estrelas e comentário reais.
 */
export default function Testimonials() {
  return (
    <section className="bg-brand-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="O que dizem"
          title="Depoimentos"
          align="center"
        />

        <div className="mx-auto mt-14 flex max-w-lg flex-col items-center gap-4 rounded-sm border border-white/5 bg-brand-black-soft px-8 py-14 text-center">
          <div className="flex gap-1 text-brand-gray/30">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="font-sans text-base text-brand-gray">
            Depoimentos reais de clientes serão adicionados aqui em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
