import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import allReducers from "./store/index";
import allSagas from "./store/rootSaga";

import createSagaMiddleware from "redux-saga";
const logger = createLogger({ collapsed: true, diff: true });
const reducers = combineReducers(allReducers);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);
sagaMiddleware.run(allSagas);

export default store;
