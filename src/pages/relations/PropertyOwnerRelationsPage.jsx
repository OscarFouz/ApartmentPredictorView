// src/pages/relations/PropertyOwnerRelationsPage.jsx
import { useProperties } from "../../hooks/useProperties";
import { useRole } from "../../hooks/useRole";

export default function PropertyOwnerRelationsPage() {
  const { properties } = useProperties();
  const { role } = useRole();

  return (
    <div className="table-container">
      <h2>Relación Property ↔ Owner</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Propiedad</th>
            <th>Dirección</th>
            <th>Owner</th>
            <th>Email</th>
            {role === "ADMIN" && <th>Teléfono</th>}
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.property_type}</td>
              <td>{p.name}</td>
              <td>{p.address}</td>
              <td>{p.owner?.fullName ?? "Sin owner"}</td>
              <td>{p.owner?.email ?? "—"}</td>
              {role === "ADMIN" && <td>{p.owner?.phone ?? "—"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
