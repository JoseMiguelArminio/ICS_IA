import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, toggleCompletada }) {
  return (
    <div className="list-group">
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} toggleCompletada={toggleCompletada} />
      ))}
    </div>
  );
}

export default ListaTareas;
