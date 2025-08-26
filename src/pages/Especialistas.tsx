import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, Star, Calendar, User } from 'lucide-react';
import type { Especialista } from '../types';
import especialistasData from '../data/especialistas.json';
import './Especialistas.css';

const Especialistas: React.FC = () => {
  const navigate = useNavigate();
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
  const [filteredEspecialistas, setFilteredEspecialistas] = useState<Especialista[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEspecialidad, setSelectedEspecialidad] = useState('');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  useEffect(() => {
    setEspecialistas(especialistasData as Especialista[]);
    setFilteredEspecialistas(especialistasData as Especialista[]);
  }, []);

  useEffect(() => {
    let filtered = especialistas;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(esp => 
        esp.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        esp.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by specialty
    if (selectedEspecialidad) {
      filtered = filtered.filter(esp => esp.especialidad === selectedEspecialidad);
    }

    // Filter by availability
    if (showAvailableOnly) {
      filtered = filtered.filter(esp => esp.disponible);
    }

    setFilteredEspecialistas(filtered);
  }, [searchTerm, selectedEspecialidad, showAvailableOnly, especialistas]);

  const especialidades = [...new Set(especialistas.map(esp => esp.especialidad))];

  const handleAgendarTurno = (especialista: Especialista) => {
    if (!especialista.disponible) {
      alert('Este especialista no está disponible para nuevas citas');
      return;
    }
    navigate(`/turnos/nuevo?especialista=${especialista.id}`);
  };

  return (
    <div className="especialistas-page">
      <div className="page-header">
        <h1>Buscar Especialistas</h1>
        <p>Encuentra y agenda citas con nuestros médicos especialistas</p>
      </div>

      <div className="search-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Buscar por nombre o especialidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters-row">
          <div className="filter-group">
            <label htmlFor="especialidad">
              <Filter size={16} />
              Especialidad
            </label>
            <select
              id="especialidad"
              value={selectedEspecialidad}
              onChange={(e) => setSelectedEspecialidad(e.target.value)}
              className="filter-select"
            >
              <option value="">Todas las especialidades</option>
              {especialidades.map(especialidad => (
                <option key={especialidad} value={especialidad}>
                  {especialidad}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="disponibles"
              checked={showAvailableOnly}
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
            />
            <label htmlFor="disponibles">Solo disponibles</label>
          </div>
        </div>
      </div>

      <div className="results-summary">
        <p>
          {filteredEspecialistas.length} especialista{filteredEspecialistas.length !== 1 ? 's' : ''} encontrado{filteredEspecialistas.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="especialistas-grid">
        {filteredEspecialistas.map(especialista => (
          <div key={especialista.id} className={`especialista-card ${!especialista.disponible ? 'unavailable' : ''}`}>
            <div className="especialista-header">
              <img 
                src={especialista.foto} 
                alt={especialista.nombre}
                className="especialista-foto"
              />
              <div className="especialista-info">
                <h3>{especialista.nombre}</h3>
                <p className="especialidad">{especialista.especialidad}</p>
                <p className="experiencia">
                  <Star size={14} />
                  {especialista.experiencia} de experiencia
                </p>
              </div>
              <div className={`availability-badge ${especialista.disponible ? 'available' : 'unavailable'}`}>
                {especialista.disponible ? 'Disponible' : 'No disponible'}
              </div>
            </div>

            <div className="especialista-details">
              <div className="detail-item">
                <MapPin size={16} />
                <span>Consultorio {especialista.consultorio}</span>
              </div>

              {especialista.disponible && (
                <div className="detail-item">
                  <Clock size={16} />
                  <span>
                    Horarios: {especialista.horarios.slice(0, 3).join(', ')}
                    {especialista.horarios.length > 3 && '...'}
                  </span>
                </div>
              )}

              <div className="detail-item">
                <Calendar size={16} />
                <span>
                  Días: {especialista.diasDisponibles.slice(0, 3).join(', ')}
                  {especialista.diasDisponibles.length > 3 && '...'}
                </span>
              </div>
            </div>

            <div className="especialista-bio">
              <p>{especialista.biografia}</p>
            </div>

            <div className="especialista-actions">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  // Show more details in a modal or navigate to detail page
                  alert(`Ver más detalles de ${especialista.nombre}`);
                }}
              >
                <User size={16} />
                Ver Perfil
              </button>
              
              <button
                className={`btn ${especialista.disponible ? 'btn-primary' : 'btn-disabled'}`}
                onClick={() => handleAgendarTurno(especialista)}
                disabled={!especialista.disponible}
              >
                <Calendar size={16} />
                {especialista.disponible ? 'Agendar Turno' : 'No Disponible'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEspecialistas.length === 0 && (
        <div className="empty-state">
          <Search size={48} />
          <h3>No se encontraron especialistas</h3>
          <p>Intenta ajustar los filtros de búsqueda</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm('');
              setSelectedEspecialidad('');
              setShowAvailableOnly(false);
            }}
          >
            Limpiar Filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default Especialistas;