"use server";

import pool from "@/lib/db";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";


export async function crearReceta(formData) {

    const titulo = formData.get("titulo");
    const descripcion_corta = formData.get("descripcion_corta");
    const ingredientes = formData.get("ingredientes");
    const instrucciones = formData.get("instrucciones");
    const tiempo_coccion = formData.get("tiempo_coccion");


    if (
        !titulo ||
        !descripcion_corta ||
        !ingredientes ||
        !instrucciones ||
        !tiempo_coccion
    ) {

        throw new Error("Todos los campos son obligatorios");
    }


    const [result] = await pool.query(`
        INSERT INTO recetas
        (
            titulo,
            descripcion_corta,
            ingredientes,
            instrucciones,
            tiempo_coccion
        )
        VALUES (?, ?, ?, ?, ?)
    `, [
        titulo,
        descripcion_corta,
        ingredientes,
        instrucciones,
        tiempo_coccion
    ]);


    revalidatePath("/");


    redirect(`/recetas/${result.insertId}`);
}



export async function editarReceta(id, formData) {

    const titulo = formData.get("titulo");
    const descripcion_corta = formData.get("descripcion_corta");
    const ingredientes = formData.get("ingredientes");
    const instrucciones = formData.get("instrucciones");
    const tiempo_coccion = formData.get("tiempo_coccion");


    if (
        !titulo ||
        !descripcion_corta ||
        !ingredientes ||
        !instrucciones ||
        !tiempo_coccion
    ) {

        throw new Error("Todos los campos son obligatorios");
    }


    await pool.query(`
        UPDATE recetas
        SET
            titulo = ?,
            descripcion_corta = ?,
            ingredientes = ?,
            instrucciones = ?,
            tiempo_coccion = ?
        WHERE id = ?
    `, [
        titulo,
        descripcion_corta,
        ingredientes,
        instrucciones,
        tiempo_coccion,
        id
    ]);


    revalidatePath("/");
    revalidatePath(`/recetas/${id}`);


    redirect(`/recetas/${id}`);
}



export async function borrarReceta(formData) {

    const id = formData.get("id");


    await pool.query(`
        DELETE FROM recetas
        WHERE id = ?
    `, [id]);


    revalidatePath("/");


    redirect("/");
}



export async function crearComentario(formData) {

    const receta_id = formData.get("receta_id");

    const autor = formData.get("autor");

    const texto = formData.get("texto");


    if (!autor || !texto) {

        throw new Error("Todos los campos son obligatorios");
    }


    await pool.query(`
        INSERT INTO comentarios
        (
            receta_id,
            autor,
            texto
        )
        VALUES (?, ?, ?)
    `, [
        receta_id,
        autor,
        texto
    ]);


    revalidatePath(`/recetas/${receta_id}`);
}