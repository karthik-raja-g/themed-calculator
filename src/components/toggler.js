import React, { useState, useEffect, useRef } from "react";
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
  display: flex;
  cursor: pointer;
`;

const Switch = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.backgrounds.toggleSwitch};
  top: 4px;
  left: ${(props) =>
    props.theme.id === 1 ? "4px" : props.theme.id === 2 ? "23px" : "43px"};
  position: absolute;
  transition: left 0.3s linear, background-color 0.3s linear;
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
  const [isSwitchClicked, setIsSwitchClicked] = useState(false);
  const [togglerPos, setTogglerPos] = useState(0);
  const [pos, setPos] = useState(4);
  const contRef = useRef(null);
  const themes = ["blue", "white", "purple"];

  const handleMove = (e) => {
    if (isSwitchClicked) setPos(e.pageX - togglerPos - 10);
  };

  const toggleByClick = (color) => {
    switch (color) {
      case "blue": {
        setPos(4);
        break;
      }
      case "white": {
        setPos(23);
        break;
      }
      case "purple": {
        setPos(43);
        break;
      }
      default:
        return;
    }
  };

  /* When the switch position comes within certain ranges, specific theme is
   applied. Important thing here is that the final position of the switch
   is not decided by mouse movement, but rather the selected theme. */
  useEffect(() => {
    if (pos <= 4) {
      toggleHandler("blue");
    }
    if (pos > 4 && pos < 24) {
      toggleHandler("white");
    }
    if (pos >= 24) {
      toggleHandler("purple");
    }
  }, [pos, toggleHandler]);

  // Gets toggle container position initially
  useEffect(() => {
    setTogglerPos(contRef.current.offsetLeft);
  }, []);

  return (
    <div className="toggleSection">
      <ThemeText>THEME</ThemeText>
      <div className="toggleBox">
        <Options>
          {themes.map((theme, index) => (
            <span onClick={() => toggleByClick(theme)}>{index + 1}</span>
          ))}
        </Options>
        <ToggleContainer
          onMouseLeave={() => setIsSwitchClicked(false)}
          onMouseMove={handleMove}
          ref={contRef}
        >
          {themes.map((theme) => (
            <span className="selector" onClick={() => toggleByClick(theme)} />
          ))}
          <Switch
            onMouseDown={() => setIsSwitchClicked(true)}
            onMouseUp={() => setIsSwitchClicked(false)}
            onTouchStart={() => setIsSwitchClicked(true)}
            onTouchEnd={() => setIsSwitchClicked(false)}
          />
        </ToggleContainer>
      </div>
    </div>
  );
};

export default Toggler;
