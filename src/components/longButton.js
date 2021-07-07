import React from "react";
import Button from "./button";
import Styled from "styled-components";

const LongBtn = Styled(Button)`
  background-color: ${(props) =>
    props.type === "equals"
      ? props.theme.keys.result.body
      : props.theme.keys.number.body};
  border-bottom: 4px solid ${(props) =>
    props.type === "equals"
      ? props.theme.keys.result.shadow
      : props.theme.keys.number.shadow};
  color: ${(props) => props.theme.text.number};
  grid-column-start: span 2;
`;
const LongButton = ({ children, clickHandler, className, type }) => {
  console.log(type);
  return (
    <LongBtn clickHandler={clickHandler} className={className} type={type}>
      {children}
    </LongBtn>
  );
};

export default LongButton;
