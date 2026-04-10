// src/components/reviews/ReviewListModal.jsx
import { useEffect, useState } from "react";
import { reviewService } from "../../services/reviewService";
import { useFeedback } from "../../hooks/useFeedback";

export default function ReviewListModal({ property, onClose }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showError } = useFeedback();

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      try {
        const result = await reviewService.getByProperty(property.id);
        setReviews(result);
      } catch (err) {
        showError(err.message || "Error al cargar las reviews");
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [property.id, showError]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Reviews de {property.name}</h3>

        {loading && <p>Cargando reviews...</p>}
        {!loading && reviews.length === 0 && <p>No hay reviews.</p>}

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
