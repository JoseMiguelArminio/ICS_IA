export default function FormComentario({ recetaId, action }) {

    return (

        <form action={action}>

            <input type="hidden" name="receta_id" value={recetaId} />

            <div>

                <label>Autor</label>

                <input type="text" name="autor" required />

            </div>

            <div>

                <label>Comentario</label>

                <textarea name="texto" required />

            </div>

            <button type="submit">
                Añadir comentario
            </button>

        </form>
    );
}