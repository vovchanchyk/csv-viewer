import { TypedUseSelectorHook, useSelector } from "react-redux";
import { dataReduserType } from "./redux/reducers/rootReducer";

const useTypedSelector: TypedUseSelectorHook<dataReduserType> = useSelector;

export default useTypedSelector;
