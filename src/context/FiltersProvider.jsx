// src/context/FiltersProvider.jsx
import { useReducer, useCallback, useMemo } from "react";
import { FiltersContext } from "./FiltersContext";
import { filtersReducer, filtersInitialState } from "./reducers/filtersReducer";

export function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(filtersReducer, filtersInitialState);

  const setType = useCallback((value) =>
    dispatch({ type: "SET_TYPE", payload: value }),
    []
  );

  const setMaxPrice = useCallback((value) =>
    dispatch({ type: "SET_MAX_PRICE", payload: value }),
    []
  );

  const setMaxDistance = useCallback((value) =>
    dispatch({ type: "SET_MAX_DISTANCE", payload: value }),
    []
  );

  const resetFilters = useCallback(
    () => dispatch({ type: "RESET" }),
    []
  );

  const value = useMemo(
    () => ({
      type: state.type,
      maxPrice: state.maxPrice,
      maxDistance: state.maxDistance,
      setType,
      setMaxPrice,
      setMaxDistance,
      resetFilters,
    }),
    [state.type, state.maxPrice, state.maxDistance, setType, setMaxPrice, setMaxDistance, resetFilters]
  );

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}
