import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodosState } from "./types";

import type { FilterTypes } from "./types";

// import { getTodoItemsFromLocalStorage } from "./useLocalStorage";

import {
  getTodosThunk,
  createTodoThunk,
  deleteTodoThunk,
  updateTodoThunk,
  toggleStatusTodoThunk,
  clearCompletedTodoThunk,
} from "./actionsThunk/todoThunk";

const initialState: ITodosState = {
  // todos: getTodoItemsFromLocalStorage(),
  todos: [],
  todosFilter: "all",
  error: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    filterSelected: (state, action: PayloadAction<FilterTypes>) => {
      state.todosFilter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = action.payload;

      state.error = "";
    });

    builder.addCase(getTodosThunk.rejected, (state, action) => {
      if (!action.payload) return;

      state.error = action.payload;

      console.error(state.error);
    });

    builder.addCase(createTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos.push(action.payload);

      state.error = "";
    });

    builder.addCase(createTodoThunk.rejected, (state, action) => {
      if (!action.payload) return;

      state.error = action.payload;

      console.error(state.error);
    });

    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      state.error = "";
    });

    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      if (!action.payload) return;

      state.error = action.payload;

      console.error(state.error);
    });

    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );

      state.todos[index].title = action.payload.title;
      state.todos[index].completed = action.payload.completed;

      state.error = "";
    });

    builder.addCase(updateTodoThunk.rejected, (state, action) => {
      if (!action.payload) return;

      state.error = action.payload;

      console.error(state.error);
    });

    builder.addCase(toggleStatusTodoThunk.fulfilled, (state, action) => {
      state.todos.forEach((todo) => (todo.completed = action.payload));

      state.error = "";
    });

    builder.addCase(toggleStatusTodoThunk.rejected, (state, action) => {
      if (!action.payload) return;

      state.error = action.payload;

      console.error(state.error);
    });

    builder.addCase(clearCompletedTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = action.payload;
    });

    builder.addCase(clearCompletedTodoThunk.rejected, (state, action) => {
      if (!action.payload) return;

      state.error = action.payload;

      console.error(state.error);
    });
  },
});

// Action creators are generated for each case reducer function
export const { filterSelected } = todoSlice.actions;

export default todoSlice.reducer;
