// src/hooks/useReviewers.js
import { useState } from "react";
import { reviewerService } from "../services/reviewerService";

export function useReviewers() {
  const [reviewers, setReviewers] = useState([]);

  const load = async () => {
    setReviewers(await reviewerService.getAll());
  };

  const add = async reviewer => {
    await reviewerService.create(reviewer);
    await load();
  };

  const edit = async (id, reviewer) => {
    await reviewerService.update(id, reviewer);
    await load();
  };

  const remove = async id => {
    await reviewerService.delete(id);
    setReviewers(prev => prev.filter(r => r.id !== id));
  };

  return { reviewers, load, add, edit, remove };
}
