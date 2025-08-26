import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  Bell, 
  User, 
  Clock, 
  MapPin,
  CheckCircle,
  AlertCircle,
  Plus
} from 'lucide-react';
import type { Turno, Estudio, Mensaje } from '../types';
import turnosData from '../data/turnos.json';
import estudiosData from '../data/estudios.json';
import mensajesData from '../data/mensajes.json';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [estudios, setEstudios] = useState<Estudio[]>([]);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

  useEffect(() => {
    // Simulate loading data
    setTurnos(turnosData as Turno[]);
    setEstudios(estudiosData as Estudio[]);
    setMensajes(mensajesData as Mensaje[]);
  }, []);

  // Get next appointments
  const proximosTurnos = turnos
    .filter(turno => {
      const fechaTurno = new Date(turno.fecha);
      const hoy = new Date();
      return fechaTurno >= hoy && turno.estado !== 'completado';
    })
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
    .slice(0, 3);

  // Get pending studies
  const estudiosPendientes = estudios
    .filter(estudio => estudio.estado === 'pendiente' || estudio.estado === 'programado')
    .slice(0, 3);

  // Get unread messages
  const mensajesNoLeidos = mensajes
    .filter(mensaje => !mensaje.leido)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusIcon = (estado: string) => {
    switch (estado) {
      case 'confirmado':
        return <CheckCircle className="status-icon confirmed" size={16} />;
      case 'pendiente':
        return <AlertCircle className="status-icon pending" size={16} />;
      case 'programado':
        return <Clock className="status-icon scheduled" size={16} />;
      default:
        return <Clock className="status-icon" size={16} />;
    }
  };

  const getPriorityIcon = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return <AlertCircle className="priority-icon high" size={16} />;
      case 'media':
        return <Clock className="priority-icon medium" size={16} />;
      default:
        return <Bell className="priority-icon low" size={16} />;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Bienvenido a tu Portal de Salud</h1>
          <p>Gestiona tus citas médicas, estudios y consulta toda tu información de salud en un solo lugar.</p>
        </div>
        <Link to="/turnos/nuevo" className="btn btn-primary">
          <Plus size={20} />
          Agendar Turno
        </Link>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon appointments">
            <Calendar size={24} />
          </div>
          <div className="stat-content">
            <h3>{proximosTurnos.length}</h3>
            <p>Próximos Turnos</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon studies">
            <FileText size={24} />
          </div>
          <div className="stat-content">
            <h3>{estudiosPendientes.length}</h3>
            <p>Estudios Pendientes</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon messages">
            <Bell size={24} />
          </div>
          <div className="stat-content">
            <h3>{mensajesNoLeidos.length}</h3>
            <p>Mensajes Sin Leer</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon profile">
            <User size={24} />
          </div>
          <div className="stat-content">
            <h3>100%</h3>
            <p>Perfil Completo</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Próximos Turnos */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>
              <Calendar size={20} />
              Próximos Turnos
            </h2>
            <Link to="/turnos" className="btn btn-secondary">Ver todos</Link>
          </div>

          <div className="appointments-list">
            {proximosTurnos.length > 0 ? (
              proximosTurnos.map(turno => (
                <div key={turno.id} className="appointment-card">
                  <div className="appointment-date">
                    <div className="date-day">
                      {new Date(turno.fecha).getDate()}
                    </div>
                    <div className="date-month">
                      {new Date(turno.fecha).toLocaleDateString('es-AR', { month: 'short' })}
                    </div>
                  </div>
                  <div className="appointment-info">
                    <h4>{turno.especialista}</h4>
                    <p className="specialty">{turno.especialidad}</p>
                    <div className="appointment-details">
                      <span>
                        <Clock size={14} />
                        {turno.hora}
                      </span>
                      <span>
                        <MapPin size={14} />
                        {turno.consultorio}
                      </span>
                    </div>
                  </div>
                  <div className="appointment-status">
                    {getStatusIcon(turno.estado)}
                    <span className={`status-text ${turno.estado}`}>
                      {turno.estado}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <Calendar size={48} />
                <p>No tienes turnos próximos</p>
                <Link to="/especialistas" className="btn btn-primary">
                  Agendar Turno
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Estudios Pendientes */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>
              <FileText size={20} />
              Estudios Pendientes
            </h2>
            <Link to="/estudios" className="btn btn-secondary">Ver todos</Link>
          </div>

          <div className="studies-list">
            {estudiosPendientes.length > 0 ? (
              estudiosPendientes.map(estudio => (
                <div key={estudio.id} className="study-card">
                  <div className="study-info">
                    <h4>{estudio.tipo}</h4>
                    <p className="study-date">{formatDate(estudio.fecha)}</p>
                    <p className="study-location">
                      <MapPin size={14} />
                      {estudio.ubicacion}
                    </p>
                  </div>
                  <div className="study-status">
                    {getStatusIcon(estudio.estado)}
                    <span className={`status-text ${estudio.estado}`}>
                      {estudio.estado}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <FileText size={48} />
                <p>No tienes estudios pendientes</p>
              </div>
            )}
          </div>
        </div>

        {/* Mensajes */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>
              <Bell size={20} />
              Mensajes Recientes
            </h2>
            <Link to="/notificaciones" className="btn btn-secondary">Ver todos</Link>
          </div>

          <div className="messages-list">
            {mensajesNoLeidos.length > 0 ? (
              mensajesNoLeidos.map(mensaje => (
                <div key={mensaje.id} className="message-card">
                  <div className="message-priority">
                    {getPriorityIcon(mensaje.prioridad)}
                  </div>
                  <div className="message-content">
                    <h4>{mensaje.titulo}</h4>
                    <p>{mensaje.mensaje}</p>
                    <span className="message-date">
                      {formatDate(mensaje.fecha)}
                    </span>
                  </div>
                  <div className={`message-type ${mensaje.tipo}`}>
                    {mensaje.tipo}
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <Bell size={48} />
                <p>No tienes mensajes nuevos</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;