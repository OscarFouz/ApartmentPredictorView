// src/components/properties/forms/ApartmentForm.jsx
import React, { useState } from "react";

export default function ApartmentForm({ initialData, onSubmit }) {
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
      <h2>Editar Apartment</h2>

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
        name="area"
        type="number"
        value={form.area}
        onChange={handle}
        placeholder="Área (m²)"
      />

      <input
        name="bedrooms"
        type="number"
        value={form.bedrooms}
        onChange={handle}
        placeholder="Dormitorios"
      />

      <input
        name="bathrooms"
        type="number"
        value={form.bathrooms}
        onChange={handle}
        placeholder="Baños"
      />

      <button type="submit">Guardar</button>
    </form>
  );
}
