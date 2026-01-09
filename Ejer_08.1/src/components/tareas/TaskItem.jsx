import { memo, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function TaskItem({ task, onToggle, onDelete }) {
  const { user } = useContext(AuthContext);
  const isOwner = task.author === user;
  const disabled = user === "Invitado" || !isOwner;

  return (
    <div>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text} (autor: {task.author})
      </span>

      <button disabled={disabled} onClick={onToggle}>Completar</button>
      <button disabled={disabled} onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default memo(TaskItem);
