import React, { useState, useEffect } from 'react';
import { Bell, Check, Trash2, AlertCircle, Clock, Info, Calendar } from 'lucide-react';
import type { Mensaje } from '../types';
import mensajesData from '../data/mensajes.json';
import './Notificaciones.css';

const Notificaciones: React.FC = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  useEffect(() => {
    setMensajes(mensajesData as Mensaje[]);
  }, []);

  const filteredMensajes = mensajes.filter(mensaje => {
    if (filter === 'unread') return !mensaje.leido;
    if (filter === 'read') return mensaje.leido;
    return true;
  });

  const markAsRead = (id: number) => {
    setMensajes(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, leido: true } : msg
      )
    );
  };

  const markAllAsRead = () => {
    setMensajes(prev => 
      prev.map(msg => ({ ...msg, leido: true }))
    );
  };

  const deleteMessage = (id: number) => {
    setMensajes(prev => prev.filter(msg => msg.id !== id));
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

  const getTypeIcon = (tipo: string) => {
    switch (tipo) {
      case 'recordatorio':
        return <Clock className="type-icon recordatorio" size={20} />;
      case 'resultado':
        return <Check className="type-icon resultado" size={20} />;
      case 'cambio':
        return <AlertCircle className="type-icon cambio" size={20} />;
      case 'informativo':
        return <Info className="type-icon informativo" size={20} />;
      case 'preparacion':
        return <Calendar className="type-icon preparacion" size={20} />;
      default:
        return <Bell className="type-icon" size={20} />;
    }
  };

  const getPriorityClass = (prioridad: string) => {
    return `priority-${prioridad}`;
  };

  const unreadCount = mensajes.filter(msg => !msg.leido).length;

  return (
    <div className="notificaciones-page">
      <div className="page-header">
        <div className="header-content">
          <div className="header-icon">
            <Bell size={40} />
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </div>
          <div>
            <h1>Notificaciones</h1>
            <p>Mantente al día con todas tus citas médicas y resultados</p>
          </div>
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="btn btn-secondary"
          >
            <Check size={16} />
            Marcar todas como leídas
          </button>
        )}
      </div>

      <div className="notifications-controls">
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todas ({mensajes.length})
          </button>
          <button 
            className={`filter-tab ${filter === 'unread' ? 'active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            Sin leer ({unreadCount})
          </button>
          <button 
            className={`filter-tab ${filter === 'read' ? 'active' : ''}`}
            onClick={() => setFilter('read')}
          >
            Leídas ({mensajes.length - unreadCount})
          </button>
        </div>
      </div>

      <div className="notifications-list">
        {filteredMensajes.length > 0 ? (
          filteredMensajes.map(mensaje => (
            <div 
              key={mensaje.id} 
              className={`notification-card ${!mensaje.leido ? 'unread' : ''} ${getPriorityClass(mensaje.prioridad)}`}
            >
              <div className="notification-indicator">
                {getTypeIcon(mensaje.tipo)}
              </div>

              <div className="notification-content">
                <div className="notification-header">
                  <h3>{mensaje.titulo}</h3>
                  <div className="notification-meta">
                    <span className={`priority-badge ${mensaje.prioridad}`}>
                      {mensaje.prioridad}
                    </span>
                    <span className={`type-badge ${mensaje.tipo}`}>
                      {mensaje.tipo}
                    </span>
                  </div>
                </div>
                
                <p className="notification-message">{mensaje.mensaje}</p>
                
                <div className="notification-footer">
                  <span className="notification-date">
                    {formatDate(mensaje.fecha)}
                  </span>
                  <div className="notification-actions">
                    {!mensaje.leido && (
                      <button
                        onClick={() => markAsRead(mensaje.id)}
                        className="action-btn read-btn"
                        title="Marcar como leída"
                      >
                        <Check size={16} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(mensaje.id)}
                      className="action-btn delete-btn"
                      title="Eliminar"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {!mensaje.leido && <div className="unread-indicator"></div>}
            </div>
          ))
        ) : (
          <div className="empty-state">
            <Bell size={48} />
            <h3>
              {filter === 'all' && 'No tienes notificaciones'}
              {filter === 'unread' && 'No tienes notificaciones sin leer'}
              {filter === 'read' && 'No tienes notificaciones leídas'}
            </h3>
            <p>
              {filter === 'all' && 'Las notificaciones aparecerán aquí cuando las recibas'}
              {filter === 'unread' && 'Todas tus notificaciones están al día'}
              {filter === 'read' && 'Las notificaciones que marques como leídas aparecerán aquí'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notificaciones;