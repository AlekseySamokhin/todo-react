import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todoList: todoSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
