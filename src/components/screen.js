import React, { useContext } from "react";
import Styled from "styled-components";
import { CalculatorContext } from "../context";
import Screen from "../elements/screen";

const Operation = Styled.p`
  position: absolute;
  font-size: 0.3em;
  margin: 0;
  top: 12px;
  left: 12px;
  color: ${(props) => props.theme.text.screen};
  letter-spacing: 0;
`;

const operations = {
  '/': 'Divide',
  '*': 'Multiply',
  '+': 'Add',
  '-': 'Subtract'
}

const formatOutput = (num) => {
  const nums = String(num).split('')
  const res = nums.join(' ')
  return res
}

const AppScreen = () => {
  const { screenValue, operation, resultValue } = useContext(CalculatorContext);
  const res = resultValue || screenValue || "0"
  return (
    <Screen>
      <Operation>{resultValue ? "Result" : operations[operation]}</Operation>
      {formatOutput(res)}
    </Screen>
  );
};

export default AppScreen;
