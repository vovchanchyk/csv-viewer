import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2;
  padding-right: 2rem;
`;

export const StyledCheckbox = styled.input<{ check: boolean }>`
  height: 1rem;
  width: 2rem;
  position: relative;
  appearance: none;
  background: ${(props) => (props.check ? "#03a9f4" : "#c6c6c6")};
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.8s;
  &::before {
    content: "${(props) => (props.check ? "on" : "off")}";
    position: absolute;
    display: block;
    top: -0.4rem;
    left: 2.2rem;
  }
  &::after {
    content: "";
    position: absolute;
    top: -0.1rem;
    left: ${(props) => (props.check ? "1.1rem" : "-0.1rem")};
    background-color: #ffffff;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 10px;
    transition: 0.5s;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
export const StyledLabel = styled.span`
  display: table-cell;
  vertical-align: bottom;
  text-align: start;
  height: 2rem;
  line-height: 1.7rem;
  margin-left: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80px;
`;
