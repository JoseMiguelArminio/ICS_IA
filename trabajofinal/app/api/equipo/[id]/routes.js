import { NextResponse } from "next/server";
import pool from "@/lib/db";

// ✏️ EDITAR
export async function PUT(req, { params }) {

  try {

    const { id } = params;

    const {
      name,
      brand,
      model,
      status
    } = await req.json();

    await pool.query(
      `UPDATE equipos
      SET name=?, brand=?, model=?, status=?
      WHERE id=?`,
      [
        name,
        brand,
        model,
        status,
        id
      ]
    );

    return NextResponse.json({
      message: "Equipo actualizado"
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}


// ❌ BORRAR
export async function DELETE(req, { params }) {

  try {

    const { id } = params;

    await pool.query(
      "DELETE FROM equipos WHERE id=?",
      [id]
    );

    return NextResponse.json({
      message: "Equipo eliminado"
    });

  } catch (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}