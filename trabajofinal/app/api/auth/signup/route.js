import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {

  try {

    const { name, email } = await req.json();

    // validación
    if (!name || !email) {
      return NextResponse.json(
        { error: "Campos obligatorios" },
        { status: 400 }
      );
    }

    // comprobar duplicado
    const [exists] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (exists.length > 0) {
      return NextResponse.json(
        { error: "Email ya registrado" },
        { status: 400 }
      );
    }

    // insertar
    await pool.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );

    return NextResponse.json({
      message: "Usuario creado"
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}