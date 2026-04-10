import { useReducer, useEffect, useCallback, useMemo } from "react";
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

  const toggleTheme = useCallback(
    () => dispatch({ type: "TOGGLE" }),
    []
  );

  const setTheme = useCallback(
    (theme) => dispatch({ type: "SET_THEME", payload: theme }),
    []
  );

  const value = useMemo(
    () => ({ theme: state.theme, toggleTheme, setTheme }),
    [state.theme, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
