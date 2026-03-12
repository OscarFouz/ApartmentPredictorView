// src/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useRole } from "../hooks/useRole";

export default function Sidebar() {
  const { role } = useRole();

  return (
    <aside className="sidebar">
      <div className="section-title">Datos</div>
      <NavLink to="/properties">Propiedades</NavLink>
      <NavLink to="/owners">Owners</NavLink>
      <NavLink to="/contracts">Contratos</NavLink>
      <NavLink to="/schools">Escuelas</NavLink>

      {role === "ADMIN" && (
        <>
          <div className="section-title">Relaciones</div>
          <NavLink to="/relations/property-owner">Property ↔ Owner</NavLink>
          <NavLink to="/relations/property-school">Property ↔ School</NavLink>
          <NavLink to="/relations/property-review">Property ↔ Review</NavLink>
          <NavLink to="/relations/property-contract">Property ↔ Contract</NavLink>
        </>
      )}
    </aside>
  );
}
