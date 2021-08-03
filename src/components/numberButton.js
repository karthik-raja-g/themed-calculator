import React from "react";
import Button from "./button";
import Styled from "styled-components";

const NumButton = Styled(Button)`
  background-color: ${(props) =>
    props.value === "del"
      ? props.theme.keys.function.body
      : props.theme.keys.number.body};
  color: ${(props) =>
    props.value === "del"
      ? props.theme.text.function
      : props.theme.text.number};
  font-size: ${(props) => (props.value === "del" ? "1.25em" : "")};
  box-shadow: 0 4px ${(props) =>
    props.value === "del"
      ? props.theme.keys.function.shadow
      : props.theme.keys.number.shadow}, 0 1px rgba(0, 0, 0, 0.4);

  @media(max-width: 330px) {
    font-size: 1em;
  }
`;
const NumberButton = ({ children, clickHandler, className, value }) => (
  <NumButton clickHandler={clickHandler} className={className} value={value}>
    {children}
  </NumButton>
);

export default NumberButton;
