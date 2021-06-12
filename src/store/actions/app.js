import { createAction } from 'redux-actions';
import { APP_SET_SIDEBAR_STATE } from '../types/app';

export const setSidebarState = createAction(APP_SET_SIDEBAR_STATE, (payload) => payload);
