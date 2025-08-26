import React from 'react';
import { Calendar, User, MapPin, CheckCircle, Clock, Phone } from 'lucide-react';

const Turnos = () => {
  const steps = [
    {
      number: 1,
      icon: <User className="w-6 h-6" />,
      title: "Registrate",
      description: "Crea tu cuenta con tus datos personales y obra social"
    },
    {
      number: 2,
      icon: <Calendar className="w-6 h-6" />,
      title: "Elige fecha y hora",
      description: "Selecciona el día y horario que mejor se adapte a tu agenda"
    },
    {
      number: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: "Confirma tu turno",
      description: "Revisa los datos y confirma tu cita médica"
    },
    {
      number: 4,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "¡Listo!",
      description: "Recibirás una confirmación por email y SMS"
    }
  ];

  return (
    <section id="turnos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Agendá tu <span className="text-primary-500">turno online</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reserva tu cita médica de forma rápida y sencilla, las 24 horas del día
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="bg-primary-500 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold">{step.number}</div>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para agendar tu turno?</h3>
          <p className="text-lg mb-6">Accede a nuestro sistema de turnos online y reserva tu cita en minutos</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Agendar Turno Online</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
              <Phone className="w-5 h-5" />
              <span>Llamar: +54 351 468-8400</span>
            </button>
          </div>
        </div>

        {/* Available hours */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-center mb-6">Horarios de atención</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-primary-500" />
                <span className="font-semibold">Consultorios Externos</span>
              </div>
              <p className="text-gray-600">Lunes a Viernes: 8:00 - 20:00</p>
              <p className="text-gray-600">Sábados: 8:00 - 14:00</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="font-semibold">Emergencias</span>
              </div>
              <p className="text-gray-600">24 horas, los 365 días del año</p>
              <p className="text-red-600 font-semibold">Tel: +54 351 468-8400</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Turnos;