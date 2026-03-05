// src/context/reducers/propertyReducer.js

export function propertyReducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return { ...state, properties: action.payload };

    case "ADD":
      return { ...state, properties: [...state.properties, action.payload] };

    case "UPDATE":
      return {
        ...state,
        properties: state.properties.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    case "DELETE":
      return {
        ...state,
        properties: state.properties.filter(p => p.id !== action.payload),
      };

    default:
      return state;
  }
}
