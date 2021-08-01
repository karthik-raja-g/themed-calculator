import React, { createContext, useReducer } from "react";
import { visibleKeys, mathOperators, clearKeys } from "../keys";

const initialState = {
  screenValue: "",
  operation: "",
  result: "",
  resultValue: "",
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
      if (visibleKeys.includes(value)) {
        isScreenVal = true;
      }
      if (mathOperators.includes(value)) isMathOperation = true;
      if (value === ".") isDecimal = true;
      if (value === "=" || value === "result") isResult = true;
      if (clearKeys.includes(value)) isClearKey = true;

      // For negative numbers
      if (value === "-" && !state.screenValue && !state.resultValue) {
        return {
          ...state,
          screenValue: "-",
        };
      }
      // For screen content
      if (isScreenVal) {
        return {
          ...state,
          screenValue: `${state.screenValue}${value}`,
          result: state.operation ? state.result : "",
          resultValue: "",
        };
      }
      // For clearing the screen content
      if (isClearKey) {
        return {
          ...state,
          screenValue: state.screenValue.slice(0, -1),
        };
      }
      // For handling decimal input
      if (isDecimal) {
        if (state.screenValue.includes(".")) return state;
        const decimalValue = state.screenValue.length
          ? `${state.screenValue}.`
          : "0.";
        return {
          ...state,
          screenValue: decimalValue,
        };
      }
      // For handling math operators. Applies the operation to the result already in memory and updates it
      if (isMathOperation) {
        if (!state.screenValue.length && !state.result) return state;
        // If the state has an operation pending, it applies the operation to the existing
        // result with current value
        return {
          ...state,
          operation: value,
          result: calculate(state.result, state.screenValue, state.operation || value),
          screenValue: "",
          resultValue: "",
        };
      }
      // For calculating the final result
      if (isResult) {
        let result = state.screenValue || state.result;
        // if there's an operation pending in state when asked for result, the operation is applied
        // to the existing result and updated along with the result value
        if (state.operation)
          result = calculate(state.result, state.screenValue, state.operation);
        return {
          ...state,
          result: result ? parseFloat(result) : "",
          screenValue: "",
          operation: "",
          resultValue: result ? parseFloat(result) : "",
        };
      }
      if (value === "RESET") {
        return initialState;
      }
      return state;
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
  return (
    <CalculatorContext.Provider value={context}>
      {props.children}
    </CalculatorContext.Provider>
  );
};
