// src/services/propertyService.js

const API = "http://localhost:8080/api";

async function fetchJson(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) throw new Error(`Error en ${url}`);
  return res.json();
}

export const propertyService = {
  // 🔹 Cargar TODAS las propiedades desde 4 endpoints
  async getAll() {
    const [apartments, houses, duplexes, townhouses] = await Promise.all([
      fetchJson(`${API}/apartments`),
      fetchJson(`${API}/houses`),
      fetchJson(`${API}/duplexes`),
      fetchJson(`${API}/townhouses`),
    ]);

    return [
      ...apartments.map(a => ({ ...a, property_type: "APARTMENT" })),
      ...houses.map(h => ({ ...h, property_type: "HOUSE" })),
      ...duplexes.map(d => ({ ...d, property_type: "DUPLEX" })),
      ...townhouses.map(t => ({ ...t, property_type: "TOWNHOUSE" })),
    ];
  },

  // 🔹 Crear propiedad según tipo
  create(type, data) {
    return fetchJson(`${API}/${type.toLowerCase()}s`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  // 🔹 Actualizar propiedad según tipo
  update(type, id, data) {
    return fetchJson(`${API}/${type.toLowerCase()}s/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  // 🔹 Eliminar propiedad según tipo
  delete(type, id) {
    return fetchJson(`${API}/${type.toLowerCase()}s/${id}`, {
      method: "DELETE",
    });
  },
};
