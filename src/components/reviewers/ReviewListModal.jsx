import { useEffect, useState } from "react";
import { reviewService } from "../../services/reviewService";

export default function ReviewListModal({ property, onClose }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService.getByProperty(property.id).then((res) => {
      setReviews(res.data);
    });
  }, [property.id]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Reviews de {property.name}</h3>

        {reviews.length === 0 && <p>No hay reviews.</p>}

        {reviews.map((r) => (
          <div key={r.id} className="review-item">
            <strong>{r.title}</strong>
            <p>{r.content}</p>
            <span>{r.rating}/5</span>
          </div>
        ))}

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
