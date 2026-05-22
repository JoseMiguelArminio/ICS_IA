"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [equipos, setEquipos] = useState([]);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [order, setOrder] = useState("");

  // 📦 cargar equipos
  const getEquipos = async () => {

    let url = "/api/equipos?";

    if (name) url += `name=${name}&`;
    if (brand) url += `brand=${brand}&`;
    if (status) url += `status=${status}&`;
    if (order) url += `order=${order}&`;

    const res = await fetch(url);
    const data = await res.json();

    setEquipos(data);
  };

  // 🚀 populate
  const populate = async () => {

    const res = await fetch("/api/populate");
    const data = await res.json();

    alert(data.message);

    getEquipos();
  };

  // ❌ borrar
  const deleteEquipo = async (id) => {

    const confirmDelete = confirm(
      "¿Seguro que quieres borrar?"
    );

    if (!confirmDelete) return;

    await fetch(`/api/equipos/${id}`, {
      method: "DELETE"
    });

    getEquipos();
  };

  useEffect(() => {
    getEquipos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>Inventario Equipos</h1>

      <button onClick={populate}>
        Poblar Catálogo
      </button>

      <hr />

      {/* 🔍 FILTROS */}
      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}>

        <input
          placeholder="Buscar nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Marca</option>
          <option value="Dell">Dell</option>
          <option value="HP">HP</option>
          <option value="Lenovo">Lenovo</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Estado</option>
          <option value="Disponible">Disponible</option>
          <option value="Asignado">Asignado</option>
          <option value="Reparación">Reparación</option>
        </select>

        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="">Ordenar</option>
          <option value="name">Nombre</option>
          <option value="brand">Marca</option>
        </select>

        <button onClick={getEquipos}>
          Filtrar
        </button>

      </div>

      {/* 📦 GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>

        {equipos.map((eq) => (

          <div
            key={eq.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px"
            }}
          >

            <h3>{eq.name}</h3>

            <p><b>Marca:</b> {eq.brand}</p>

            <p><b>Modelo:</b> {eq.model}</p>

            <p><b>Serie:</b> {eq.serial_number}</p>

            <p><b>Estado:</b> {eq.status}</p>

            <button
              onClick={() => deleteEquipo(eq.id)}
              style={{
                background: "red",
                color: "white"
              }}
            >
              Borrar
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
