import { combineReducers } from "redux";
import { persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import * as Flatted from "flatted";
import app from "./app";
import auth from "./auth";
import user from "./user";
import users from "./users";
import documents from "./documents";
import workspaces from "./workspaces";
import organizations from "./organizations";

const history = createBrowserHistory();

export const transformCircular = createTransform(
  (inboundState, key) => Flatted.stringify(inboundState),
  (outboundState, key) => Flatted.parse(outboundState),
);

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["documents", "users"],
  whitelist: ["app", "user", "auth", "workspaces", "organizations", "users"],
  transforms: [transformCircular],
};

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  auth,
  user,
  users,
  documents,
  workspaces,
  organizations,
});

const reducers = persistReducer(rootPersistConfig, rootReducer(history));
export { reducers, history };
