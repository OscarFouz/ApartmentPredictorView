// src/services/schoolService.js

const API_URL = "http://localhost:8000/schools"; 
// Ajusta la URL según tu backend

// ============================
// OBTENER TODAS LAS ESCUELAS
// ============================
export async function getAllSchools() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener las escuelas");
  }

  return await res.json();
}

// ============================
// CREAR ESCUELA
// ============================
export async function createSchool(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al crear la escuela");
  }

  return await res.json();
}

// ============================
// ACTUALIZAR ESCUELA
// ============================
export async function updateSchool(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al actualizar la escuela");
  }

  return await res.json();
}

// ============================
// ELIMINAR ESCUELA
// ============================
export async function deleteSchool(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Error al eliminar la escuela");
  }

  return true;
}
