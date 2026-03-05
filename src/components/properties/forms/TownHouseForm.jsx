// src/components/properties/forms/TownHouseForm.jsx
import React, { useState } from "react";

export default function TownHouseForm({ initialData, onSubmit }) {
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
      <h2>Editar TownHouse</h2>

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
        name="sharedWalls"
        type="number"
        value={form.sharedWalls}
        onChange={handle}
        placeholder="Paredes compartidas"
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
