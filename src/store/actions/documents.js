import { createAction } from "redux-actions";
import {
  DOCS_FETCH_DOCUMENTS,
  DOCS_FETCH_DOCUMENTS_FAILED,
  DOCS_FETCH_DOCUMENTS_SUCCESS,
  DOCS_CREATE_DOCUMENT,
  DOCS_CREATE_DOCUMENT_FAILED,
  DOCS_CREATE_DOCUMENT_SUCCESS,
  DOCS_FETCH_DOCUMENT_FILE,
  DOCS_FETCH_DOCUMENT_FILE_FAILED,
  DOCS_FETCH_DOCUMENT_FILE_SUCCESS,
  DOCS_CLEAR_ERROR,
  DOCS_CLEAR,
} from "../types/documents";

export const fetchDocuments = createAction(DOCS_FETCH_DOCUMENTS);
export const fetchDocumentsFailed = createAction(DOCS_FETCH_DOCUMENTS_FAILED, (payload) => payload);
export const fetchDocumentsSuccess = createAction(
  DOCS_FETCH_DOCUMENTS_SUCCESS,
  (payload) => payload,
);

export const createDocument = createAction(DOCS_CREATE_DOCUMENT, (payload) => payload);
export const createDocumentFailed = createAction(DOCS_CREATE_DOCUMENT_FAILED, (payload) => payload);
export const createDocumentSuccess = createAction(
  DOCS_CREATE_DOCUMENT_SUCCESS,
  (payload) => payload,
);

export const fetchDocumentFile = createAction(DOCS_FETCH_DOCUMENT_FILE, (payload) => payload);
export const fetchDocumentFileFailed = createAction(
  DOCS_FETCH_DOCUMENT_FILE_FAILED,
  (payload) => payload,
);
export const fetchDocumentFileSuccess = createAction(
  DOCS_FETCH_DOCUMENT_FILE_SUCCESS,
  (payload) => payload,
);

export const documentsClearError = createAction(DOCS_CLEAR_ERROR);
export const documentsClear = createAction(DOCS_CLEAR);
