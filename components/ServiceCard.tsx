import type { Service } from "@/types/service";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-700">
      <h3 className="text-xl font-bold">
        {service.nombre}
      </h3>

      <p className="mt-3 text-slate-400">
        {service.descripcion}
      </p>
    </article>
  );
}