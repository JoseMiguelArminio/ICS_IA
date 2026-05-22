import Link from "next/link";

export default function ListaRecetas({ recetas }) {

    return (

        <div>

            {recetas.map((receta) => (

                <div key={receta.id} className="card">

                    <h2>{receta.titulo}</h2>

                    <p>{receta.descripcion_corta}</p>

                    <p>Tiempo: {receta.tiempo_coccion} min</p>

                    <Link href={`/recetas/${receta.id}`}>
                        Ver receta
                    </Link>

                </div>

            ))}

        </div>
    );
}