// src/pages/relations/PropertySchoolRelationsPage.jsx
import { useEffect, useState } from "react";
import { getAllProperties } from "../../services/propertyService";

import { useFilters } from "../../hooks/useFilters";
import PropertySchoolDistancesModal from "../../components/schools/PropertySchoolDistancesModal";

export default function PropertySchoolRelationsPage() {
  const [properties, setProperties] = useState([]);
  const { type } = useFilters();

  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    getAllProperties().then(setProperties);
  }, []);

  const filtered = properties.filter(
    (p) => !type || p.property_type === type
  );

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
            <th>Distancias</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.property_type}</td>
              <td>{p.address}</td>
              <td>
                {p.nearbySchools?.length > 0
                  ? p.nearbySchools.map((s) => s.name).join(", ")
                  : "Sin escuelas"}
              </td>
              <td>
                {p.nearbySchools?.length > 0 ? (
                  <button onClick={() => setSelectedProperty(p)}>
                    Ver distancias
                  </button>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProperty && (
        <PropertySchoolDistancesModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
}
