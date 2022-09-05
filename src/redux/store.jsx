import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

const store = configureStore({
  reducer: { todosReducer },
  devTools: process.env.NODE_ENV === "developmnet",
});

export default store;
