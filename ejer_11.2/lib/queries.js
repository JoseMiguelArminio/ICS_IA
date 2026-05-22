import pool from "./db";

export async function getRecetas() {

    const [rows] = await pool.query(`
        SELECT * FROM recetas
        ORDER BY fecha_creacion DESC
    `);

    return rows;
}

export async function getRecetaById(id) {

    const [rows] = await pool.query(`
        SELECT * FROM recetas
        WHERE id = ?
    `, [id]);

    return rows[0];
}

export async function getComentarios(recetaId) {

    const [rows] = await pool.query(`
        SELECT * FROM comentarios
        WHERE receta_id = ?
        ORDER BY fecha_creacion DESC
    `, [recetaId]);

    return rows;
}