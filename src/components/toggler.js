import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  width: 62px;
  height: 22px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.backgrounds.keypad};
  color: ${(props) => props.theme.text.info};
  padding: 5px;
  box-sizing: border-box;
  margin: 5px 0;
`;

const Switch = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgrounds.toggleSwitch};
  top: 4px;
  right: ${(props) =>
    props.theme.id === 1 ? "43px" : props.theme.id === 2 ? "23px" : "4px"};
  position: absolute;
  transition: right 0.3s linear;
`;
const Options = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75em;
  color: ${(props) => props.theme.text.info};
  padding: 0 5px;
  box-sizing: border-box;
  cursor: pointer;
`;

const ThemeText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.text.info};
  font-size: 0.75em;
  margin: 15px 10px 0 0;
  letter-spacing: 0.1em;
`;

const Toggler = ({ toggleHandler }) => {
  return (
    <div className="toggleSection">
      <ThemeText>THEME</ThemeText>
      <div className="toggleBox">
        <Options>
          <span onClick={() => toggleHandler("blue")}>1</span>
          <span onClick={() => toggleHandler("white")}>2</span>
          <span onClick={() => toggleHandler("purple")}>3</span>
        </Options>
        <ToggleContainer>
          <Switch />
        </ToggleContainer>
      </div>
    </div>
  );
};

export default Toggler;
