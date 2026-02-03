import { useEffect, useState } from "react";
import "./Table.css";

export default function ApartmentTable() {
  const [apartments, setApartments] = useState([]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  // ============================
  // ELIMINAR APARTAMENTO
  // ============================
  const deleteApartment = async (id) => {
    if (!confirm("¿Seguro que quieres eliminar este apartamento?")) return;

    try {
      await fetch(`http://localhost:8080/api/apartments/${id}`, {
        method: "DELETE",
      });

      setApartments((prev) => prev.filter((ap) => ap.id !== id));
    } catch (err) {
      console.error("Error eliminando apartamento:", err);
    }
  };

  // ============================
  // CREAR APARTAMENTO
  // ============================
  const createApartment = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/apartments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });

      if (!response.ok) {
        alert("Error creando apartamento");
        return;
      }

      const newApartment = await response.json();
      setApartments((prev) => [...prev, newApartment]);

      alert("Apartamento creado correctamente");

      setSelectedApartment(null);
      setIsCreating(false);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // ============================
  // ACTUALIZAR APARTAMENTO
  // ============================
  const updateApartment = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/apartments/${editData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );

      if (!response.ok) {
        alert("Error actualizando el apartamento");
        return;
      }

      setApartments((prev) =>
        prev.map((ap) => (ap.id === editData.id ? editData : ap))
      );

      alert("Apartamento actualizado correctamente");
      setSelectedApartment(null);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // ============================
  // CARGAR APARTAMENTOS
  // ============================
  useEffect(() => {
    fetch("http://localhost:8080/api/apartments")
      .then((res) => res.json())
      .then((data) => setApartments(data))
      .catch((err) => console.error("Error cargando apartamentos:", err));
  }, []);

  // ============================
  // RENDER
  // ============================
  return (
    <>
      {/* TABLA */}
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
                  <button
                    className="details-btn"
                    onClick={() => {
                      setSelectedApartment(ap);
                      setEditData({ ...ap });
                      setIsCreating(false);
                    }}
                  >
                    Ver detalles
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteApartment(ap.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BOTÓN NUEVO APARTAMENTO */}
      <div className="button-wrapper">
        <button
          className="details-btn"
          onClick={() => {
            setIsCreating(true);
            setSelectedApartment(true);
            setEditData({
              area: "",
              price: "",
              bedrooms: "",
              bathrooms: "",
              stories: "",
              mainroad: "",
              guestroom: "",
              basement: "",
              hotwaterheating: "",
              airconditioning: "",
              parking: "",
              prefarea: "",
              furnishingstatus: "",
            });
          }}
        >
          Nuevo Apartamento
        </button>
      </div>

      {/* MODAL */}
      {selectedApartment && (
        <div
          className="modal-overlay"
          onClick={() => {
            setSelectedApartment(null);
            setIsCreating(false);
          }}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={
                isCreating
                  ? "https://picsum.photos/400/250"
                  : `https://picsum.photos/seed/${selectedApartment.id}/400/250`
              }
              alt="apartment"
              className="modal-image"
            />

            <div className="modal-content">
              <h2>{isCreating ? "Nuevo Apartamento" : "Detalles del Apartamento"}</h2>

              {Object.keys(editData).map((key) => (
                <div className="modal-row" key={key}>
                  <label>{key}</label>
                  <input
                    type="text"
                    value={editData[key]}
                    onChange={(e) =>
                      setEditData({ ...editData, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button
                className="edit-btn"
                onClick={isCreating ? createApartment : updateApartment}
              >
                {isCreating ? "Guardar" : "Modificar"}
              </button>

              <button
                className="close-btn"
                onClick={() => {
                  setSelectedApartment(null);
                  setIsCreating(false);
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
