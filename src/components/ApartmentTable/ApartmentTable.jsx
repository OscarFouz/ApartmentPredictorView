import { useState } from "react";
import { useApartments } from "../../hooks/useApartments";
import { useReviews } from "../../hooks/useReviews";
import ApartmentRow from "./ApartmentRow";
import ApartmentModal from "./ApartmentModal";
import ReviewModal from "../Reviews/ReviewModal";
import ReviewFormModal from "../Reviews/ReviewFormModal";
import "../Table.css";

export default function ApartmentTable() {
  // Combinación correcta de ambas versiones
  const {
    apartments,
    isLoading,
    isAxiosError,
    remove,
    add,
    edit,
    loadApartments,
  } = useApartments();

  const { reviews, loadReviews, addReview } = useReviews();

  const [modalData, setModalData] = useState(null);
  const [reviewModal, setReviewModal] = useState(null);
  const [reviewFormModal, setReviewFormModal] = useState(null);

  // Ver reviews correctas
  const openReviews = async (ap) => {
    const data = await loadReviews(ap.id);
    setReviewModal({ apartment: ap, reviews: data });
  };

  const openReviewForm = (ap) => {
    setReviewFormModal({ apartment: ap });
  };

  if (isLoading) return <p>Cargando apartamentos...</p>;
  if (isAxiosError) return <p>Error cargando datos.</p>;

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Área</th>
              <th>Rating</th>
              <th>Precio</th>
              <th>Habitaciones</th>
              <th>Baños</th>
              <th>Stories</th>
              <th>Main Road</th>
              <th>Guest Room</th>
              <th>Basement</th>
              <th>Hot Water</th>
              <th>A/C</th>
              <th>Parking</th>
              <th>Pref. Area</th>
              <th>Furnishing</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {apartments.map((ap) => (
              <ApartmentRow
                key={ap.id}
                ap={ap}
                onDelete={() => remove(ap.id)}
                onSelect={() => setModalData(ap)}
                onAddReview={() => openReviewForm(ap)}
                onShowReviews={() => openReviews(ap)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL DETALLES */}
      {modalData && (
        <ApartmentModal
          data={modalData}
          onClose={() => setModalData(null)}
          onSave={(formData) => {
            if (modalData.isNew) add(formData);
            else edit(formData);
            setModalData(null);
          }}
        />
      )}

      {/* MODAL VER REVIEWS */}
      {reviewModal && (
        <ReviewModal
          reviews={reviewModal.reviews}
          onClose={() => setReviewModal(null)}
        />
      )}

      {/* MODAL NUEVA REVIEW */}
      {reviewFormModal && (
        <ReviewFormModal
          onClose={() => setReviewFormModal(null)}
          onSave={async (form) => {
            // 1️ Guardar review
            await addReview(reviewFormModal.apartment.id, form);

            // 2️ Cerrar modal de crear review
            setReviewFormModal(null);

            // 3️ Recargar apartamentos para que aparezca el botón "Ver reviews"
            await loadApartments();

            // 4️ NO abrir modal de ver reviews automáticamente
          }}
        />
      )}
    </>
  );
}
