import { useReducer, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { themeReducer } from "./reducers/themeReducer";

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: localStorage.getItem("theme") || "dark"
  });

  useEffect(() => {
    // limpiar clases previas
    document.body.className = "";

    // si no es dark, aplicar clase
    if (state.theme !== "dark") {
      document.body.classList.add(`${state.theme}-theme`);
    }

    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const toggleTheme = () => dispatch({ type: "TOGGLE" });

  const setTheme = (theme) =>
    dispatch({ type: "SET_THEME", payload: theme });

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
