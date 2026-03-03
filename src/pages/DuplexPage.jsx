import { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext.jsx";

export default function DuplexPage() {
  const [duplexes, setDuplexes] = useState([]);
  const { role } = useRole();

  useEffect(() => {
    fetch("http://localhost:8080/api/duplex")
      .then((res) => res.json())
      .then((data) => setDuplexes(data));
  }, []);

  return (
    <div className="table-container">
      <h2>Duplex</h2>

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
          {duplexes.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.address}</td>
              <td>{d.owner?.fullName ?? "Sin owner"}</td>
              <td>{d.price ? `${d.price} €` : "—"}</td>

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
