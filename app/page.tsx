import Navbar from "@/components/Navbar";
import Counter from "@/components/Counter";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import { services } from "@/data/services";
import Testimonials from "@/components/Testimonials";
import { testimonials } from "@/data/testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar/>

      <Hero
        badge="Proyecto educativo"
        title="WebFlex CMS"
        description="Una plataforma para crear y administrar sitios web personalizables desde un panel de administración."
      />

      <About
        title="Una plataforma pensada para ser flexible"
        description="WebFlex CMS es un proyecto educativo y personal enfocado en aprender cómo construir una plataforma web moderna, reutilizable y configurable."
        secondaryDescription="La idea es que diferentes tipos de negocios puedan utilizar una misma estructura y personalizar su contenido desde un panel de administración."
      />

      <Services services={services} />

      <Gallery />

      <Testimonials testimonials={testimonials} />
      <Contact/>
      

      {/*<Section title="Nuestro aprendizaje">
        <p className="text-slate-300">
          Estamos construyendo WebFlex CMS paso a paso
          mientras aprendemos desarrollo web moderno.
        </p>

        <div className="mt-6">
          <Counter />
        </div>
      </Section>*/}
    </main>
    <Footer/>
    </>
  );
}