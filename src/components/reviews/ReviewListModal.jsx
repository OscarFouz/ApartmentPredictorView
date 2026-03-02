// src/components/reviews/ReviewListModal.jsx
import React from "react";

export default function ReviewListModal({ reviews, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">

        <h2>Reviews</h2>

        {reviews.length === 0 && <p>No hay reviews.</p>}

        {reviews.map(r => (
          <div key={r.id} className="review-item">
            <h3>{r.title}</h3>
            <p>{r.content}</p>
            <strong>Rating: {r.rating}</strong>
            <br />
            <small>{r.reviewDate}</small>
          </div>
        ))}

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
