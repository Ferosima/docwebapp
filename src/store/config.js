import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { reducers, history } from "./reducers";
import rootSaga from "./saga";

function logger({ getState }) {
  return (next) => (action) => {
    console.info("DISPATCH: ", action.type);
    return next(action);
  };
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  applyMiddleware(routerMiddleware(history), sagaMiddleware, logger),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor, history };
