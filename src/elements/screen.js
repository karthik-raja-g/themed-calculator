import Styled from "styled-components";

export default Styled.div`
  font-size: 2.5em;
  text-align: right;
  background-color: ${(props) => props.theme.backgrounds.screen};
  color: ${(props) => props.theme.text.screen};
  height: 120px;
  margin: 25px 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 35px;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
  letter-spacing: -4px;
`;
