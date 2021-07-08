import React from "react";
import styled from "styled-components";
import Toggler from "./toggler";

const ThemeText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.text.info};
  font-size: 1.75em;
  letter-spacing: 0.1em;
`;
const Header = ({ toggleHandler }) => (
  <div className="header">
    <ThemeText>calc</ThemeText>
    <Toggler toggleHandler={toggleHandler} />
  </div>
);

export default Header;
