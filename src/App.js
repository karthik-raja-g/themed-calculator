import { useState } from "react";
import "./App.css";
import NumberButton from "./components/numberButton";
import LongButton from "./components/longButton";
import { ThemeProvider } from "styled-components";
import themes from "./theme/themes";
import GlobalStyles from "./theme/GlobalStyles";
import Keypad from "./components/keypad";
import Screen from "./elements/screen";
import { keys } from "./keys";
import Header from "./components/header";

function App() {
  const [theme, setTheme] = useState(themes.blue);
  const toggleTheme = (theme) => setTheme(themes[theme]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <div className="calculator">
          <Header toggleHandler={toggleTheme} />
          <Screen>324,523</Screen>
          <Keypad>
            {keys.map((val, index) => {
              if (val.text === "RESET" || val.text === "=") {
                return (
                  <LongButton key={index} type={val.value}>
                    {val.text}
                  </LongButton>
                );
              }
              return (
                <NumberButton key={index} value={val.value}>
                  {val.text}
                </NumberButton>
              );
            })}
          </Keypad>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
