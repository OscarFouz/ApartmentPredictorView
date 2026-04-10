// src/hooks/useReviews.js
import { useState } from "react";
import { reviewService } from "../services/reviewService";
import { useFeedback } from "./useFeedback";

export function useReviews() {
  const [reviews, setReviews] = useState([]);
  const { showError, showSuccess } = useFeedback();

  const load = async () => {
    try {
      const result = await reviewService.getAll();
      setReviews(result);
    } catch (err) {
      showError(err.message || "Error al cargar las reviews");
    }
  };

  const loadByProperty = async (propertyId) => {
    try {
      const result = await reviewService.getByProperty(propertyId);
      setReviews(result);
      return result;
    } catch (err) {
      showError(err.message || "Error al cargar las reviews");
      throw err;
    }
  };

  const create = async (data) => {
    try {
      const newReview = await reviewService.create(data);
      setReviews((prev) => [...prev, newReview]);
      showSuccess("Review creada correctamente");
      return newReview;
    } catch (err) {
      showError(err.message || "Error al crear la review");
      throw err;
    }
  };

  const edit = async (id, data) => {
    try {
      const updated = await reviewService.update(id, data);
      setReviews((prev) =>
        prev.map((r) => (r.id === updated.id ? updated : r))
      );
      showSuccess("Review actualizada correctamente");
      return updated;
    } catch (err) {
      showError(err.message || "Error al actualizar la review");
      throw err;
    }
  };

  const remove = async (id) => {
    try {
      await reviewService.delete(id);
      setReviews((prev) => prev.filter((r) => r.id !== id));
      showSuccess("Review eliminada correctamente");
    } catch (err) {
      showError(err.message || "Error al eliminar la review");
      throw err;
    }
  };

  return { reviews, load, loadByProperty, create, edit, remove };
}
