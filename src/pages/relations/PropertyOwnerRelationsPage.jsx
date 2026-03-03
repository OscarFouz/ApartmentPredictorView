import { useEffect, useState } from "react";
import { useRole } from "../../hooks/useRole";

export default function PropertyOwnerRelationsPage() {
  const [properties, setProperties] = useState([]);
  const { role } = useRole();

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="table-container">
      <h2>Relación Property ↔ Owner</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nombre Propiedad</th>
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
