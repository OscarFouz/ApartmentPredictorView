// src/components/properties/forms/HouseForm.jsx
import React, { useState } from "react";

export default function HouseForm({ initialData, onSubmit }) {
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
      <h2>Editar House</h2>

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
        name="floors"
        type="number"
        value={form.floors}
        onChange={handle}
        placeholder="Número de plantas"
      />

      <input
        name="gardenArea"
        type="number"
        value={form.gardenArea}
        onChange={handle}
        placeholder="Área del jardín"
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
