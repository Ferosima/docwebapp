import {
  DOCS_FETCH_DOCUMENTS,
  DOCS_FETCH_DOCUMENTS_FAILED,
  DOCS_FETCH_DOCUMENTS_SUCCESS,
  DOCS_CREATE_DOCUMENT,
  DOCS_CREATE_DOCUMENT_FAILED,
  DOCS_CREATE_DOCUMENT_SUCCESS,
  DOCS_CLEAR_ERROR,
  DOCS_CLEAR,
} from "../types/documents";

const initialState = {
  list: [],
  panding: false,
  error: null,
  isSuccess: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DOCS_FETCH_DOCUMENTS:
      return {
        ...state,
        panding: true,
      };
    case DOCS_FETCH_DOCUMENTS_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        list: action.payload,
      };
    case DOCS_FETCH_DOCUMENTS_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
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
        // list: action.payload,
      };
    case DOCS_CREATE_DOCUMENT_FAILED:
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
