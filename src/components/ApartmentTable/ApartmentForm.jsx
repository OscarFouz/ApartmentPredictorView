
import { useState } from "react";

export default function ApartmentForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  const handleChange = (key, value) =>
    setForm({ ...form, [key]: value });

  return (
    <div className="modal-content">
      {Object.keys(form).map((key) =>
        key === "isNew" ? null : (
          <div className="modal-row" key={key}>
            <label>{key}</label>
            <input
              type="text"
              value={form[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        )
      )}

      <div className="modal-footer">
        <button className="details-btn" onClick={() => onSubmit(form)}>
          {initialData.isNew ? "Crear" : "Guardar cambios"}
        </button>
      </div>
    </div>
  );
}
