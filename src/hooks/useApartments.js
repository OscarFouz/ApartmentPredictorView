// src/hooks/useApartments.js
// Hook centralizado para gestionar el CRUD de apartamentos
// Usa apartmentService (Axios) para separar la lógica de red

import { useEffect, useState } from "react";
import { apartmentService } from "../services/apartmentService";
import { useFeedback } from "./useFeedback";

export function useApartments() {
  // Estado principal
  const [apartments, setApartments] = useState([]);

  // Estados de control
  const [isLoading, setIsLoading] = useState(true);
  const [isAxiosError, setIsAxiosError] = useState(false);
  const { showError, showSuccess } = useFeedback();

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
        showError(err.message || "Error al cargar apartamentos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [showError]);

  // ============================
  // DELETE — eliminar un apartamento por ID
  // ============================
  const remove = async (id) => {
    try {
      await apartmentService.delete(id);
      setApartments((prev) => prev.filter((ap) => ap.id !== id));
      showSuccess("Apartamento eliminado correctamente");
    } catch (err) {
      showError(err.message || "Error al eliminar apartamento");
      throw err;
    }
  };

  // ============================
  // CREATE — crear un nuevo apartamento
  // ============================
  const add = async (data) => {
    try {
      const newAp = await apartmentService.create(data);
      setApartments((prev) => [...prev, newAp]);
      showSuccess("Apartamento creado correctamente");
      return newAp;
    } catch (err) {
      showError(err.message || "Error al crear apartamento");
      throw err;
    }
  };

  // ============================
  // UPDATE — actualizar un apartamento existente
  // Sobrescribe con lo que devuelve el backend
  // ============================
  const edit = async (data) => {
    try {
      const updated = await apartmentService.update(data.id, data);
      setApartments((prev) =>
        prev.map((ap) => (ap.id === data.id ? updated : ap))
      );
      showSuccess("Apartamento actualizado correctamente");
      return updated;
    } catch (err) {
      showError(err.message || "Error al actualizar apartamento");
      throw err;
    }
  };

  // Exponer API del hook
  return { apartments, isLoading, isAxiosError, remove, add, edit };
}
