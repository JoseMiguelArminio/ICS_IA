export default function FormReceta({
    action,
    receta = {},
    textoBoton
}) {

    return (

        <form action={action}>

            <div>
                <label>Título</label>

                <input
                    type="text"
                    name="titulo"
                    defaultValue={receta.titulo}
                    required
                />
            </div>

            <div>
                <label>Descripción corta</label>

                <textarea
                    name="descripcion_corta"
                    defaultValue={receta.descripcion_corta}
                    required
                />
            </div>

            <div>
                <label>Ingredientes</label>

                <textarea
                    name="ingredientes"
                    defaultValue={receta.ingredientes}
                    required
                />
            </div>

            <div>
                <label>Instrucciones</label>

                <textarea
                    name="instrucciones"
                    defaultValue={receta.instrucciones}
                    required
                />
            </div>

            <div>
                <label>Tiempo de cocción</label>

                <input
                    type="number"
                    name="tiempo_coccion"
                    defaultValue={receta.tiempo_coccion}
                    required
                />
            </div>

            <button type="submit">
                {textoBoton}
            </button>

        </form>
    );
}