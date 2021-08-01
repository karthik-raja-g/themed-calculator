import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import Keypad from "./components/keypad";
import Screen from "./components/screen";
import Header from "./components/header";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <div className="calculator">
          <Header toggleHandler={setTheme} />
          <Screen />
          <Keypad />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
