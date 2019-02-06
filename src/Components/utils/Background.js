import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

import "../../App.css";

const Background = () => {
  const themes = useContext(ThemeContext);
  return (
    <div className="background" style={{ background: themes.foreground }} />
  );
};

export default Background;
