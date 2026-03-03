// src/services/reviewerService.js

const API_URL = "http://localhost:8080/api/reviewers";

export const reviewerService = {
  async getAll() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener reviewers");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener el reviewer");
    return res.json();
  },

  async create(data) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Error al crear reviewer");
    return res.json();
  },

  async update(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Error al actualizar reviewer");
    return res.json();
  },

  async delete(id) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) throw new Error("Error al eliminar reviewer");
    return true;
  }
};
