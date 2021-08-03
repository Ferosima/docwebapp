import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import {
  fetchWorkspacesSuccess,
  fetchWorkspacesFailed,
  fetchCurrentWorkspaceSuccess,
  fetchCurrentWorkspaceFailed,
} from "../actions/workspaces";
import client from "../client";

export function* fetchWorkspaces() {
  try {
    const response = yield client.get("workspaces");
    yield put(fetchWorkspacesSuccess(response.data));
  } catch (e) {
    console.log("fetchWorkspaces ERROR", e.response.data);
    yield put(fetchWorkspacesFailed(e.response.data.message));
  }
}

export function* fetchCurrentWorkspace() {
  try {
    const response = yield client.get("workspaces/current");
    yield put(fetchCurrentWorkspaceSuccess(response));
    return true;
  } catch (e) {
    console.log("fetchWorkspaces ERROR", e.response.data);
    yield put(fetchCurrentWorkspaceFailed(e.response.data.message));
    return false;
  }
}
