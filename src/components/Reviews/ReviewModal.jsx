export default function ReviewModal({ reviews, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Reviews</h2>

        {reviews.length === 0 && <p>No hay reviews para este apartamento.</p>}

        {reviews.map((r) => (
          <div
            key={r.id}
            style={{
              marginBottom: "12px",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3 style={{ margin: 0 }}>{r.title}</h3>
            <p style={{ margin: "6px 0" }}>{r.content}</p>
            <strong>Rating: {r.rating}</strong>
            <br />
            <small>{r.reviewDate}</small>
          </div>
        ))}

        <div className="modal-footer">
          <button className="details-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
