// src/hooks/useProperties.js
import { useState } from "react";
import { propertyService } from "../services/propertyService";

export function useProperties() {
  const [properties, setProperties] = useState([]);

  const load = async () => {
    const data = await propertyService.getAll();
    setProperties(data);
  };

  const add = async (type, data) => {
    await propertyService.create(type, data);
    await load();
  };

  const edit = async (type, id, data) => {
    await propertyService.update(type, id, data);
    await load();
  };

  const remove = async (type, id) => {
    await propertyService.delete(type, id);
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  return { properties, load, add, edit, remove };
}
