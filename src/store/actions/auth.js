import { createAction } from "redux-actions";
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTRATION,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_FAILED,
  AUTH_SET_TOKEN,
  AUTH_CLEAR_ERROR,
  AUTH_LOGOUT,
} from "../types/auth";

export const login = createAction(AUTH_LOGIN, (payload) => payload);
export const loginFailed = createAction(AUTH_LOGIN_FAILED, (payload) => payload);
export const loginSuccess = createAction(AUTH_LOGIN_SUCCESS, (payload) => payload);

export const registration = createAction(AUTH_REGISTRATION, (payload) => payload);
export const registrationFailed = createAction(AUTH_REGISTRATION_FAILED, (payload) => payload);
export const registrationSuccess = createAction(AUTH_REGISTRATION_SUCCESS, (payload) => payload);

export const setToken = createAction(AUTH_SET_TOKEN, (payload) => payload);

export const logout = createAction(AUTH_LOGOUT);

export const authClearError = createAction(AUTH_CLEAR_ERROR);
