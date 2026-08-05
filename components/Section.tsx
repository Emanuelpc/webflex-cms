type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  children,
}: SectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">
        {title}
      </h2>

      {children}
    </section>
  );
}