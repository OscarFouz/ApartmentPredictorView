// src/components/reviews/ReviewFormModal.jsx
import { useState } from "react";
import { reviewService } from "../../services/reviewService";
import { useFeedback } from "../../hooks/useFeedback";

export default function ReviewFormModal({ property, reviewerId, onClose }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    rating: 1,
    propertyId: property.id,
    reviewerId: reviewerId,
  });
  const [saving, setSaving] = useState(false);
  const { showError, showSuccess } = useFeedback();

  const handleChange = (key, value) =>
    setForm({ ...form, [key]: value });

  const handleSave = async () => {
    setSaving(true);
    try {
      await reviewService.create(form);
      showSuccess("Review creada correctamente");
      onClose();
    } catch (err) {
      showError(err.message || "Error al crear la review");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Nueva Review para {property.name}</h2>

        <div className="modal-content">
          <label>Título</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />

          <label>Contenido</label>
          <textarea
            value={form.content}
            onChange={(e) => handleChange("content", e.target.value)}
          />

          <label>Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            value={form.rating}
            onChange={(e) => handleChange("rating", e.target.value)}
          />
        </div>

        <div className="modal-footer">
          <button onClick={handleSave} disabled={saving}>
            {saving ? "Guardando..." : "Guardar"}
          </button>
          <button className="danger" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
