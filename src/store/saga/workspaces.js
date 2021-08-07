import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import {
  fetchWorkspacesSuccess,
  fetchWorkspacesFailed,
  fetchCurrentWorkspaceSuccess,
  fetchCurrentWorkspaceFailed,
  createWorkspaceSuccess,
  createWorkspaceFailed,
} from "../actions/workspaces";
import { getCurrentOrganization } from "../actions/organizations";
import client from "../client";

export function* fetchWorkspaces() {
  try {
    const response = yield client.get("/workspaces");
    yield put(fetchWorkspacesSuccess(response.data));
  } catch (e) {
    console.log("fetchWorkspaces ERROR", e.response);
    yield put(fetchWorkspacesFailed(e.response.data.message));
  }
}

export function* fetchCurrentWorkspace() {
  try {
    const response = yield client.get("workspaces/current");
    yield put(getCurrentOrganization(response.data.organization));
    yield put(fetchCurrentWorkspaceSuccess(response.data));
    return true;
  } catch (e) {
    console.log("fetchCurrentWorkspace ERROR", e.response.data);
    yield put(fetchCurrentWorkspaceFailed(e.response.data.message));
    return false;
  }
}

export function* createWorkspace({ payload }) {
  try {
    const res = yield client.post("/workspaces", payload);
    const response = yield client.patch(`/workspaces/${res.data.id}/switch`);
    yield put(createWorkspaceSuccess(response.data));
  } catch (e) {
    console.log("createWorkspace ERROR", e.response);
    yield put(createWorkspaceFailed(e.response.data.message));
  }
}
