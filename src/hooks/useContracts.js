// src/hooks/useContracts.js
import { useState } from "react";
import { contractService } from "../services/contractService";

export function useContracts() {
  const [contracts, setContracts] = useState([]);

  const load = () => {
    contractService.getAll().then(setContracts);
  };

  const create = (data) => {
    return contractService.create(data).then((newContract) => {
      setContracts((prev) => [...prev, newContract]);
    });
  };

  const edit = (id, data) => {
    return contractService.update(id, data).then((updated) => {
      setContracts((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );
    });
  };

  const remove = (id) => {
    return contractService.delete(id).then(() => {
      setContracts((prev) => prev.filter((c) => c.id !== id));
    });
  };

  return { contracts, load, create, edit, remove };
}
