// src/components/reviewers/ReviewerRow.jsx
import React from "react";

export default function ReviewerRow({ reviewer, onEdit, onDelete }) {
  return (
    <tr>
      <td>{reviewer.fullName}</td>
      <td>{reviewer.email}</td>
      <td>{reviewer.reputation}</td>
      <td>{reviewer.business ? "Sí" : "No"}</td>

      <td>
        <button onClick={() => onEdit(reviewer)}>Editar</button>
        <button onClick={() => onDelete(reviewer.id)}>Eliminar</button>
      </td>
    </tr>
  );
}
