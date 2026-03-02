// src/components/reviewers/ReviewerTable.jsx
import React from "react";
import ReviewerRow from "./ReviewerRow";

export default function ReviewerTable({ reviewers, onEdit, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Reputación</th>
          <th>Business</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {reviewers.map(r => (
          <ReviewerRow
            key={r.id}
            reviewer={r}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
