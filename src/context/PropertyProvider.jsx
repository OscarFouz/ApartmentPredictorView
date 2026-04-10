// src/context/PropertyProvider.jsx
import { useReducer, useEffect, useCallback, useMemo } from "react";
import { PropertyContext } from "./PropertyContext";
import { propertyReducer } from "./reducers/propertyReducer";

import {
  getAllProperties,
  createProperty,
  updateProperty,
  deleteProperty
} from "../services/propertyService";

export function PropertyProvider({ children }) {
  const [state, dispatch] = useReducer(propertyReducer, {
    properties: [],
  });

  useEffect(() => {
    getAllProperties().then((data) =>
      dispatch({ type: "LOAD", payload: data })
    );
  }, []);

  const addProperty = useCallback(
    (data) =>
      createProperty(data).then((res) =>
        dispatch({ type: "ADD", payload: res })
      ),
    []
  );

  const updatePropertyFn = useCallback(
    (id, data) =>
      updateProperty(id, data).then((res) =>
        dispatch({ type: "UPDATE", payload: res })
      ),
    []
  );

  const deletePropertyFn = useCallback(
    (id) =>
      deleteProperty(id).then(() =>
        dispatch({ type: "DELETE", payload: id })
      ),
    []
  );

  const value = useMemo(
    () => ({
      properties: state.properties,
      addProperty,
      updateProperty: updatePropertyFn,
      deleteProperty: deletePropertyFn,
    }),
    [state.properties, addProperty, updatePropertyFn, deletePropertyFn]
  );

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
}
