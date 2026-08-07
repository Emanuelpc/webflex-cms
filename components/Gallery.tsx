import Image from "next/image";
import { gallery } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Portafolio
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Algunos proyectos
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Una galería dinámica que posteriormente podremos
          administrar desde nuestro CMS.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {gallery.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}