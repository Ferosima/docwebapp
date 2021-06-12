import { all, takeLatest } from 'redux-saga/effects';

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

export default function* rootSaga() {
  yield all([
    // For example
    // // AUTH
    // fetchLoginSaga(),
    // createUserSaga(),
    // sendPasswordResetEmailSaga(),
    // // USER
    // fetchUserSaga(),
    // // EVENT
    // createEventSaga(),
    // fetchEventsSaga(),
    // deleteEventSaga(),
    // // CALENDAR
    // fetchCalendarSaga(),
    // fetchIntersectingEventsSaga(),
    // addEventToCalendarSaga(),
    // deleteEventFromCalendarSaga(),
  ]);
}
