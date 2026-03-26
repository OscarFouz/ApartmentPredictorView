// src/services/reviewerService.js

const API_URL = "http://localhost:8000/reviewers";
// Ajusta esta URL según tu backend

// ============================
// OBTENER TODOS LOS REVIEWERS
// ============================
export async function getAllReviewers() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener los reviewers");
  }

  return await res.json();
}

// ============================
// CREAR REVIEWER
// ============================
export async function createReviewer(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al crear el reviewer");
  }

  return await res.json();
}

// ============================
// ACTUALIZAR REVIEWER
// ============================
export async function updateReviewer(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al actualizar el reviewer");
  }

  return await res.json();
}

// ============================
// ELIMINAR REVIEWER
// ============================
export async function deleteReviewer(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Error al eliminar el reviewer");
  }

  return true;
}
