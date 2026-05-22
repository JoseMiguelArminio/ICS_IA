
import React from 'react';

function DetallesProducto({ caracteristicas, children }) {
  return (
    <div>
      <ul>
        {caracteristicas.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      {children} {}
    </div>
  );
}

export default DetallesProducto;
