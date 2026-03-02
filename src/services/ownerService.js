// src/services/ownerService.js
import axios from "axios";

const API = "http://localhost:8080/api/owners";

export const ownerService = {
  getAll: () => axios.get(API).then(r => r.data),
  getById: id => axios.get(`${API}/${id}`).then(r => r.data),
  create: owner => axios.post(API, owner).then(r => r.data),
  update: (id, owner) => axios.put(`${API}/${id}`, owner).then(r => r.data),
  delete: id => axios.delete(`${API}/${id}`)
};
