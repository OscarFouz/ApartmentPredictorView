// src/services/ownerService.js

const API_URL = "http://localhost:8000/owners"; 
// Ajusta esta URL según tu backend

// ============================
// OBTENER TODOS LOS PROPIETARIOS
// ============================
export async function getAllOwners() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener los propietarios");
  }

  return await res.json();
}

// ============================
// CREAR PROPIETARIO
// ============================
export async function createOwner(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al crear el propietario");
  }

  return await res.json();
}

// ============================
// ACTUALIZAR PROPIETARIO
// ============================
export async function updateOwner(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Error al actualizar el propietario");
  }

  return await res.json();
}

// ============================
// ELIMINAR PROPIETARIO
// ============================
export async function deleteOwner(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("Error al eliminar el propietario");
  }

  return true;
}
