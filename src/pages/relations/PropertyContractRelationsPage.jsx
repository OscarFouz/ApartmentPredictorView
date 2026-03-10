// src/pages/relations/PropertyContractRelationsPage.jsx
import { useEffect, useState } from "react";
import { propertyService } from "../../services/propertyService";
import { useFilters } from "../../hooks/useFilters";

export default function PropertyContractRelationsPage() {
  const [properties, setProperties] = useState([]);
  const { type } = useFilters();

  useEffect(() => {
    propertyService.getAll().then(setProperties);
  }, []);

  // Aplicar filtro por tipo
  const filtered = properties.filter(
    (p) => !type || p.property_type === type
  );

  return (
    <div className="table-container">
      <h2>Relación Property ↔ Contracts</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Contratos</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.property_type}</td>
              <td>
                {p.propertyContracts?.length > 0
                  ? p.propertyContracts.map((c) => c.contractName).join(", ")
                  : "Sin contratos"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
