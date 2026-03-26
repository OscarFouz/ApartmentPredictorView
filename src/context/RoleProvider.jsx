// src/context/RoleProvider.jsx
import { useState, useEffect } from "react";
import { RoleContext } from "./RoleContext";

import { getAllReviewers } from "../services/reviewerService";

export function RoleProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role") || "USER");

  const [reviewers, setReviewers] = useState([]);

  const [selectedReviewerId, setSelectedReviewerId] = useState(
    localStorage.getItem("reviewerId") || "ADMIN"
  );

  useEffect(() => {
    getAllReviewers().then((res) => {
      const reviewersFromApi = res;

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
