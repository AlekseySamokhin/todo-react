import { createSelector } from "reselect";

const getShowFiltered = (state) => state.todos.filter;
const getTodoList = (state) => state.todos.todoList;

export const getShowTodo = createSelector(
  [getShowFiltered, getTodoList],
  (filter, todoList) => {
    switch (filter) {
      case "all":
        return todoList;
      case "active":
        return todoList.filter((todo) => !todo.completed);
      case "completed":
        return todoList.filter((todo) => todo.completed);
      default:
    }
  }
);
