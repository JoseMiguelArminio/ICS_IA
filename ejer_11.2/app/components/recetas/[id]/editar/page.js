import FormReceta from "@/app/components/FormReceta";

import { getRecetaById } from "@/lib/queries";

import { editarReceta } from "../../actions";

export default async function EditarRecetaPage({ params }) {

    const receta = await getRecetaById(params.id);

    if (!receta) {
        return <p>Receta no encontrada</p>;
    }

    const editarConId = editarReceta.bind(null, params.id);

    return (

        <main>

            <h1>Editar Receta</h1>

            <FormReceta
                action={editarConId}
                receta={receta}
                textoBoton="Actualizar Receta"
            />

        </main>
    );
}