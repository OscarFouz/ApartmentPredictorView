// src/components/layout/Navbar.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

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
        <button onClick={() => navigate("/properties?create=APARTMENT")}>
          + Apartment
        </button>

        <button onClick={() => navigate("/schools?create=true")}>
          + School
        </button>
      </div>
    </nav>
  );
}
