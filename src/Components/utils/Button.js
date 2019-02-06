import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

import "./Button.css";

const Button = ({ children, clickon }) => {
  const themes = useContext(ThemeContext);

  return (
    <button
      style={{ background: themes.background, color: themes.text }}
      onClick={clickon}>
      {children}
    </button>
  );
};

export default Button;
