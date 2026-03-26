// src/components/reviewers/ReviewerModal.jsx

import React, { useEffect, useState } from "react";
import ReviewerForm from "./ReviewerForm";

export default function ReviewerModal({
  reviewer,
  onClose,
  onSave,
  mode: initialMode = "view" // view | edit | create
}) {
  const isEditing = Boolean(reviewer);
  const [mode, setMode] = useState(initialMode);

  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    expertise: ""
  };

  const [form, setForm] = useState(reviewer || emptyForm);

  useEffect(() => {
    setForm(reviewer || emptyForm);
  }, [reviewer]);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        {/* TÍTULO */}
        <h2 style={{ marginBottom: "15px" }}>
          {mode === "create"
            ? "Crear Reviewer"
            : mode === "edit"
            ? "Editar Reviewer"
            : "Ver Reviewer"}
        </h2>

        {/* FORMULARIO */}
        <ReviewerForm
          form={form}
          disabled={mode === "view"}
          onChange={handleChange}
        />

        {/* BOTONES */}
        <div className="form-buttons">

          {/* Cambiar entre ver y editar */}
          {isEditing && mode === "view" && (
            <button onClick={() => setMode("edit")}>Editar</button>
          )}

          {/* Guardar */}
          {mode !== "view" && (
            <button onClick={handleSubmit}>Guardar</button>
          )}

          {/* Cerrar */}
          <button className="danger" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
