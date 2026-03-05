// src/hooks/useReviewers.js
import { useState } from "react";
import { reviewerService } from "../services/reviewerService";

export function useReviewers() {
  const [reviewers, setReviewers] = useState([]);

  const load = () => {
    reviewerService.getAll().then(setReviewers);
  };

  const create = (data) => {
    return reviewerService.create(data).then((newReviewer) => {
      setReviewers((prev) => [...prev, newReviewer]);
    });
  };

  const edit = (id, data) => {
    return reviewerService.update(id, data).then((updated) => {
      setReviewers((prev) =>
        prev.map((r) => (r.id === updated.id ? updated : r))
      );
    });
  };

  const remove = (id) => {
    return reviewerService.delete(id).then(() => {
      setReviewers((prev) => prev.filter((r) => r.id !== id));
    });
  };

  return { reviewers, load, create, edit, remove };
}
