import { put } from "redux-saga/effects";
import {
  fetchUsersFailed,
  fetchUsersSuccess,
  inviteUserFailed,
  inviteUserSuccess,
} from "../actions/users";
import client from "../client";

export function* fetchUsers() {
  try {
    const response = yield client.get("/users");
    yield put(fetchUsersSuccess(response.data));
  } catch (e) {
    console.log("fetchUSERS ERROR", e);
    yield put(fetchUsersFailed(e.message));
  }
}

export function* inviteUser({ payload }) {
  try {
    const response = yield client.post(`/users/${payload.email}/invite`);
    yield put(inviteUserSuccess(response.data));
  } catch (e) {
    console.log("inviteUser ERROR", e);
    yield put(inviteUserFailed(e.message));
  }
}
