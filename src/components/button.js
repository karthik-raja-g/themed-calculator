import React, { useState, useEffect } from "react";
import Button from "../elements/button";
import Styled from "styled-components";

const Btn = Styled(Button)`
  position: relative;
  top: ${(props) => (!props.clicked ? 0 : "2px")};
  ${(props) =>
    props.clicked ? `box-shadow: 0 0.2em rgba(0, 0, 0, 0.4) !important` : ""}
  ;
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
