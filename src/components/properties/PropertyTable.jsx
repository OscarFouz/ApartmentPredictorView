import { useRole } from "../../hooks/useRole";

export default function PropertyTable({ properties, onEdit, onShowReviews }) {
  const { role } = useRole();

  return (
    <table className="property-table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Owner</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {properties.map((p) => (
          <tr key={p.id}>
            <td>{p.property_type}</td>
            <td>{p.name}</td>
            <td>{p.address}</td>
            <td>{p.owner?.fullName ?? "Sin owner"}</td>
            <td>{p.price ? `${p.price} €` : "—"}</td>

            <td className="actions">
              <button onClick={() => onShowReviews(p)}>Reviews</button>

              {role === "USER" && <button>Crear review</button>}

              {role === "ADMIN" && (
                <>
                  <button onClick={() => onEdit(p)}>Editar</button>
                  <button className="danger">Eliminar</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
