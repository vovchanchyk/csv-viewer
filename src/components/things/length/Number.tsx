import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledNumberArrows, StyledNumberContainer, StyledNumberDisplay } from '../../../styledComponents/styledCounter';

type Props = {
    count: number;
    inc: () => void;
    dec: () => void;
}

const Number: React.FC<Props> = ({ count, dec, inc }) => {

    return (
        <StyledNumberContainer>
            <StyledNumberDisplay>{count}</StyledNumberDisplay>
            <StyledNumberArrows>
            <FontAwesomeIcon icon="angle-up" className="m-0" onClick={inc} />
            <FontAwesomeIcon icon="angle-down" className="m-0" onClick={dec} />           
            </StyledNumberArrows>
        </StyledNumberContainer>

    )
}

export default Number