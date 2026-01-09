import { useNavigate } from "react-router-dom";

export default function TaskDetailPage() {
  const navigate = useNavigate();

  function borrar() {
    navigate("/dashboard", { replace: true });
  }

  return <button onClick={borrar}>Borrar</button>;
}
