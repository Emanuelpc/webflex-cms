import Image from "next/image";
import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      
      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map(
          (_, index) => (
            <span key={index}>⭐</span>
          )
        )}
      </div>

      <p className="leading-7 text-slate-300">
        "{testimonial.comentario}"
      </p>

      <div className="mt-6 flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.nombre}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">
            {testimonial.nombre}
          </h3>

          <p className="text-sm text-slate-500">
            {testimonial.cargo}
          </p>
        </div>
      </div>

    </article>
  );
}