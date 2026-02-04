import { Form, useActionData, useNavigation } from "react-router-dom";
import { createProject } from "../utils/api";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");

  if (!name || name.length < 5) {
    return { error: "El nombre del proyecto debe tener al menos 5 caracteres" };
  }

  createProject(name);
  return redirect("/projects");
}

export default function NewProjectPage() {
  const actionData = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Crear Proyecto Nuevo</h1>
      <Form method="post">
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <button disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Crear Proyecto"}</button>
      </Form>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
    </div>
  );
}
