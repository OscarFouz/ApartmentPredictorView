// src/services/propertyService.js

const API_URL = "http://localhost:8000/properties";
// Ajusta esta URL según tu backend

// ============================
// OBTENER TODAS LAS PROPIEDADES
// ============================
export async function getAllProperties() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener las propiedades");
  }

  return await res.json();
}

// ============================
// CREAR PROPIEDAD
// ============================
export async function createProperty(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al crear la propiedad");
  }

  return await res.json();
}

// ============================
// ACTUALIZAR PROPIEDAD
// ============================
export async function updateProperty(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al actualizar la propiedad");
  }

  return await res.json();
}

// ============================
// ELIMINAR PROPIEDAD
// ============================
export async function deleteProperty(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Error al eliminar la propiedad");
  }

  return true;
}
