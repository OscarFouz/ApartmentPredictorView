// src/pages/OwnersPage.jsx
import React, { useEffect, useState } from "react";
import OwnerTable from "../components/owners/OwnerTable";
import OwnerModal from "../components/owners/OwnerModal";
import { useOwners } from "../hooks/useOwners";

export default function OwnersPage() {
  const { owners, load, edit, remove, create } = useOwners();
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h2>Owners</h2>

      <button onClick={() => setCreating(true)}>Nuevo Owner</button>

      <OwnerTable
        owners={owners}
        onEdit={setSelectedOwner}
        onDelete={remove}
      />

      {selectedOwner && (
        <OwnerModal
          owner={selectedOwner}
          onSave={(data) => {
            edit(selectedOwner.id, data);
            setSelectedOwner(null);
          }}
          onClose={() => setSelectedOwner(null)}
        />
      )}

      {creating && (
        <OwnerModal
          owner={{
            fullName: "",
            email: "",
            phone: "",
            business: false,
          }}
          onSave={(data) => {
            create(data);
            setCreating(false);
          }}
          onClose={() => setCreating(false)}
        />
      )}
    </div>
  );
}
