import { USER_FETCH, USER_CLEAR } from "../types/user";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH:
      return {
        ...state,
        ...action.payyload,
        // user: action.payload,
      };
    case USER_CLEAR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
