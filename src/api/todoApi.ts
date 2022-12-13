import { ITodoItem } from "../store/types";

import api from "./api";

const getTodos = () => {
  return api.get("/todos");
};

const createTodo = (title: string) => {
  return api.post<ITodoItem>("/todos", { title });
};

const deleteTodo = (id: number) => {
  return api.delete<ITodoItem>(`/todos/${id}`);
};

const updateTodo = (property: ITodoItem) => {
  return api.patch<ITodoItem>(`/todos/${property.id}`, {
    title: property.title,
    completed: property.completed,
  });
};

const completedAllTodo = (isCompletedAll: boolean) => {
  return api.patch<ITodoItem[]>("/todos", { isCompletedAll });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  completedAllTodo,
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};
