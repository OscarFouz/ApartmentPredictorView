// src/components/reviewers/ReviewerTable.jsx

import React from "react";

export default function ReviewerTable({
  reviewers,
  onView,
  onEdit,
  onDelete
}) {
  return (
    <div className="table-container">
      <table className="property-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Especialidad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {reviewers.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.phone}</td>
              <td>{r.expertise}</td>

              <td style={{ whiteSpace: "nowrap" }}>
                <button onClick={() => onView(r)}>Ver</button>
                <button onClick={() => onEdit(r)}>Editar</button>

                {onDelete && (
                  <button className="danger" onClick={() => onDelete(r)}>
                    Eliminar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
