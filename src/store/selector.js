import { createSelector } from "reselect";

const getCurrentFilter = (state) => state.todos.isFiltered;
const getTodoList = (state) => state.todos.todoList;

export const filterTodos = createSelector(
  [getCurrentFilter, getTodoList],
  (filter, todoList) => {
    if (filter === "all") {
      return todoList;
    } else if (filter === "active") {
      return todoList.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todoList.filter((todo) => todo.completed);
    } else {
      console.log("No such filter exists!");
    }
  }
);
