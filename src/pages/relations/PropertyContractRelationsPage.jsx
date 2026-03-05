// src/pages/relations/PropertyContractRelationsPage.jsx
import { useEffect, useState } from "react";
import { propertyService } from "../../services/propertyService";

export default function PropertyContractRelationsPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    propertyService.getAll().then(setProperties);
  }, []);

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
          {properties.map((p) => (
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
