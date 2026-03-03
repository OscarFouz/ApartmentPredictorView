import { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext.jsx";

export default function TownHousePage() {
  const [townhouses, setTownhouses] = useState([]);
  const { role } = useRole();

  useEffect(() => {
    fetch("http://localhost:8080/api/townhouses")
      .then((res) => res.json())
      .then((data) => setTownhouses(data));
  }, []);

  return (
    <div className="table-container">
      <h2>TownHouses</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Owner</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {townhouses.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.address}</td>
              <td>{t.owner?.fullName ?? "Sin owner"}</td>
              <td>{t.price ? `${t.price} €` : "—"}</td>

              <td className="actions">
                <button>Ver</button>
                <button>Reviews</button>

                {role === "USER" && <button>Crear review</button>}

                {role === "ADMIN" && (
                  <>
                    <button>Editar</button>
                    <button className="danger">Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
