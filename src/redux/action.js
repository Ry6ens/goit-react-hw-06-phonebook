// import { addBook, removeBook } from "./types";

import { createAction, nanoid } from "@reduxjs/toolkit";

// export const addProductAction = (product) => {
//   return { type: addBook, payload: product };
// };

// export const removeProductAction = (productId) => {
//   return { type: removeBook, payload: productId };
// };

export const addContactAction = createAction(
  "addContactAction",
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const removeContactAction = createAction("removeContactAction");

export const filterContactAction = createAction("filterContactAction");
