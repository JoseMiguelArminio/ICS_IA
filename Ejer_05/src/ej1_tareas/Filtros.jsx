import React from 'react';

function Filtros({ setFiltro, filtro }) {
  const botones = ['todas', 'alta', 'media', 'baja'];

  return (
    <div className="d-flex justify-content-center mb-4">
      {botones.map((nivel) => (
        <button
          key={nivel}
          className={`btn mx-2 ${filtro === nivel ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFiltro(nivel)}
        >
          {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
