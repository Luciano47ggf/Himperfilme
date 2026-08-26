"use client";

import { useEffect, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, AtSign } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";

/**
 * IMAGENS (pendente):
 * Substitua os placeholders abaixo por fotos reais das instalações assim que
 * estiverem disponíveis (ex: /public/images/gallery/trabalho-01.jpg) e troque
 * os blocos com o ícone de câmera por <Image src="..." fill className="object-cover" />.
 */
const GALLERY_ITEMS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Trabalho ${String(i + 1).padStart(2, "0")}`,
}));

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const showPrev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  const showNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length));

  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex]);

  return (
    <section id="trabalhos" className="bg-brand-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Nosso trabalho"
          title="Galeria"
          description="Fotos reais das instalações serão adicionadas aqui em breve."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-sm border border-white/5 bg-brand-black-soft transition-colors hover:border-brand-red/40"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] transition-transform duration-300 group-hover:scale-105">
                <Camera
                  size={28}
                  strokeWidth={1.5}
                  className="text-brand-gray/40"
                />
                <span className="font-sans text-xs font-medium uppercase tracking-wide text-brand-gray/50">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-sm border border-brand-red/40 bg-brand-red/10 px-6 py-4 transition-colors hover:border-brand-red hover:bg-brand-red/20"
          >
            <AtSign size={22} className="text-brand-red-bright" />
            <span className="font-sans text-sm text-brand-white">
              Veja mais trabalhos no Instagram{" "}
              <span className="font-semibold text-brand-red-bright group-hover:underline">
                {siteConfig.instagramHandle}
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex aspect-square w-full max-w-xl flex-col items-center justify-center gap-3 rounded-sm border border-white/10 bg-brand-black-soft"
          >
            <Camera size={44} strokeWidth={1.5} className="text-brand-gray/40" />
            <span className="font-sans text-sm font-medium uppercase tracking-wide text-brand-gray/50">
              {GALLERY_ITEMS[openIndex].label} — foto real em breve
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Próxima foto"
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
