import {
  put, call, all, select,
} from "redux-saga/effects";
import {
  fetchCreatedDocumentsFailed,
  fetchCreatedDocumentsSuccess,
  fetchSigningDocumentsFailed,
  fetchSigningDocumentsSuccess,
  fetchSignaturesFailed,
  fetchSignaturesSuccess,
  createDocumentSuccess,
  fetchDocumentFileFailed,
  fetchDocumentFileSuccess,
  createDocumentFailed,
  processDocumentFailed,
  processDocumentSuccess,
  deleteDocumentFailed,
  deleteDocumentSuccess,
} from "../actions/documents";
import client from "../client";
import { getUserState } from "../selectors/user";
import { getDocumentsState } from "../selectors/documents";

export function* fetchDocumentFile(payload) {
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
    yield put(fetchDocumentFileFailed(e.message));
  }
}

export function* fetchSignatures(payload) {
  try {
    const uuid = payload?.payload || payload;

    const response = yield client.get(`/documents/${uuid}/signatures`);

    console.log("UUID", response.data);
    yield put(fetchSignaturesSuccess({ [uuid]: response.data }));
  } catch (e) {
    console.log("fetchFileDoc ERROR", e);
    yield put(fetchSignaturesFailed(e.message));
  }
}

export function* fetchCreatedDocuments() {
  try {
    const response = yield client.get("/documents/created");
    yield put(fetchCreatedDocumentsSuccess(response.data));
  } catch (e) {
    console.log("fetchDocuments ERROR", e);
    yield put(fetchCreatedDocumentsFailed(e.message));
  }
}
export function* fetchSigningDocuments() {
  try {
    const response = yield client.get("/documents/signing");
    yield put(fetchSigningDocumentsSuccess(response.data));
  } catch (e) {
    console.log("fetchDocuments ERROR", e);
    yield put(fetchSigningDocumentsFailed(e.message));
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
    const response = yield client.post("/documents", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const user = yield select(getUserState);
    const successData = {
      signing: signerIds.includes(user.uuid) && response.data,
      created: response.data,
    };

    yield put(createDocumentSuccess(successData));
  } catch (e) {
    console.log("createDocument ERROR", e);
    yield put(createDocumentFailed(e.message));
  }
}

export function* processDocument({ payload }) {
  try {
    const { uuid, status } = payload;

    const response = yield client.patch(`/documents/${uuid}/process`, null, { params: { status } });

    const user = yield select(getUserState);
    const successData = {
      signing: response.data,
      created: response.data.creator.uuid === user.uuid && response.data,
    };

    yield put(processDocumentSuccess(successData));
    yield call(fetchSignatures, uuid);
  } catch (e) {
    console.log("processDocument ERROR", e);
    yield put(processDocumentFailed(e.message));
  }
}

export function* deleteDocument({ payload }) {
  try {
    const response = yield client.delete(`/documents/${payload}`);
    console.log(response);

    yield put(deleteDocumentSuccess(payload));
  } catch (e) {
    console.log("processDocument ERROR", e);
    yield put(deleteDocumentFailed(e.message));
  }
}
