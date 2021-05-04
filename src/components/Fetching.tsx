import React from 'react'
import { Spinner } from 'react-bootstrap'

const Fetching = () => {
    return (
        <div>
            <Spinner animation="border" variant="secondary" style={{height: '3rem', width:'3rem'}}/>
        </div>
    )
}

export default Fetching;
