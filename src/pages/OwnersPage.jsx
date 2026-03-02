// src/pages/OwnersPage.jsx
import React, { useEffect, useState } from "react";
import OwnerTable from "../components/owners/OwnerTable";
import OwnerModal from "../components/owners/OwnerModal";
import { useOwners } from "../hooks/useOwners";

export default function OwnersPage() {
  const { owners, load, edit, remove } = useOwners();
  const [selectedOwner, setSelectedOwner] = useState(null);

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>Owners</h2>

      <OwnerTable
        owners={owners}
        onEdit={setSelectedOwner}
        onDelete={remove}
      />

      {selectedOwner && (
        <OwnerModal
          owner={selectedOwner}
          onSave={data => { edit(selectedOwner.id, data); setSelectedOwner(null); }}
          onClose={() => setSelectedOwner(null)}
        />
      )}
    </div>
  );
}
