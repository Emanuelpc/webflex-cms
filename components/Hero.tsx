type HeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function Hero({
  badge,
  title,
  description,
}: HeroProps) {
  return (
    <section id="inicio" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
        {badge}
      </p>

      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
        {description}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
          Explorar proyecto
        </button>

        <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-900">
          Ver en GitHub
        </button>
      </div>
    </section>
  );
}