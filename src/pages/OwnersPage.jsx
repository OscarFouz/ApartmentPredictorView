// src/pages/OwnersPage.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import OwnerTable from "../components/owners/OwnerTable";
import OwnerModal from "../components/owners/OwnerModal";

import {
  getAllOwners,
  createOwner,
  updateOwner,
  deleteOwner
} from "../services/ownerService";

export default function OwnersPage() {
  const location = useLocation();

  const [owners, setOwners] = useState([]);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [modalMode, setModalMode] = useState("view"); // view | edit | create
  const [showModal, setShowModal] = useState(false);

  // ============================
  // CARGAR PROPIETARIOS
  // ============================
  const loadOwners = async () => {
    const data = await getAllOwners();
    setOwners(data);
  };

  useEffect(() => {
    loadOwners();
  }, []);

  // ============================
  // DETECTAR ?create=true
  // ============================
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const createFlag = params.get("create");

    if (createFlag) {
      setSelectedOwner({
        name: "",
        email: "",
        phone: "",
        address: ""
      });

      setModalMode("create");
      setShowModal(true);
    }
  }, [location.search]);

  // ============================
  // ACCIONES
  // ============================
  const handleView = (owner) => {
    setSelectedOwner(owner);
    setModalMode("view");
    setShowModal(true);
  };

  const handleEdit = (owner) => {
    setSelectedOwner(owner);
    setModalMode("edit");
    setShowModal(true);
  };

  const handleDelete = async (owner) => {
    if (!window.confirm("¿Eliminar este propietario?")) return;
    await deleteOwner(owner.id);
    loadOwners();
  };

  const handleSave = async (form) => {
    if (modalMode === "create") {
      await createOwner(form);
    } else {
      await updateOwner(form.id, form);
    }

    loadOwners();
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOwner(null);
  };

  return (
    <div className="page-content">
      <h1>Propietarios</h1>

      {/* TABLA */}
      <OwnerTable
        owners={owners}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* MODAL */}
      {showModal && (
        <OwnerModal
          owner={selectedOwner}
          mode={modalMode}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
