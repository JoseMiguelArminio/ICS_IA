import Link from "next/link";

import { getRecetaById, getComentarios } from "@/lib/queries";

import { borrarReceta, crearComentario } from "../actions";

import Comentarios from "@/app/components/Comentarios";

import FormComentario from "@/app/components/FormComentario";

export default async function RecetaPage({ params }) {

    const receta = await getRecetaById(params.id);

    const comentarios = await getComentarios(params.id);

    if (!receta) {
        return <p>Receta no encontrada</p>;
    }

    return (

        <main>

            <h1>{receta.titulo}</h1>

            <p>{receta.descripcion_corta}</p>

            <p>{receta.ingredientes}</p>

            <p>{receta.instrucciones}</p>

            <p>Tiempo de cocción: {receta.tiempo_coccion} minutos</p>

            <Link href={`/recetas/${receta.id}/editar`}>
                Editar receta
            </Link>

            <form action={borrarReceta}>
                <input type="hidden" name="id" value={receta.id} />
                <button type="submit">
                    Borrar receta
                </button>
            </form>

            <hr />

            <h2>Comentarios</h2>

            <Comentarios comentarios={comentarios} />

            <FormComentario recetaId={receta.id} action={crearComentario} />

        </main>
    );
}