import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import app from "./app";
import auth from "./auth";
import user from "./user";
import documents from "./documents";

const history = createBrowserHistory();

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["app", "documents"],
  whitelist: ["user", "auth"],
};

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  auth,
  user,
  documents,
});

const reducers = persistReducer(rootPersistConfig, rootReducer(history));
export { reducers, history };
