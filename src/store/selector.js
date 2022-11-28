import { createSelector } from "reselect";

const getFilterTodoList = (state) => state.todos.filter;
const getTodoList = (state) => state.todos.todoList;

export const getFilteredTodoList = createSelector(
  [getFilterTodoList, getTodoList],
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
