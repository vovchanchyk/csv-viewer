import React from "react";
import { ProgressBar } from "react-bootstrap";

const Fetching = () => {
  return (
    <div>
      <ProgressBar animated now={100} style={{ height: "2rem" }} />
    </div>
  );
};

export default Fetching;
