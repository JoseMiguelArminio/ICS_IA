import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Inicio</NavLink> | 
        <NavLink to="/dashboard">Panel</NavLink> | 
        <NavLink to="/profile">Perfil</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
