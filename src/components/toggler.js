import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background-color: ${(props) => props.tmeme.backgrounds.keypad};
  color: ${(props) => props.theme.text.info};
`;
const Options = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75em;
  color: ${(props) => props.theme.text.info};
`;

const Toggler = () => {
  return (
    <div className="toggleBox">
      <Options>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Options>
    </div>
  );
};

export default Toggler;
