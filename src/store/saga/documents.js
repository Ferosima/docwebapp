import {
  call, put, select, take,
} from "redux-saga/effects";
import storage from "redux-persist/lib/storage";
import { push } from "connected-react-router";
import client from "../client";
import { fetchDocumentsSuccess, fetchDocumentsFailed } from "../actions/documents";
import { fetchUser } from "../actions/user";

export function* fetchDocuments() {
  try {
    const response = yield client.get("/documents");
    console.log("DOC RES", response);
    yield put(fetchDocumentsSuccess(response));
  } catch (e) {
    console.log("Doc ERROR", e);
    yield put(fetchDocumentsFailed(e.message));
  }
}
