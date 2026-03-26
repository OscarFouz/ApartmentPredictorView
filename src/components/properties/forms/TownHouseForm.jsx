import PropertyFormBase from "./PropertyFormBase";

export default function TownHouseForm({ form, disabled, onChange }) {
  const fields = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "address", label: "Dirección", type: "text" },
    { name: "price", label: "Precio (€)", type: "number" },
    { name: "area", label: "Área (m²)", type: "number" },
    { name: "bedrooms", label: "Dormitorios", type: "number" },
    { name: "bathrooms", label: "Baños", type: "number" },

    {
      name: "sharedWalls",
      label: "Paredes compartidas",
      type: "number"
    },
    {
      name: "hasPatio",
      label: "Patio",
      type: "checkbox"
    },
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
