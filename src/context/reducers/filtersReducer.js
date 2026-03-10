// src/context/reducers/filtersReducer.js

export const filtersInitialState = {
  type: "",
  maxPrice: "",
};

export function filtersReducer(state, action) {
  switch (action.type) {
    case "SET_TYPE":
      return { ...state, type: action.payload };

    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.payload };

    case "RESET":
      return filtersInitialState;

    default:
      return state;
  }
}
