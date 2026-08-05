import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { services } from "@/data/services";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar
        nombre="WebFlex CMS"
        contacto="Contáctanos"
      />

      <Hero
        badge="Proyecto educativo"
        title="WebFlex CMS"
        description="Una plataforma para crear y administrar sitios web personalizables desde un panel de administración."
      />

      <Services services={services} />

      <Section title="Nuestro aprendizaje">
        <p className="text-slate-300">
          Estamos construyendo WebFlex CMS paso a paso
          mientras aprendemos desarrollo web moderno.
        </p>

        <div className="mt-6">
          <Counter />
        </div>
      </Section>
    </main>
  );
}