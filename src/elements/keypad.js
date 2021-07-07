import Styled from "styled-components";

export default Styled.section`
  box-sizing: border-box;
  width: 500px;
  height: fit-content;
  border-radius: 8px;
  background-color: ${(props) => props.theme.backgrounds.keypad};
  display: grid;
  grid-template-columns: 25fr 25fr 25fr 25fr;
  padding: 35px;
  grid-gap: 30px;
  margin: auto;
`;
