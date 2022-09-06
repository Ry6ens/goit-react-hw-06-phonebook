import { combineReducers } from "redux";
import { contactReducer, filterReducer } from "./reducer";

export const rootReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});
