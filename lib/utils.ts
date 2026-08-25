import { siteConfig } from "@/data/site";

/**
 * Monta o link do WhatsApp com número e mensagem pré-preenchida.
 * Se nenhuma mensagem for passada, usa a mensagem padrão do site.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage ?? siteConfig.whatsappMessage
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
}

/**
 * Combina classes condicionalmente (uso simples, sem dependência externa).
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
