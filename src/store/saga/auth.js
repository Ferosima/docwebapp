import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import {
  loginFailed,
  loginSuccess,
  registrationFailed,
  registrationSuccess,
  setToken,
} from "../actions/auth";
import { fetchUser, userClear } from "../actions/user";
import client from "../client";
import { fetchCurrentWorkspace } from "./workspaces";

export function* login(payload) {
  try {
    const response = yield client.post("auth/login", payload?.payload || payload);
    yield put(setToken(response.data.accessToken));
    const isHaveworkspace = yield call(fetchCurrentWorkspace);
    yield put(fetchUser(response.data.user));
    yield put(loginSuccess(response.data));
    yield put(push(isHaveworkspace ? "/app/documents/" : "/app/workspace/"));
  } catch (e) {
    console.log("LOGIN ERROR", e.response.data);
    yield put(loginFailed(e.response.data.message));
  }
}
export function* registration({ payload }) {
  try {
    yield client.post("auth/register", payload);
    const { email, password } = payload;
    yield put(registrationSuccess());
    yield call(login, { email, password });
  } catch (e) {
    console.log("REGISTRATION ERROR", e.response.data);
    yield put(registrationFailed(e.response.data.message));
  }
}
export function* logout() {
  try {
    yield put(userClear());
    const response = yield client.post("auth/logout");
  } catch (e) {
    console.log("LOGOUT ERROR", e.response.data);
  }
}
