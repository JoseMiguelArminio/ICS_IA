import React from 'react';

function Tarea({ tarea, toggleCompletada }) {
  const colores = {
    alta: 'danger',
    media: 'warning',
    baja: 'success',
  };

  return (
    <div
      className={`list-group-item d-flex align-items-center justify-content-between border-start border-4 border-${colores[tarea.prioridad]}`}
      style={{
        backgroundColor: tarea.completada ? '#f0f0f0' : 'white',
        textDecoration: tarea.completada ? 'line-through' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <span onClick={() => toggleCompletada(tarea.id)} style={{ cursor: 'pointer' }}>
        {tarea.texto}
      </span>
      <span className={`badge bg-${colores[tarea.prioridad]} text-uppercase`}>
        {tarea.prioridad}
      </span>
    </div>
  );
}

export default Tarea;
