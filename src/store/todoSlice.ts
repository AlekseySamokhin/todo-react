import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodosState, ITodoItem } from "./types";

import type { FilterTypes } from "./types";

import { getTodoItemsFromLocalStorage } from "./useLocalStorage";

import {
  getTodosThunk,
  createTodoThunk,
  deleteTodoThunk,
  updateTodoThunk,
} from "./actionsThunk/todoThunk";

const initialState: ITodosState = {
  // todos: getTodoItemsFromLocalStorage(),
  todos: [],
  isCompletedAll: false,
  todosFilter: "all",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // DONE

    // todoAdded: (state, action: PayloadAction<string>) => {
    //   const newTodo: ITodoItem = {
    //     title: action.payload,
    //     completed: false,
    //     id: uuidv4(),
    //   };

    //   state.todos.push(newTodo);
    // },

    // DONE
    // todoDeleted: (state, action: PayloadAction<string>) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },

    // todoEdited: (
    //   state,
    //   action: PayloadAction<{ id: string; title: string }>
    // ) => {
    //   state.todos.forEach((todo) => {
    //     if (todo.id === action.payload.id) {
    //       todo.title = action.payload.title;
    //     }
    //   });
    // },

    // todoCompleted: (state, action: PayloadAction<string>) => {
    //   state.todos.forEach((todo) => {
    //     if (todo.id === action.payload) {
    //       todo.completed = !todo.completed;
    //     }
    //   });
    // },

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

  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = action.payload;
      }
    });
    builder.addCase(getTodosThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(createTodoThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.todos.push(action.payload);
      }
    });
    builder.addCase(createTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(deleteTodoThunk.fulfilled, (state, action) => {
      if (action.payload) {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      }
    });

    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });

    builder.addCase(updateTodoThunk.fulfilled, (state, action) => {
      console.log("PAYLOAD", action.payload.title);
      if (action.payload) {
        const index = state.todos.findIndex(
          (item) => item.id === action.payload.id
        );

        console.log("INDEX", index);

        state.todos[index].title = action.payload.title;
        state.todos[index].completed = action.payload.completed;
      }
    });

    builder.addCase(updateTodoThunk.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  // todoAdded,
  // todoDeleted,
  // todoEdited,
  // todoCompleted,
  allCompleted,
  compeletedCleared,
  filterSelected,
} = todoSlice.actions;

export default todoSlice.reducer;
