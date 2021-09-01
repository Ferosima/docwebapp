import { createAction } from "redux-actions";
import { APP_SET_SIDEBAR_STATE, APP_SET_THEME } from "../types/app";

export const setSidebarState = createAction(APP_SET_SIDEBAR_STATE, (payload) => payload);

export const setTheme = createAction(APP_SET_THEME, (payload) => payload);
