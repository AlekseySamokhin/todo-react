import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: JSON.parse(localStorage.getItem("todos")) || [],
    isDoneAll: false,
    filter: "all",
  },
  reducers: {
    // Done
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    // Done
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },

    // Done
    changeTodo: (state, action) => {
      for (let todo of state.todoList) {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      }
    },

    // Done
    toggleTodo: (state, action) => {
      for (let todo of state.todoList) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      }
    },

    // Done
    toggleTodoAll: (state) => {
      for (let todo of state.todoList) {
        todo.completed = !state.isDoneAll;
      }

      state.isDoneAll = !state.isDoneAll;
    },

    // Done
    deleteCompletedTodo: (state) => {
      state.todoList = state.todoList.filter((todo) => !todo.completed);
    },

    selectShowedFiltered: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  removeTodo,
  changeTodo,
  toggleTodo,
  toggleTodoAll,
  deleteCompletedTodo,
  selectShowedFiltered,
} = todosSlice.actions;

export default todosSlice.reducer;
