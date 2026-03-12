// src/context/RoleProvider.jsx
import { useState, useEffect } from "react";
import { RoleContext } from "./RoleContext";
import { reviewerService } from "../services/reviewerService";

export function RoleProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role") || "USER");

  const [reviewers, setReviewers] = useState([]);

  const [selectedReviewerId, setSelectedReviewerId] = useState(
    localStorage.getItem("reviewerId") || "ADMIN" // por defecto admin
  );

  useEffect(() => {
    reviewerService.getAll().then((res) => {
      // res es un array, no res.data
      const reviewersFromApi = res;

      // Añadimos el usuario ADMIN como opción especial
      const adminUser = {
        id: "ADMIN",
        fullName: "Administrador",
      };

      setReviewers([adminUser, ...reviewersFromApi]);
    });
  }, []);

  const selectReviewer = (id) => {
    setSelectedReviewerId(id);
    localStorage.setItem("reviewerId", id);

    // Si selecciona ADMIN → rol ADMIN
    if (id === "ADMIN") {
      setRole("ADMIN");
      localStorage.setItem("role", "ADMIN");
    } else {
      setRole("USER");
      localStorage.setItem("role", "USER");
    }
  };

  return (
    <RoleContext.Provider
      value={{
        role,
        reviewers,
        selectedReviewerId,
        selectReviewer,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}
