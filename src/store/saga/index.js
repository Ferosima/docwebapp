import { all, takeLatest } from "redux-saga/effects";

import * as auth from "../actions/auth";
import * as user from "../actions/user";
import * as documents from "../actions/documents";
import * as workspaces from "../actions/workspaces";
import * as organizations from "../actions/organizations";

import { login, registration, logout } from "./auth";
import { userUpdate } from "./user";
import { fetchDocuments } from "./documents";
import { fetchWorkspaces, fetchCurrentWorkspace, createWorkspace } from "./workspaces";
import { createOrganization } from "./organizations";

function* loginSaga() {
  yield takeLatest(auth.login, login);
}
function* registrationSaga() {
  yield takeLatest(auth.registration, registration);
}
function* logoutSaga() {
  yield takeLatest(auth.logout, logout);
}

function* userUpdateSaga() {
  yield takeLatest(user.userUpdate, userUpdate);
}

function* fetchDocumentsSaga() {
  yield takeLatest(documents.fetchDocuments, fetchDocuments);
}
function* fetchWorkspacesSaga() {
  yield takeLatest(workspaces.fetchWorkspaces, fetchWorkspaces);
}
function* fetchCurrentWorkspaceSaga() {
  yield takeLatest(workspaces.fetchCurrentWorkspace, fetchCurrentWorkspace);
}
function* createWorkspaceSaga() {
  yield takeLatest(workspaces.createWorkspace, createWorkspace);
}

function* createOrganizationSaga() {
  yield takeLatest(organizations.createOrganization, createOrganization);
}

export default function* rootSaga() {
  yield all([
    // AUTH
    loginSaga(),
    registrationSaga(),
    logoutSaga(),
    // USER
    userUpdateSaga(),
    // DOCS
    fetchDocumentsSaga(),
    // WORKSPACES
    fetchWorkspacesSaga(),
    fetchCurrentWorkspaceSaga(),
    createWorkspaceSaga(),
    // ORGANIZATIONS
    createOrganizationSaga(),
  ]);
}
