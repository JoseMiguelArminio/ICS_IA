import FormReceta from "@/app/components/FormReceta";

import { crearReceta } from "../actions";

export default function NuevaRecetaPage() {

    return (

        <main>

            <h1>Nueva Receta</h1>

            <FormReceta
                action={crearReceta}
                textoBoton="Crear Receta"
            />

        </main>
    );
}