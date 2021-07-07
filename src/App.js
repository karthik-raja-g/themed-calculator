import { useState } from "react";
import "./App.css";
import NumberButton from "./components/numberButton";
import LongButton from "./components/longButton";
import { ThemeProvider } from "styled-components";
import themes from "./theme/themes";
import GlobalStyles from "./theme/GlobalStyles";
import Keypad from "./elements/keypad";
import keys from "./keys";

function App() {
  const [theme, setTheme] = useState(themes.blue);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Keypad>
          {keys.map((val, index) => {
            if (val.text === "RESET" || val.text === "=") {
              return <LongButton key={index} type={val.value}>{val.text}</LongButton>;
            }
            return (
              <NumberButton key={index} value={val.value}>
                {val.text}
              </NumberButton>
            );
          })}
        </Keypad>
        <NumberButton clickHandler={() => setTheme(themes.blue)}>
          blue
        </NumberButton>
        <NumberButton clickHandler={() => setTheme(themes.white)}>
          white
        </NumberButton>
        <NumberButton clickHandler={() => setTheme(themes.purple)}>
          purple
        </NumberButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
