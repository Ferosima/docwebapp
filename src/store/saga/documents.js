import { put, call } from "redux-saga/effects";
import {
  fetchDocumentsFailed,
  fetchDocumentsSuccess,
  createDocumentSuccess,
  createDocumentFailed,
} from "../actions/documents";
import client from "../client";

function parse(file, onLoadCallback) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function* fetchDocuments() {
  try {
    const response = yield client.get("/documents");
    yield put(fetchDocumentsSuccess(response.data));
  } catch (e) {
    console.log("fetchDocuments ERROR", e);
    yield put(fetchDocumentsFailed(e.message));
  }
}
export function* createDocument({ payload }) {
  try {
    // const file = yield parse(payload.file[0]);
    const formData = new FormData();
    const { signerIds, ...otherData } = payload;
    const data = yield {
      ...otherData,
      file: otherData.file[0],
      expiresAt: otherData.expiresAt.toISOString(),
    };

    yield Object.keys(data).forEach((el) => formData.append(el, data[el]));
    yield signerIds.forEach((el) => formData.append("signerIds", el));

    const response = yield client.post("/documents", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createDocumentSuccess(response.data));
    yield call(fetchDocuments);
  } catch (e) {
    console.log("fetchDocuments ERROR", e);
    yield put(createDocumentFailed(e.message));
  }
}
