import { push } from "connected-react-router";
import { call, put, select } from "redux-saga/effects";
import {
  userUpdateSuccess,
  userUpdateFailed,
  fetchUserFailed,
  fetchUserSuccess,
} from "../actions/user";
import { getCurrentOrganization } from "../actions/organizations";
import { getUserState } from "../selectors/user";
import client from "../client";

export function* fetchUser() {
  try {
    const response = yield client.get("/users/current");
    console.log("RES", response);
    yield put(getCurrentOrganization(response.data?.userWorkspace?.organization));
    yield put(fetchUserSuccess(response.data));
  } catch (e) {
    console.log("fetchUSER ERROR", e);
    yield put(fetchUserFailed(e.message));
  }
}

export function* userUpdate({ payload }) {
  try {
    const user = yield select(getUserState);
    const updatedUser = { ...user, ...payload };
    console.log("UPDATED", updatedUser);
    const response = yield client.patch(`/users/${user.id}`, updatedUser);
    yield put(userUpdateSuccess(response.data));
  } catch (e) {
    console.log("userUpdate ERROR", e.response);
    yield put(userUpdateFailed(e.response.data.message));
  }
}
