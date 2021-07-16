import { createAction } from "redux-actions";
import { USER_FETCH, USER_CLEAR } from "../types/user";

export const fetchUser = createAction(USER_FETCH, (payload) => payload);

export const userClear = createAction(USER_CLEAR);
