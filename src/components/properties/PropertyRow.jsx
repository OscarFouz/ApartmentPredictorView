// src/components/properties/PropertyRow.jsx
import React from "react";

export default function PropertyRow({ property, onEdit, onDelete, onReviews }) {
  return (
    <tr>
      <td>{property.property_type}</td>
      <td>{property.name}</td>
      <td>{property.address}</td>
      <td>{property.owner?.fullName || "—"}</td>

      <td>
        <button onClick={() => onEdit(property)}>Editar</button>
        <button onClick={() => onReviews(property)}>Reviews</button>
        <button onClick={() => onDelete(property)}>Eliminar</button>
      </td>
    </tr>
  );
}
