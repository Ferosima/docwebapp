import {
  call, put, select, take,
} from "redux-saga/effects";
import client from "../client";
import { loginSuccess, loginFailed } from "../actions/auth";
import { fetchUser } from "../actions/user";

export function* login({ payload }) {
  try {
    // const response = yield call(client, "POST", "auth/login", data);
    console.log("DATA", payload);
    const response = yield client.post("auth/login", payload);
    console.log("RES", response.data);
    yield put(loginSuccess(response));
    yield put(fetchUser(response.data.user));
  } catch (e) {
    console.log("LOGIN ERROR", e);
    console.log(e);
    yield put(loginFailed(e.message));
  }
}
