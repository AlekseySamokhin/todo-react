import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    filter: "all",
  },
  reducers: {
    createTodo: (state, action) => {
      state.todoList.push(action.payload)
    },

    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      state.todoList = state.todoList.map(todo => {
        if(todo.id === action.payload.id) {
          return { ...todo, action.payload.title };
        }

        return todo;
      })
    },

  }
});

// Action creators are generated for each case reducer function
export const {
  createTodo,
  deleteTodo,
  editTodo,
  checkTodo,
  checkTodoAll,
  selectFilter,
  clearCompletedTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
