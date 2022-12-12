import { ITodoItem } from "../store/types";

import api from "./api";

interface ITodoUpdateItem {
  title: string;
  completed: boolean;
}

const getTodos = () => {
  return api.get("/todos");
};

const createTodo = (title: string) => {
  return api.post<ITodoItem>("/todos", { title });
};

const deleteTodo = (id: number) => {
  return api.delete<ITodoItem>(`/todos/${id}`);
};

const updateTodo = (id: number, propetry: ITodoUpdateItem) => {
  return api.patch<ITodoItem>(`/todos/${id}`, {
    title: propetry.title,
    completed: propetry.completed,
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { createTodo, getTodos, deleteTodo, updateTodo };
