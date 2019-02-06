import React, { useState } from "react";
import { ThemeContext, themes } from "./utils/theme-context";

import Button from "./utils/Button";
import Background from "./utils/Background";

const UseContext = () => {
  let [theme, toggleTheme] = useState(themes.light);

  const toggle = () => {
    toggleTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Background />
        <h1>useContext</h1>
        <Button clickon={toggle}>{theme.name}</Button>
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContext;
