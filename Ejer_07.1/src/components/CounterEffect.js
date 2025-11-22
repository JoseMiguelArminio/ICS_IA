import React, { useState, useEffect, useCallback } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("Render CounterEffect, valor:", count);
  }, [count]);

  return (
    <div>
      <h2>Ejercicio 1 - Contador</h2>
      <p>Valor del contador: {count}</p>
      <button onClick={increment}>Sumar</button>
    </div>
  );
}

export default React.memo(CounterEffect);
