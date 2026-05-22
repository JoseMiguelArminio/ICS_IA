"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const login = async () => {

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    // 💾 guardar sesión
    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    alert("Login correcto");

    router.push("/");
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Entrar
      </button>

    </div>
  );
}