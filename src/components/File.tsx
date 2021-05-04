import React from 'react'
import { useDispatch } from 'react-redux';
import getDataActionCreator from '../redux/actions/getDataActionCreator';
import { StyledFileContainer, StyledFileInput, StyledFileLabel } from '../styledComponents/StyledFileContainer';

const File = () => {

    const dispatch = useDispatch()

    const fileHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        dispatch({ type: 'FETCHINGON'})
        if (event.target.value.split('.').pop() === 'csv') {
            const file = await event.target.files!.item(0)!.text()
            dispatch(getDataActionCreator(file))
            dispatch({ type: 'SUCCESS' })
            dispatch({ type: 'FETCHINGOFF' })
        } else {
            dispatch({ type: 'ERROR' })
            dispatch({ type: 'FETCHINGOFF' })
        }
    }


    return (
        <StyledFileContainer className="container">
            <StyledFileLabel htmlFor="file">
                CLICK OR DROP THE FILE HERE
            <StyledFileInput onChange={fileHandler} type="file" name="file" id="file" />

            </StyledFileLabel>
        </StyledFileContainer>
    )
}

export default File;
