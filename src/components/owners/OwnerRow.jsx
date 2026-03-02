// src/components/owners/OwnerRow.jsx
import React from "react";

export default function OwnerRow({ owner, onEdit, onDelete }) {
  return (
    <tr>
      <td>{owner.fullName}</td>
      <td>{owner.email}</td>
      <td>{owner.phone}</td>
      <td>{owner.business ? "Sí" : "No"}</td>

      <td>
        <button onClick={() => onEdit(owner)}>Editar</button>
        <button onClick={() => onDelete(owner.id)}>Eliminar</button>
      </td>
    </tr>
  );
}
