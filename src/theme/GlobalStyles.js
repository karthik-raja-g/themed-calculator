import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgrounds.body};
    font-family: 'Spartan', sans-serif; 
    transition: background-color 0.3s linear;
  }

  body * {
    font-family: 'Spartan', sans-serif; 
  }

  .github-link {
    /* position: absolute;
    bottom: 4%; */
    filter: ${({ theme }) => (theme.id === 3 ? `invert(1)` : "")};
}
`;
export default GlobalStyles;
