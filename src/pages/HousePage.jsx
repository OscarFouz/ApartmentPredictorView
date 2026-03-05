import { useProperties } from "../hooks/useProperties";
import { useRole } from "../hooks/useRole";


export default function HousePage() {
 const { properties } = useProperties();
  const { role } = useRole();

  const houses = properties.filter(p => p.property_type === "HOUSE");

  return (
    <div className="table-container">
      <h2>Casas</h2>

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
          {houses.map((h) => (
            <tr key={h.id}>
              <td>{h.name}</td>
              <td>{h.address}</td>
              <td>{h.owner?.fullName ?? "Sin owner"}</td>
              <td>{h.price ? `${h.price} €` : "—"}</td>

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
