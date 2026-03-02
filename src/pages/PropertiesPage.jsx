// src/pages/PropertiesPage.jsx
import React, { useEffect, useState } from "react";
import PropertyTable from "../components/properties/PropertyTable";
import PropertyModal from "../components/properties/PropertyModal";
//import ReviewListModal from "../components/reviews/ReviewListModal";
import ReviewListModal from "../components/reviews/ReviewListModal.jsx";
import { useProperties } from "../hooks/useProperties";
import { reviewService } from "../services/reviewService";

export default function PropertiesPage() {
  const { properties, load, edit, remove } = useProperties();

  const [selected, setSelected] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => { load(); }, []);

  const openEdit = p => setSelected(p);
  const closeEdit = () => setSelected(null);

  const openReviews = async p => {
    const data = await reviewService.getByProperty(p.id);
    setReviews(data);
    setShowReviews(true);
  };

  return (
    <div>
      <h2>Propiedades</h2>

      <PropertyTable
        properties={properties}
        onEdit={openEdit}
        onDelete={remove}
        onReviews={openReviews}
      />

      {selected && (
        <PropertyModal
          property={selected}
          onSave={data => { edit(selected.property_type, selected.id, data); closeEdit(); }}
          onClose={closeEdit}
        />
      )}

      {showReviews && (
        <ReviewListModal
          reviews={reviews}
          onClose={() => setShowReviews(false)}
        />
      )}
    </div>
  );
}
