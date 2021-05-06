import styled from "styled-components";

export const StyledFileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
  align-items: center;
  height: 10rem;
  padding: 0;
  margin-top: 2rem;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 20px;
  &:hover {
    background-color: cornflowerblue;
  }
`;

export const StyledFileLabel = styled.label`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  //border:solid;
  margin: 0;
`;

export const StyledFileInput = styled.input`
  // visibility:hidden;
  display: none;
`;
