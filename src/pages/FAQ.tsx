import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import type { FAQ } from '../types';
import faqData from '../data/faq.json';
import './FAQ.css';

const FAQPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    setFaqs(faqData as FAQ[]);
    setFilteredFaqs(faqData as FAQ[]);
  }, []);

  useEffect(() => {
    let filtered = faqs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(faq => 
        faq.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.respuesta.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(faq => faq.categoria === selectedCategory);
    }

    setFilteredFaqs(filtered);
  }, [searchTerm, selectedCategory, faqs]);

  const categories = [...new Set(faqs.map(faq => faq.categoria))];

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredFaqs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <div className="faq-page">
      <div className="page-header">
        <div className="header-icon">
          <HelpCircle size={40} />
        </div>
        <h1>Preguntas Frecuentes</h1>
        <p>Encuentra respuestas a las consultas más comunes sobre nuestros servicios</p>
      </div>

      <div className="faq-controls">
        <div className="search-section">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar en preguntas frecuentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filter">
            <label htmlFor="category">Categoría:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              <option value="">Todas las categorías</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="control-buttons">
          <button onClick={expandAll} className="btn btn-secondary">
            Expandir Todo
          </button>
          <button onClick={collapseAll} className="btn btn-secondary">
            Contraer Todo
          </button>
        </div>
      </div>

      <div className="results-summary">
        <p>
          {filteredFaqs.length} pregunta{filteredFaqs.length !== 1 ? 's' : ''} encontrada{filteredFaqs.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="faq-list">
        {filteredFaqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <button
              className={`faq-question ${expandedItems.has(faq.id) ? 'expanded' : ''}`}
              onClick={() => toggleExpanded(faq.id)}
              aria-expanded={expandedItems.has(faq.id)}
            >
              <span className="question-text">{faq.pregunta}</span>
              <div className="question-meta">
                <span className="category-badge">{faq.categoria}</span>
                {expandedItems.has(faq.id) ? (
                  <ChevronUp size={20} className="expand-icon" />
                ) : (
                  <ChevronDown size={20} className="expand-icon" />
                )}
              </div>
            </button>
            
            <div className={`faq-answer ${expandedItems.has(faq.id) ? 'expanded' : ''}`}>
              <div className="answer-content">
                <p>{faq.respuesta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="empty-state">
          <HelpCircle size={48} />
          <h3>No se encontraron preguntas</h3>
          <p>Intenta ajustar tu búsqueda o selecciona una categoría diferente</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
          >
            Limpiar Filtros
          </button>
        </div>
      )}

      <div className="contact-help">
        <div className="help-card">
          <h3>¿No encuentras lo que buscas?</h3>
          <p>Nuestro equipo está disponible para ayudarte con cualquier consulta adicional.</p>
          <div className="contact-options">
            <button className="btn btn-primary">
              Contactar Soporte
            </button>
            <button className="btn btn-secondary">
              Solicitar Llamada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;