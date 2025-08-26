import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  HelpCircle, 
  Bell, 
  User, 
  Menu, 
  X,
  Moon,
  Sun
} from 'lucide-react';
import './Navigation.css';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  notificationCount: number;
}

const Navigation: React.FC<NavigationProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  notificationCount 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Inicio' },
    { path: '/especialistas', icon: Users, label: 'Especialistas' },
    { path: '/turnos', icon: Calendar, label: 'Mis Turnos' },
    { path: '/estudios', icon: FileText, label: 'Estudios' },
    { path: '/faq', icon: HelpCircle, label: 'FAQ' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/dashboard" className="nav-logo">
          <div className="logo-icon">🏥</div>
          <span className="logo-text">Hospital CMC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="nav-action-btn"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/notificaciones" className="nav-action-btn notification-btn">
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </Link>

          <Link to="/perfil" className="nav-action-btn">
            <User size={20} />
          </Link>

          {/* Mobile menu button */}
          <button
            className="nav-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-mobile-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;