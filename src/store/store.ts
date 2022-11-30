import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
