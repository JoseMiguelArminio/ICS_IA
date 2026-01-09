import CartItem from "./CartItem";
import { useMemo } from "react";

export default function Cart({ cart, dispatch }) {
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return (
    <div>
      <h2>Mi Carrito</h2>

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          dispatch={dispatch}
        />
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
