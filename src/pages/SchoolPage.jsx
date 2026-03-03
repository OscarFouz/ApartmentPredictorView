import { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext.jsx";

export default function SchoolPage() {
  const [schools, setSchools] = useState([]);
  const { role } = useRole();

  useEffect(() => {
    fetch("http://localhost:8080/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="table-container">
      <h2>Escuelas</h2>

      <table className="property-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Tipo</th>
            <th>Nivel</th>
            <th>Rating</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {schools.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.address}</td>
              <td>{s.type}</td>
              <td>{s.educationLevel}</td>
              <td>{s.rating}</td>

              <td className="actions">
                <button>Ver</button>

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
