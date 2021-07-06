import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.backgrounds.body};
    font-family: 'Spartan', sans-serif; 
  }

  body * {
    font-family: 'Spartan', sans-serif; 
  }
`
export default GlobalStyles;