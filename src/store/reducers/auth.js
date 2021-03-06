import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTRATION,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_FAILED,
  AUTH_SET_TOKEN,
  AUTH_CLEAR,
  AUTH_CLEAR_ERROR,
  AUTH_LOGOUT,
} from "../types/auth";

const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  panding: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        panding: true,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        isLoggedIn: true,
        refreshToken: action.payload.refreshToken,
        accessToken: action.payload.accessToken,
      };
    case AUTH_LOGIN_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case AUTH_REGISTRATION:
      return {
        ...state,
        panding: true,
      };
    case AUTH_REGISTRATION_SUCCESS:
      return {
        ...state,
        panding: false,
      };
    case AUTH_REGISTRATION_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
      };
    case AUTH_SET_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: null,
        panding: false,
      };
    case AUTH_CLEAR:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
