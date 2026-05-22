import React from 'react';
import TeamMemberList from './TeamMemberList';

function ProjectCard({ proyecto, onActualizarEstado }) {
  const coloresPrioridad = {
    Alta: 'danger',
    Media: 'warning',
    Baja: 'success'
  };

  const opcionesEstado = ['Pendiente', 'En Progreso', 'Completado'];

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">{proyecto.titulo}</h5>
          <span className={`badge bg-${coloresPrioridad[proyecto.prioridad]}`}>
            {proyecto.prioridad}
          </span>
        </div>
        <p className="card-text mt-2">{proyecto.descripcion}</p>

        <p className="fw-bold mb-1">Responsables:</p>
        <TeamMemberList responsables={proyecto.responsables} />

        <hr />
        <select
          className="form-select"
          value=""
          onChange={e => onActualizarEstado(proyecto.id, e.target.value)}
        >
          <option value="">Mover a...</option>
          {opcionesEstado
            .filter(op => op !== proyecto.estado)
            .map(op => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default ProjectCard;
