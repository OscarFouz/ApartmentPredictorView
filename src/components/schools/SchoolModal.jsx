// src/components/schools/SchoolModal.jsx

import React, { useEffect, useState } from "react";
import SchoolForm from "./SchoolForm";
import Map from "../map/Map";

export default function SchoolModal({
  school,
  onClose,
  onSave,
  mode: initialMode = "view" // view | edit | create
}) {
  const isEditing = Boolean(school);
  const [mode, setMode] = useState(initialMode);

  const emptyForm = {
    name: "",
    address: "",
    rating: "",
    description: "",
    latitude: "",
    longitude: ""
  };

  const [form, setForm] = useState(school || emptyForm);

  useEffect(() => {
    setForm(school || emptyForm);
  }, [school]);

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
            ? "Crear Escuela"
            : mode === "edit"
            ? "Editar Escuela"
            : "Ver Escuela"}
        </h2>

        {/* FORMULARIO */}
        <SchoolForm
          form={form}
          disabled={mode === "view"}
          onChange={handleChange}
        />

        {/* MAPA SOLO EN MODO VER */}
        {mode === "view" && school && (
          <div style={{ marginTop: "20px" }}>
            <Map
              property={school}
              schools={[]} 
            />
          </div>
        )}

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
