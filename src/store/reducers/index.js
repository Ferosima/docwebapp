import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import app from './app';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['app'],
  // whitelist: ['user'],
};

const rootReducer = combineReducers({
  app,
});

export default persistReducer(rootPersistConfig, rootReducer);
