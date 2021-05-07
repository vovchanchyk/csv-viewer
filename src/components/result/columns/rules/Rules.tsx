import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import {
  StyledRulesBody,
  StyledRulesContainer,
  StyledRulesHeader,
} from "../../../../styledComponents/styledColumnHeader";
import RulesBody from "./RulesBody";

const Rules: React.FC<{ title: string; columnId: number }> = ({
  title,
  columnId,
}) => {
  const [show, setShow] = useState(false);

  const refClose = useRef<HTMLDivElement>(null);

  const clickOutside = (event: any) => {
    if (!refClose.current?.contains(event?.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside, true);
  });

  return (
    <StyledRulesContainer ref={refClose}>
      <StyledRulesHeader
        onClick={() => setShow(!show)}
        className="d-flex  justify-content-between align-items-center"
      >
        <span>{title}</span>
        <FontAwesomeIcon icon="angle-down" />
      </StyledRulesHeader>
      <StyledRulesBody show={show}>
        rules
        <RulesBody columnId={columnId} />
      </StyledRulesBody>
    </StyledRulesContainer>
  );
};

export default Rules;
