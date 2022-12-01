import { createSelector } from "reselect";

import type { RootState } from "./store";

export const getTodos = (state: RootState) => state.todoList.todos;
export const getTodosFilter = (state: RootState) => state.todoList.todosFilter;

export const getFilteredTodos = createSelector(
  [getTodosFilter, getTodos],
  (todosFilter, todos) => {
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
