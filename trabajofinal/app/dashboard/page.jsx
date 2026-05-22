"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [equipos, setEquipos] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    const resEquipos =
      await fetch("/api/equipos");

    const dataEquipos =
      await resEquipos.json();

    setEquipos(dataEquipos);

    const resTickets =
      await fetch("/api/tickets");

    const dataTickets =
      await resTickets.json();

    setTickets(dataTickets);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Dashboard</h1>

      <h2>Total equipos: {equipos.length}</h2>

      <h2>Total tickets: {tickets.length}</h2>

    </div>
  );
}