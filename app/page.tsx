export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-brand-red">
        Setup — Fase 1
      </p>
      <h1 className="font-display text-4xl font-semibold uppercase tracking-tight text-brand-white sm:text-6xl">
        Himperfilme
      </h1>
      <p className="max-w-md font-sans text-brand-gray">
        Base do projeto configurada: Next.js, TypeScript, Tailwind, cores e
        tipografia da marca. Seções reais entram na Fase 2.
      </p>
    </main>
  );
}
