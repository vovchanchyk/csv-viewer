import { combineReducers } from "redux";
import fetchReducer from "./fetchReduser";
import dataReduser from "./dataReducer";
import errorReducer from "./errorReduser";

const rootReducer = combineReducers({
  document: dataReduser,
  fetching: fetchReducer,
  error: errorReducer,
});

export type dataReduserType = ReturnType<typeof rootReducer>;

export default rootReducer;
