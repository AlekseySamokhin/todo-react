import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todosSlice,
  },
});
