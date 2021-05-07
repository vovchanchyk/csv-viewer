import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledRow,
  StyledLabel,
  StyledCheckbox,
} from "../../../styledComponents/styledCheckbox";
import Number from "./Number";

type Props = {
  rule: string;
  columnId: number;
  mode: boolean;
};

const Counter: React.FC<Props> = ({ rule, columnId, mode }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const inc = () => {
    if (count !== 20) setCount(count + 1);
  };
  const dec = () => {
    if (count !== 0) setCount(count - 1);
  };

  return (
    <StyledRow>
      <StyledLabel>{rule.toLocaleLowerCase()}</StyledLabel>
      <Number count={count} inc={inc} dec={dec} />
      <StyledCheckbox
        type="checkbox"
        check={mode}
        onChange={() => dispatch({ type: rule, value: count, columnId })}
      />
    </StyledRow>
  );
};

export default Counter;
