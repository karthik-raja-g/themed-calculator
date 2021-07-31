import React, { createContext, useReducer, useEffect } from "react";
import { visibleKeys, operationKeys, mathOperators, clearKeys } from "../keys";

const initialState = {
  screenValue: "",
  operation: "",
  result: "",
  resultValue: ""
};

const calculate = (result, input, operation) => {
  if (!result) return parseFloat(input);
  if (!input) return parseFloat(result);
  const lv = parseFloat(result);
  const ip = parseFloat(input);
  switch (operation) {
    case "/":
      return lv / ip;
    case "*":
      return lv * ip;
    case "+":
      return lv + ip;
    case "-":
      return lv - ip;
    default:
      return ip;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT": {
      const { value } = action;
      let isScreenVal = false;
      let isDecimal = false;
      let isResult = false;
      let isMathOperation = false;
      let isClearKey = false;
      // let isNegative = false;
      if (visibleKeys.includes(value) && state.screenValue[0] !== "-") {
        isScreenVal = true;
      }
      if (mathOperators.includes(value)) isMathOperation = true;
      if (value === ".") isDecimal = true;
      if (value === "=" || value === "result") isResult = true;
      if (clearKeys.includes(value)) isClearKey = true;
      if (isScreenVal) {
        return {
          ...state,
          screenValue: `${state.screenValue}${value}`,
          result: state.operation ? state.result : "",
          resultValue: ""
        };
      }
      if (isClearKey) {
        return {
          ...state,
          screenValue: state.screenValue.slice(0, -1),
        };
      }
      if (isDecimal) {
        if (state.screenValue.includes(".")) return state;
        const resultValue = state.screenValue.length
          ? `${state.screenValue}.`
          : "0.";
        return {
          ...state,
          screenValue: resultValue,
        };
      }
      if (isMathOperation) {
        if (!state.screenValue.length && !state.result) return state;
        return {
          ...state,
          operation: value,
          result: calculate(state.result, state.screenValue, value),
          screenValue: "",
          resultValue: ""
        };
      }
      if (isResult) {
        console.log(state);
        let result = state.screenValue || state.result;
        if (state.operation)
          result = calculate(state.result, state.screenValue, state.operation);
        const x = {
          ...state,
          result: result ? parseFloat(result) : "",
          screenValue: "",
          operation: "",
          resultValue: result ? parseFloat(result) : "",
        };
        console.log(x);
        return x;
      }
      return state;
    }
    case "UPDATE_MEMORY": {
      const { value } = action;
      return {
        ...state,
        lastValue: value,
      };
    }
    default:
      return state;
  }
};

export const CalculatorContext = createContext();
export const CalculatorProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setValue = (value) => {
    dispatch({ type: "INPUT", value });
  };
  const context = {
    ...state,
    actions: {
      setValue,
    },
  };
  // useEffect(() => {}, [state.lastValue, state.lastOperation]);
  return (
    <CalculatorContext.Provider value={context}>
      {props.children}
    </CalculatorContext.Provider>
  );
};
