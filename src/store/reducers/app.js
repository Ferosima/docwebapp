import { APP_SET_SIDEBAR_STATE, APP_SET_THEME } from "../types/app";

const initialState = {
  isSidebarOpen: false,
  theme: "dark",
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
    default:
      return state;
  }
}
