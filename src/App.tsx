import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import GuideSection from "./components/GuideSection";
import InternationalSection from "./components/InternationalSection";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Header />

      <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-blue-700 dark:text-blue-400">
        Lo más buscado
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        <ServiceCard
          icon="fa-hospital-user"
          title="Información útil"
          text="Todo lo que necesitás saber antes, durante y después de tu visita."
          link="#"
          linkText="Acceder"
        />
        <ServiceCard
          icon="fa-user-md"
          title="Profesionales"
          text="Buscá y contactá al especialista ideal para tu caso."
          link="#"
          linkText="Ver médicos"
        />
        <ServiceCard
          icon="fa-book-medical"
          title="Publicaciones"
          text="Investigaciones, casos clínicos y avances médicos."
          link="#"
          linkText="Leer"
        />
      </div>

      <GuideSection />
      <InternationalSection />
      <WhyUs />
      <Footer />
    </div>
  );
}
