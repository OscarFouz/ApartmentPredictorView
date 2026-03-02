// src/pages/ReviewersPage.jsx
import React, { useEffect, useState } from "react";
import ReviewerTable from "../components/reviewers/ReviewerTable";
import ReviewerModal from "../components/reviewers/ReviewerModal";
import { useReviewers } from "../hooks/useReviewers";

export default function ReviewersPage() {
  const { reviewers, load, edit, remove } = useReviewers();
  const [selectedReviewer, setSelectedReviewer] = useState(null);

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h2>Reviewers</h2>

      <ReviewerTable
        reviewers={reviewers}
        onEdit={setSelectedReviewer}
        onDelete={remove}
      />

      {selectedReviewer && (
        <ReviewerModal
          reviewer={selectedReviewer}
          onSave={data => { edit(selectedReviewer.id, data); setSelectedReviewer(null); }}
          onClose={() => setSelectedReviewer(null)}
        />
      )}
    </div>
  );
}
