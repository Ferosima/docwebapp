import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import { appClear } from "../actions/app";
import {
  loginFailed,
  loginSuccess,
  registrationFailed,
  registrationSuccess,
  setToken,
  authClear,
} from "../actions/auth";
import { setUser, userClear } from "../actions/user";
import { usersClear } from "../actions/users";
import { documentsClear } from "../actions/documents";
import { workspacesClear } from "../actions/workspaces";
import { organizationsClear, getCurrentOrganization } from "../actions/organizations";
import client from "../client";

export function* login(payload) {
  try {
    const response = yield client.post("auth/login", payload?.payload || payload);
    const { userWorkspace = null, ...user } = response.data.user;
    // yield put(setToken(response.data.accessToken));
    yield put(setUser(user));
    yield put(getCurrentOrganization(userWorkspace?.organization));
    yield put(loginSuccess(response.data));
    yield put(push(userWorkspace ? "/app/documents/" : "/app/organization/"));
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
    yield client.post("auth/logout");
    // yield put(appClear());
    yield put(authClear());
    yield put(userClear());
    yield put(usersClear());
    yield put(workspacesClear());
    yield put(documentsClear());
    yield put(organizationsClear());
  } catch (e) {
    console.log("LOGOUT ERROR", e.response.data);
  }
}
