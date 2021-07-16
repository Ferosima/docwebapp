import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import app from "./app";
import auth from "./auth";
import user from "./user";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["app"],
  whitelist: ["auth", "user"],
};

const rootReducer = combineReducers({
  app,
  auth,
  user,
});

export default persistReducer(rootPersistConfig, rootReducer);
