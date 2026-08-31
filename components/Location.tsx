import { MapPin, Clock, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/site";

export default function Location() {
  return (
    <section className="bg-brand-black-soft px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Onde estamos" title="Localização" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-sm border border-brand-hairline bg-brand-black p-6">
            <MapPin size={22} className="mt-0.5 shrink-0 text-brand-red" />
            <div>
              <p className="font-display text-base font-semibold uppercase tracking-wide text-brand-white">
                Endereço
              </p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-brand-gray">
                {siteConfig.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-sm border border-brand-hairline bg-brand-black p-6">
            <Clock size={22} className="mt-0.5 shrink-0 text-brand-red" />
            <div>
              <p className="font-display text-base font-semibold uppercase tracking-wide text-brand-white">
                Horário de atendimento
              </p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-brand-gray">
                {siteConfig.workingHours}
              </p>
            </div>
          </div>
        </div>

        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-red px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-bright"
        >
          <Navigation size={18} />
          Ver no Google Maps
        </a>

        <div className="mt-8 overflow-hidden rounded-sm border border-brand-hairline">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              siteConfig.address
            )}&output=embed`}
            width="100%"
            height="380"
            style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de localização — ${siteConfig.name}`}
            className="block"
          />
        </div>
      </div>
    </section>
  );
}
