import { useEffect, useState } from "react";
import "./Table.css";

export default function ApartmentTable() {
  const [apartments, setApartments] = useState([]);

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
          </tr>
        </thead>

        <tbody>
          {apartments.map((ap) => (
            <tr key={ap.id}>
              {/* FOTO ALEATORIA POR APARTAMENTO */}
              {/*
              <td>
                <img
                  
                  alt="apartment"
                  style={{ width: "80px", height: "80px", borderRadius: "6px" }}
                />
                /*/}
              <td>
                <img
                  /*src={`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=80&q=80`}*/
                  /*src={`https://source.unsplash.com/featured/80x80?apartment,interior&sig=${props.id}`}*/
                  src={`https://picsum.photos/seed/${ap.id}/80/80`}
                  alt="apartment"
                  style={{
                    width: "80px",
                    height: "80px",
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
