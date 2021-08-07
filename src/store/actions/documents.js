import { createAction } from "redux-actions";
import {
  DOCS_FETCH_DOCUMENTS,
  DOCS_FETCH_DOCUMENTS_FAILED,
  DOCS_FETCH_DOCUMENTS_SUCCESS,
  DOCS_CLEAR,
} from "../types/documents";

export const fetchDocuments = createAction(DOCS_FETCH_DOCUMENTS);
export const fetchDocumentsFailed = createAction(DOCS_FETCH_DOCUMENTS_FAILED, (payload) => payload);
export const fetchDocumentsSuccess = createAction(
  DOCS_FETCH_DOCUMENTS_SUCCESS,
  (payload) => payload,
);

export const documentsClear = createAction(DOCS_CLEAR);
