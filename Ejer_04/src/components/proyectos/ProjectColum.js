import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectColumn({ titulo, proyectos, onActualizarEstado }) {
  return (
    <div className="col-md-4 mb-3">
      <h4 className="text-center">{titulo}</h4>
      {proyectos.map(proyecto => (
        <ProjectCard
          key={proyecto.id}
          proyecto={proyecto}
          onActualizarEstado={onActualizarEstado}
        />
      ))}
    </div>
  );
}

export default ProjectColumn;
