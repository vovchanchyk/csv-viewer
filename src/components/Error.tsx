import React from 'react'
import { Alert } from 'react-bootstrap'

const Error = () => {
    return (
        <Alert variant="success">
  <Alert.Heading>something wrong</Alert.Heading>
  <p>
    maybe you shose wrong type of document
                
  </p>
  <hr />
  <p className="mb-0">
  CSV-VIEWER accepts only CSV format files
  </p>
</Alert>
    )
}

export default Error
