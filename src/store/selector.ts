import { createSelector } from "reselect";

import { RootState } from "./store";

export const getTodos = (state: RootState) => state.todoList.todos;
export const getTodosFilter = (state: RootState) => state.todoList.todosFilter;

export const getFilteredTodos = createSelector(
  getTodos,
  getTodosFilter,
  (todos, todosFilter) => {
    switch (todosFilter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
);
