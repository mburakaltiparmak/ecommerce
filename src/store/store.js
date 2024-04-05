import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import globalReducer from "./reducers/globalReducer";
import { loginReducer } from "./reducers/loginReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { storeReducer } from "./reducers/storeReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  global: globalReducer,
  login: loginReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  storeRed: storeReducer,
  userRed: userReducer,
});

export const myStore = createStore(reducers, applyMiddleware(logger, thunk));
