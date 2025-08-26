import React from 'react';
import { FileText, Users, BookOpen, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary-500" />,
      title: "Información útil para el paciente",
      description: "Accede a toda la información necesaria para tu estadía y tratamiento.",
      buttonText: "Ver más",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: "Profesionales de la salud",
      description: "Conoce a nuestros médicos especialistas y agenda tu consulta.",
      buttonText: "Ver profesionales",
      bgColor: "bg-green-50"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: "Publicaciones & casos",
      description: "Artículos médicos, investigaciones y casos clínicos destacados.",
      buttonText: "Leer artículos",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-500 mb-12">
          Lo más buscado
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 mx-auto transition-colors">
                <span>{service.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Patient and Family Guide Section */}
        <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
              <img 
                src="https://hospitalprivado.com.ar/frontend/images/home-GP-01.png" 
                alt="Guía del Paciente y la Familia" 
                className="w-full max-w-xs mx-auto rounded-xl shadow-md"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="text-primary-500 font-semibold mb-2">PACIENTES</p>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Guía del <strong>Paciente y la familia</strong>
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Conocé toda la información necesaria para garantizar tu bienestar durante la estadía en nuestro Hospital.
              </p>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto lg:mx-0 transition-colors">
                <span>Descargar guía</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* International Patients Section */}
        <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg text-center mt-8">
          <p className="text-primary-500 font-semibold mb-2">PACIENTES INTERNACIONALES</p>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Vengas de donde vengas, <strong>te sientes como en casa</strong>
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-4xl mx-auto leading-relaxed">
            Desde el corazón de Argentina, estamos presentes en todos los países de la región gracias a 
            acuerdos firmados con las principales aseguradoras internacionales de salud.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 mx-auto transition-colors">
            <span>Más información</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;