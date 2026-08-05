import type { Service } from "@/types/service";
import ServiceCard from "@/components/ServiceCard";

type ServicesProps = {
  services: Service[];
};

export default function Services({
  services,
}: ServicesProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-3xl font-bold">
        Servicios
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
        <ServiceCard
            key={service.id}
            service={service}
        />
        ))}
      </div>
    </section>
  );
}