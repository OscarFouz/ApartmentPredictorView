// src/hooks/useSchools.js
import { useState } from "react";
import { schoolService } from "../services/schoolService";

export function useSchools() {
  const [schools, setSchools] = useState([]);

  const load = () => {
    schoolService.getAll().then(setSchools);
  };

  const create = (data) => {
    return schoolService.create(data).then((newSchool) => {
      setSchools((prev) => [...prev, newSchool]);
    });
  };

  const edit = (id, data) => {
    return schoolService.update(id, data).then((updated) => {
      setSchools((prev) =>
        prev.map((s) => (s.id === updated.id ? updated : s))
      );
    });
  };

  const remove = (id) => {
    return schoolService.delete(id).then(() => {
      setSchools((prev) => prev.filter((s) => s.id !== id));
    });
  };

  return { schools, load, create, edit, remove };
}
