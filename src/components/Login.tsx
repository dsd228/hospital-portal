import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import './Login.css';

interface LoginForm {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!form.email) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    if (!form.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (form.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Demo credentials check
      if (form.email === 'paciente@hospital.com' && form.password === '123456') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', form.email);
        navigate('/dashboard');
      } else {
        setErrors({
          general: 'Credenciales inválidas. Use: paciente@hospital.com / 123456'
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (field: keyof LoginForm) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">🏥</div>
          <h1>Portal de Pacientes</h1>
          <h2>Hospital Privado CMC S.A.</h2>
          <p>Accede a tu cuenta para gestionar tu salud</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <Mail size={18} />
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleInputChange('email')}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="tu@email.com"
              autoComplete="email"
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <Lock size={18} />
              Contraseña
            </label>
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleInputChange('password')}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Tu contraseña"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className={`login-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner"></div>
                Iniciando sesión...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>

          <div className="demo-credentials">
            <p><strong>Credenciales de prueba:</strong></p>
            <p>Email: paciente@hospital.com</p>
            <p>Contraseña: 123456</p>
          </div>
        </form>

        <div className="login-footer">
          <p>¿Olvidaste tu contraseña? <a href="#forgot">Recuperar</a></p>
          <p>¿No tienes cuenta? <a href="#register">Registrarse</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;