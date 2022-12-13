import { ITodoItem } from "./types";

import type { RootState } from "./store";

export const isCompleted = (state: RootState) => state.todoList.isCompletedAll;

console.log(isCompleted);

// export const TODO_STORAGE_KEY: string = "todos";

// export const getTodoItemsFromLocalStorage = () => {
//   try {
//     const storageValue: ITodoItem[] = JSON.parse(
//       localStorage.getItem(TODO_STORAGE_KEY) || ""
//     );

//     return storageValue;
//   } catch {
//     return [];
//   }
// };

// export const saveTodoItemsToLocalStorage = (storageValue: ITodoItem[]) => {
//   localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(storageValue));
// };

// export const checkAllCompletedTodo = (todos: ITodoItem[]) => {
//   return todos.every((todo) => todo.completed);
// };

export const checkAllCompletedTodo = () => {};
