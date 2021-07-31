import { useContext } from "react";
import "./App.css";
import { CalculatorContext } from "./context";
import { ThemeContext } from './context/theme'
import NumberButton from "./components/numberButton";
import LongButton from "./components/longButton";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import Keypad from "./components/keypad";
import Screen from "./components/screen";
import { keys } from "./keys";
import Header from "./components/header";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <div className="calculator">
          <Header toggleHandler={setTheme} />
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
