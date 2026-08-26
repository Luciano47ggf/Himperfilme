"use client";

import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

/**
 * IMAGENS (pendente):
 * Assim que houver fotos reais de "antes" e "depois", coloque os arquivos em
 * /public/images/before.jpg e /public/images/after.jpg, e substitua os dois
 * blocos de placeholder abaixo por <Image src="..." fill className="object-cover" />.
 * Até lá, os placeholders deixam claro que não são fotos reais de trabalhos.
 */

type ComparisonItem = {
  id: string;
  label: string;
};

const ITEMS: ComparisonItem[] = [
  { id: "1", label: "Exemplo 1" },
  { id: "2", label: "Exemplo 2" },
];

function ComparisonSlider({ label }: { label: string }) {
  const [value, setValue] = useState(50);

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-sm border border-white/10 bg-brand-black-soft sm:aspect-video">
        {/* DEPOIS (fundo, sempre visível) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c]">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-gray/50">
            Foto real em breve — Depois
          </span>
        </div>

        {/* ANTES (recortado pelo clip-path conforme o slider) */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-gray/50">
            Foto real em breve — Antes
          </span>
        </div>

        {/* Linha central + alça */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 flex w-0.5 items-center justify-center bg-brand-red"
          style={{ left: `${value}%`, transform: "translateX(-50%)" }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-brand-white shadow-lg">
            <MoveHorizontal size={18} />
          </div>
        </div>

        {/* Labels fixas */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-black/60 px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-brand-white">
          Antes
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-sm bg-black/60 px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-brand-white">
          Depois
        </span>

        {/* Input range invisível controlando o slider — funciona bem em touch */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`Comparar antes e depois — ${label}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-brand-black-soft px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-brand-red-bright sm:text-sm">
            Resultado real
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-brand-white sm:text-4xl lg:text-5xl">
            Antes e depois
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-brand-gray sm:text-lg">
            Arraste para comparar. As fotos abaixo são placeholders e serão
            substituídas por trabalhos reais assim que estiverem disponíveis.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ITEMS.map((item) => (
            <ComparisonSlider key={item.id} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
