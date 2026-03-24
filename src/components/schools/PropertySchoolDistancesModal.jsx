// src/components/schools/PropertySchoolDistancesModal.jsx
import { useEffect, useState } from "react";
import { distanceService } from "../../services/distanceService";

export default function PropertySchoolDistancesModal({ property, onClose }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    distanceService
      .getSchoolsWithDistances(property.id)
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, [property.id]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Escuelas cercanas a {property.name}</h3>

        {loading && <p>Cargando distancias...</p>}

        {!loading && items.length === 0 && <p>No hay escuelas cercanas.</p>}

        {!loading && items.length > 0 && (
          <table className="property-table">
            <thead>
              <tr>
                <th>Escuela</th>
                <th>Tipo</th>
                <th>Rating</th>
                <th>Haversine (m)</th>
                <th>Grafo (m)</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.school.id}>
                  <td>{it.school.name}</td>
                  <td>{it.school.type}</td>
                  <td>{it.school.rating}</td>
                  <td>{Math.round(it.haversineMeters)}</td>
                  <td>{Math.round(it.graphMeters)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
