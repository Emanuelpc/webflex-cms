type AboutProps = {
  title: string;
  description: string;
  secondaryDescription: string;
};

export default function About({
  title,
  description,
  secondaryDescription,
}: AboutProps) {
  return (
    <section id="about" className="border-y border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Sobre el proyecto
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              {title}
            </h2>
          </div>

          <div>
            <p className="leading-7 text-slate-300">
              {description}
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              {secondaryDescription}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}