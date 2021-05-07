import React from "react";
import { Alert } from "react-bootstrap";

const Error: React.FC = () => {
  return (
    <Alert variant="success">
      <Alert.Heading>wrong document format</Alert.Heading>
      <p>maybe you chose wrong type of document</p>
      <hr />
      <p className="mb-0">CSV-VIEWER accepts only CSV format files</p>
    </Alert>
  );
};

export default Error;
