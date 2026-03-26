import React from "react";

export default function PropertyFormBase({ fields, form, disabled, onChange }) {
  const handle = (e, name) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    onChange(name, value);
  };

  return (
    <div className="form-grid">
      {fields.map((f) => (
        <div key={f.name} className="form-field">
          <label>{f.label}</label>

          {/* SELECT */}
          {f.type === "select" && (
            <select
              value={form[f.name] ?? ""}
              disabled={disabled}
              onChange={(e) => handle(e, f.name)}
            >
              <option value="">Seleccione...</option>
              {f.options?.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
          )}

          {/* TEXTAREA */}
          {f.type === "textarea" && (
            <textarea
              value={form[f.name] ?? ""}
              disabled={disabled}
              onChange={(e) => handle(e, f.name)}
            />
          )}

          {/* CHECKBOX */}
          {f.type === "checkbox" && (
            <input
              type="checkbox"
              checked={form[f.name] ?? false}
              disabled={disabled}
              onChange={(e) => handle(e, f.name)}
            />
          )}

          {/* INPUT NORMAL */}
          {["text", "number", "email"].includes(f.type) && (
            <input
              type={f.type}
              value={form[f.name] ?? ""}
              disabled={disabled}
              onChange={(e) => handle(e, f.name)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
