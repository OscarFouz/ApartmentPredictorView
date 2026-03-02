// src/components/owners/OwnerModal.jsx
import React from "react";
import OwnerForm from "./OwnerForm";

export default function OwnerModal({ owner, onSave, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <OwnerForm initialData={owner} onSubmit={onSave} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
