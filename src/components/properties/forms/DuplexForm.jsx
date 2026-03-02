// src/components/properties/forms/DuplexForm.jsx
import React, { useState } from "react";

export default function DuplexForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
      <h2>Editar Duplex</h2>

      <input name="name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <input name="address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} />

      <button type="submit">Guardar</button>
    </form>
  );
}
