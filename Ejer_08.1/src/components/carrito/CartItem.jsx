export default function CartItem({ item, dispatch }) {
  return (
    <div>
      <strong>{item.name}</strong>
      <p>
        ${item.price} x {item.quantity}
      </p>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>+</button>
      <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
        Eliminar
      </button>
    </div>
  );
}
