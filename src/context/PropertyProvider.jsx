// src/context/PropertyProvider.jsx
import { useReducer, useEffect } from "react";
import { PropertyContext } from "./PropertyContext";
import { propertyReducer } from "./reducers/propertyReducer";
import { propertyService } from "../services/propertyService";

export function PropertyProvider({ children }) {
  const [state, dispatch] = useReducer(propertyReducer, {
    properties: [],
  });

  // 🔹 Cargar todas las propiedades desde 4 endpoints
  useEffect(() => {
    propertyService.getAll().then(data =>
      dispatch({ type: "LOAD", payload: data })
    );
  }, []);

  const addProperty = (type, data) =>
    propertyService.create(type, data).then(res =>
      dispatch({ type: "ADD", payload: res })
    );

  const updateProperty = (type, id, data) =>
    propertyService.update(type, id, data).then(res =>
      dispatch({ type: "UPDATE", payload: res })
    );

  const deleteProperty = (type, id) =>
    propertyService.delete(type, id).then(() =>
      dispatch({ type: "DELETE", payload: id })
    );

  return (
    <PropertyContext.Provider
      value={{
        properties: state.properties,
        addProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}
