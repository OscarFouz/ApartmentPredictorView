import { useEffect, useState } from "react";
import {
  getApartments,
  deleteApartment,
  createApartment,
  updateApartment,
} from "../services/apartmentService";

export function useApartments() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    getApartments().then(setApartments);
  }, []);

  const remove = async (id) => {
    await deleteApartment(id);
    setApartments(prev => prev.filter(ap => ap.id !== id));
  };

  const add = async (data) => {
    const newAp = await createApartment(data);
    setApartments(prev => [...prev, newAp]);
  };

  const edit = async (data) => {
    const updated = await updateApartment(data.id, data);
    setApartments(prev =>
      prev.map(ap => (ap.id === updated.id ? updated : ap))
    );
  };

  return { apartments, remove, add, edit };
}
