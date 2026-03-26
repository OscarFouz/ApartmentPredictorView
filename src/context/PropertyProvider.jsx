// src/context/PropertyProvider.jsx
import { useReducer, useEffect } from "react";
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
    getAllProperties().then(data =>
      dispatch({ type: "LOAD", payload: data })
    );
  }, []);

  const addProperty = (data) =>
    createProperty(data).then(res =>
      dispatch({ type: "ADD", payload: res })
    );

  const updatePropertyFn = (id, data) =>
    updateProperty(id, data).then(res =>
      dispatch({ type: "UPDATE", payload: res })
    );

  const deletePropertyFn = (id) =>
    deleteProperty(id).then(() =>
      dispatch({ type: "DELETE", payload: id })
    );

  return (
    <PropertyContext.Provider
      value={{
        properties: state.properties,
        addProperty,
        updateProperty: updatePropertyFn,
        deleteProperty: deletePropertyFn,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}
