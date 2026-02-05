// src/hooks/useApartments.js
// Hook centralizado para gestionar el CRUD de apartamentos
// Usa apartmentService (Axios) para separar la lógica de red

import { useEffect, useState } from "react";
import { apartmentService } from "../services/apartmentService";

export function useApartments() {
  // Estado principal
  const [apartments, setApartments] = useState([]);

  // Estados de control
  const [isLoading, setIsLoading] = useState(true);
  const [isAxiosError, setIsAxiosError] = useState(false);

  // ============================
  // GET ALL — cargar todos los apartamentos
  // ============================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apartmentService.getAll();
        setApartments(data);
      } catch (err) {
        setIsAxiosError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // ============================
  // DELETE — eliminar un apartamento por ID
  // ============================
  const remove = async (id) => {
    await apartmentService.delete(id);
    setApartments((prev) => prev.filter((ap) => ap.id !== id));
  };

  // ============================
  // CREATE — crear un nuevo apartamento
  // ============================
  const add = async (data) => {
    const newAp = await apartmentService.create(data);
    setApartments((prev) => [...prev, newAp]);
  };

  // ============================
  // UPDATE — actualizar un apartamento existente
  // Sobrescribe con lo que devuelve el backend
  // ============================
  const edit = async (data) => {
    const updated = await apartmentService.update(data.id, data);

    setApartments((prev) =>
      prev.map((ap) => (ap.id === data.id ? updated : ap))
    );
  };

  // Exponer API del hook
  return { apartments, isLoading, isAxiosError, remove, add, edit };
}
