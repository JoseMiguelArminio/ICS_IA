import React from 'react';

function ResumenTareas({ tareas, total }) {
  const completadas = tareas.filter((t) => t.completada).length;

  if (tareas.length === 0) {
    return <p className="text-center mt-4 text-muted">No hay tareas para este filtro.</p>;
  }

  if (completadas === tareas.length) {
    return (
      <p className="text-center mt-4 text-success fw-bold">
        ¡Felicidades! Has completado todas las tareas de esta sección.
      </p>
    );
  }

  return (
    <p className="text-center mt-4">
      Mostrando <strong>{tareas.length}</strong> de <strong>{total}</strong> tareas.
    </p>
  );
}

export default ResumenTareas;
