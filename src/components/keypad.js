import React, { useEffect, useContext } from "react";
import { CalculatorContext } from "../context";
import Keypad from "../elements/keypad";
import { keys } from "../keys";
import LongButton from "./longButton";
import NumberButton from "./numberButton";

const AppKeypad = () => {
  const {
    actions: { setValue },
  } = useContext(CalculatorContext);
  const handleKeyPress = (e) => {
    setValue(e.key);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });
  return (
    <Keypad>
      {keys.map((val, index) => {
        if (val.text === "RESET" || val.text === "=") {
          return (
            <LongButton key={index} type={val.value}>
              {val.text}
            </LongButton>
          );
        }
        return (
          <NumberButton key={index} value={val.value}>
            {val.text}
          </NumberButton>
        );
      })}
    </Keypad>
  );
};

export default AppKeypad;
