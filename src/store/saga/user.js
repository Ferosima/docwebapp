import { push } from "connected-react-router";
import { call, put, select } from "redux-saga/effects";
import { userUpdateSuccess, userUpdateFailed } from "../actions/user";
import { getUserState } from "../selectors/user";
import client from "../client";

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
