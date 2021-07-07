import React from "react";
import Button from "./button";
import Styled from "styled-components";

const LongBtn = Styled(Button)`
  background-color: ${(props) => props.theme.keys[props.type].body};
  border-bottom: 4px solid ${(props) => props.theme.keys[props.type].shadow};
  color: ${(props) => props.theme.text[props.type]};
  font-size: ${(props) => (props.type === "function" ? "1.25em" : "")};
  grid-column-start: span 2;
`;
const LongButton = ({ children, clickHandler, className, type }) => (
  <LongBtn clickHandler={clickHandler} className={className} type={type}>
    {children}
  </LongBtn>
);

export default LongButton;
