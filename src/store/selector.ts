import { createSelector } from "reselect";

import { TodosState } from "./types";

export const getTodos = (state: TodosState) => state.todos;
export const getTodosFilter = (state: TodosState) => state.todosFilter;

export const getFilteredTodos = createSelector(
  getTodos,
  getTodosFilter,
  (todos, todosFilter) => {
    switch (todosFilter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
    }
  }
);
