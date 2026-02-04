import { useLoaderData, useFetcher, Form, useSubmit } from "react-router-dom";
import { getProjectById, toggleTaskCompleted, deleteTask, deleteProject } from "../utils/api";

export async function loader({ params }) {
  return await getProjectById(params.projectId);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "toggle") {
    toggleTaskCompleted(formData.get("taskId"));
  } else if (intent === "deleteTask") {
    deleteTask(formData.get("taskId"));
  } else if (intent === "deleteProject") {
    deleteProject(params.projectId);
    return { redirect: "/projects" };
  }

  return null;
}

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();

  const handleDeleteTask = (taskId) => {
    if (window.confirm("¿Eliminar esta tarea?")) {
      submit({ intent: "deleteTask", taskId }, { method: "post" });
    }
  };

  const handleDeleteProject = () => {
    if (window.confirm("¿Eliminar este proyecto?")) {
      submit({ intent: "deleteProject" }, { method: "post" });
    }
  };

  return (
    <div>
      <h1>{project.name}</h1>
      <button onClick={handleDeleteProject}>Eliminar Proyecto</button>
      <h2>Tareas</h2>
      <ul>
        {project.tasks.map((t) => (
          <li key={t.id}>
            <fetcher.Form method="post">
              <input type="hidden" name="taskId" value={t.id} />
              <input type="hidden" name="intent" value="toggle" />
              <label>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={(e) => fetcher.submit(e.target.form)}
                />
                {t.title}
              </label>
            </fetcher.Form>
            <button onClick={() => handleDeleteTask(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Link to={`/projects/${project.id}/new-task`}>Añadir Nueva Tarea</Link>
    </div>
  );
}
