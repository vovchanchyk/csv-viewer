type ActionFetchingType = {
  type: string;
};

const initial = {
  isFetching: false,
};

function fetchReducer(state = initial, action: ActionFetchingType) {
  if (action.type === "FETCHINGON") {
    const copy = { ...state };
    copy.isFetching = true;
    return copy;
  }
  if (action.type === "FETCHINGOFF") {
    const copy = { ...state };
    copy.isFetching = false;
    return copy;
  }
  return state;
}

export default fetchReducer;
