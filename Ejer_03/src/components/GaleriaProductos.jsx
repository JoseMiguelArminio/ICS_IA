import React from 'react';
import FichaProducto from './FichaProducto';

function GaleriaProductos({ productos }) {
  return (
    <div className="fichas-container">
      {productos.map(producto => (
        <FichaProducto key={producto.id} producto={producto}>
          <button>Más información</button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default GaleriaProductos;
