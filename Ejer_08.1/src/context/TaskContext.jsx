import { createContext, useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";

export const TasksContext = createContext();

const initialTasks = [
  { id: 1, text: "Configurar entorno", author: "Ana", completed: false },
  { id: 2, text: "Implementar reducer", author: "Luis", completed: false }
];

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
