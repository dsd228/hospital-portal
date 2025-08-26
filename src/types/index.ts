export interface Turno {
  id: number;
  fecha: string;
  hora: string;
  especialista: string;
  especialidad: string;
  estado: 'confirmado' | 'pendiente' | 'completado' | 'cancelado';
  consultorio: string;
}

export interface Estudio {
  id: number;
  tipo: string;
  fecha: string;
  estado: 'pendiente' | 'programado' | 'completado' | 'cancelado';
  medico: string;
  instrucciones: string;
  ubicacion: string;
  resultado?: string;
}

export interface Especialista {
  id: number;
  nombre: string;
  especialidad: string;
  disponible: boolean;
  experiencia: string;
  foto: string;
  horarios: string[];
  diasDisponibles: string[];
  consultorio: string;
  biografia: string;
}

export interface Mensaje {
  id: number;
  titulo: string;
  mensaje: string;
  fecha: string;
  tipo: 'recordatorio' | 'resultado' | 'cambio' | 'informativo' | 'preparacion';
  leido: boolean;
  prioridad: 'alta' | 'media' | 'baja';
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  fechaNacimiento?: string;
}

export interface FAQ {
  id: number;
  pregunta: string;
  respuesta: string;
  categoria: string;
}