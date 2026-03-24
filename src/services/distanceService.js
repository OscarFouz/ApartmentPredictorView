// src/services/distanceService.js
import axios from "axios";

const API = "http://localhost:8080/api/distance";

export const distanceService = {
  getSchoolsWithDistances(propertyId) {
    return axios
      .get(`${API}/schools`, { params: { propertyId } })
      .then((res) => res.data);
  },
};
