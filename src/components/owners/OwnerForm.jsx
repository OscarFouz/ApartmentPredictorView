// src/components/owners/OwnerForm.jsx
import React, { useState } from "react";

export default function OwnerForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  const handle = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
      <h2>Owner</h2>

      <input name="fullName" value={form.fullName} onChange={handle} placeholder="Nombre completo" />
      <input name="email" value={form.email} onChange={handle} placeholder="Email" />
      <input name="phone" value={form.phone} onChange={handle} placeholder="Teléfono" />

      <label>
        ¿Es empresa?
        <input
          type="checkbox"
          checked={form.business}
          onChange={e => setForm({ ...form, business: e.target.checked })}
        />
      </label>

      <button type="submit">Guardar</button>
    </form>
  );
}
