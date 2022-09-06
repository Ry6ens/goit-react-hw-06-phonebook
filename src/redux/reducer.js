import { createReducer } from "@reduxjs/toolkit";

import {
  addContactAction,
  removeContactAction,
  filterContactAction,
} from "./action";

const initialState = [];
const initialFilterState = "";

export const contactReducer = createReducer(initialState, (builder) => {
  builder.addCase(addContactAction, (state, { payload }) => [
    ...state,
    payload,
  ]);
  builder.addCase(removeContactAction, (state, { payload }) =>
    state.filter((el) => el.id !== payload)
  );
});

export const filterReducer = createReducer(initialFilterState, (builder) => {
  builder.addCase(filterContactAction, (state, { payload }) => {
    return payload;
  });
});
