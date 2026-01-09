import products from "../../data/products.json";
import ProductItem from "./ProductItem";

export default function ProductList({ onAdd }) {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
