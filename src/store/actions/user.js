import { createAction } from "redux-actions";
import {
  USER_SET_USER,
  USER_CLEAR,
  USER_UPDATE,
  USER_UPDATE_FAILED,
  USER_FETCH_USER,
  USER_FETCH_USER_FAILED,
  USER_FETCH_USER_SUCCESS,
  USER_UPDATE_SUCCESS,
} from "../types/user";

export const setUser = createAction(USER_SET_USER, (payload) => payload);

export const userUpdate = createAction(USER_UPDATE);
export const userUpdateFailed = createAction(USER_UPDATE_FAILED, (payload) => payload);
export const userUpdateSuccess = createAction(USER_UPDATE_SUCCESS, (payload) => payload);

export const fetchUser = createAction(USER_FETCH_USER);
export const fetchUserFailed = createAction(USER_FETCH_USER_FAILED, (payload) => payload);
export const fetchUserSuccess = createAction(USER_FETCH_USER_SUCCESS, (payload) => payload);

export const userClear = createAction(USER_CLEAR);
