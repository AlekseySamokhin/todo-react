import { createSlice } from "@reduxjs/toolkit";

import { dataTodo } from "./data";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: dataTodo,
    isCompletedAll: false,
    isFiltered: "all",
  },
  reducers: {
    todoAdded: (state, action) => {
      state.todoList.push(action.payload);
    },

    todoDeleted: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },

    todoEdited: (state, action) => {
      for (let todo of state.todoList) {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      }
    },

    todoCompleted: (state, action) => {
      for (let todo of state.todoList) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      }
    },

    allCompleted: (state) => {
      for (let todo of state.todoList) {
        todo.isCompletedAll = !state.isCompletedAll;
      }

      state.isCompletedAll = !state.isCompletedAll;
    },

    compeletedCleared: (state) => {
      state.todoList = state.todoList.filter((todo) => !todo.completed);
    },

    filterSelected: (state, action) => {
      state.isFiltered = action.payload;
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
