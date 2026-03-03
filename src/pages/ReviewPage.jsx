import { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext.jsx";

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const { role } = useRole();

  useEffect(() => {
    fetch("http://localhost:8080/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="table-container">
      <h2>Reviews</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Rating</th>
            <th>Fecha</th>
            <th>Propiedad</th>
            <th>Reviewer</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((r) => (
            <tr key={r.id}>
              <td>{r.title}</td>
              <td>{r.rating}/5</td>
              <td>{r.reviewDate}</td>
              <td>{r.property?.name ?? "—"}</td>
              <td>{r.reviewer?.fullName ?? "—"}</td>

              <td className="actions">
                <button>Ver</button>

                {role === "ADMIN" && (
                  <button className="danger">Eliminar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
