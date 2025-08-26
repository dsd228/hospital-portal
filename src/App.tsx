import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import './styles/globals.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');

    // Check dark mode preference
    const darkModePreference = localStorage.getItem('darkMode');
    const isDark = darkModePreference === 'true';
    setDarkMode(isDark);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
  };

  // Mock notification count - in a real app this would come from an API
  const notificationCount = 3;

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="app">
        <Navigation 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          notificationCount={notificationCount}
        />
        <main className="app-main">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/especialistas" element={<div>Especialistas (Coming Soon)</div>} />
            <Route path="/turnos" element={<div>Turnos (Coming Soon)</div>} />
            <Route path="/estudios" element={<div>Estudios (Coming Soon)</div>} />
            <Route path="/faq" element={<div>FAQ (Coming Soon)</div>} />
            <Route path="/notificaciones" element={<div>Notificaciones (Coming Soon)</div>} />
            <Route path="/perfil" element={<div>Perfil (Coming Soon)</div>} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
