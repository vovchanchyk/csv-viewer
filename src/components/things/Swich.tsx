import React from "react";
import { useDispatch } from "react-redux";
import {
  StyledRow,
  StyledLabel,
  StyledCheckbox,
} from "../../styledComponents/styledCheckbox";

type Props = {
  rule: string;
  columnId: number;
  mode: boolean;
};

const Swich: React.FC<Props> = ({ rule, columnId, mode }) => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch({ type: rule, columnId });
  };

  return (
    <StyledRow>
      <StyledLabel>{rule.toLocaleLowerCase()}</StyledLabel>
      <StyledCheckbox type="checkbox" onChange={handler} check={mode!} />
    </StyledRow>
  );
};

export default Swich;
