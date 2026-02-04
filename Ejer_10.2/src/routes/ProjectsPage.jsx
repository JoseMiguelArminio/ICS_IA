import { useLoaderData, Link } from "react-router-dom";
import { getProjects } from "../utils/api";

export async function loader() {
  const projects = await getProjects();
  return projects;
}

export default function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <div>
      <h1>Proyectos</h1>
      <Link to="/projects/new">Crear Proyecto Nuevo</Link>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <Link to={`/projects/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
