import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducers/globalReducer";
import { loginReducer } from "./reducers/loginReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { storeReducer } from "./reducers/storeReducer";
import { userReducer } from "./reducers/userReducer";
import { productSlice } from "./reducers/paginationReducer";

const reducers = combineReducers({
  global: globalReducer,
  login: loginReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  storeRed: storeReducer,
  userRed: userReducer,
  productPaginate: productSlice.reducer,
});

export const myStore = createStore(reducers, applyMiddleware(logger, thunk));
