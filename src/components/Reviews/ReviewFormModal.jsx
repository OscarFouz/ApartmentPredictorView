import { useState } from "react";

export default function ReviewFormModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    rating: "",
  });

  const handleChange = (key, value) =>
    setForm({ ...form, [key]: value });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Nueva Review</h2>

        <div className="modal-content">
          <div className="modal-row">
            <label>Título</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>

          <div className="modal-row">
            <label>Contenido</label>
            <input
              type="text"
              value={form.content}
              onChange={(e) => handleChange("content", e.target.value)}
            />
          </div>

          <div className="modal-row">
            <label>Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              value={form.rating}
              onChange={(e) => handleChange("rating", e.target.value)}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="details-btn" onClick={() => onSave(form)}>
            Guardar
          </button>

          <button className="close-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
