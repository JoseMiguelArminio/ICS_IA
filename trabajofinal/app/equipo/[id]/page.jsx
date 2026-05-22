async function getEquipo(id) {

  const res = await fetch(
    `http://localhost:3000/api/equipos`
  );

  const data = await res.json();

  return data.find(eq => eq.id == id);
}

export default async function EquipoDetail({
  params
}) {

  const equipo = await getEquipo(params.id);

  if (!equipo) {
    return <h1>No existe</h1>;
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>{equipo.name}</h1>

      <p>Marca: {equipo.brand}</p>

      <p>Modelo: {equipo.model}</p>

      <p>Estado: {equipo.status}</p>

    </div>
  );
}