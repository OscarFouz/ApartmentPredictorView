// src/components/reviewers/ReviewerForm.jsx

import PropertyFormBase from "../properties/forms/PropertyFormBase";

export default function ReviewerForm({ form, disabled, onChange }) {
  const fields = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Teléfono", type: "text" },
    { name: "expertise", label: "Especialidad", type: "text" }
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
