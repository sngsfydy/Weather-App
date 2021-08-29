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

export function themeSetter(color) {
  switch (color) {
    case "#181818":
      return "dark";
    case "#f7f8f9":
      return "light";
    case "#3A3A3A":
      return "dark";
    case "#E2E8F0":
      return "light";
    default:
      return "light";
  }
}

export const ThemeContext = createContext(themes.light);
