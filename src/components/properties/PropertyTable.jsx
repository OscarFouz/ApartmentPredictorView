// src/components/properties/PropertyTable.jsx

import React from "react";

export default function PropertyTable({
  properties,
  onView,
  onEdit,
  onDelete,
  onShowReviews,
  onShowSchools
}) {
  return (
    <div className="table-container">
      <table className="property-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Área</th>
            <th>Dormitorios</th>
            <th>Baños</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.address}</td>
              <td>{p.property_type}</td>
              <td>{p.price} €</td>
              <td>{p.area} m²</td>
              <td>{p.bedrooms}</td>
              <td>{p.bathrooms}</td>

              <td style={{ whiteSpace: "nowrap" }}>
                <button onClick={() => onView(p)}>Ver</button>
                <button onClick={() => onEdit(p)}>Editar</button>

                {onShowReviews && (
                  <button onClick={() => onShowReviews(p)}>Reviews</button>
                )}

                {onShowSchools && (
                  <button onClick={() => onShowSchools(p)}>Escuelas</button>
                )}

                {onDelete && (
                  <button className="danger" onClick={() => onDelete(p)}>
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
