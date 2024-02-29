import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-logger";
import globalReducer from "./reducers/globalReducer";

const reducers = combineReducers({
  globalReducer: globalReducer,
});

export const myStore = createStore(reducers, applyMiddleware(logger, thunk));
