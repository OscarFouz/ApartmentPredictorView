import { useState } from "react";

export default function ApartmentForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  const handleChange = (key, value) =>
    setForm({ ...form, [key]: value });

  return (
    <div>
      {Object.keys(form).map((key) =>
        key === "isNew" ? null : (
          <div key={key}>
            <label>{key}</label>
            <input
              value={form[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        )
      )}

      <button onClick={() => onSubmit(form)}>
        {initialData.isNew ? "Crear" : "Guardar cambios"}
      </button>
    </div>
  );
}
