import * as yup from "yup";
import { ErrorType } from "../redux/reducers/dataReducer";
import uniqError from "./uniqError";

const dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

function checkField(str: string, error: ErrorType, arr: string[]): boolean {
  const uniq = error.uniq ? uniqError(str, arr) : true;

  const email = error.email
    ? yup.string().required().email().isValidSync(str)
    : true;
  const phone = error.phone
    ? yup
        .string()
        .required()
        .matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
        .isValidSync(str)
    : true;
  const required = error.required
    ? yup.string().required().isValidSync(str)
    : true;
  const date = error.date
    ? yup.string().required().matches(dateFormat).isValidSync(str)
    : true;
  const maxlength = error.maxLength.mode
    ? yup.string().max(error.maxLength.value).isValidSync(str)
    : true;
  const minlength = error.minLength.mode
    ? yup.string().min(error.minLength.value).isValidSync(str)
    : true;
  const max = error.max.mode
    ? yup
        .number()
        .max(error.max.value)
        .isValidSync(+str)
    : true;
  const min = error.min.mode
    ? yup
        .number()
        .min(error.min.value)
        .isValidSync(+str)
    : true;
  const ress =
    uniq &&
    min &&
    max &&
    maxlength &&
    minlength &&
    email &&
    email &&
    date &&
    phone &&
    required;

  return ress;
}

export default checkField;
