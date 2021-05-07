import styled from "styled-components";

const StyledCell = styled.span`
  display: flex;
  overflow: auto;
  justify-content: flex-start;
  padding-rigth: 15px;
  padding-left: 15px;
  border: solid 0.5px white;
  background: #e8edff;
  align-items: center;
  height: 2.8rem;
  flex-wrap: no-wrap;
  padding-right: 2rem;
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: blueviolet;
    // outline: 1px solid slategrey;
  }
`;

export default StyledCell;
