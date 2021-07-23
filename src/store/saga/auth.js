import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import {
  loginFailed,
  loginSuccess,
  registrationFailed,
  registrationSuccess,
} from "../actions/auth";
import { fetchUser } from "../actions/user";
import client from "../client";

export function* login(payload) {
  try {
    const response = yield client.post("auth/login", payload);
    yield put(loginSuccess(response.data));
    yield put(fetchUser(response.data.user));
    yield put(push("/app/documents/"));
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
