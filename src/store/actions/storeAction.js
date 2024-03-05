import { actions } from "../reducers/storeReducer";

export const setStore = (store) => ({
  type: actions.SET_STORE,
  payload: store,
});
