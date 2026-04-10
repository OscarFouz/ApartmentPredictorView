// src/context/RoleProvider.jsx
import { useState, useEffect, useCallback, useMemo } from "react";
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

  const selectReviewer = useCallback((id) => {
    setSelectedReviewerId(id);
    localStorage.setItem("reviewerId", id);

    if (id === "ADMIN") {
      setRole("ADMIN");
      localStorage.setItem("role", "ADMIN");
    } else {
      setRole("USER");
      localStorage.setItem("role", "USER");
    }
  }, []);

  const value = useMemo(
    () => ({
      role,
      reviewers,
      selectedReviewerId,
      selectReviewer,
    }),
    [role, reviewers, selectedReviewerId, selectReviewer]
  );

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
}
