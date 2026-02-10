export default function ApartmentRow({
  ap,
  onDelete,
  onSelect,
  onShowReviews,
  onAddReview,
}) {
  return (
    <tr>
      <td>
        <img
          src={`https://picsum.photos/seed/${ap.id}/80/80`}
          alt="apartment"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
      </td>

      <td>{ap.area}</td>
      <td>{ap.locationRating}</td>
      <td>{ap.price}</td>
      <td>{ap.bedrooms}</td>
      <td>{ap.bathrooms}</td>
      <td>{ap.stories}</td>
      <td>{ap.mainroad}</td>
      <td>{ap.guestroom}</td>
      <td>{ap.basement}</td>
      <td>{ap.hotwaterheating}</td>
      <td>{ap.airconditioning}</td>
      <td>{ap.parking}</td>
      <td>{ap.prefarea}</td>
      <td>{ap.furnishingstatus}</td>

      <td>
        <button className="details-btn" onClick={onSelect}>
          Ver detalles
        </button>

        <button className="details-btn" onClick={onAddReview}>
          Añadir review
        </button>

          {ap.reviews?.length > 0 && (
            <button className="details-btn" onClick={onShowReviews}>
              Ver reviews
            </button>
          )}

        <button className="delete-btn" onClick={onDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}
