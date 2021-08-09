import { createAction } from "redux-actions";
import {
  USER_FETCH,
  USER_CLEAR,
  USER_UPDATE,
  USER_UPDATE_FAILED,
  USER_UPDATE_SUCCESS,
} from "../types/user";

export const fetchUser = createAction(USER_FETCH, (payload) => payload);

export const userUpdate = createAction(USER_UPDATE);
export const userUpdateFailed = createAction(USER_UPDATE_FAILED, (payload) => payload);
export const userUpdateSuccess = createAction(USER_UPDATE_SUCCESS, (payload) => payload);

export const userClear = createAction(USER_CLEAR);
