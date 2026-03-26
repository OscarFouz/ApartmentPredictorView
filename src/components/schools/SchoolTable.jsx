// src/components/schools/SchoolTable.jsx

import React from "react";

export default function SchoolTable({
  schools,
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
            <th>Dirección</th>
            <th>Puntuación</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {schools.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.address}</td>
              <td>{s.rating}</td>
              <td>{s.latitude}</td>
              <td>{s.longitude}</td>

              <td style={{ whiteSpace: "nowrap" }}>
                <button onClick={() => onView(s)}>Ver</button>
                <button onClick={() => onEdit(s)}>Editar</button>

                {onDelete && (
                  <button className="danger" onClick={() => onDelete(s)}>
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
