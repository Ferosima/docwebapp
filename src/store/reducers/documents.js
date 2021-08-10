import {
  DOCS_FETCH_DOCUMENTS,
  DOCS_FETCH_DOCUMENTS_FAILED,
  DOCS_FETCH_DOCUMENTS_SUCCESS,
  DOCS_CLEAR,
} from "../types/documents";

const initialState = {
  list: [],
  panding: false,
  error: null,
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
    case DOCS_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
