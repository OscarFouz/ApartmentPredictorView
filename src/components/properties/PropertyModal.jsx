// src/components/properties/PropertyModal.jsx
import { useState, useEffect } from "react";
import { useProperties } from "../../hooks/useProperties";

// Formularios específicos
import ApartmentForm from "./forms/ApartmentForm";
import HouseForm from "./forms/HouseForm";
import DuplexForm from "./forms/DuplexForm";
import TownHouseForm from "./forms/TownHouseForm";


export default function PropertyModal({ property, onClose }) {
  const { addProperty, updateProperty } = useProperties();

  const isEditing = Boolean(property);

  const [form, setForm] = useState({
    name: "",
    address: "",
    price: "",
    property_type: "APARTMENT",
  });

  useEffect(() => {
    if (property) {
      setForm({
        name: property.name,
        address: property.address,
        price: property.price,
        property_type: property.property_type,
        area: property.area ?? "",
        bedrooms: property.bedrooms ?? "",
        bathrooms: property.bathrooms ?? "",
        floors: property.floors ?? "",
        gardenArea: property.gardenArea ?? "",
        levels: property.levels ?? "",
        sharedWalls: property.sharedWalls ?? "",
      });
    }
  }, [property]);

  const handleSubmit = async (updatedData) => {
    const type = updatedData.property_type || form.property_type;

    if (isEditing) {
      await updateProperty(type, property.id, updatedData);
    } else {
      await addProperty(type, updatedData);
    }

    onClose();
  };

  const renderForm = () => {
    const type = form.property_type;

    switch (type) {
      case "APARTMENT":
        return (
          <ApartmentForm
            initialData={form}
            onSubmit={handleSubmit}
          />
        );

      case "HOUSE":
        return (
          <HouseForm
            initialData={form}
            onSubmit={handleSubmit}
          />
        );

      case "DUPLEX":
        return (
          <DuplexForm
            initialData={form}
            onSubmit={handleSubmit}
          />
        );

      case "TOWNHOUSE":
        return (
          <TownHouseForm
            initialData={form}
            onSubmit={handleSubmit}
          />
        );

      default:
        return <p>Error: tipo desconocido</p>;
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <h3>{isEditing ? "Editar Propiedad" : "Nueva Propiedad"}</h3>

        {/* Selector de tipo solo cuando se crea */}
        {!isEditing && (
          <select
            value={form.property_type}
            onChange={(e) =>
              setForm({ ...form, property_type: e.target.value })
            }
          >
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
            <option value="DUPLEX">Duplex</option>
            <option value="TOWNHOUSE">TownHouse</option>
          </select>
        )}

        {renderForm()}

        <button className="danger" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
