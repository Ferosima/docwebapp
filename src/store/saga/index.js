import { all, takeLatest } from "redux-saga/effects";

import * as auth from "../actions/auth";
import * as documents from "../actions/documents";

import { login, registration } from "./auth";
import { fetchDocuments } from "./documents";

function* loginSaga() {
  yield takeLatest(auth.login, login);
}
function* registrationSaga() {
  yield takeLatest(auth.registration, registration);
}

function* fetchDocumentsSaga() {
  yield takeLatest(documents.fetchDocuments, fetchDocuments);
}

export default function* rootSaga() {
  yield all([
    // AUTH
    loginSaga(),
    registrationSaga(),
    // DOCS
    fetchDocumentsSaga(),
  ]);
}
