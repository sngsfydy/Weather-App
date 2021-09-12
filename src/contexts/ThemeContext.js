import { createContext } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#f7f8f9",
    searchbar: "#E2E8F0",
  },
  dark: {
    foreground: "#ffffff",
    background: "#181818",
    searchbar: "#3A3A3A",
  },
};

export const ThemeContext = createContext(themes.light);
