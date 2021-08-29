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
  DOCS_PROCESS_DOCUMENT,
  DOCS_PROCESS_DOCUMENT_FAILED,
  DOCS_PROCESS_DOCUMENT_SUCCESS,
  DOCS_FETCH_DOCUMENT_FILE,
  DOCS_FETCH_DOCUMENT_FILE_FAILED,
  DOCS_FETCH_DOCUMENT_FILE_SUCCESS,
  DOCS_FETCH_DOC_SIGNATURES,
  DOCS_FETCH_DOC_SIGNATURES_FAILED,
  DOCS_FETCH_DOC_SIGNATURES_SUCCESS,
  DOCS_DELETE_DOCUMENT,
  DOCS_DELETE_DOCUMENT_FAILED,
  DOCS_DELETE_DOCUMENT_SUCCESS,
  DOCS_CLEAR_ERROR,
  DOCS_CLEAR,
} from "../types/documents";

const initialState = {
  created_documents: [],
  signing_documents: [],
  files: {},
  signatures: {},
  panding: false,
  error: null,
  isSuccess: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DOCS_FETCH_CREATED_DOCUMENTS:
      return {
        ...state,
        panding: true,
      };
    case DOCS_FETCH_CREATED_DOCUMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        created_documents: action.payload,
      };
    case DOCS_FETCH_CREATED_DOCUMENTS_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case DOCS_FETCH_SIGNING_DOCUMENTS:
      return {
        ...state,
        panding: true,
      };
    case DOCS_FETCH_SIGNING_DOCUMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        signing_documents: action.payload,
      };
    case DOCS_FETCH_SIGNING_DOCUMENTS_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case DOCS_FETCH_DOCUMENT_FILE:
      return {
        ...state,
      };
    case DOCS_FETCH_DOCUMENT_FILE_SUCCESS:
      return {
        ...state,
        error: null,
        files: { ...state.files, ...action.payload },
      };
    case DOCS_FETCH_DOCUMENT_FILE_FAILED:
      return {
        ...state,
        panding: false,
        files: { ...state.files, ...action.payload },
      };
    case DOCS_FETCH_DOC_SIGNATURES:
      return {
        ...state,
      };
    case DOCS_FETCH_DOC_SIGNATURES_SUCCESS:
      return {
        ...state,
        error: null,
        signatures: { ...state.signatures, ...action.payload },
      };
    case DOCS_FETCH_DOC_SIGNATURES_FAILED:
      return {
        ...state,
        signatures: { ...state.signatures, ...action.payload },
      };
    case DOCS_CREATE_DOCUMENT:
      return {
        ...state,
        panding: true,
      };
    case DOCS_CREATE_DOCUMENT_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        isSuccess: true,
        signing_documents: action.payload.signing
          ? [action.payload.signing, ...state.signing_documents]
          : state.signing_documents,
        created_documents: [action.payload.created, ...state.created_documents],
      };
    case DOCS_CREATE_DOCUMENT_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case DOCS_PROCESS_DOCUMENT:
      return {
        ...state,
        panding: true,
      };
    case DOCS_PROCESS_DOCUMENT_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        signing_documents: state.signing_documents.map((item) => (item.uuid === action.payload.uuid ? action.payload : item)),
        created_documents: state.created_documents.map((item) => (item.uuid === action.payload.uuid ? action.payload : item)),
      };
    case DOCS_PROCESS_DOCUMENT_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case DOCS_DELETE_DOCUMENT:
      return {
        ...state,
        panding: true,
      };
    case DOCS_DELETE_DOCUMENT_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        signing_documents: state.signing_documents.filter((data) => data.uuid !== action.payload),
        created_documents: state.created_documents.filter((data) => data.uuid !== action.payload),
      };
    case DOCS_DELETE_DOCUMENT_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case DOCS_CLEAR_ERROR:
      return {
        ...state,
        error: null,
        isSuccess: false,
      };
    case DOCS_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
