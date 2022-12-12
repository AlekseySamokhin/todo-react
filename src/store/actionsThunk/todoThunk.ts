import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/todoApi";
import { ITodoItem } from "../types";

export const getTodosThunk = createAsyncThunk(
  "todos/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await api.getTodos();
      return todos.data;
    } catch {}
  }
);

export const createTodoThunk = createAsyncThunk(
  "todos/createTodo",
  async (title: string, { rejectWithValue }) => {
    try {
      const todo = await api.createTodo(title);

      return todo.data;
    } catch {}
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, { rejectWithValue }) => {
    try {
      await api.deleteTodo(id);

      return id;
    } catch {}
  }
);

export const updateTodoThunk = createAsyncThunk(
  "todos/updateTodo",
  async (updateTodo: ITodoItem, { rejectWithValue }) => {
    const { id, ...fields } = updateTodo;

    const { title, completed } = fields;

    const todo = await api.updateTodo(id, { title, completed });

    return todo.data;
  }
);
