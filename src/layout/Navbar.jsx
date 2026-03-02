// src/layout/Navbar.jsx
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  // Cargar tema guardado
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.body.classList.add(`theme-${saved}`);
  }, []);

  // Cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Quitar clases anteriores
    document.body.classList.remove(`theme-${theme}`);
    document.body.classList.add(`theme-${newTheme}`);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="navbar">
      <h1>Apartment Predictor</h1>

      <div className="navbar-right">
        <button className="user-btn">Usuario</button>

        <button className="user-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
        </button>
      </div>
    </header>
  );
}
