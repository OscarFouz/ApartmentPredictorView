// src/layout/Navbar.jsx
import { useFilters } from "../hooks/useFilters";
import { useTheme } from "../hooks/useTheme";
import { useRole } from "../hooks/useRole";

export default function Navbar() {
  const { type, setType, maxPrice, setMaxPrice } = useFilters();
  const { theme, setTheme } = useTheme();
  const { role, reviewers, selectedReviewerId, selectReviewer } = useRole();

  return (
    <nav className="navbar">
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
        {/* Selector de tema */}
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

        {/* Selector de usuario (ADMIN + reviewers) */}
        <select
          value={selectedReviewerId}
          onChange={(e) => selectReviewer(e.target.value)}
        >
          {Array.isArray(reviewers) &&
            reviewers.map((r) => (
              <option key={r.id} value={r.id}>
                {r.fullName}
              </option>
            ))}
        </select>

        <span>Rol: {role}</span>
      </div>
    </nav>
  );
}
