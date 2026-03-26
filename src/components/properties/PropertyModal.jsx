// src/components/properties/modals/PropertyModal.jsx

import React, { useEffect, useState } from "react";

import ApartmentForm from "./forms/ApartmentForm";
import HouseForm from "./forms/HouseForm";
import DuplexForm from "./forms/DuplexForm";
import TownHouseForm from "./forms/TownHouseForm";

import Map from "../map/Map";

export default function PropertyModal({
  property,
  onClose,
  onSave,
  mode: initialMode = "view" // "view" | "edit" | "create"
}) {
  const isEditing = Boolean(property);

  const [mode, setMode] = useState(initialMode);

  const emptyForm = {
    name: "",
    address: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    property_type: property?.property_type || "APARTMENT",
    hasElevator: false,
    hasGarage: false,
    hasGarden: false,
    hasPatio: false,
    hasTerrace: false,
    sharedWalls: 0
  };

  const [form, setForm] = useState(property || emptyForm);

  useEffect(() => {
    setForm(property || emptyForm);
  }, [property]);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  const renderForm = () => {
    switch (form.property_type) {
      case "APARTMENT":
        return (
          <ApartmentForm
            form={form}
            disabled={mode === "view"}
            onChange={handleChange}
          />
        );

      case "HOUSE":
        return (
          <HouseForm
            form={form}
            disabled={mode === "view"}
            onChange={handleChange}
          />
        );

      case "DUPLEX":
        return (
          <DuplexForm
            form={form}
            disabled={mode === "view"}
            onChange={handleChange}
          />
        );

      case "TOWNHOUSE":
        return (
          <TownHouseForm
            form={form}
            disabled={mode === "view"}
            onChange={handleChange}
          />
        );

      default:
        return <p>Tipo de propiedad no soportado.</p>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        {/* TÍTULO */}
        <h2 style={{ marginBottom: "15px" }}>
          {mode === "create"
            ? "Crear Propiedad"
            : mode === "edit"
            ? "Editar Propiedad"
            : "Ver Propiedad"}
        </h2>

        {/* FORMULARIO */}
        {renderForm()}

        {/* MAPA SOLO EN MODO VER */}
        {mode === "view" && property && (
          <div style={{ marginTop: "20px" }}>
            <Map
              property={property}
              schools={property.nearbySchools || []}
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
