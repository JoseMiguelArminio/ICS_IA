import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filtros from './components/Filtros';
import ListaTareas from './components/ListaTareas';
import ResumenTareas from './components/ResumenTareas';
import './index.css';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender sobre renderizado de listas en React', completada: true, prioridad: 'alta' },
    { id: 2, texto: 'Practicar hooks y estados', completada: false, prioridad: 'media' },
    { id: 3, texto: 'Configurar despliegue en Netlify', completada: false, prioridad: 'baja' },
    { id: 4, texto: 'Estudiar filtrado dinámico', completada: false, prioridad: 'alta' },
  ]);

  const [filtro, setFiltro] = useState('todas');

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const tareasFiltradas =
    filtro === 'todas' ? tareas : tareas.filter((t) => t.prioridad === filtro);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📋 Dashboard de Tareas</h1>
      <Filtros setFiltro={setFiltro} filtro={filtro} />
      <ListaTareas tareas={tareasFiltradas} toggleCompletada={toggleCompletada} />
      <ResumenTareas tareas={tareasFiltradas} total={tareas.length} />
    </div>
  );
}

export default App;
