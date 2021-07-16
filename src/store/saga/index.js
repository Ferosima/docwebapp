import { all, takeLatest } from "redux-saga/effects";

import * as auth from "../actions/auth";

import { login } from "./auth";

// For example
// import * as user from '../actions/auth';
// // AUTH
// import {fetchLogin, createUser, sendPasswordResetEmail} from './auth'
// function* fetchLoginSaga() {
//   yield takeLatest(user.fetchLogin, fetchLogin);
// }
// function* sendPasswordResetEmailSaga() {
//   yield takeLatest(auth.sendPasswordResetEmail, sendPasswordResetEmail);
// }
// function* createUserSaga() {
//   yield takeLatest(user.createUser, createUser);
// }

function* loginSaga() {
  yield takeLatest(auth.login, login);
}

export default function* rootSaga() {
  yield all([
    // AUTH
    loginSaga(),
  ]);
}
