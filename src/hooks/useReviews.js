// src/hooks/useReviews.js
import { useState } from "react";
import { reviewService } from "../services/reviewService";

export function useReviews() {
  const [reviews, setReviews] = useState([]);

  const load = () => {
    reviewService.getAll().then(setReviews);
  };

  const loadByProperty = (propertyId) => {
    return reviewService.getByProperty(propertyId).then(setReviews);
  };

  const create = (data) => {
    return reviewService.create(data).then((newReview) => {
      setReviews((prev) => [...prev, newReview]);
    });
  };

  const edit = (id, data) => {
    return reviewService.update(id, data).then((updated) => {
      setReviews((prev) =>
        prev.map((r) => (r.id === updated.id ? updated : r))
      );
    });
  };

  const remove = (id) => {
    return reviewService.delete(id).then(() => {
      setReviews((prev) => prev.filter((r) => r.id !== id));
    });
  };

  return { reviews, load, loadByProperty, create, edit, remove };
}
