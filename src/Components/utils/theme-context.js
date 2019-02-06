import React from "react";

export const themes = {
  dark: {
    foreground: "#555",
    background: "#222",
    text: "#fff",
    name: "dark"
  },
  light: {
    foreground: "#fff",
    background: "lightblue",
    text: "#000",
    name: "light"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
