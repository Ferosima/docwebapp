import {
  USERS_FETCH_USERS,
  USERS_FETCH_USERS_FAILED,
  USERS_FETCH_USERS_SUCCESS,
  USERS_INVITE_USER,
  USERS_INVITE_USER_FAILED,
  USERS_INVITE_USER_SUCCESS,
  USERS_INVITE_SUCCESS_CLEAR,
  USERS_CLEAR,
} from "../types/users";

const initialState = {
  list: [],
  panding: false,
  error: null,
  inviteSuccess: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_USERS:
      return {
        ...state,
        panding: true,
      };
    case USERS_FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        list: action.payload,
      };
    case USERS_FETCH_USERS_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case USERS_INVITE_USER:
      return {
        ...state,
        panding: true,
      };
    case USERS_INVITE_USER_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        inviteSuccess: true,
      };
    case USERS_INVITE_USER_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case USERS_INVITE_SUCCESS_CLEAR:
      return {
        ...state,
        inviteSuccess: null,
        error: null,
      };
    case USERS_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
