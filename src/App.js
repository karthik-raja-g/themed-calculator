import "./App.css";
import NumberButton from "./components/numberButton";
import { ThemeProvider } from "styled-components";
import themes from "./theme/themes";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={themes.blue}>
      <GlobalStyles />
      <div className="App">
        <NumberButton>.</NumberButton>
        <h2>dummy</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
