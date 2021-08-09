import {
  ORGANIZATIONS_FETCH_ORGANIZATIONS,
  ORGANIZATIONS_FETCH_ORGANIZATIONS_SUCCESS,
  ORGANIZATIONS_FETCH_ORGANIZATIONS_FAILED,
  ORGANIZATIONS_CREATE_ORGANIZATION,
  ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS,
  ORGANIZATIONS_CREATE_ORGANIZATION_FAILED,
  ORGANIZATIONS_GET_CURRENT_ORGANIZATION,
  ORGANIZATIONS_CLEAR,
} from "../types/organizations";

const initialState = {
  currentOrganization: null,
  organizations: null,
  panding: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ORGANIZATIONS_FETCH_ORGANIZATIONS:
      return {
        ...state,
        panding: true,
      };
    case ORGANIZATIONS_FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        organizations: action.payload,
      };
    case ORGANIZATIONS_FETCH_ORGANIZATIONS_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case ORGANIZATIONS_CREATE_ORGANIZATION:
      return {
        ...state,
        panding: true,
      };
    case ORGANIZATIONS_CREATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        currentOrganization: action.payload,
      };
    case ORGANIZATIONS_CREATE_ORGANIZATION_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case ORGANIZATIONS_GET_CURRENT_ORGANIZATION:
      return {
        ...state,
        currentOrganization: action.payload,
      };
    case ORGANIZATIONS_CLEAR:
      return {
        ...state,
      };

    default:
      return state;
  }
}
