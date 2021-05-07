import React from "react";
import useTypedSelector from "../../../hooks";
import StyledColumnsContainer from "../../../styledComponents/StyledColumnsContainer";
import Column from "./Column";

const Columns = () => {
  const columns = useTypedSelector((state) => state.document.data);
  return (
    <StyledColumnsContainer className="container">
      {columns.map((column) => (
        <Column {...column} />
      ))}
    </StyledColumnsContainer>
  );
};

export default Columns;
