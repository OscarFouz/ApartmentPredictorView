// src/services/reviewService.js

const API_URL = "http://localhost:8080/api/reviews";

export const reviewService = {
  async getReviewsByProperty(propertyId) {
    const res = await fetch(`${API_URL}/property/${propertyId}`);
    if (!res.ok) throw new Error("Error al obtener las reviews");
    return res.json();
  },

  async createReview(reviewData) {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData)
    });

    if (!res.ok) throw new Error("Error al crear la review");
    return res.json();
  },

  async deleteReview(reviewId) {
    const res = await fetch(`${API_URL}/${reviewId}`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Error al eliminar la review");
    return true;
  }
};
