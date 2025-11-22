import React from "react";
import CounterEffect from "./components/CounterEffect";
import TimeEffect from "./components/TimeEffect";
import FetchUsers from "./components/FetchUsers";

function App() {
  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Ejercicios con useEffect</h1>
      <hr />

      <CounterEffect />
      <hr />

      <TimeEffect />
      <hr />

      <FetchUsers />
    </div>
  );
}

export default App;
