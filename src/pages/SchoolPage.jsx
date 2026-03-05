// src/pages/SchoolPage.jsx
import { useEffect, useState } from "react";
import { useRole } from "../hooks/useRole";
import { useSchools } from "../hooks/useSchools";

export default function SchoolPage() {
  const { schools, load, edit, remove, create } = useSchools();
  const { role } = useRole();

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="table-container">
      <h2>Escuelas</h2>

      {role === "ADMIN" && (
        <button onClick={() => setCreating(true)}>Nueva Escuela</button>
      )}

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
                    <button onClick={() => setSelectedSchool(s)}>Editar</button>
                    <button className="danger" onClick={() => remove(s.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedSchool && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Escuela</h3>

            <input
              value={selectedSchool.name}
              onChange={(e) =>
                setSelectedSchool({ ...selectedSchool, name: e.target.value })
              }
            />

            <input
              value={selectedSchool.address}
              onChange={(e) =>
                setSelectedSchool({
                  ...selectedSchool,
                  address: e.target.value,
                })
              }
            />

            <input
              value={selectedSchool.type}
              onChange={(e) =>
                setSelectedSchool({ ...selectedSchool, type: e.target.value })
              }
            />

            <input
              value={selectedSchool.educationLevel}
              onChange={(e) =>
                setSelectedSchool({
                  ...selectedSchool,
                  educationLevel: e.target.value,
                })
              }
            />

            <input
              value={selectedSchool.rating}
              onChange={(e) =>
                setSelectedSchool({
                  ...selectedSchool,
                  rating: e.target.value,
                })
              }
            />

            <button
              onClick={() => {
                edit(selectedSchool.id, selectedSchool);
                setSelectedSchool(null);
              }}
            >
              Guardar
            </button>

            <button className="danger" onClick={() => setSelectedSchool(null)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {creating && (
        <div className="modal">
          <div className="modal-content">
            <h3>Nueva Escuela</h3>

            <input
              placeholder="Nombre"
              onChange={(e) =>
                setCreating((prev) => ({ ...prev, name: e.target.value }))
              }
            />

            <input
              placeholder="Dirección"
              onChange={(e) =>
                setCreating((prev) => ({ ...prev, address: e.target.value }))
              }
            />

            <input
              placeholder="Tipo"
              onChange={(e) =>
                setCreating((prev) => ({ ...prev, type: e.target.value }))
              }
            />

            <input
              placeholder="Nivel educativo"
              onChange={(e) =>
                setCreating((prev) => ({
                  ...prev,
                  educationLevel: e.target.value,
                }))
              }
            />

            <input
              placeholder="Rating"
              type="number"
              onChange={(e) =>
                setCreating((prev) => ({ ...prev, rating: e.target.value }))
              }
            />

            <button
              onClick={() => {
                create(creating);
                setCreating(false);
              }}
            >
              Crear
            </button>

            <button className="danger" onClick={() => setCreating(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
