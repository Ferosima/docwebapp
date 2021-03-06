import { all, takeLatest } from "redux-saga/effects";

import * as auth from "../actions/auth";
import * as user from "../actions/user";
import * as users from "../actions/users";
import * as documents from "../actions/documents";
import * as workspaces from "../actions/workspaces";
import * as organizations from "../actions/organizations";

import { login, registration, logout } from "./auth";
import { userUpdate, fetchUser } from "./user";
import { fetchUsers, inviteUser } from "./users";
import {
  createDocument,
  fetchCreatedDocuments,
  fetchSigningDocuments,
  fetchDocumentFile,
  fetchSignatures,
  processDocument,
  deleteDocument,
} from "./documents";
import { fetchWorkspaces, fetchCurrentWorkspace, createWorkspace } from "./workspaces";
import { createOrganization } from "./organizations";

// AUTH
function* loginSaga() {
  yield takeLatest(auth.login, login);
}
function* registrationSaga() {
  yield takeLatest(auth.registration, registration);
}
function* logoutSaga() {
  yield takeLatest(auth.logout, logout);
}
// USER
function* userUpdateSaga() {
  yield takeLatest(user.userUpdate, userUpdate);
}
function* fetchUserSaga() {
  yield takeLatest(user.fetchUser, fetchUser);
}
// USERS
function* fetchUsersSaga() {
  yield takeLatest(users.fetchUsers, fetchUsers);
}
function* inviteUserSaga() {
  yield takeLatest(users.inviteUser, inviteUser);
}
// DOCUMENTS
function* fetchCreatedDocumentsSaga() {
  yield takeLatest(documents.fetchCreatedDocuments, fetchCreatedDocuments);
}
function* fetchSigningDocumentsSaga() {
  yield takeLatest(documents.fetchSigningDocuments, fetchSigningDocuments);
}
function* createDocumentSaga() {
  yield takeLatest(documents.createDocument, createDocument);
}
function* processDocumentSaga() {
  yield takeLatest(documents.processDocument, processDocument);
}
function* deleteDocumentSaga() {
  yield takeLatest(documents.deleteDocument, deleteDocument);
}
function* fetchDocumentFileSaga() {
  yield takeLatest(documents.fetchDocumentFile, fetchDocumentFile);
}
function* fetchSignaturesSaga() {
  yield takeLatest(documents.fetchSignatures, fetchSignatures);
}
// WORKSPACES
function* fetchWorkspacesSaga() {
  yield takeLatest(workspaces.fetchWorkspaces, fetchWorkspaces);
}
function* fetchCurrentWorkspaceSaga() {
  yield takeLatest(workspaces.fetchCurrentWorkspace, fetchCurrentWorkspace);
}
function* createWorkspaceSaga() {
  yield takeLatest(workspaces.createWorkspace, createWorkspace);
}
// ORGANIZATIONS
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
    fetchUserSaga(),
    // USERS
    fetchUsersSaga(),
    inviteUserSaga(),
    // DOCS
    fetchCreatedDocumentsSaga(),
    fetchSigningDocumentsSaga(),
    createDocumentSaga(),
    processDocumentSaga(),
    deleteDocumentSaga(),
    fetchDocumentFileSaga(),
    fetchSignaturesSaga(),
    // WORKSPACES
    fetchWorkspacesSaga(),
    fetchCurrentWorkspaceSaga(),
    createWorkspaceSaga(),
    // ORGANIZATIONS
    createOrganizationSaga(),
  ]);
}
