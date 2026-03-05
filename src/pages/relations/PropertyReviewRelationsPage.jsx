// src/pages/relations/PropertyReviewRelationsPage.jsx
import { useEffect, useState } from "react";
import { propertyService } from "../../services/propertyService";

export default function PropertyReviewRelationsPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    propertyService.getAll().then(setProperties);
  }, []);

  return (
    <div className="table-container">
      <h2>Relación Property ↔ Reviews</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Reviews</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.property_type}</td>
              <td>
                {p.reviews?.length > 0
                  ? p.reviews.map((r) => `${r.title} (${r.rating}/5)`).join(", ")
                  : "Sin reviews"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
