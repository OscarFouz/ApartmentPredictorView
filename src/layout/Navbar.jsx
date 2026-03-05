import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { useRole } from "../hooks/useRole";

export default function Navbar({ type, setType, maxPrice, setMaxPrice }) {
  const { theme, setTheme } = useTheme();
  const { role, changeRole } = useRole();

  return (
    <nav className="navbar">

      {/* 🏠 Título visible */}
      <h1 className="navbar-title">Apartment Predictor</h1>

      <div className="filters">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Todos</option>
          <option value="APARTMENT">Apartment</option>
          <option value="HOUSE">House</option>
          <option value="DUPLEX">Duplex</option>
          <option value="TOWNHOUSE">TownHouse</option>
        </select>

        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="right-side">

        {/* 🔵 Selector de tema */}
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            background: "#222",
            color: "white",
            border: "1px solid #555",
            marginRight: "10px",
          }}
        >
          <option value="dark">🌑 Oscuro</option>
          <option value="light">🌕 Claro</option>
          <option value="blue">🔵 Azul</option>
          <option value="green">🟢 Verde</option>
          <option value="glass">🧊 Glass</option>
        </select>

        {/* 🔐 Selector de rol */}
        <div className="role-wrapper">
          <button onClick={() => changeRole(role === "ADMIN" ? "USER" : "ADMIN")}>
            Rol: {role === "ADMIN" ? "Cambiar a Usuario" : "Cambiar a Admin"}
          </button>
          <span>Actual: {role}</span>
        </div>
      </div>
    </nav>
  );
}
