import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./Reducers/todo-reducers";

const store = configureStore({
  reducer: {
    todo: todosReducer
  }
})

export default store