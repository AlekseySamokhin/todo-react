import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

import { todoData } from "./todo-data";

import { TodosState, TodoItem } from "./types";

import type { FilterTypes } from "./types";

const initialState: TodosState = {
  todos: [],
  isCompletedAll: false,
  todosFilter: "all",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItem = {
        title: action.payload,
        completed: false,
        id: nanoid(),
      };

      state.todos.push(newTodo);
    },

    todoDeleted: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    todoEdited: (
      state,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
    },

    todoCompleted: (state, action: PayloadAction<string>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },

    allCompleted: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = !state.isCompletedAll;
      });

      state.isCompletedAll = !state.isCompletedAll;
    },

    compeletedCleared: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);

      state.isCompletedAll = !state.isCompletedAll;
    },

    filterSelected: (state, action: PayloadAction<FilterTypes>) => {
      state.todosFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  todoAdded,
  todoDeleted,
  todoEdited,
  todoCompleted,
  allCompleted,
  compeletedCleared,
  filterSelected,
} = todoSlice.actions;

export default todoSlice.reducer;
