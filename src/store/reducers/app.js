import { APP_SET_SIDEBAR_STATE } from '../types/app';

const initialState = {
  isSidebarOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APP_SET_SIDEBAR_STATE:
      return {
        ...state,
        isSidebarOpen: action.payload,
      };
    default:
      return state;
  }
}
