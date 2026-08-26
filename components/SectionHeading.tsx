type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-brand-red-bright sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-brand-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-sans text-base leading-relaxed text-brand-gray sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
