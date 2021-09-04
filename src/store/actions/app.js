import { createAction } from "redux-actions";
import {
  APP_SET_SIDEBAR_STATE, APP_SET_THEME, APP_SET_LANGUAGE, APP_CLEAR,
} from "../types/app";

export const setSidebarState = createAction(APP_SET_SIDEBAR_STATE, (payload) => payload);
export const setTheme = createAction(APP_SET_THEME, (payload) => payload);
export const setLanguage = createAction(APP_SET_LANGUAGE, (payload) => payload);

export const appClear = createAction(APP_CLEAR);
