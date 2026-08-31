"use client";

import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "himperfilme-theme";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    try {
      localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
    } catch {
      // localStorage indisponível (modo privado etc.) — tema não persiste, mas segue funcionando
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar entre modo claro e escuro"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-hairline text-brand-white transition-colors hover:border-brand-hairline-hover"
    >
      {/* A troca de ícone é feita via CSS, olhando a classe .light no <html> —
          evita mismatch de hidratação (servidor não sabe a preferência salva) */}
      <Sun size={16} className="hidden [html.light_&]:block" />
      <Moon size={16} className="block [html.light_&]:hidden" />
    </button>
  );
}
