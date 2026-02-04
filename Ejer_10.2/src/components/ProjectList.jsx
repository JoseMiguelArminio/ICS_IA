import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  if (!projects || projects.length === 0) return <p>No hay proyectos aún.</p>;

  return (
    <ul>
      {projects.map((p) => (
        <li key={p.id}>
          <Link to={`/projects/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  );
}
