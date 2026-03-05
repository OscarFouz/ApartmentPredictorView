import { useState } from "react";
import { useProperties } from "../hooks/useProperties";
import { useRole } from "../hooks/useRole";

import PropertyTable from "../components/properties/PropertyTable";
import PropertyModal from "../components/properties/PropertyModal";
import ReviewListModal from "../components/reviews/ReviewListModal";

export default function PropertiesPage() {
  const { properties } = useProperties();
  const { role } = useRole();

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const openEditModal = (property) => {
    setSelectedProperty(property);
    setShowPropertyModal(true);
  };

  const openReviewModal = (property) => {
    setSelectedProperty(property);
    setShowReviewModal(true);
  };

  return (
    <div className="table-container">
      <h2>Propiedades</h2>

      <PropertyTable
        properties={properties}
        role={role}
        onEdit={openEditModal}
        onShowReviews={openReviewModal}
      />

      {showPropertyModal && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setShowPropertyModal(false)}
        />
      )}

      {showReviewModal && (
        <ReviewListModal
          property={selectedProperty}
          onClose={() => setShowReviewModal(false)}
        />
      )}
    </div>
  );
}
