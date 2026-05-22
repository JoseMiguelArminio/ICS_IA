import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {

  try {

    const equipos = [
      { name: "PC Oficina", brand: "Dell", model: "OptiPlex", serial: "A123", status: "Disponible" },
      { name: "Portátil Técnico", brand: "HP", model: "EliteBook", serial: "B456", status: "Asignado" },
      { name: "Servidor", brand: "Lenovo", model: "ThinkSystem", serial: "C789", status: "Reparación" }
    ];

    let inserted = 0;

    for (const eq of equipos) {

      const [exists] = await pool.query(
        "SELECT id FROM equipos WHERE serial_number = ?",
        [eq.serial]
      );

      if (exists.length > 0) continue;

      await pool.query(
        `INSERT INTO equipos 
        (name, brand, model, serial_number, status)
        VALUES (?, ?, ?, ?, ?)`,
        [eq.name, eq.brand, eq.model, eq.serial, eq.status]
      );

      inserted++;
    }

    return NextResponse.json({
      message: "Equipos insertados",
      inserted
    });

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}