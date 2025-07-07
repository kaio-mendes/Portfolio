import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toogleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
