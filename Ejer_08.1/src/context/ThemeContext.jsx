import { createContext, useReducer } from "react";
import { themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

const initialTheme = {
  primaryColor: "#6c5ce7",
  fontSize: 16,
  textTransform: "none"
};

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
