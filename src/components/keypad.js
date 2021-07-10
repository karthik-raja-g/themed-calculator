import React, { useEffect } from "react";
import Keypad from "../elements/keypad";
import { acceptedKeys } from "../keys";

const AppKeypad = ({ children }) => {
  const handleKeyPress = (e) => {
    console.log(e.key);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });
  return <Keypad>{children}</Keypad>;
};

export default AppKeypad;
