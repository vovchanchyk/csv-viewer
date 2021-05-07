import React from "react";
import useTypedSelector from "../../../../hooks";
import * as actionTypes from "../../../../redux/actionTypes";
import Counter from "../../../things/length/Counter";
import Swich from "../../../things/Swich";

const RulesBody: React.FC<{ columnId: number }> = ({ columnId }) => {
  const [error] = useTypedSelector((state) =>
    state.document.data
      .filter((el) => el.columnId === columnId)
      .map((el) => el.error)
  );

  return (
    <>
      <Swich
        rule={actionTypes.REQUIRED}
        mode={error.required}
        columnId={columnId}
      />
      <Swich rule={actionTypes.DATE} mode={error.date} columnId={columnId} />
      <Swich rule={actionTypes.EMAIL} mode={error.email} columnId={columnId} />
      <Swich rule={actionTypes.PHONE} mode={error.phone} columnId={columnId} />
      <Swich rule={actionTypes.UNIQ} mode={error.uniq} columnId={columnId} />
      <Counter
        rule={actionTypes.MAXLENGTH}
        mode={error.maxLength.mode}
        columnId={columnId}
      />
      <Counter
        rule={actionTypes.MINLENGTH}
        mode={error.minLength.mode}
        columnId={columnId}
      />
      <Counter
        rule={actionTypes.MAX}
        mode={error.max.mode}
        columnId={columnId}
      />
      <Counter
        rule={actionTypes.MIN}
        mode={error.min.mode}
        columnId={columnId}
      />
    </>
  );
};

export default RulesBody;
