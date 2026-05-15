type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-4xl">
      <h2 className="text-4xl font-semibold tracking-[-0.05em] text-ink dark:text-slate-100 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}