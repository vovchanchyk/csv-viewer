import { TypedUseSelectorHook, useSelector } from "react-redux";
import { dataReduserType } from "../src/redux/reducers/rootReducer";

const useTypedSelector: TypedUseSelectorHook<dataReduserType> = useSelector;

export default useTypedSelector;