import React from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo agendar un turno online?",
      answer: "Puedes agendar tu turno las 24 horas del día a través de nuestro portal online. Solo necesitas registrarte con tus datos personales y obra social, seleccionar la especialidad, fecha y horario disponible."
    },
    {
      question: "¿Qué documentación necesito para mi primera consulta?",
      answer: "Para tu primera consulta necesitas: DNI o documento de identidad, carnet de obra social o prepaga vigente, órdenes médicas si las tienes, y estudios previos relacionados con tu consulta."
    },
    {
      question: "¿Puedo acceder a mis estudios médicos online?",
      answer: "Sí, todos nuestros pacientes pueden acceder a sus estudios médicos de forma segura a través del Portal del Paciente. Los resultados están disponibles 24-48 horas después de realizados."
    },
    {
      question: "¿Trabajan con mi obra social?",
      answer: "Trabajamos con la mayoría de obras sociales y prepagas. Te recomendamos verificar la cobertura antes de tu consulta contactando a nuestro centro de atención al paciente."
    },
    {
      question: "¿Qué especialidades médicas están disponibles?",
      answer: "Contamos con más de 15 especialidades médicas incluyendo: Cardiología, Neurología, Oncología, Pediatría, Ginecología, Traumatología, Gastroenterología, y muchas más."
    },
    {
      question: "¿Tienen servicio de emergencias?",
      answer: "Sí, nuestro servicio de emergencias funciona las 24 horas del día, los 365 días del año. Contamos con un equipo especializado y tecnología de última generación para atención de urgencias."
    },
    {
      question: "¿Cómo puedo cancelar o reprogramar mi turno?",
      answer: "Puedes cancelar o reprogramar tu turno hasta 2 horas antes de la cita a través del portal online, por teléfono al +54 351 468-8400, o en nuestras oficinas de atención al paciente."
    },
    {
      question: "¿Qué significa la acreditación JCI?",
      answer: "La acreditación JCI (Joint Commission International) es el estándar de oro mundial en calidad y seguridad hospitalaria. Garantiza que cumplimos con los más altos estándares internacionales en atención médica."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary-500" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Preguntas <span className="text-primary-500">Frecuentes</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las consultas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-primary-500 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h3>
          <p className="text-lg mb-6">Nuestro equipo de atención al paciente está aquí para ayudarte</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Contactar por WhatsApp
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-6 py-3 rounded-lg font-semibold transition-colors">
              Llamar: +54 351 468-8400
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;