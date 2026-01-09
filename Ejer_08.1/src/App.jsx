import { useReducer, useCallback } from "react";
import { cartReducer } from "./reducers/cartReducer";

import ProductList from "./components/carrito/ProductList";
import Cart from "./components/carrito/Cart";

import { AuthProvider } from "./context/AuthContext";
import { TasksProvider } from "./context/TasksContext";
import TaskList from "./components/tareas/TaskList";
import UserInfo from "./components/tareas/UserInfo";

import { ThemeProvider } from "./context/ThemeContext";
import ThemeControls from "./components/theme/ThemeControls";
import ButtonPreview from "./components/theme/ButtonPreview";
import TextPreview from "./components/theme/TextPreview";
import CardPreview from "./components/theme/CardPreview";

export default function App() {
  /* ---------- EJERCICIO 1 ---------- */
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const addToCart = useCallback(product => {
    dispatchCart({ type: "ADD_ITEM", payload: product });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      {/* ================= EJERCICIO 1 ================= */}
      <h1>Ejercicio 1: Carrito de la Compra</h1>
      <ProductList onAdd={addToCart} />
      <Cart cart={cart} dispatch={dispatchCart} />

      <hr />

      {/* ================= EJERCICIO 2 ================= */}
      <AuthProvider>
        <TasksProvider>
          <h1>Ejercicio 2: Tareas Multi-usuario</h1>
          <UserInfo />
          <TaskList />
        </TasksProvider>
      </AuthProvider>

      <hr />

      {/* ================= EJERCICIO 3 ================= */}
      <ThemeProvider>
        <h1>Ejercicio 3: Editor de Temas UI</h1>

        <ThemeControls />

        <div style={{ display: "flex", gap: "1rem" }}>
          <ButtonPreview />
          <TextPreview />
          <CardPreview />
        </div>
      </ThemeProvider>
    </div>
  );
}
