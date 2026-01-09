import { useContext, useCallback } from "react";
import { TasksContext } from "../../context/TasksContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, dispatch } = useContext(TasksContext);

  const toggleTask = useCallback(id => {
    dispatch({ type: "TOGGLE", payload: id });
  }, [dispatch]);

  const deleteTask = useCallback(id => {
    dispatch({ type: "DELETE", payload: id });
  }, [dispatch]);

  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => toggleTask(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </>
  );
}
