import { useState } from "react";

export function useReviews() {
  const [reviews, setReviews] = useState([]);

  const loadReviews = async (apartmentId) => {
    const res = await fetch(`http://localhost:8080/api/apartments/${apartmentId}/reviews`);
    const data = await res.json();
    setReviews(data);
    return data; // 🔥 devolvemos las reviews reales
  };

  const addReview = async (apartmentId, review) => {
    await fetch(`http://localhost:8080/api/apartments/${apartmentId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
  };

  return { reviews, loadReviews, addReview };
}
