import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const goToNewApartment = useCallback(
    () => navigate("/properties?create=APARTMENT"),
    [navigate]
  );

  const goToNewSchool = useCallback(
    () => navigate("/schools?create=true"),
    [navigate]
  );

  return (
    <nav className="navbar">
      {/* TÍTULO */}
      <div className="navbar-title">Panel de Gestión</div>

      {/* FILTROS (si los tienes) */}
      <div className="filters">
        {/* Aquí puedes dejar tus filtros actuales */}
      </div>

      {/* BOTONES DERECHA */}
      <div className="right-side">
        <button onClick={goToNewApartment}>
          + Apartment
        </button>

        <button onClick={goToNewSchool}>
          + School
        </button>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
