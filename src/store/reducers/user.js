import {
  USER_FETCH,
  USER_CLEAR,
  USER_UPDATE,
  USER_UPDATE_FAILED,
  USER_UPDATE_SUCCESS,
} from "../types/user";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        ...action.payload,
      };
    case USER_UPDATE:
      return {
        ...state,
        panding: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        panding: false,
        ...action.payload,
      };
    case USER_UPDATE_FAILED:
      return {
        ...state,
        panding: false,
        error: action.payload,
      };
    case USER_CLEAR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
