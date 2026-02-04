import { useFetcher, useSubmit } from "react-router-dom";

export default function TaskList({ tasks }) {
  const fetcher = useFetcher();
  const submit = useSubmit();

  const handleDeleteTask = (taskId) => {
    if (window.confirm("¿Eliminar esta tarea?")) {
      submit({ intent: "deleteTask", taskId }, { method: "post" });
    }
  };

  return (
    <ul>
      {tasks.map((t) => (
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
  );
}
