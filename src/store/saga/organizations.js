import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import { createOrganizationSuccess } from "../actions/organizations";
import {
  fetchWorkspacesSuccess,
  fetchWorkspacesFailed,
  fetchCurrentWorkspaceSuccess,
  fetchCurrentWorkspaceFailed,
  createWorkspace,
  createWorkspaceFailed,
} from "../actions/workspaces";
import client from "../client";

export function* fetchOrganizations() {
  try {
    const response = yield client.get("/workspaces");
    yield put(fetchWorkspacesSuccess(response.data));
  } catch (e) {
    console.log("fetchWorkspaces ERROR", e.response);
    yield put(fetchWorkspacesFailed(e.response.data.message));
  }
}

export function* createOrganization({ payload }) {
  try {
    const response = yield client.post("/organizations", payload);
    const organization = yield put(createWorkspace({ organization: response.data }));
    yield put(createOrganizationSuccess(response));
  } catch (e) {
    console.log("createOrganizations ERROR", e.response);
    yield put(createOrganizationsFailed(e.response.data.message));
  }
}
