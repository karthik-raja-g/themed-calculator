import React, { useState, useEffect } from "react";
import Button from "../elements/button";
import Styled from "styled-components";

const NumButton = Styled(Button)`
  background-color: ${(props) => props.theme.keys.number.body};
  border-bottom: 4px solid ${(props) => props.theme.keys.number.shadow};
  color: ${(props) => props.theme.text.number};
`;
const NumberButton = ({ children, clickHandler, className }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    clickHandler && clickHandler();
  };
  useEffect(() => {
    if (clicked) {
      setTimeout(() => setClicked(false), 200);
    }
  }, [clicked]);
  return (
    <NumButton onClick={handleClick} clicked={clicked} className={className}>
      {children}
    </NumButton>
  );
};

export default NumberButton;
