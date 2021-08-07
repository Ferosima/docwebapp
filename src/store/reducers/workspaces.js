import {
  WORKSPACES_FETCH_WORKSPACES,
  WORKSPACES_FETCH_WORKSPACES_SUCCESS,
  WORKSPACES_FETCH_WORKSPACES_FAILED,
  WORKSPACES_FETCH_CURRENT_WORKSPACE,
  WORKSPACES_FETCH_CURRENT_WORKSPACE_SUCCESS,
  WORKSPACES_FETCH_CURRENT_WORKSPACE_FAILED,
  WORKSPACES_CREATE_WORKSPACE,
  WORKSPACES_CREATE_WORKSPACE_FAILED,
  WORKSPACES_CREATE_WORKSPACE_SUCCESS,
  WORKSPACES_CLEAR,
} from "../types/workspaces";

const initialState = {
  currentWorkspace: null,
  workspaces: null,
  panding: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WORKSPACES_FETCH_WORKSPACES:
      return {
        ...state,
        panding: true,
      };
    case WORKSPACES_FETCH_WORKSPACES_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        workspaces: action.payload,
      };
    case WORKSPACES_FETCH_WORKSPACES_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case WORKSPACES_FETCH_CURRENT_WORKSPACE:
      return {
        ...state,
        panding: true,
      };
    case WORKSPACES_FETCH_CURRENT_WORKSPACE_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        currentWorkspace: action.payload,
      };
    case WORKSPACES_FETCH_CURRENT_WORKSPACE_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case WORKSPACES_CREATE_WORKSPACE:
      return {
        ...state,
        panding: true,
      };
    case WORKSPACES_CREATE_WORKSPACE_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        currentWorkspace: action.payload,
      };
    case WORKSPACES_CREATE_WORKSPACE_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case WORKSPACES_CLEAR:
      return {
        state,
      };

    default:
      return state;
  }
}
