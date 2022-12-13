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
} from "./actionsThunk/todoThunk";

const initialState: ITodosState = {
  // todos: getTodoItemsFromLocalStorage(),
  todos: [],
  todosFilter: "all",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    compeletedCleared: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    filterSelected: (state, action: PayloadAction<FilterTypes>) => {
      state.todosFilter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = action.payload;
    });

    builder.addCase(getTodosThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });

    builder.addCase(createTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos.push(action.payload);
    });

    builder.addCase(createTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });

    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });

    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });

    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      if (!action.payload) return;

      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );

      state.todos[index].title = action.payload.title;
      state.todos[index].completed = action.payload.completed;
    });

    builder.addCase(updateTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });

    builder.addCase(toggleStatusTodoThunk.fulfilled, (state, action) => {
      state.todos.forEach((todo) => (todo.completed = action.payload));
    });

    builder.addCase(toggleStatusTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

// Action creators are generated for each case reducer function
export const { compeletedCleared, filterSelected } = todoSlice.actions;

export default todoSlice.reducer;
