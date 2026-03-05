// src/hooks/useOwners.js
import { useState } from "react";
import { ownerService } from "../services/ownerService";

export function useOwners() {
  const [owners, setOwners] = useState([]);

  const load = () => {
    ownerService.getAll().then(setOwners);
  };

  const create = (data) => {
    return ownerService.create(data).then((newOwner) => {
      setOwners((prev) => [...prev, newOwner]);
    });
  };

  const edit = (id, data) => {
    return ownerService.update(id, data).then((updated) => {
      setOwners((prev) =>
        prev.map((o) => (o.id === updated.id ? updated : o))
      );
    });
  };

  const remove = (id) => {
    return ownerService.delete(id).then(() => {
      setOwners((prev) => prev.filter((o) => o.id !== id));
    });
  };

  return { owners, load, create, edit, remove };
}
