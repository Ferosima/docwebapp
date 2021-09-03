import {
  APP_SET_SIDEBAR_STATE, APP_SET_THEME, APP_SET_LANGUAGE, APP_CLEAR,
} from "../types/app";

const initialState = {
  isSidebarOpen: false,
  theme: "light",
  language: "en",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APP_SET_SIDEBAR_STATE:
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    case APP_SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case APP_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case APP_CLEAR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
