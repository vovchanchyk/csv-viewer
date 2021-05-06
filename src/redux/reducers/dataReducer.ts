import * as actionTypes from "../actionTypes";

export type ErrorType = {
  uniq: boolean;
  required: boolean;
  phone: boolean;
  date: boolean;
  email: boolean;
  maxLength: { mode: boolean; value: number };
  minLength: { mode: boolean; value: number };
  max: { mode: boolean; value: number };
  min: { mode: boolean; value: number };
};
export type ColumnType = {
  title: string;
  fields: string[];
  columnId: number;
  error: ErrorType;
};

export type ActionType = {
  type: string;
  payload?: ColumnType[];
  columnId?: number;
  value?: number;
};
export type StateDataType = {
  isFileHere: boolean;
  data: ColumnType[];
};
const initial: StateDataType = {
  isFileHere: false,
  data: [],
};

function dataReducer(state = initial, action: ActionType) {
  if (action.type === actionTypes.GETDATA) {
    const copy = { ...state };
    copy.isFileHere = true;
    copy.data = action.payload!;
    return copy;
  }
  if (action.type === actionTypes.REQUIRED) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        el.error.required = !el.error.required;
      }
      return el;
    });

    return copy;
  }
  if (action.type === actionTypes.DATE) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        el.error.phone = false;
        el.error.email = false;
        el.error.date = !el.error.date;
      }
      return el;
    });

    return copy;
  }
  if (action.type === actionTypes.EMAIL) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        el.error.phone = false;
        el.error.date = false;
        el.error.email = !el.error.email;
      }
      return el;
    });

    return copy;
  }
  if (action.type === actionTypes.PHONE) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        el.error.date = false;
        el.error.email = false;
        el.error.phone = !el.error.phone;
      }
      return el;
    });

    return copy;
  }
  if (action.type === actionTypes.UNIQ) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        el.error.uniq = !el.error.uniq;
      }
      return el;
    });

    return copy;
  }
  if (action.type === actionTypes.MAXLENGTH) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        if (!el.error.date && !el.error.email && !el.error.phone) {
          el.error.maxLength.mode = !el.error.maxLength.mode;
          el.error.maxLength.value = action.value!;
        }
      }

      return el;
    });
    return copy;
  }
  if (action.type === actionTypes.MINLENGTH) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        if (!el.error.date && !el.error.email && !el.error.phone) {
          el.error.minLength.mode = !el.error.minLength.mode;
          el.error.minLength.value = action.value!;
        }
      }

      return el;
    });
    return copy;
  }
  if (action.type === actionTypes.MAX) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        if (!el.error.date && !el.error.email && !el.error.phone) {
          el.error.max.mode = !el.error.max.mode;
          el.error.max.value = action.value!;
        }
      }

      return el;
    });
    return copy;
  }
  if (action.type === actionTypes.MIN) {
    const copy = { ...state };
    copy.data = copy.data.map((el) => {
      if (el.columnId === action.columnId) {
        if (!el.error.date && !el.error.email && !el.error.phone) {
          el.error.min.mode = !el.error.min.mode;
          el.error.min.value = action.value!;
        }
      }

      return el;
    });
    return copy;
  }

  return state;
}

export default dataReducer;
