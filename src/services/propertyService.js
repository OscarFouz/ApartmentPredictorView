// src/services/propertyService.js
import axios from "axios";

const API = "http://localhost:8080/api";

export const propertyService = {
  getAll: async () => {
    const [ap, hs, dx, tw] = await Promise.all([
      axios.get(`${API}/apartments`),
      axios.get(`${API}/houses`),
      axios.get(`${API}/duplexes`),
      axios.get(`${API}/townhouses`)
    ]);

    return [
      ...ap.data.map(p => ({ ...p, property_type: "APARTMENT" })),
      ...hs.data.map(p => ({ ...p, property_type: "HOUSE" })),
      ...dx.data.map(p => ({ ...p, property_type: "DUPLEX" })),
      ...tw.data.map(p => ({ ...p, property_type: "TOWNHOUSE" })),
    ];
  },

  create: (type, data) =>
    axios.post(`${API}/${type.toLowerCase()}s`, data),

  update: (type, id, data) =>
    axios.put(`${API}/${type.toLowerCase()}s/${id}`, data),

  delete: (type, id) =>
    axios.delete(`${API}/${type.toLowerCase()}s/${id}`),
};
