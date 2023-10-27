import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todo-reducers";

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})

export default store