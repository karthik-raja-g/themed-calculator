import React from "react";
import Button from "./button";
import Styled from "styled-components";

const NumButton = Styled(Button)`
  background-color: ${(props) => props.theme.keys.number.body};
  border-bottom: 4px solid ${(props) => props.theme.keys.number.shadow};
  color: ${(props) => props.theme.text.number};
`;
const NumberButton = ({ children, clickHandler, className }) => (
  <NumButton clickHandler={clickHandler} className={className}>
    {children}
  </NumButton>
);

export default NumberButton;
