import React, { createContext, useReducer } from "react";
import themes from '../theme/themes';

const initialState = {
  result: 0,
  screenValue: null,
  currentInput: "",
  operation: "",
  theme: themes.blue
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT": {
      const { value } = action;
      return {
        ...state,
        currentInput: value,
        screenValue: `${state.screenValue}${value}`,
      };
    }
    case 'THEME': {
      const { value } = action;
      return {
        ...state,
        theme: themes[value],
      };
    }
    default:
      return state;
  }
};

export const CalculatorContext = createContext()
export const CalculatorProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setValue = (value) => {
    dispatch({ type: "INPUT", value });
  }
  const setTheme = theme => {
    dispatch({type: 'THEME', value: theme})
  }
  const context = {
    result: state.result,
    theme: state.theme,
    actions: {
      setValue,
      setTheme
    }
  }
  return (
    <CalculatorContext.Provider value={context}>
      {props.children}
    </CalculatorContext.Provider>
  );
};

