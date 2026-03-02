// src/components/properties/PropertyTable.jsx
import React from "react";
import PropertyRow from "./PropertyRow";

export default function PropertyTable({ properties, onEdit, onDelete, onReviews }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Owner</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {properties.map(p => (
          <PropertyRow
            key={p.id}
            property={p}
            onEdit={onEdit}
            onDelete={onDelete}
            onReviews={onReviews}
          />
        ))}
      </tbody>
    </table>
  );
}
