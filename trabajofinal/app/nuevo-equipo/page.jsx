async function createEquipo(formData) {

  "use server";

  const data = {
    name: formData.get("name"),
    brand: formData.get("brand"),
    model: formData.get("model"),
    status: formData.get("status")
  };

  await fetch("http://localhost:3000/api/equipos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export default function NuevoEquipoPage() {

  return (

    <div style={{ padding: 20 }}>

      <h1>Nuevo Equipo</h1>

      <form action={createEquipo}>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
        />

        <br /><br />

        <input
          type="text"
          name="brand"
          placeholder="Marca"
          required
        />

        <br /><br />

        <input
          type="text"
          name="model"
          placeholder="Modelo"
          required
        />

        <br /><br />

        <select name="status">

          <option value="Disponible">
            Disponible
          </option>

          <option value="En uso">
            En uso
          </option>

          <option value="Averiado">
            Averiado
          </option>

        </select>

        <br /><br />

        <button type="submit">
          Crear Equipo
        </button>

      </form>

    </div>
  );
}