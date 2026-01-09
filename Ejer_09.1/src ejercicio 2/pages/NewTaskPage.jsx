import { useNavigate } from "react-router-dom";

export default function NewTaskPage() {
  const navigate = useNavigate();

  function guardarTarea() {
    navigate("/dashboard");
  }

  return <button onClick={guardarTarea}>Guardar</button>;
}
