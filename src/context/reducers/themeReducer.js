export function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark"
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload
      };

    default:
      return state;
  }
}
