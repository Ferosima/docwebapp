import { createAction } from "redux-actions";
import {
  WORKSPACES_FETCH_WORKSPACES,
  WORKSPACES_FETCH_WORKSPACES_SUCCESS,
  WORKSPACES_FETCH_WORKSPACES_FAILED,
  WORKSPACES_FETCH_CURRENT_WORKSPACE,
  WORKSPACES_FETCH_CURRENT_WORKSPACE_SUCCESS,
  WORKSPACES_FETCH_CURRENT_WORKSPACE_FAILED,
  WORKSPACES_CLEAR,
} from "../types/workspaces";

export const fetchWorkspaces = createAction(WORKSPACES_FETCH_WORKSPACES);
export const fetchWorkspacesFailed = createAction(
  WORKSPACES_FETCH_WORKSPACES_FAILED,
  (payload) => payload,
);
export const fetchWorkspacesSuccess = createAction(
  WORKSPACES_FETCH_WORKSPACES_SUCCESS,
  (payload) => payload,
);
export const fetchCurrentWorkspace = createAction(WORKSPACES_FETCH_CURRENT_WORKSPACE);
export const fetchCurrentWorkspaceFailed = createAction(
  WORKSPACES_FETCH_CURRENT_WORKSPACE_FAILED,
  (payload) => payload,
);
export const fetchCurrentWorkspaceSuccess = createAction(
  WORKSPACES_FETCH_CURRENT_WORKSPACE_SUCCESS,
  (payload) => payload,
);

export const workspacesClear = createAction(WORKSPACES_CLEAR);
