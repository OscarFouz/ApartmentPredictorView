import { useEffect, useState } from "react";
import "./Table.css";

export default function ApartmentTable() {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error("Error cargando apartamentos:", err));
  }, []);

  return (
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
            <tr key={ap.id}>
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
                <button className="details-btn" onClick={() => setSelectedApartment(ap)}>
                  Ver detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {selectedApartment && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedApartment(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={`https://picsum.photos/seed/${selectedApartment.id}/400/250`}
              alt="apartment"
              className="modal-image"
            />

            <div className="modal-content">
              <h2>Detalles del Apartamento</h2>
                <div className="modal-row">
                  <label>Área</label>
                  <input type="text" value={selectedApartment.area} readOnly />
                </div>

                <div className="modal-row">
                  <label>Precio</label>
                  <input type="text" value={selectedApartment.price} readOnly />
                </div>

                <div className="modal-row">
                  <label>Habitaciones</label>
                  <input type="text" value={selectedApartment.bedrooms} readOnly />
                </div>

                <div className="modal-row">
                  <label>Baños</label>
                  <input type="text" value={selectedApartment.bathrooms} readOnly />
                </div>

                <div className="modal-row">
                  <label>Stories</label>
                  <input type="text" value={selectedApartment.stories} readOnly />
                </div>

                <div className="modal-row">
                  <label>Main Road</label>
                  <input type="text" value={selectedApartment.mainroad} readOnly />
                </div>

                <div className="modal-row">
                  <label>Guest Room</label>
                  <input type="text" value={selectedApartment.guestroom} readOnly />
                </div>

                <div className="modal-row">
                  <label>Basement</label>
                  <input type="text" value={selectedApartment.basement} readOnly />
                </div>

                <div className="modal-row">
                  <label>Hot Water</label>
                  <input type="text" value={selectedApartment.hotwaterheating} readOnly />
                </div>

                <div className="modal-row">
                  <label>A/C</label>
                  <input type="text" value={selectedApartment.airconditioning} readOnly />
                </div>

                <div className="modal-row">
                  <label>Parking</label>
                  <input type="text" value={selectedApartment.parking} readOnly />
                </div>

                <div className="modal-row">
                  <label>Pref. Area</label>
                  <input type="text" value={selectedApartment.prefarea} readOnly />
                </div>

                <div className="modal-row">
                  <label>Furnishing</label>
                  <input type="text" value={selectedApartment.furnishingstatus} readOnly />
                </div>

            </div>

            <div className="modal-footer">
              <button className="edit-btn">Modificar</button>
              <button
                className="close-btn"
                onClick={() => setSelectedApartment(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
