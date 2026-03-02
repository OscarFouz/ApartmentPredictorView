// src/services/reviewerService.js

const API_URL = "http://localhost:8080/api/reviewers";

export const reviewerService = {
  async getAllReviewers() {
    const res = await fetch(`${API_URL}`);
    if (!res.ok) throw new Error("Error al obtener reviewers");
    return res.json();
  },

  async getReviewerById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener el reviewer");
    return res.json();
  },

  async createReviewer(data) {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Error al crear reviewer");
    return res.json();
  }
};
