// src/services/apartmentService.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err);
    return Promise.reject(err);
  }
);

export const apartmentService = {
  getAll: () => api.get("/apartments").then((res) => res.data),

  delete: (id) => api.delete(`/apartments/${id}`),

  create: (data) =>
    api.post("/apartments", data).then((res) => res.data),

  update: (id, data) =>
    api.put(`/apartments/${id}`, data).then((res) => res.data),
};
