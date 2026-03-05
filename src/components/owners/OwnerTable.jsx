// src/components/owners/OwnerTable.jsx
import React from "react";
import OwnerRow from "./OwnerRow";

export default function OwnerTable({ owners, onEdit, onDelete }) {
  return (
    <table className="property-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Business</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {owners.map(o => (
          <OwnerRow
            key={o.id}
            owner={o}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
