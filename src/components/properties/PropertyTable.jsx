// src/components/properties/PropertyTable.jsx
import { useRole } from "../../hooks/useRole";

export default function PropertyTable({ properties, onEdit, onShowReviews, onShowSchools }) {
  const { role } = useRole();

  return (
    <table className="property-table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Owner</th>
          <th>Precio</th>
          <th>Escuelas</th> {/* ← NUEVA COLUMNA */}
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {properties.map((p) => (
          <tr key={p.id}>
            <td>{p.property_type}</td>
            <td>{p.name}</td>
            <td>{p.address}</td>
            <td>{p.owner?.fullName ?? "Sin owner"}</td>
            <td>{p.price ? `${p.price} €` : "—"}</td>

            {/* 🔵 BOTÓN DE ESCUELAS */}
            <td>
              {p.nearbySchools?.length > 0 ? (
                <button onClick={() => onShowSchools(p)}>
                  Ver escuelas ({p.nearbySchools.length})
                </button>
              ) : (
                "0"
              )}
            </td>

            <td className="actions">
              <button onClick={() => onShowReviews(p)}>Reviews</button>

              {role === "USER" && <button>Crear review</button>}

              {role === "ADMIN" && (
                <>
                  <button onClick={() => onEdit(p)}>Editar</button>
                  <button className="danger">Eliminar</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
