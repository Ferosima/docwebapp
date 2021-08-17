import { createAction } from "redux-actions";
import {
  USERS_FETCH_USERS,
  USERS_FETCH_USERS_FAILED,
  USERS_FETCH_USERS_SUCCESS,
  USERS_INVITE_USER,
  USERS_INVITE_USER_FAILED,
  USERS_INVITE_USER_SUCCESS,
  USERS_INVITE_SUCCESS_CLEAR,
  USERS_CLEAR,
} from "../types/users";

export const fetchUsers = createAction(USERS_FETCH_USERS);
export const fetchUsersFailed = createAction(USERS_FETCH_USERS_FAILED, (payload) => payload);
export const fetchUsersSuccess = createAction(USERS_FETCH_USERS_SUCCESS, (payload) => payload);

export const inviteUser = createAction(USERS_INVITE_USER, (payload) => payload);
export const inviteUserFailed = createAction(USERS_INVITE_USER_FAILED, (payload) => payload);
export const inviteUserSuccess = createAction(USERS_INVITE_USER_SUCCESS, (payload) => payload);

export const inviteSuccessClear = createAction(USERS_INVITE_SUCCESS_CLEAR);
export const usersClear = createAction(USERS_CLEAR);
