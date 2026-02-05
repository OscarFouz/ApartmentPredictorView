import { useState } from "react";
import { useApartments } from "../../hooks/useApartments";
import ApartmentRow from "./ApartmentRow";
import ApartmentModal from "./ApartmentModal";
import "../Table.css";

export default function ApartmentTable() {
  //const { apartments, remove, add, edit } = useApartments();
  const { apartments, isLoading, isAxiosError, remove, add, edit } = useApartments();
  const [modalData, setModalData] = useState(null);

 // ============================
  // LOADING
  // ============================
  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Cargando apartamentos...</p>;
  }

  // ============================
  // ERROR
  // ============================
  if (isAxiosError) {
    return <p style={{ textAlign: "center", color: "red" }}>Error cargando datos.</p>;
  }

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
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="button-wrapper">
        <button
          className="details-btn"
          onClick={() =>
            setModalData({
              isNew: true,
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
            })
          }
        >
          Nuevo Apartamento
        </button>
      </div>

      {modalData && (
        <ApartmentModal
          data={modalData}
          onClose={() => setModalData(null)}
          onSave={(formData) => {
            if (modalData.isNew) {
              add(formData);
            } else {
              edit(formData);
            }
            setModalData(null);
          }}
        />
      )}
    </>
  );
}
