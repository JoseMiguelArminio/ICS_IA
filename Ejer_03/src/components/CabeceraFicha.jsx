import React from 'react';

function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Vendido por: {vendedor.nombre} ({vendedor.rating} ⭐)</p>
    </div>
  );
}

export default CabeceraFicha;
