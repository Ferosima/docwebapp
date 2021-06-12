import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers';
import rootSaga from './saga';

function logger({ getState }) {
  return (next) => (action) => {
    console.info('DISPATCH: ', action.type);
    return next(action);
  };
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware, logger));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
