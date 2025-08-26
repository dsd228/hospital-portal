import React from 'react';
import { Calendar, FileText, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tu salud es nuestra <span className="text-primary-500">prioridad</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Accede a todos nuestros servicios de manera rápida y segura. 
            Gestiona tus citas, consulta tus estudios y mantente conectado con tu equipo médico.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
              <Calendar className="w-5 h-5" />
              <span>Agendar Turno</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
              <FileText className="w-5 h-5" />
              <span>Portal del Paciente</span>
            </button>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Turnos Online</h3>
            <p className="text-gray-600 mb-4">Agenda tu cita médica las 24 horas del día</p>
            <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              Agendar ahora →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mis Estudios</h3>
            <p className="text-gray-600 mb-4">Accede a tus resultados médicos de forma segura</p>
            <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              Ver estudios →
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Profesionales</h3>
            <p className="text-gray-600 mb-4">Conoce a nuestro equipo médico especializado</p>
            <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
              Ver equipo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;