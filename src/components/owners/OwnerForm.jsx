// src/components/owners/OwnerForm.jsx

import PropertyFormBase from "../properties/forms/PropertyFormBase";

export default function OwnerForm({ form, disabled, onChange }) {
  const fields = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Teléfono", type: "text" },
    { name: "address", label: "Dirección", type: "text" }
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
