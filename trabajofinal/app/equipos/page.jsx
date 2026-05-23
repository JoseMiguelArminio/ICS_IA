import Link from "next/link";

async function getEquipos() {

  const res = await fetch(
    "http://localhost:3000/api/equipos",
    {
      cache: "no-store"
    }
  );

  return res.json();
}

export default async function EquiposPage() {

  const equipos = await getEquipos();

  return (

    <div style={{ padding: 20 }}>

      <h1>Listado de Equipos</h1>

      {
        equipos.map((equipo) => (

          <div
            key={equipo.id}
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 10
            }}
          >

            <h2>{equipo.name}</h2>

            <p>Marca: {equipo.brand}</p>

            <p>Modelo: {equipo.model}</p>

            <p>Estado: {equipo.status}</p>

            <Link href={`/equipos/${equipo.id}`}>
              Ver detalle
            </Link>

          </div>
        ))
      }

    </div>
  );
}