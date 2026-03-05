// src/pages/ContractPage.jsx
import { useEffect, useState } from "react";
import { useRole } from "../hooks/useRole";
import { useContracts } from "../hooks/useContracts";

export default function ContractPage() {
  const { contracts, load, edit, remove, create } = useContracts();
  const { role } = useRole();

  const [selectedContract, setSelectedContract] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="table-container">
      <h2>Contratos</h2>

      {role === "ADMIN" && (
        <button onClick={() => setCreating(true)}>Nuevo Contrato</button>
      )}

      <table className="property-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio acordado</th>
            <th>Activo</th>
            <th>Owner</th>
            <th>Propiedad</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((c) => (
            <tr key={c.id}>
              <td>{c.contractName}</td>
              <td>{c.agreedPrice} €</td>
              <td>{c.active ? "Sí" : "No"}</td>
              <td>{c.owner?.fullName ?? "—"}</td>
              <td>{c.property?.name ?? "—"}</td>

              <td className="actions">
                <button>Ver</button>

                {role === "ADMIN" && (
                  <>
                    <button onClick={() => setSelectedContract(c)}>
                      Editar
                    </button>
                    <button className="danger" onClick={() => remove(c.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedContract && (
        <div className="modal">
          <div className="modal-content">
            <h3>Editar Contrato</h3>

            <input
              value={selectedContract.contractName}
              onChange={(e) =>
                setSelectedContract({
                  ...selectedContract,
                  contractName: e.target.value,
                })
              }
            />

            <input
              type="number"
              value={selectedContract.agreedPrice}
              onChange={(e) =>
                setSelectedContract({
                  ...selectedContract,
                  agreedPrice: e.target.value,
                })
              }
            />

            <label>
              Activo:
              <input
                type="checkbox"
                checked={selectedContract.active}
                onChange={(e) =>
                  setSelectedContract({
                    ...selectedContract,
                    active: e.target.checked,
                  })
                }
              />
            </label>

            <button
              onClick={() => {
                edit(selectedContract.id, selectedContract);
                setSelectedContract(null);
              }}
            >
              Guardar
            </button>

            <button className="danger" onClick={() => setSelectedContract(null)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {creating && (
        <div className="modal">
          <div className="modal-content">
            <h3>Nuevo Contrato</h3>

            <input
              placeholder="Nombre del contrato"
              onChange={(e) =>
                setCreating((prev) => ({ ...prev, contractName: e.target.value }))
              }
            />

            <input
              type="number"
              placeholder="Precio acordado"
              onChange={(e) =>
                setCreating((prev) => ({ ...prev, agreedPrice: e.target.value }))
              }
            />

            <label>
              Activo:
              <input
                type="checkbox"
                onChange={(e) =>
                  setCreating((prev) => ({ ...prev, active: e.target.checked }))
                }
              />
            </label>

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
