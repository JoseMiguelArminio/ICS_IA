import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/" style={{ marginRight: "1rem" }}>
        Inicio
      </NavLink>
      <NavLink to="/projects">Proyectos</NavLink>
    </nav>
  );
}
