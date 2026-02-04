import { Form, useActionData, useNavigation } from "react-router-dom";
import { createTask } from "../utils/api";

export async function action({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");

  if (!title) {
    return { error: "El título de la tarea no puede estar vacío" };
  }

  createTask(params.projectId, title);
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Nueva Tarea</h1>
      <Form method="post">
        <label>
          Título:
          <input type="text" name="title" />
        </label>
        <button disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Añadir Tarea"}</button>
      </Form>
      {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
    </div>
  );
}
