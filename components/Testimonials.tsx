import TestimonialCard from "@/components/TestimonialCard";
import type { Testimonial } from "@/types/testimonial";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({
  testimonials,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6 py-20">

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Testimonios
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Opiniones de personas que han utilizado
            nuestros servicios.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}