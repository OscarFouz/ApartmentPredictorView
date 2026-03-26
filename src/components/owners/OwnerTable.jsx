// src/components/owners/OwnerTable.jsx

import React from "react";

export default function OwnerTable({
  owners,
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
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {owners.map((o) => (
            <tr key={o.id}>
              <td>{o.name}</td>
              <td>{o.email}</td>
              <td>{o.phone}</td>
              <td>{o.address}</td>

              <td style={{ whiteSpace: "nowrap" }}>
                <button onClick={() => onView(o)}>Ver</button>
                <button onClick={() => onEdit(o)}>Editar</button>

                {onDelete && (
                  <button className="danger" onClick={() => onDelete(o)}>
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
