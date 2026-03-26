// src/pages/PropertiesPage.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PropertyTable from "../components/properties/PropertyTable";
import PropertyModal from "../components/properties/PropertyModal";

import {
  getAllProperties,
  createProperty,
  updateProperty,
  deleteProperty
} from "../services/propertyService";

export default function PropertiesPage() {
  const location = useLocation();

  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [modalMode, setModalMode] = useState("view"); // view | edit | create
  const [showModal, setShowModal] = useState(false);

  // ============================
  // CARGAR PROPIEDADES
  // ============================
  const loadProperties = async () => {
    const data = await getAllProperties();
    setProperties(data);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  // ============================
  // DETECTAR ?create=APARTMENT
  // ============================
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const createType = params.get("create");

    if (createType) {
      setSelectedProperty({
        property_type: createType,
        name: "",
        address: "",
        price: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
        description: ""
      });

      setModalMode("create");
      setShowModal(true);
    }
  }, [location.search]);

  // ============================
  // ACCIONES
  // ============================
  const handleView = (property) => {
    setSelectedProperty(property);
    setModalMode("view");
    setShowModal(true);
  };

  const handleEdit = (property) => {
    setSelectedProperty(property);
    setModalMode("edit");
    setShowModal(true);
  };

  const handleDelete = async (property) => {
    if (!window.confirm("¿Eliminar esta propiedad?")) return;
    await deleteProperty(property.id);
    loadProperties();
  };

  const handleSave = async (form) => {
    if (modalMode === "create") {
      await createProperty(form);
    } else {
      await updateProperty(form.id, form);
    }

    loadProperties();
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  return (
    <div className="page-content">
      <h1>Propiedades</h1>

      {/* TABLA */}
      <PropertyTable
        properties={properties}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* MODAL */}
      {showModal && (
        <PropertyModal
          property={selectedProperty}
          mode={modalMode}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
