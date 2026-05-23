import { NextResponse } from "next/server";
import pool from "@/lib/db";

// GET EQUIPOS + FILTROS SQL DINÁMICOS
export async function GET(req) {

  try {

    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name");
    const brand = searchParams.get("brand");
    const status = searchParams.get("status");
    const order = searchParams.get("order");

    let sql = "SELECT * FROM equipos WHERE 1=1";
    let values = [];

    // filtro nombre
    if (name) {
      sql += " AND name LIKE ?";
      values.push(`%${name}%`);
    }

    // filtro marca
    if (brand) {
      sql += " AND brand = ?";
      values.push(brand);
    }

    // filtro estado
    if (status) {
      sql += " AND status = ?";
      values.push(status);
    }

    // ordenación
    if (order === "name") {
      sql += " ORDER BY name ASC";
    }

    if (order === "brand") {
      sql += " ORDER BY brand ASC";
    }

    const [rows] = await pool.query(sql, values);

    return NextResponse.json(rows);

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}


// CREAR EQUIPO
export async function POST(req) {

  try {

    const {
      name,
      brand,
      model,
      serial_number,
      status
    } = await req.json();

    // validaciones
    if (!name || !brand || !serial_number) {
      return NextResponse.json(
        { error: "Campos obligatorios" },
        { status: 400 }
      );
    }

    // evitar duplicados
    const [exists] = await pool.query(
      "SELECT id FROM equipos WHERE serial_number = ?",
      [serial_number]
    );

    if (exists.length > 0) {
      return NextResponse.json(
        { error: "Número de serie duplicado" },
        { status: 400 }
      );
    }

    await pool.query(
      `INSERT INTO equipos
      (name, brand, model, serial_number, status)
      VALUES (?, ?, ?, ?, ?)`,
      [
        name,
        brand,
        model,
        serial_number,
        status
      ]
    );

    return NextResponse.json({
      message: "Equipo creado"
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}