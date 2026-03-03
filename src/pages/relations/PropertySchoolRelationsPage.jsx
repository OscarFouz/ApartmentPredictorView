import { useEffect, useState } from "react";
import { getAllProperties } from "../../services/PropertyService";

export default function PropertySchoolRelationsPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties().then(setProperties);
  }, []);

  return (
    <div className="table-container">
      <h2>Relación Property ↔ School</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Dirección</th>
            <th>Escuelas cercanas</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.property_type}</td>
              <td>{p.address}</td>
              <td>
                {p.nearbySchools?.length > 0
                  ? p.nearbySchools.map((s) => s.name).join(", ")
                  : "Sin escuelas"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
