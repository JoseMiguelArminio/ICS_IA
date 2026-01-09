import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Inicio
      </NavLink>
      {" | "}
      <NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>
        Artículos
      </NavLink>
    </nav>
  );
}
