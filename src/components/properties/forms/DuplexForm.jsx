// src/components/properties/forms/DuplexForm.jsx
import React, { useState } from "react";

export default function DuplexForm({ initialData, onSubmit }) {
  const [form, setForm] = useState(initialData);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <h2>Editar Duplex</h2>

      <input
        name="name"
        value={form.name}
        onChange={handle}
        placeholder="Nombre"
      />

      <input
        name="address"
        value={form.address}
        onChange={handle}
        placeholder="Dirección"
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handle}
        placeholder="Precio"
      />

      <input
        name="levels"
        type="number"
        value={form.levels}
        onChange={handle}
        placeholder="Niveles"
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
