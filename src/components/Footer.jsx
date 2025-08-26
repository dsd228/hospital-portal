import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Shield,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-500 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hospital Privado CMC S.A.</h3>
            <p className="text-gray-300 mb-4">
              Tu salud, en tus manos. Excelencia médica con tecnología de vanguardia y atención humanizada.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Acreditado por JCI</span>
            </div>
            <p className="text-sm text-gray-400">Excelencia en atención médica</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm">Av. Naciones Unidas 346</p>
                  <p className="text-sm text-gray-400">Córdoba, Argentina</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm">+54 351 468-8400</p>
                  <p className="text-xs text-gray-400">Emergencias 24hs</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <p className="text-sm">info@hospitalprivado.com.ar</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#turnos" className="text-sm text-gray-300 hover:text-white transition-colors">Turnos Online</a></li>
              <li><a href="#inicio" className="text-sm text-gray-300 hover:text-white transition-colors">Portal del Paciente</a></li>
              <li><a href="#servicios" className="text-sm text-gray-300 hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#servicios" className="text-sm text-gray-300 hover:text-white transition-colors">Estudios Médicos</a></li>
              <li><a href="tel:+543514688400" className="text-sm text-gray-300 hover:text-white transition-colors">Emergencias</a></li>
              <li><a href="#servicios" className="text-sm text-gray-300 hover:text-white transition-colors">Pacientes Internacionales</a></li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios de Atención</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm">Consultorios Externos</p>
                  <p className="text-xs text-gray-400">Lun-Vie: 8:00-20:00</p>
                  <p className="text-xs text-gray-400">Sáb: 8:00-14:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 mt-0.5" />
                <div>
                  <p className="text-sm text-red-400">Emergencias</p>
                  <p className="text-xs text-gray-400">24hs los 365 días</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Síguenos</h5>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded hover:bg-pink-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-2 rounded hover:bg-blue-500 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; 2025 Hospital Privado CMC S.A. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#contacto" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                <span>Política de Privacidad</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                <span>Términos de Uso</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#inicio" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                <span>Mapa del Sitio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;