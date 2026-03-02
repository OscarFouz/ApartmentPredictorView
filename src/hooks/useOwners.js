// src/hooks/useOwners.js
import { useState } from "react";
import { ownerService } from "../services/ownerService";

export function useOwners() {
  const [owners, setOwners] = useState([]);

  const load = async () => {
    setOwners(await ownerService.getAll());
  };

  const add = async owner => {
    await ownerService.create(owner);
    await load();
  };

  const edit = async (id, owner) => {
    await ownerService.update(id, owner);
    await load();
  };

  const remove = async id => {
    await ownerService.delete(id);
    setOwners(prev => prev.filter(o => o.id !== id));
  };

  return { owners, load, add, edit, remove };
}
