import { Link } from "react-router-dom";

export default function TaskListPage() {
  return (
    <>
      <h2>Lista de tareas</h2>
      <Link to="/dashboard/task/1">Ver tarea 1</Link>
    </>
  );
}
