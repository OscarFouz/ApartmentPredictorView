// src/components/ThemeSwitcher.jsx
import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div style={{ marginLeft: "auto" }}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "6px",
          background: "#222",
          color: "white",
          border: "1px solid #555",
        }}
      >
        <option value="dark">🌑 Tema Oscuro</option>
        <option value="light">🌕 Tema Claro</option>
        <option value="blue">🔵 Tema Azul</option>
        <option value="green">🟢 Tema Verde</option>
        <option value="glass">🧊 Glassmorphism</option>
      </select>
    </div>
  );
}
