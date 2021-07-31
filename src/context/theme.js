import React, { createContext, useState } from "react";
import themes from "../theme/themes";

export const ThemeContext = createContext();
export const ThemeProvider = (props) => {
  const [theme, changeTheme] = useState(themes.blue);

  const setTheme = (theme) => changeTheme(themes[theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
