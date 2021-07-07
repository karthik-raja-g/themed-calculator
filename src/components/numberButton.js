import React from "react";
import Button from "./button";
import Styled from "styled-components";

const NumButton = Styled(Button)`
  background-color: ${(props) =>
    props.value === "del"
      ? props.theme.keys.function.body
      : props.theme.keys.number.body};
  border-bottom: 4px solid ${(props) =>
    props.value === "del"
      ? props.theme.keys.function.shadow
      : props.theme.keys.number.shadow};
  color: ${(props) =>
    props.value === "del" ? props.theme.text.function : props.theme.text.number};
  font-size: ${(props) => (props.value === "del" ? "1.25em" : "")};

`;
const NumberButton = ({ children, clickHandler, className, value }) => (
  <NumButton clickHandler={clickHandler} className={className} value={value}>
    {children}
  </NumButton>
);

export default NumberButton;
