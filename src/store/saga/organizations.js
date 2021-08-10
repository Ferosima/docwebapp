import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import { createOrganizationSuccess, createOrganizationFailed } from "../actions/organizations";
import { userUpdate } from "../actions/user";
import client from "../client";

export function* fetchOrganizations() {
  // try {
  //   const response = yield client.get("/workspaces");
  //   yield put(fetchWorkspacesSuccess(response.data));
  // } catch (e) {
  //   console.log("fetchWorkspaces ERROR", e.response);
  //   yield put(fetchWorkspacesFailed(e.response.data.message));
  // }
}

export function* createOrganization({ payload }) {
  try {
    const response = yield client.post("/organizations", payload);
    console.log("RESS", response.data);
    // yield put(userUpdate({ organization: response.data }));
    yield put(createOrganizationSuccess(response.data));
  } catch (e) {
    console.log("createOrganizations ERROR", e.response);
    yield put(createOrganizationFailed(e.response.data.message));
  }
}
