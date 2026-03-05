// src/hooks/useProperties.js
import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export function useProperties() {
  return useContext(PropertyContext);
}
