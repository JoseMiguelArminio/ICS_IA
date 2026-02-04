let projects = [
  { id: "p1", name: "Proyecto A" },
  { id: "p2", name: "Proyecto B" },
];

let tasks = [
  { id: "t1", projectId: "p1", title: "Tarea 1", completed: false },
  { id: "t2", projectId: "p1", title: "Tarea 2", completed: true },
];

// Simula un fetch de proyectos
export function getProjects() {
  return new Promise((resolve) => setTimeout(() => resolve([...projects]), 500));
}

// Simula fetch de proyecto por id
export function getProjectById(projectId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const project = projects.find((p) => p.id === projectId);
      const projectTasks = tasks.filter((t) => t.projectId === projectId);
      resolve({ ...project, tasks: projectTasks });
    }, 500)
  );
}

// Crear proyecto
export function createProject(name) {
  const newProject = { id: `p${projects.length + 1}`, name };
  projects.push(newProject);
  return newProject;
}

// Crear tarea
export function createTask(projectId, title) {
  const newTask = { id: `t${tasks.length + 1}`, projectId, title, completed: false };
  tasks.push(newTask);
  return newTask;
}

// Alternar tarea
export function toggleTaskCompleted(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) task.completed = !task.completed;
  return task;
}

// Eliminar tarea
export function deleteTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
}

// Eliminar proyecto y sus tareas
export function deleteProject(projectId) {
  projects = projects.filter((p) => p.id !== projectId);
  tasks = tasks.filter((t) => t.projectId !== projectId);
}
