import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/todoApi";
import { ITodoItem } from "../types";

export const getTodosThunk = createAsyncThunk("todos/getTodos", async () => {
  try {
    const todos = await api.getTodos();
    return todos.data;
  } catch {}
});

export const createTodoThunk = createAsyncThunk(
  "todos/createTodo",
  async (title: string) => {
    try {
      const todo = await api.createTodo(title);

      return todo.data;
    } catch {}
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    try {
      await api.deleteTodo(id);

      return id;
    } catch {}
  }
);

export const updateTodoThunk = createAsyncThunk(
  "todos/updateTodo",
  async (updateTodo: ITodoItem) => {
    const { title, completed, id } = updateTodo;

    const todo = await api.updateTodo({ title, completed, id });

    return todo.data;
  }
);

export const toggleStatusTodoThunk = createAsyncThunk(
  "todos/completedAllTodo",
  async (isCompletedAll: boolean) => {
    await api.toggleStatusAllTodo(isCompletedAll);

    return isCompletedAll;
  }
);