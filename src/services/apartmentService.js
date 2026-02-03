const API = "http://localhost:8080/api/apartments";

export const getApartments = () => fetch(API).then(res => res.json());

export const deleteApartment = (id) =>
  fetch(`${API}/${id}`, { method: "DELETE" });

export const createApartment = (data) =>
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const updateApartment = (id, data) =>
  fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());
