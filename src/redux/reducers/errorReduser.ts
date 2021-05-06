type ActionErrorType = {
  type: string;
};

const initial = {
  isError: false,
};

function errorReducer(state = initial, action: ActionErrorType) {
  if (action.type === "ERROR") {
    const copy = { ...state };
    copy.isError = true;
    return copy;
  }
  if (action.type === "SUCCESS") {
    const copy = { ...state };
    copy.isError = false;
    return copy;
  }
  return state;
}

export default errorReducer;
