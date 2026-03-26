// src/pages/SchoolsPage.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SchoolTable from "../components/schools/SchoolTable";
import SchoolModal from "../components/schools/SchoolModal";

import {
  getAllSchools,
  createSchool,
  updateSchool,
  deleteSchool
} from "../services/schoolService";

export default function SchoolsPage() {
  const location = useLocation();

  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [modalMode, setModalMode] = useState("view"); // view | edit | create
  const [showModal, setShowModal] = useState(false);

  // ============================
  // CARGAR ESCUELAS
  // ============================
  const loadSchools = async () => {
    const data = await getAllSchools();
    setSchools(data);
  };

  useEffect(() => {
    loadSchools();
  }, []);

  // ============================
  // DETECTAR ?create=true
  // ============================
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const createFlag = params.get("create");

    if (createFlag) {
      setSelectedSchool({
        name: "",
        address: "",
        rating: "",
        description: "",
        latitude: "",
        longitude: ""
      });

      setModalMode("create");
      setShowModal(true);
    }
  }, [location.search]);

  // ============================
  // ACCIONES
  // ============================
  const handleView = (school) => {
    setSelectedSchool(school);
    setModalMode("view");
    setShowModal(true);
  };

  const handleEdit = (school) => {
    setSelectedSchool(school);
    setModalMode("edit");
    setShowModal(true);
  };

  const handleDelete = async (school) => {
    if (!window.confirm("¿Eliminar esta escuela?")) return;
    await deleteSchool(school.id);
    loadSchools();
  };

  const handleSave = async (form) => {
    if (modalMode === "create") {
      await createSchool(form);
    } else {
      await updateSchool(form.id, form);
    }

    loadSchools();
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedSchool(null);
  };

  return (
    <div className="page-content">
      <h1>Escuelas</h1>

      {/* TABLA */}
      <SchoolTable
        schools={schools}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* MODAL */}
      {showModal && (
        <SchoolModal
          school={selectedSchool}
          mode={modalMode}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
