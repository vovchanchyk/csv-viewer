import React from "react";
import { Alert } from "react-bootstrap";

const Empty = () => {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          to start using the app just push button above and shose file you have
          an apportunity not only reading files but also you can validate fields
        </p>
        <hr />
        <p className="mb-0">DRAW ATTENTION the App accepts only CSV files</p>
      </Alert>
    </div>
  );
};

export default Empty;
