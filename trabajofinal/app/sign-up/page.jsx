"use client";

import { useState } from "react";

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const register = async () => {

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    alert("Usuario creado");
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Registro</h1>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={register}>
        Registrarse
      </button>

    </div>
  );
}