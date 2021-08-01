import React, { useState, useEffect } from "react";
import Button from "../elements/button";
import Styled from "styled-components";

const Btn = Styled(Button)`
  border-top: ${(props) => props.clicked ? '4px solid transparent' : ''};
`;
const AppButton = ({ children, clickHandler, className }) => {
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
    <Btn onClick={handleClick} clicked={clicked} className={className}>
      {children}
    </Btn>
  );
};

export default AppButton;
