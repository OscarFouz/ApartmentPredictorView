import { useProperties } from "../hooks/useProperties";
import { useRole } from "../hooks/useRole";


export default function TownHousePage() {
 const { properties } = useProperties();
  const { role } = useRole();

  const townhouses = properties.filter(p => p.property_type === "TOWNHOUSE");

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
