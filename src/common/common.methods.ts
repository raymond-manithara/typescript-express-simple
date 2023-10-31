import { DELIMETER } from "./common.constants";

export const constructErrorString = (statusCode: Number, message: String) => message + DELIMETER + statusCode;