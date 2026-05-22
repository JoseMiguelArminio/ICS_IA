import React from 'react';

function PieFicha({ precio, enStock }) {
  return (
    <div>
      {enStock ? (
        <p>
          Precio: {precio.valor} {precio.moneda} {precio.enOferta && <span>¡OFERTA!</span>}
        </p>
      ) : (
        <p style={{ color: 'red' }}>No disponible</p>
      )}
    </div>
  );
}

export default PieFicha;
