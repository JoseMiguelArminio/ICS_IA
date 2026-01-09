import { memo } from "react";

function ProductItem({ product, onAdd }) {
  return (
    <div>
      <h4>{product.name}</h4>
      <p>Precio: ${product.price}</p>
      <button onClick={() => onAdd(product)}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default memo(ProductItem);
