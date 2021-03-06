import Papa from "papaparse";
import { Dispatch } from "react";
import getPayload from "../../utils/getPayload";
import { GETDATA } from "../actionTypes";
import { ActionType } from "../reducers/dataReducer";

const getDataActionCreator = (str: string) => (
  dispatch: Dispatch<ActionType>
) => {
  const { data } = Papa.parse(str, { header: true });
  const titles = str.slice(0, str.indexOf("\n") - 1).split(",");
  const action = {
    type: GETDATA,
    payload: getPayload(data, titles),
  };
  dispatch(action);
};

export default getDataActionCreator;
