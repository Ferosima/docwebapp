import {
  call, put, select, take,
} from "redux-saga/effects";
import storage from "redux-persist/lib/storage";
import { push } from "connected-react-router";
import client from "../client";
import { loginSuccess, loginFailed } from "../actions/auth";
import { fetchUser } from "../actions/user";

export function* login({ payload }) {
  try {
    const response = yield client.post("auth/login", payload);
    yield put(loginSuccess(response.data));
    // storage.setItem("accessToken", response.data.accessToken);
    yield put(fetchUser(response.data.user));
    yield put(push("/app"));
  } catch (e) {
    console.log("LOGIN ERROR", e);
    yield put(loginFailed(e.message));
  }
}
