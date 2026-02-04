import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
