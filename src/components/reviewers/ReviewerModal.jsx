// src/components/reviewers/ReviewerModal.jsx
import React from "react";
import ReviewerForm from "./ReviewerForm";

export default function ReviewerModal({ reviewer, onSave, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <ReviewerForm initialData={reviewer} onSubmit={onSave} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
