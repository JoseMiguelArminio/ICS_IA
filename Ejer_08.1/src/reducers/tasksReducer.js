export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "TOGGLE":
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE":
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};
