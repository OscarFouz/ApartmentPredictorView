// src/components/properties/PropertyModal.jsx
import React from "react";
import ApartmentForm from "./forms/ApartmentForm";
import HouseForm from "./forms/HouseForm";
import DuplexForm from "./forms/DuplexForm";
import TownHouseForm from "./forms/TownHouseForm";

export default function PropertyModal({ property, onSave, onClose }) {
  const type = property.property_type;

  return (
    <div className="modal">
      <div className="modal-content">

        {type === "APARTMENT" && (
          <ApartmentForm initialData={property} onSubmit={onSave} />
        )}

        {type === "HOUSE" && (
          <HouseForm initialData={property} onSubmit={onSave} />
        )}

        {type === "DUPLEX" && (
          <DuplexForm initialData={property} onSubmit={onSave} />
        )}

        {type === "TOWNHOUSE" && (
          <TownHouseForm initialData={property} onSubmit={onSave} />
        )}

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
