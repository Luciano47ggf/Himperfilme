import Image from "next/image";
import { AtSign, MessageCircle, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-brand-black px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={143}
            height={41}
            className="h-8 w-auto"
          />
          <p className="max-w-xs font-sans text-sm text-brand-gray">
            Insulfilm automotivo e residencial em Cuiabá.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-gray">
            Contato
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-sm text-brand-gray transition-colors hover:text-brand-white"
          >
            <MessageCircle size={16} />
            {siteConfig.whatsappDisplay}
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-sm text-brand-gray transition-colors hover:text-brand-white"
          >
            <AtSign size={16} />
            {siteConfig.instagramHandle}
          </a>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-sm text-brand-gray transition-colors hover:text-brand-white"
          >
            <MapPin size={16} />
            {siteConfig.city}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center">
        <p className="font-sans text-xs text-brand-gray/70">
          © {currentYear} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
