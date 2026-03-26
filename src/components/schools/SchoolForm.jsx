// src/components/schools/SchoolForm.jsx

import PropertyFormBase from "../properties/forms/PropertyFormBase";

export default function SchoolForm({ form, disabled, onChange }) {
  const fields = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "address", label: "Dirección", type: "text" },
    { name: "rating", label: "Puntuación", type: "number" },
    { name: "latitude", label: "Latitud", type: "text" },
    { name: "longitude", label: "Longitud", type: "text" },
    {
      name: "description",
      label: "Descripción",
      type: "textarea"
    }
  ];

  return (
    <PropertyFormBase
      fields={fields}
      form={form}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
