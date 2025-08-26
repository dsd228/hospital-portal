import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, MapPin, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Especialista } from '../types';
import especialistasData from '../data/especialistas.json';
import './AgendarTurno.css';

interface BookingData {
  especialistaId: number;
  especialista?: Especialista;
  fecha: string;
  hora: string;
}

const AgendarTurno: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
  const [selectedEspecialidad, setSelectedEspecialidad] = useState('');
  const [bookingData, setBookingData] = useState<BookingData>({
    especialistaId: 0,
    fecha: '',
    hora: ''
  });

  const totalSteps = 4;

  useEffect(() => {
    setEspecialistas(especialistasData as Especialista[]);
    
    // Check if coming from specialist page
    const especialistaId = searchParams.get('especialista');
    if (especialistaId) {
      const especialista = especialistasData.find(esp => esp.id === parseInt(especialistaId));
      if (especialista) {
        setBookingData(prev => ({
          ...prev,
          especialistaId: especialista.id,
          especialista
        }));
        setSelectedEspecialidad(especialista.especialidad);
        setStep(2);
      }
    }
  }, [searchParams]);

  const especialidades = [...new Set(especialistas.map(esp => esp.especialidad))];
  const especialistasDisponibles = especialistas.filter(esp => 
    esp.disponible && 
    (selectedEspecialidad ? esp.especialidad === selectedEspecialidad : true)
  );

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for simplicity
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleEspecialidadSelect = (especialidad: string) => {
    setSelectedEspecialidad(especialidad);
    setBookingData(prev => ({ ...prev, especialistaId: 0, especialista: undefined }));
    handleNext();
  };

  const handleEspecialistaSelect = (especialista: Especialista) => {
    setBookingData(prev => ({
      ...prev,
      especialistaId: especialista.id,
      especialista
    }));
    handleNext();
  };

  const handleDateSelect = (fecha: string) => {
    setBookingData(prev => ({ ...prev, fecha }));
    handleNext();
  };

  const handleTimeSelect = (hora: string) => {
    setBookingData(prev => ({ ...prev, hora }));
    // Auto advance to confirmation
    setTimeout(() => handleNext(), 500);
  };

  const handleConfirm = () => {
    // In a real app, this would make an API call
    alert('¡Turno agendado exitosamente!');
    navigate('/turnos');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h2>Selecciona una Especialidad</h2>
            <p>Elige la especialidad médica que necesitas</p>
            <div className="options-grid">
              {especialidades.map(especialidad => (
                <button
                  key={especialidad}
                  className="option-card"
                  onClick={() => handleEspecialidadSelect(especialidad)}
                >
                  <div className="option-icon">👨‍⚕️</div>
                  <h3>{especialidad}</h3>
                  <p>{especialistas.filter(esp => esp.especialidad === especialidad && esp.disponible).length} disponibles</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h2>Selecciona un Especialista</h2>
            <p>Elige el médico de tu preferencia en {selectedEspecialidad}</p>
            <div className="specialists-list">
              {especialistasDisponibles.map(especialista => (
                <button
                  key={especialista.id}
                  className={`specialist-card ${bookingData.especialistaId === especialista.id ? 'selected' : ''}`}
                  onClick={() => handleEspecialistaSelect(especialista)}
                >
                  <img src={especialista.foto} alt={especialista.nombre} />
                  <div className="specialist-info">
                    <h3>{especialista.nombre}</h3>
                    <p className="experience">{especialista.experiencia} de experiencia</p>
                    <p className="office">
                      <MapPin size={14} />
                      Consultorio {especialista.consultorio}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h2>Selecciona una Fecha</h2>
            <p>Elige el día de tu consulta con {bookingData.especialista?.nombre}</p>
            <div className="dates-grid">
              {availableDates.slice(0, 21).map(date => (
                <button
                  key={date}
                  className={`date-card ${bookingData.fecha === date ? 'selected' : ''}`}
                  onClick={() => handleDateSelect(date)}
                >
                  <div className="date-day">
                    {new Date(date).getDate()}
                  </div>
                  <div className="date-month">
                    {new Date(date).toLocaleDateString('es-AR', { month: 'short' })}
                  </div>
                  <div className="date-weekday">
                    {new Date(date).toLocaleDateString('es-AR', { weekday: 'short' })}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h2>Selecciona un Horario</h2>
            <p>Horarios disponibles para el {formatDate(bookingData.fecha)}</p>
            <div className="times-grid">
              {bookingData.especialista?.horarios.map(hora => (
                <button
                  key={hora}
                  className={`time-card ${bookingData.hora === hora ? 'selected' : ''}`}
                  onClick={() => handleTimeSelect(hora)}
                >
                  <Clock size={16} />
                  {hora}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="step-content confirmation">
            <div className="confirmation-icon">
              <CheckCircle size={64} />
            </div>
            <h2>Confirmar Turno</h2>
            <div className="appointment-summary">
              <div className="summary-item">
                <User size={20} />
                <div>
                  <strong>{bookingData.especialista?.nombre}</strong>
                  <p>{bookingData.especialista?.especialidad}</p>
                </div>
              </div>
              <div className="summary-item">
                <Calendar size={20} />
                <div>
                  <strong>{formatDate(bookingData.fecha)}</strong>
                  <p>{bookingData.hora}</p>
                </div>
              </div>
              <div className="summary-item">
                <MapPin size={20} />
                <div>
                  <strong>Consultorio {bookingData.especialista?.consultorio}</strong>
                  <p>Hospital Privado CMC S.A.</p>
                </div>
              </div>
            </div>
            <div className="confirmation-actions">
              <button className="btn btn-primary" onClick={handleConfirm}>
                Confirmar Turno
              </button>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>
                Modificar
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="agendar-turno-page">
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} />
          Volver
        </button>
        <h1>Agendar Turno</h1>
      </div>

      <div className="booking-container">
        <div className="progress-bar">
          <div className="progress-steps">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className={`progress-step ${i + 1 <= step ? 'active' : ''}`}>
                <div className="step-number">{i + 1}</div>
                <span className="step-label">
                  {i === 0 && 'Especialidad'}
                  {i === 1 && 'Especialista'}
                  {i === 2 && 'Fecha'}
                  {i === 3 && 'Horario'}
                </span>
              </div>
            ))}
          </div>
          <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }} />
        </div>

        <div className="step-container">
          {renderStep()}
        </div>

        {step <= totalSteps && (
          <div className="navigation-buttons">
            {step > 1 && (
              <button onClick={handleBack} className="btn btn-secondary">
                <ArrowLeft size={16} />
                Anterior
              </button>
            )}
            <div className="step-indicator">
              Paso {step} de {totalSteps}
            </div>
            {step < totalSteps && step !== 5 && (
              <button 
                onClick={handleNext} 
                className="btn btn-primary"
                disabled={
                  (step === 1 && !selectedEspecialidad) ||
                  (step === 2 && !bookingData.especialistaId) ||
                  (step === 3 && !bookingData.fecha) ||
                  (step === 4 && !bookingData.hora)
                }
              >
                Siguiente
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgendarTurno;