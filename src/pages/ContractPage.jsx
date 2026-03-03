import { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext.jsx";

export default function ContractPage() {
  const [contracts, setContracts] = useState([]);
  const { role } = useRole();

  useEffect(() => {
    fetch("http://localhost:8080/api/contracts")
      .then((res) => res.json())
      .then((data) => setContracts(data));
  }, []);

  return (
    <div className="table-container">
      <h2>Contratos</h2>

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
