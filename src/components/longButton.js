import React from "react";
import Button from "./button";
import Styled from "styled-components";

const LongBtn = Styled(Button)`
  background-color: ${(props) => props.theme.keys[props.type].body};
  box-shadow: 0 4px ${(props) => props.theme.keys[props.type].shadow}, 0 1px rgba(0, 0, 0, 0.4);
  color: ${(props) => props.theme.text[props.type]};
  font-size: ${(props) => (props.type === "function" ? "1.25em" : "")};
  grid-column-start: span 2;

  @media(max-width: 330px) {
    font-size: 1em;
  }
`;
const LongButton = ({ children, clickHandler, className, type }) => (
  <LongBtn clickHandler={clickHandler} className={className} type={type}>
    {children}
  </LongBtn>
);

export default LongButton;
