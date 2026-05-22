import React, { useState } from 'react';
import { proyectos as datosIniciales } from '../../datos/proyectos';
import ProjectColumn from './ProjectColumn';

function Dashboard() {
  const [proyectos, setProyectos] = useState(datosIniciales);

  const handleActualizarEstado = (proyectoId, nuevoEstado) => {
    const nuevosProyectos = proyectos.map(proy =>
      proy.id === proyectoId ? { ...proy, estado: nuevoEstado } : proy
    );
    setProyectos(nuevosProyectos);
  };

  const pendientes = proyectos.filter(p => p.estado === 'Pendiente');
  const enProgreso = proyectos.filter(p => p.estado === 'En Progreso');
  const completados = proyectos.filter(p => p.estado === 'Completado');

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-dark bg-primary px-3 mb-3">
        <span className="navbar-brand mb-0 h1">
          <i className="bi bi-kanban-fill me-2"></i> Dashboard de Proyectos
        </span>
      </nav>

      <div className="container">
        <div className="row">
          <ProjectColumn
            titulo="Pendiente"
            proyectos={pendientes}
            onActualizarEstado={handleActualizarEstado}
          />
          <ProjectColumn
            titulo="En Progreso"
            proyectos={enProgreso}
            onActualizarEstado={handleActualizarEstado}
          />
          <ProjectColumn
            titulo="Completado"
            proyectos={completados}
            onActualizarEstado={handleActualizarEstado}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
