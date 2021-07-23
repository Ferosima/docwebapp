import { put } from "redux-saga/effects";
import { fetchDocumentsFailed, fetchDocumentsSuccess } from "../actions/documents";
import client from "../client";

export function* fetchDocuments() {
  try {
    const response = yield client.get("/documents");
    yield put(fetchDocumentsSuccess(response.data));
  } catch (e) {
    console.log("fetchDocuments ERROR", e);
    yield put(fetchDocumentsFailed(e.message));
  }
}
