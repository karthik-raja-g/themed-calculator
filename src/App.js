import "./App.css";
import NumberButton from "./components/numberButton";
import { ThemeProvider } from "styled-components";
import themes from "./theme/themes";
import GlobalStyles from "./theme/GlobalStyles";
import Keypad from "./elements/keypad";
import keys from "./keys";

function App() {
  return (
    <ThemeProvider theme={themes.blue}>
      <GlobalStyles />
      <div className="App">
        <Keypad>
          {keys.map((val, index) => (
            <NumberButton
              key={index}
              className={val.text === "RESET" || val.text === "=" ? "last" : ""}
            >
              {val.text}
            </NumberButton>
          ))}
        </Keypad>
        <h2>dummy</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
