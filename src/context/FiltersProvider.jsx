// src/context/FiltersProvider.jsx
import { useReducer } from "react";
import { FiltersContext } from "./FiltersContext";
import { filtersReducer, filtersInitialState } from "./reducers/filtersReducer";

export function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(filtersReducer, filtersInitialState);

  const setType = (value) =>
    dispatch({ type: "SET_TYPE", payload: value });

  const setMaxPrice = (value) =>
    dispatch({ type: "SET_MAX_PRICE", payload: value });

  const resetFilters = () =>
    dispatch({ type: "RESET" });

  return (
    <FiltersContext.Provider
      value={{
        type: state.type,
        maxPrice: state.maxPrice,
        setType,
        setMaxPrice,
        resetFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
