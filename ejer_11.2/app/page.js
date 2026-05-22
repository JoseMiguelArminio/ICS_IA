import Link from "next/link";
import { getRecetas } from "@/lib/queries";

export default async function Home() {

    const recetas = await getRecetas();

    return (

        <main>

            <h1>Blog de Recetas</h1>

            <Link href="/recetas/nueva">
                + Crear nueva receta
            </Link>

            <hr />

            {recetas.map((receta) => (

                <div key={receta.id} className="card">

                    <h2>{receta.titulo}</h2>

                    <p>{receta.descripcion_corta}</p>

                    <Link href={`/recetas/${receta.id}`}>
                        Ver receta
                    </Link>

                </div>

            ))}

        </main>
    );
}