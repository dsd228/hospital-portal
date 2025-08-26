import React from 'react';
import { Shield, Award, Heart, Users, Microscope, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Acreditación JCI",
      description: "Certificación internacional que garantiza los más altos estándares de calidad y seguridad",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Tecnología de Vanguardia",
      description: "Equipamiento médico de última generación para diagnósticos precisos y tratamientos efectivos",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipo Médico Especializado",
      description: "Profesionales altamente capacitados con formación nacional e internacional",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atención Centrada en el Paciente",
      description: "Cuidado personalizado y humanizado para cada paciente y su familia",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponibilidad 24/7",
      description: "Emergencias y cuidados críticos disponibles las 24 horas del día",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reconocimiento Internacional",
      description: "Convenios con aseguradoras internacionales y reconocimiento global",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  const stats = [
    { number: "50+", label: "Años de experiencia" },
    { number: "200+", label: "Médicos especialistas" },
    { number: "100,000+", label: "Pacientes atendidos" },
    { number: "15", label: "Especialidades médicas" }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué <span className="text-primary-500">elegirnos?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excelencia profesional, tecnología de vanguardia y atención centrada en el paciente nos distinguen como líder en salud
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${feature.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <div className={feature.color}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Números que nos respaldan</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JCI Badge Section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Shield className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-bold">Acreditado por JCI</h3>
              <p className="text-green-100">Joint Commission International</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl mx-auto">
            Somos el primer hospital de Córdoba en obtener la acreditación JCI, 
            el estándar de oro internacional en calidad y seguridad hospitalaria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;