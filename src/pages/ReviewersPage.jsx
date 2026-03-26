// src/pages/ReviewersPage.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ReviewerTable from "../components/reviewers/ReviewerTable";
import ReviewerModal from "../components/reviewers/ReviewerModal";

import {
  getAllReviewers,
  createReviewer,
  updateReviewer,
  deleteReviewer
} from "../services/reviewerService";

export default function ReviewersPage() {
  const location = useLocation();

  const [reviewers, setReviewers] = useState([]);
  const [selectedReviewer, setSelectedReviewer] = useState(null);
  const [modalMode, setModalMode] = useState("view"); // view | edit | create
  const [showModal, setShowModal] = useState(false);

  // ============================
  // CARGAR REVIEWERS
  // ============================
  const loadReviewers = async () => {
    const data = await getAllReviewers();
    setReviewers(data);
  };

  useEffect(() => {
    loadReviewers();
  }, []);

  // ============================
  // DETECTAR ?create=true
  // ============================
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const createFlag = params.get("create");

    if (createFlag) {
      setSelectedReviewer({
        name: "",
        email: "",
        phone: "",
        expertise: ""
      });

      setModalMode("create");
      setShowModal(true);
    }
  }, [location.search]);

  // ============================
  // ACCIONES
  // ============================
  const handleView = (reviewer) => {
    setSelectedReviewer(reviewer);
    setModalMode("view");
    setShowModal(true);
  };

  const handleEdit = (reviewer) => {
    setSelectedReviewer(reviewer);
    setModalMode("edit");
    setShowModal(true);
  };

  const handleDelete = async (reviewer) => {
    if (!window.confirm("¿Eliminar este reviewer?")) return;
    await deleteReviewer(reviewer.id);
    loadReviewers();
  };

  const handleSave = async (form) => {
    if (modalMode === "create") {
      await createReviewer(form);
    } else {
      await updateReviewer(form.id, form);
    }

    loadReviewers();
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedReviewer(null);
  };

  return (
    <div className="page-content">
      <h1>Reviewers</h1>

      {/* TABLA */}
      <ReviewerTable
        reviewers={reviewers}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* MODAL */}
      {showModal && (
        <ReviewerModal
          reviewer={selectedReviewer}
          mode={modalMode}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
