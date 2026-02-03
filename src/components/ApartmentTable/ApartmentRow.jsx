export default function ApartmentRow({ ap, onDelete, onSelect }) {
  return (
    <tr>
      <td>
        <img
          src={`https://picsum.photos/seed/${ap.id}/80/80`}
          alt="apartment"
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
        <button onClick={onSelect}>Ver detalles</button>
        <button onClick={onDelete}>Eliminar</button>
      </td>
    </tr>
  );
}
