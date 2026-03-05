// src/services/reviewerService.js

const API = "http://localhost:8080/api/reviewers";

async function fetchJson(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) throw new Error(`Error en ${url}`);
  return res.json();
}

export const reviewerService = {
  getAll() {
    return fetchJson(API);
  },

  create(data) {
    return fetchJson(API, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  update(id, data) {
    return fetchJson(`${API}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  delete(id) {
    return fetchJson(`${API}/${id}`, {
      method: "DELETE",
    });
  },
};
