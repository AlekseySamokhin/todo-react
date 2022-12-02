import { createSelector } from "reselect";

import type { RootState } from "./store";

export const getTodos = (state: RootState) => state.todoList.todos;
export const getTodosFilter = (state: RootState) => state.todoList.todosFilter;

export const getFilteredTodos = createSelector(
  [getTodosFilter, getTodos],
  (todosFilter, todos) => {
    if (todosFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (todosFilter === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  }
);
