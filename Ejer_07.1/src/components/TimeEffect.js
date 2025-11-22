import React, { useState, useEffect, useMemo } from "react";

function TimeEffect() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = useMemo(
    () => time.toLocaleTimeString(),
    [time]
  );

  return (
    <div>
      <h2>Ejercicio 2 - Reloj</h2>
      <p>Hora actual: {formattedTime}</p>
    </div>
  );
}

export default React.memo(TimeEffect);
