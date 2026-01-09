import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <aside>
        <NavLink to="/dashboard">Ver tareas</NavLink><br />
        <NavLink to="/dashboard/new">Añadir tarea</NavLink>
      </aside>
      <Outlet />
    </div>
  );
}
