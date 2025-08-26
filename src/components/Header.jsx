import React from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      {/* Top bar with contact info */}
      <div className="bg-primary-700 py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+54 351 468-8400</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Córdoba, Argentina</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Emergencias 24hs</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Hospital Privado CMC S.A.</h1>
            <p className="text-lg text-blue-100">Portal de Pacientes — Tu salud, en tus manos</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#inicio" className="hover:text-blue-200 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-200 transition-colors">Servicios</a>
            <a href="#turnos" className="hover:text-blue-200 transition-colors">Turnos</a>
            <a href="#profesionales" className="hover:text-blue-200 transition-colors">Profesionales</a>
            <a href="#contacto" className="hover:text-blue-200 transition-colors">Contacto</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-blue-400">
            <div className="flex flex-col space-y-2">
              <a href="#inicio" className="py-2 hover:text-blue-200 transition-colors">Inicio</a>
              <a href="#servicios" className="py-2 hover:text-blue-200 transition-colors">Servicios</a>
              <a href="#turnos" className="py-2 hover:text-blue-200 transition-colors">Turnos</a>
              <a href="#profesionales" className="py-2 hover:text-blue-200 transition-colors">Profesionales</a>
              <a href="#contacto" className="py-2 hover:text-blue-200 transition-colors">Contacto</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;