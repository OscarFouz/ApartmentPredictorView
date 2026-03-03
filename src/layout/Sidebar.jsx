import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="section-title">Datos</div>
      <NavLink to="/properties">Propiedades</NavLink>
      <NavLink to="/owners">Owners</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/contracts">Contratos</NavLink>
      <NavLink to="/schools">Escuelas</NavLink>

      <div className="section-title">Relaciones</div>
      <NavLink to="/relations/property-owner">Property ↔ Owner</NavLink>
      <NavLink to="/relations/property-school">Property ↔ School</NavLink>
      <NavLink to="/relations/property-review">Property ↔ Review</NavLink>
      <NavLink to="/relations/property-contract">Property ↔ Contract</NavLink>
    </aside>
  );
}
