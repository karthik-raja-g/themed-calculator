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
`;

const operations = {
  '/': 'Divide',
  '*': 'Multiply',
  '+': 'Add',
  '-': 'Subtract'
}
const AppScreen = () => {
  const { screenValue, operation, resultValue } = useContext(CalculatorContext);
  return (
    <Screen>
      <Operation>{operations[operation]}</Operation>
      {resultValue || screenValue || "0"}
    </Screen>
  );
};

export default AppScreen;
