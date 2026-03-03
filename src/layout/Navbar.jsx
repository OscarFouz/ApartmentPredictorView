import { useEffect, useState } from "react";
import { useRole } from "../context/RoleContext.jsx";

export default function Navbar({ type, setType, maxPrice, setMaxPrice }) {
  const { role, changeRole } = useRole();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Aplicar tema al body
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleRole = () => {
    changeRole(role === "ADMIN" ? "USER" : "ADMIN");
  };

  return (
    <nav className="navbar">
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
        <button onClick={toggleTheme}>
          Tema: {theme === "dark" ? "Oscuro" : "Claro"}
        </button>

        <div className="role-wrapper">
          <button onClick={toggleRole}>
            Rol: {role === "ADMIN" ? "Cambiar a Usuario" : "Cambiar a Admin"}
          </button>
          <span>Actual: {role}</span>
        </div>
      </div>
    </nav>
  );
}
