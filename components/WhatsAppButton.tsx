import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-red py-3.5 pl-3.5 pr-3.5 text-white shadow-lg shadow-black/40 transition-all hover:bg-brand-red-bright hover:pr-5 sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={24} strokeWidth={2.25} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-wide transition-all duration-300 group-hover:max-w-[10rem]">
        Pedir orçamento
      </span>
    </a>
  );
}
