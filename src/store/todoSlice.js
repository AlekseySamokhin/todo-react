import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

import { todoData } from "./todo-data";

const getInitialState = () => ({
  todoList: todoData,
  isCompletedAll: false,
  isFiltered: "all",
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: getInitialState(),
  reducers: {
    todoAdded: (state, action) => {
      const newTodo = {
        title: action.payload,
        completed: false,
        id: uuidv4(),
      };

      state.todoList.push(newTodo);
    },

    todoDeleted: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },

    todoEdited: (state, action) => {
      state.todoList.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
    },

    todoCompleted: (state, action) => {
      state.todoList.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },

    allCompleted: (state) => {
      state.todoList.forEach((todo) => {
        todo.completed = !state.isCompletedAll;
      });

      state.isCompletedAll = !state.isCompletedAll;
    },

    compeletedCleared: (state) => {
      state.todoList = state.todoList.filter((todo) => !todo.completed);

      state.isCompletedAll = !state.isCompletedAll;
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
