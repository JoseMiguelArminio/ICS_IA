import React, { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Solicitando datos a la API...");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        console.log("Respuesta recibida.");
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>Ejercicio 3 - Fetch API</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(FetchUsers);
