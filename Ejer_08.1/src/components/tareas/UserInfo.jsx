import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function UserInfo() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <strong>Logueado como: {user}</strong>

      <div>
        <select value={user} onChange={e => setUser(e.target.value)}>
          <option value="Ana">Ana</option>
          <option value="Luis">Luis</option>
          <option value="Invitado">Invitado</option>
        </select>
      </div>
    </div>
  );
}
