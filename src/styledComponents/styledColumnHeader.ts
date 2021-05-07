import styled from "styled-components";

export const StyledRulesBody = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  z-index: 2;
  min-width: 210px;
  width: 100%;
  background: #e8edff;
  transition: 3s;
  border: solid 0.5px white;
`;

export const StyledRulesHeader = styled.div`
  margin: 0 0.5px;
  background-color: blueviolet;
  padding: 10px;
  color: white;
  border: none;
  text-align: center;
  &:hover {
    background-color: cornflowerblue;
  }
`;
export const StyledRulesContainer = styled.div`
  position: relative;
`;
