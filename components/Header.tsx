"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getWhatsAppLink } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-brand-black/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#inicio");
          }}
          className="font-display text-xl font-semibold uppercase tracking-wide text-brand-white sm:text-2xl"
        >
          {siteConfig.name}
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-sans text-sm font-medium uppercase tracking-wide text-brand-gray transition-colors hover:text-brand-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-brand-red px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-brand-white transition-colors hover:bg-brand-red-bright"
          >
            Orçamento
          </a>
        </nav>

        {/* Botão hambúrguer mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-brand-white md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-white/5 bg-brand-black px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="rounded-sm px-2 py-3 font-sans text-base font-medium uppercase tracking-wide text-brand-gray transition-colors hover:bg-white/5 hover:text-brand-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-sm bg-brand-red px-5 py-3 text-center font-sans text-sm font-semibold uppercase tracking-wide text-brand-white transition-colors hover:bg-brand-red-bright"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
