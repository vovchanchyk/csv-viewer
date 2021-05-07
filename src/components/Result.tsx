import React from "react";
import useTypedSelector from "../hooks";
import Columns from "./result/columns/Columns";
import Empty from "./result/Empty";
import Fetching from "./Fetching";
import Error from "./Error";

const Result = () => {
  const isFileHere = useTypedSelector((state) => state.document.isFileHere);
  const spinner = useTypedSelector((state) => state.fetching.isFetching);
  const error = useTypedSelector((state) => state.error.isError);

  return (
    <div className="container  mt-5 p-0 mx-auto ">
      {spinner ? (
        <Fetching />
      ) : error ? (
        <Error />
      ) : isFileHere ? (
        <Columns />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Result;
