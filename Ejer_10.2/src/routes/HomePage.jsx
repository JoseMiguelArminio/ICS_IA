import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenidos al Gestor de Proyectos</h1>
      <p>Gestiona tus proyectos y tareas de forma fácil e interactiva.</p>
      <Link to="/projects">Ver Proyectos</Link>
    </div>
  );
}
