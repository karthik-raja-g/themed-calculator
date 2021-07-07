import React, { useState, useEffect } from "react";
import Button from "../elements/button";

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
    <Button onClick={handleClick} clicked={clicked} className={className}>
      {children}
    </Button>
  );
};

export default AppButton;
