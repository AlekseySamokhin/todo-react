import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/todoApi";
import { ITodoItem } from "../types";

export const getTodosThunk = createAsyncThunk<ITodoItem[], undefined, {rejectValue: string}>(
  "todos/getTodos",
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.getTodos();

      return response.data as ITodoItem[];
    } catch(err) {

      return rejectWithValue(`Server cannot find data! Unable to get todos! ${err}`);
    }
  }
);

export const createTodoThunk = createAsyncThunk(
  "todos/createTodo",
  async (title: string, {rejectWithValue}) => {
    try {
      const response = await api.createTodo(title);

      return response.data as ITodoItem;
    } catch(err) {
      
      return rejectWithValue(`Server error! Unable to create task! ${err}`);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, {rejectWithValue}) => {
    try {
      await api.deleteTodo(id);

      return id as number;
    } catch(err) {
      return rejectWithValue(`Server error! Unable to create task! ${err}`);
    }
  }
);

export const updateTodoThunk = createAsyncThunk(
  "todos/updateTodo",
  async (updateTodo: ITodoItem, {rejectWithValue}) => {
    try {
    const { title, completed, id } = updateTodo;

    const response = await api.updateTodo({ title, completed, id });

    return response.data as ITodoItem;
    } catch(err) {
      return rejectWithValue(`Server error! Unable to update task! ${err}`);
    }
  }
);

export const toggleStatusTodoThunk = createAsyncThunk(
  "todos/completedAllTodo",
  async (isCompletedAll: boolean, {rejectWithValue}) => {
    try {
    await api.toggleStatusAllTodo(isCompletedAll);

    return isCompletedAll as boolean;
    } catch(err) {
      return rejectWithValue(`Server error! Unable to toogle status todo! ${err}`);
    }
  }
);

export const clearCompletedTodoThunk = createAsyncThunk(
  "todos/clearCompleted",
  async (_, {rejectWithValue}) => {
    try {
    const response = await api.clearCompletedTodo();

    return response.data as ITodoItem[];
    } catch(err) {
      return rejectWithValue(`Server error! Unable to clear completed todo! ${err}`);
    }
  }
);
