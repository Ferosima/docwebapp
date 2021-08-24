import { put, call, all } from "redux-saga/effects";
import {
  fetchDocumentsFailed,
  fetchDocumentsSuccess,
  createDocumentSuccess,
  fetchDocumentFileFailed,
  fetchDocumentFileSuccess,
  createDocumentFailed,
} from "../actions/documents";
import client from "../client";

export function* fetchDocumentFile(payload) {
  console.log("fetchDocumentFile");
  try {
    const uuid = payload?.payload || payload;
    const response = yield client.get(`/documents/${uuid}`, {
      responseType: "arraybuffer",
      headers: {
        Accept: "application/pdf",
        "Content-Type": "application/json",
      },
    });
    yield put(fetchDocumentFileSuccess({ [uuid]: new Blob([response.data]) }));
  } catch (e) {
    console.log("fetchFileDoc ERROR", e);
    yield put(fetchDocumentsFailed(e.message));
  }
}
export function* fetchDocuments() {
  try {
    const response = yield client.get("/documents/");
    yield put(fetchDocumentsSuccess(response.data));
    // yield all(response.data.map((el) => call(fetchDocumentFile, el.uuid)));
  } catch (e) {
    console.log("fetchDocuments ERROR", e);
    yield put(fetchDocumentsFailed(e.message));
  }
}

export function* createDocument({ payload }) {
  try {
    const formData = new FormData();
    const { signerIds, ...otherData } = payload;
    const data = yield {
      ...otherData,
      file: otherData.file[0],
      expiresAt: otherData.expiresAt.toISOString(),
    };

    yield Object.keys(data).forEach((el) => formData.append(el, data[el]));
    yield signerIds.forEach((el) => formData.append("signerIds[]", el));
    // yield formData.append("signerIds", JSON.stringify(signerIds));

    const response = yield client.post("/documents", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    yield put(createDocumentSuccess(response.data));
    yield call(fetchDocuments);
  } catch (e) {
    console.log("createDocument ERROR", e);
    yield put(createDocumentFailed(e.message));
  }
}
