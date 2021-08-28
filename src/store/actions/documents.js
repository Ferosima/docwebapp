import { createAction } from "redux-actions";
import {
  DOCS_FETCH_CREATED_DOCUMENTS,
  DOCS_FETCH_CREATED_DOCUMENTS_FAILED,
  DOCS_FETCH_CREATED_DOCUMENTS_SUCCESS,
  DOCS_FETCH_SIGNING_DOCUMENTS,
  DOCS_FETCH_SIGNING_DOCUMENTS_FAILED,
  DOCS_FETCH_SIGNING_DOCUMENTS_SUCCESS,
  DOCS_CREATE_DOCUMENT,
  DOCS_CREATE_DOCUMENT_FAILED,
  DOCS_CREATE_DOCUMENT_SUCCESS,
  DOCS_FETCH_DOCUMENT_FILE,
  DOCS_FETCH_DOCUMENT_FILE_FAILED,
  DOCS_FETCH_DOCUMENT_FILE_SUCCESS,
  DOCS_FETCH_DOC_SIGNATURES,
  DOCS_FETCH_DOC_SIGNATURES_FAILED,
  DOCS_FETCH_DOC_SIGNATURES_SUCCESS,
  DOCS_PROCESS_DOCUMENT,
  DOCS_PROCESS_DOCUMENT_FAILED,
  DOCS_PROCESS_DOCUMENT_SUCCESS,
  DOCS_DELETE_DOCUMENT,
  DOCS_DELETE_DOCUMENT_FAILED,
  DOCS_DELETE_DOCUMENT_SUCCESS,
  DOCS_CLEAR_ERROR,
  DOCS_CLEAR,
} from "../types/documents";

export const fetchCreatedDocuments = createAction(DOCS_FETCH_CREATED_DOCUMENTS);
export const fetchCreatedDocumentsFailed = createAction(DOCS_FETCH_CREATED_DOCUMENTS_FAILED, (payload) => payload);
export const fetchCreatedDocumentsSuccess = createAction(DOCS_FETCH_CREATED_DOCUMENTS_SUCCESS, (payload) => payload);

export const fetchSigningDocuments = createAction(DOCS_FETCH_SIGNING_DOCUMENTS);
export const fetchSigningDocumentsFailed = createAction(DOCS_FETCH_SIGNING_DOCUMENTS_FAILED, (payload) => payload);
export const fetchSigningDocumentsSuccess = createAction(DOCS_FETCH_SIGNING_DOCUMENTS_SUCCESS, (payload) => payload);

export const fetchDocumentFile = createAction(DOCS_FETCH_DOCUMENT_FILE, (payload) => payload);
export const fetchDocumentFileFailed = createAction(DOCS_FETCH_DOCUMENT_FILE_FAILED, (payload) => payload);
export const fetchDocumentFileSuccess = createAction(DOCS_FETCH_DOCUMENT_FILE_SUCCESS, (payload) => payload);

export const fetchSignatures = createAction(DOCS_FETCH_DOC_SIGNATURES, (payload) => payload);
export const fetchSignaturesFailed = createAction(DOCS_FETCH_DOC_SIGNATURES_FAILED, (payload) => payload);
export const fetchSignaturesSuccess = createAction(DOCS_FETCH_DOC_SIGNATURES_SUCCESS, (payload) => payload);

export const createDocument = createAction(DOCS_CREATE_DOCUMENT, (payload) => payload);
export const createDocumentFailed = createAction(DOCS_CREATE_DOCUMENT_FAILED, (payload) => payload);
export const createDocumentSuccess = createAction(DOCS_CREATE_DOCUMENT_SUCCESS, (payload) => payload);

export const processDocument = createAction(DOCS_PROCESS_DOCUMENT, (payload) => payload);
export const processDocumentFailed = createAction(DOCS_PROCESS_DOCUMENT_FAILED, (payload) => payload);
export const processDocumentSuccess = createAction(DOCS_PROCESS_DOCUMENT_SUCCESS, (payload) => payload);

export const deleteDocument = createAction(DOCS_DELETE_DOCUMENT, (payload) => payload);
export const deleteDocumentFailed = createAction(DOCS_DELETE_DOCUMENT_FAILED, (payload) => payload);
export const deleteDocumentSuccess = createAction(DOCS_DELETE_DOCUMENT_SUCCESS, (payload) => payload);

export const documentsClearError = createAction(DOCS_CLEAR_ERROR);
export const documentsClear = createAction(DOCS_CLEAR);
