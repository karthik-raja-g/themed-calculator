import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/GlobalStyles";
import Keypad from "./components/keypad";
import Screen from "./components/screen";
import Header from "./components/header";
import github from './github.svg'

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
        <a
          href="https://github.com/karthik-raja-g/themed-calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img src={github} alt="Github link" />
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
