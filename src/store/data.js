const TODO_STORAGE_KEY = "todos";

export const dataTodo =
  JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
