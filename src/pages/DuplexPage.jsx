import { useProperties } from "../hooks/useProperties";
import { useRole } from "../hooks/useRole";

export default function DuplexPage() {
  const { properties } = useProperties();
  const { role } = useRole();

  const duplexes = properties.filter(p => p.property_type === "DUPLEX");

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
